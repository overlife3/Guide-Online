import React from 'react'
import SvgSelector from '../SvgSelector/SvgSelector'
import {useNavigate} from 'react-router-dom'

export default function HeaderProfile({isAuth}) {
	const navigate = useNavigate()

	if (isAuth)
		return (
			<div className="header__profile auth-true">
				<div className="profile-avatar" onClick={() => navigate('/profile')}>
					K
				</div>
				<div className="drop-down-info-block">
					<p className="name-info info-text">Константин Семенов</p>
					<p className="email-info info-text">konsem04@mail.ru</p>
					<div className="actions-profile">
						<div className="icon show-title" data-title="Избранное" onClick={() => navigate('/actions/favorites')}>
							<SvgSelector id="favorites" />
						</div>
						<div className="icon show-title" data-title="Смотреть позже" onClick={() => navigate('/actions/later')}>
							<SvgSelector id="later" />
						</div>
						<div className="icon show-title" data-title="Понравившиеся" onClick={() => navigate('/actions/liked')}>
							<SvgSelector id="liked" />
						</div>
					</div>
					</div>
			</div>
		)
	return (
		<div className="header__profile">
			<button className="sign-up btn" onClick={() => navigate('/login')}>Войти</button>
			<button className="register btn"onClick={() => navigate('/register')}>Регистрация</button>
		</div>
	)
}
