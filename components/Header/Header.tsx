import { useEffect, useState } from 'react'
import {
	FiChevronDown,
	FiLifeBuoy,
	FiMenu,
	FiShoppingBag,
	FiSquare,
	FiUmbrella,
	FiX,
} from 'react-icons/fi'
import s from './Header.module.scss'

const Options = () => (
	<div className={s.options}>
		<a href="#" className={s.options__link}>
			Mi cuenta <FiChevronDown />
		</a>
		<a href="#" className={s.options__link}>
			Mi compra
		</a>
	</div>
)

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false)

	useEffect(() => {
		if (openMenu) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [openMenu])

	const closeMenu = () => setOpenMenu(false)

	return (
		<header className={s.header}>
			<div className={s.header__content}>
				<a href="#">
					<img src="/img/logo.svg" alt="Logo" />
				</a>
				<nav className={`${s.header__content__nav} ${openMenu && s.open}`}>
					<ul className={s.header__content__nav__list}>
						<li>
							<a
								href="#puff"
								className={s.header__content__nav__list__item}
								onClick={closeMenu}
							>
								<FiLifeBuoy size={32} />
								<span>PUFI PUFF</span>
							</a>
						</li>
						<li>
							<a
								href="#rain"
								className={s.header__content__nav__list__item}
								onClick={closeMenu}
							>
								<FiUmbrella size={32} />
								<span>PUFI RAIN</span>
							</a>
						</li>
						<li>
							<a
								href="#cart"
								className={s.header__content__nav__list__item}
								onClick={closeMenu}
							>
								<FiShoppingBag size={32} />
								<span>PUFI CART</span>
							</a>
						</li>
						<li>
							<a
								href="#nap"
								className={s.header__content__nav__list__item}
								onClick={closeMenu}
							>
								<FiSquare size={32} />
								<span>PUFI NAP</span>
							</a>
						</li>
					</ul>
					<div className={s.header__content__nav__options} onClick={closeMenu}>
						<Options />
					</div>
				</nav>
				<div className={s.header__content__options}>
					<Options />
				</div>
				<button
					onClick={() => setOpenMenu(!openMenu)}
					aria-label="Menú"
					className={s.header__content__burger}
				>
					{openMenu ? <FiX size={32} /> : <FiMenu size={32} />}
				</button>
			</div>
		</header>
	)
}

export default Header
