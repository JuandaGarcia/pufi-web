import s from './Instagram.module.scss'

const Instagram = () => {
	return (
		<section className={s.instagram}>
			<p className={s.instagram__text}>Instagram</p>
			<h2 className={s.instagram__title}>#ESPUFI</h2>
			<div className={s.instagram__galery}>
				<img
					className={s.instagram__galery__photo}
					src="/img/hero.jpg"
					alt="Foto de Instagram"
				/>
				<img
					className={s.instagram__galery__photo}
					src="/img/hero.jpg"
					alt="Foto de Instagram"
				/>
				<img
					className={s.instagram__galery__photo}
					src="/img/hero.jpg"
					alt="Foto de Instagram"
				/>
				<img
					className={s.instagram__galery__photo}
					src="/img/hero.jpg"
					alt="Foto de Instagram"
				/>
				<img
					className={s.instagram__galery__photo}
					src="/img/hero.jpg"
					alt="Foto de Instagram"
				/>
				<img
					className={s.instagram__galery__photo}
					src="/img/hero.jpg"
					alt="Foto de Instagram"
				/>
			</div>
		</section>
	)
}

export default Instagram
