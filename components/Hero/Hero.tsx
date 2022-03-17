import Header from 'components/Header/Header'
import s from './Hero.module.scss'

const Hero = () => {
	return (
		<>
			<Header />
			<section className={s.hero}>
				<h1 className={s.hero__title}>
					Estár cómodo,
					<br />
					nunca fue tan fácil
				</h1>
				<a className={s.hero__button} href="#">
					Shop
				</a>
			</section>
		</>
	)
}

export default Hero
