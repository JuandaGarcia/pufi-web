import s from './Products.module.scss'

const Products = () => {
	return (
		<section className={s.products}>
			<div className={s.products__section}>
				<div className={s.products__section__img}>
					<div className={s.products__section__img__container}>
						<a href="#" className={s.products__section__img__container__button}>
							SHOP
						</a>
					</div>
				</div>
				<div></div>
			</div>
			<div className={s.products__section}>
				<div></div>
				<div className={s.products__section__img}>
					<div className={s.products__section__img__container}>
						<a href="#" className={s.products__section__img__container__button}>
							SHOP
						</a>
					</div>
				</div>
			</div>
			<div className={s.products__section}>
				<div className={s.products__section__img}>
					<div className={s.products__section__img__container}>
						<a href="#" className={s.products__section__img__container__button}>
							SHOP
						</a>
					</div>
				</div>
				<div></div>
			</div>
			<div className={s.products__section}>
				<div></div>
				<div className={s.products__section__img}>
					<div className={s.products__section__img__container}>
						<a href="#" className={s.products__section__img__container__button}>
							SHOP
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Products
