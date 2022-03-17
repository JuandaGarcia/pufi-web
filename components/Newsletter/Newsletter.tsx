import React from 'react'
import { useForm } from 'react-hook-form'
import { FiArrowRight } from 'react-icons/fi'
import { emailValidator } from 'utils/regex'
import s from './Newsletter.module.scss'

type Form = {
	email: string
}

const Newsletter = () => {
	const {
		register,
		formState: { errors, isSubmitSuccessful },
		handleSubmit,
	} = useForm<Form>()

	return (
		<section className={s.newsletter}>
			<p className={s.newsletter__text}>Newsletter</p>
			<h2 className={s.newsletter__title}>
				Suscribete
				<br />
			</h2>
			<span>y enterate de todas las novedades</span>
			{errors.email?.message && (
				<p aria-live="assertive" className={s.newsletter__error}>
					{errors.email.message}
				</p>
			)}
			{isSubmitSuccessful ? (
				<p className={s.newsletter__message} aria-live="assertive">
					Gracias por subscribirte al Newsletter!
				</p>
			) : (
				<form className={s.newsletter__form} onSubmit={handleSubmit(() => {})}>
					<input
						type="email"
						placeholder="Ingresa tu email"
						className={s.newsletter__form__input}
						{...register('email', {
							required: { value: true, message: 'El email es requerido' },
							pattern: {
								value: emailValidator,
								message: 'El email no es valido',
							},
						})}
					/>
					<button aria-label="Enviar" className={s.newsletter__form__button}>
						<FiArrowRight />
					</button>
				</form>
			)}
		</section>
	)
}

export default Newsletter
