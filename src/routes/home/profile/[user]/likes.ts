import type { RequestHandler } from '@sveltejs/kit'

import prisma from '$root/lib/prisma'
import { timePosted } from '$root/utils/date'

export const get: RequestHandler = async ({ params }) => {
	const profile = await prisma.user.findFirst({
		where: { name: params.user }
	})

	const liked = await prisma.liked.findMany({
		where: { userId: profile.id },
		select: { tweetId: true }
	})

  const tweets = [];

  for(let i = 0; i < liked.length; i++) {
    const tweet = await prisma.tweet.findUnique({
      where: {id: liked[i].tweetId},
      include: {user: true}
    })
    tweets.push(tweet)
  }

	if (!profile || !tweets || tweets.length === 0) {
		return { status: 404 }
	}

	const userTweets = tweets.map((tweet) => {
		return {
			id: tweet.id,
			content: tweet.content,
			likes: tweet.likes,
			posted: timePosted(tweet.posted),
			url: tweet.url,
			avatar: tweet.user.avatar,
			handle: tweet.user.handle,
			name: tweet.user.name,
			liked: true 
		}
	})

	return {
		status: 200,
		body: { profile, tweets: userTweets }
	}
}
