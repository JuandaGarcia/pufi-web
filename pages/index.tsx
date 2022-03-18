import Footer from 'components/Footer/Footer'
import Hero from 'components/Hero/Hero'
import Instagram from 'components/Instagram/Instagram'
import Newsletter from 'components/Newsletter/Newsletter'
import Products from 'components/Products/Products'
import { GetStaticProps } from 'next'
import { getInstagramData } from 'utils/getInstagramData'
import { Post } from 'utils/types/Post'

type Props = {
	post: Post[]
}
const Home = ({ post }: Props) => {
	return (
		<>
			<Hero />
			<Products />
			<Instagram posts={post} />
			<Newsletter />
			<Footer />
		</>
	)
}

export const getStaticProps: GetStaticProps = ctx => getInstagramData(ctx)

export default Home
