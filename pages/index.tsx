import Footer from 'components/Footer/Footer'
import Hero from 'components/Hero/Hero'
import Instagram from 'components/Instagram/Instagram'
import Newsletter from 'components/Newsletter/Newsletter'
import Products from 'components/Products/Products'
import { GetStaticProps } from 'next'

const Home = () => {
	return (
		<>
			<Hero />
			<Products />
			<Instagram />
			<Newsletter />
			<Footer />
		</>
	)
}

export const getStaticProps: GetStaticProps = async context => {
	return {
		props: {},
	}
}

export default Home
