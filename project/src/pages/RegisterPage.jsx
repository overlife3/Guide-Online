import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function RegisterPage() {
	const navigate = useNavigate()

	return (
		<div className="register-form auth-form">
			<form action="" className="regisster-form__body">
				<h3 className="block-title">Регистрация</h3>
				<div className="field">
					<p className="name">Имя:</p>
					<input type="text" placeholder="..." />
				</div>
				<div className="field">
					<p className="email">Электронная почта:</p>
					<input type="email" placeholder="..." />
				</div>
				<div className="field">
					<p className="password">Пароль:</p>
					<input type="password" placeholder="..." />
				</div>
				<button className="btn" type="submit">Продолжить</button>
				<button className="btn" type="submit" onClick={() => navigate('/')}>Отменить</button>

			</form>
		</div>
	)
}
