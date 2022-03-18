import { FiChevronRight } from 'react-icons/fi'
import s from './Products.module.scss'

const Products = () => {
	return (
		<section className={s.products}>
			<div className={s.products__section} id="rain">
				<div className={s.products__section__info}>
					<img
						className={s.products__section__info__img}
						src="/img/umbrella.png"
						alt="Pufin Rain imagen"
					/>
					<h2 className={s.products__section__info__title}>Pufin RAIN</h2>
					<p className={s.products__section__info__text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<a href="#rain" className={s.products__section__info__link}>
						<FiChevronRight /> VER MAS
					</a>
				</div>
				<div className={s.products__section__img}>
					<div className={s.products__section__img__container}>
						<a href="#" className={s.products__section__img__container__button}>
							SHOP
						</a>
					</div>
				</div>
			</div>
			<div className={s.products__section} id="puff">
				<div className={s.products__section__info}>
					<img
						className={s.products__section__info__img}
						src="/img/puff.png"
						alt="Pufin PUFF imagen"
					/>
					<h2 className={s.products__section__info__title}>Pufin PUFF</h2>
					<p className={s.products__section__info__text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<a href="#puff" className={s.products__section__info__link}>
						<FiChevronRight /> VER MAS
					</a>
				</div>
				<div className={s.products__section__img}>
					<div className={s.products__section__img__container}>
						<a href="#" className={s.products__section__img__container__button}>
							SHOP
						</a>
					</div>
				</div>
			</div>
			<div className={s.products__section} id="cart">
				<div className={s.products__section__info}>
					<img
						className={s.products__section__info__img}
						src="/img/bag.png"
						alt="Pufin CART imagen"
					/>
					<h2 className={s.products__section__info__title}>Pufin CART</h2>
					<p className={s.products__section__info__text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<a href="#cart" className={s.products__section__info__link}>
						<FiChevronRight /> VER MAS
					</a>
				</div>
				<div className={s.products__section__img}>
					<div className={s.products__section__img__container}>
						<a href="#" className={s.products__section__img__container__button}>
							SHOP
						</a>
					</div>
				</div>
			</div>
			<div className={s.products__section} id="nap">
				<div className={s.products__section__info}>
					<img
						className={s.products__section__info__img}
						src="/img/nap.png"
						alt="Pufin Nap imagen"
					/>
					<h2 className={s.products__section__info__title}>Pufin NAP</h2>
					<p className={s.products__section__info__text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<a href="#nap" className={s.products__section__info__link}>
						<FiChevronRight /> VER MAS
					</a>
				</div>
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
