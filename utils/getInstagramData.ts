import { GetStaticProps } from 'next'
import { PostResponse } from './types/Post'

export const getInstagramData: GetStaticProps = async () => {
	try {
		const res = await fetch(
			`https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url,permalink&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
		)
		const { data } = await res.json()

		const formatData = data
			.map((item: PostResponse) => ({
				id: item.id,
				url: item.thumbnail_url || item.media_url,
				permalink: item.permalink,
			}))
			.slice(0, 6)

		return {
			props: {
				post: formatData,
				revalidate: 300,
			},
		}
	} catch (error) {
		return {
			props: { post: [], revalidate: 300 },
		}
	}
}
