import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import s from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.footer__content}>
				<a href="#" className={s.footer__content__logo}>
					<img
						className={s.footer__content__logo__img}
						src="/img/logo-black.svg"
						alt="Logo"
					/>
				</a>
				<ul className={s.footer__content__section}>
					<li>
						<a href="#rain">Pufi Rain</a>
					</li>
					<li>
						<a href="#puff">Pufi Puff</a>
					</li>
					<li>
						<a href="#cart">Pufi Cart</a>
					</li>
					<li>
						<a href="#nap">Pufi Nap</a>
					</li>
				</ul>
				<ul className={s.footer__content__section}>
					<li>
						<a href="#">Contacto</a>
					</li>
					<li>
						<a href="#">Ayuda</a>
					</li>
					<li>
						<a href="#">Cómo comprar</a>
					</li>
					<li>
						<a href="#">Términos & condiciones</a>
					</li>
				</ul>
				<div className={s.footer__content__section}>
					<p className={s.footer__content__section__text}>Compra 100% segura</p>
					<img
						className={s.footer__content__section__secure}
						src="/img/compra.png"
						alt="Compra segura"
					/>
				</div>
				<div className={s.footer__content__section}>
					<p className={s.footer__content__section__social}>
						Siguenos en{' '}
						<a href="#" aria-label="Facebook">
							<FiFacebook size={20} />
						</a>
						<a href="#" aria-label="Twitter">
							<FiTwitter size={20} />
						</a>
						<a href="#" aria-label="Instagram">
							<FiInstagram size={20} />
						</a>
					</p>
				</div>
				<div className={s.footer__content__copyright}>
					<p>
						PUFI Copyright {new Date().getFullYear()} - Todos los derechos
						reservados
					</p>
					<img
						className={s.footer__content__copyright__logo}
						src="/img/logo-footer.svg"
						alt="Logo"
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
