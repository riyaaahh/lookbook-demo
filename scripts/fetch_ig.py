#!/usr/bin/env python3
import json
import os
import sys
import urllib.request

OUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'instagram')
CONTENT_OUT = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'instagram.json')


def download(url, path):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=60) as resp:
        with open(path, 'wb') as f:
            f.write(resp.read())


def main():
    with open(sys.argv[1]) as f:
        data = json.load(f)

    os.makedirs(OUT_DIR, exist_ok=True)
    user = data['data']['user']
    edges = user['edge_owner_to_timeline_media']['edges']
    posts = []

    for i, e in enumerate(edges[:12]):
        n = e['node']
        code = n['shortcode']
        is_video = n['is_video']
        thumb_url = n.get('display_url') or n.get('thumbnail_src', '')
        thumb_fname = f'post-{i + 1:02d}.jpg'
        thumb_path = os.path.join(OUT_DIR, thumb_fname)

        try:
            download(thumb_url, thumb_path)
            print(f'Downloaded {thumb_fname}')
            local_image = f'/instagram/{thumb_fname}'
        except Exception as ex:
            print(f'Failed {thumb_fname}: {ex}')
            local_image = thumb_url

        local_video = None
        if is_video and n.get('video_url'):
            video_fname = f'post-{i + 1:02d}.mp4'
            video_path = os.path.join(OUT_DIR, video_fname)
            try:
                download(n['video_url'], video_path)
                print(f'Downloaded {video_fname}')
                local_video = f'/instagram/{video_fname}'
            except Exception as ex:
                print(f'Failed {video_fname}: {ex}')

        cap = ''
        if n.get('edge_media_to_caption', {}).get('edges'):
            cap = n['edge_media_to_caption']['edges'][0]['node']['text']
            cap = cap.replace('\n', ' ').strip()[:120]

        posts.append({
            'id': f'ig-{i + 1}',
            'shortcode': code,
            'type': 'reel' if is_video else 'photo',
            'caption': cap,
            'localImage': local_image,
            'localVideo': local_video,
            'permalink': f"https://www.instagram.com/{'reel' if is_video else 'p'}/{code}/",
        })

    pp = user.get('profile_pic_url_hd') or user.get('profile_pic_url', '')
    try:
        download(pp, os.path.join(OUT_DIR, 'profile.jpg'))
        print('Downloaded profile.jpg')
        profile_pic = '/instagram/profile.jpg'
    except Exception as ex:
        print(f'Profile failed: {ex}')
        profile_pic = pp

    result = {
        'profile': {
            'username': user.get('username', 'lookbookmalappuram'),
            'name': user.get('full_name', 'Look Book'),
            'bio': user.get('biography', ''),
            'followers': user.get('edge_followed_by', {}).get('count', 0),
            'postCount': user.get('edge_owner_to_timeline_media', {}).get('count', 0),
            'profilePic': profile_pic,
            'url': 'https://www.instagram.com/lookbookmalappuram/',
        },
        'posts': posts,
    }

    with open(CONTENT_OUT, 'w') as f:
        json.dump(result, f, indent=2, ensure_ascii=False)

    print(f'Wrote {CONTENT_OUT}')


if __name__ == '__main__':
    main()
