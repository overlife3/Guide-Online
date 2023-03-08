import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function LoginPage() {
	const navigate = useNavigate()

	return (
		<div className="auth-form login-form">
			<form action="" className="regisster-form__body">
				<h3 className="block-title">Вход</h3>
				<div className="field">
					<p className="email">Электронная почта:</p>
					<input type="email" placeholder="..." />
				</div>
				<div className="field">
					<p className="password">Пароль:</p>
					<input type="password" placeholder="..." />
				</div>
				<button type="submit" className="btn">Войти</button>
				<button type="submit" className="btn" onClick={() => navigate('/')}>Отменить</button>

			</form>
		</div>
	)
}
