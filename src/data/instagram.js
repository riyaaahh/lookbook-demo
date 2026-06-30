import igData from './instagram.json'

export const instagramProfile = {
  ...igData.profile,
  handle: `@${igData.profile.username}`,
}

export const instagramPosts = igData.posts.map((post) => ({
  ...post,
  thumbnail: post.localImage,
}))

export const instagramReels = instagramPosts.filter(
  (post) => post.type === 'reel' && post.localVideo,
)
