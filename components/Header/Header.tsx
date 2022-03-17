import Logo from 'components/Logo/Logo'
import s from './Header.module.scss'

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.header__content}>
				<Logo />
			</div>
		</header>
	)
}

export default Header
