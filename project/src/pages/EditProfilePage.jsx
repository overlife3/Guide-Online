import React from 'react'
import cn from 'classnames'
import {useNavigate} from 'react-router-dom'

export default function EditProfilePage({visible}) {
	const classNames = cn({visible}, 'edit-profile-popup')
	const navigate = useNavigate()

	return (
		<div className={classNames}>
			<div className="edit-profile-block-popup__body">
				<h3 className="block-title edit-profile-popup__title">Редактировать профиль</h3>
				<div className="field">
					<p className="field__name">Аватарка:</p>
					<button className="field__change">Изменить</button>
				</div>
				<div className="field">
					<p className="field__name">Имя:</p>
					<div>
						<input type="text" value="Константин Семенов" disabled />
						<button href="#" className="field__change">Изменить</button>
					</div>
				</div>
				<div className="field">
					<p className="field__name">Электронная почта:</p>
					<div>
						<input type="text" value="konsem04@mail.ru" disabled />
						<button href="#" className="field__change">Изменить</button>
					</div>
				</div>
				<div className="field">
					<p className="field__name">Пароль:</p>
					<button href="#" className="field__change">Изменить</button>
				</div>

				<button className="btn">Применить</button>
				<button className="btn" onClick={() => navigate('/profile')}>Отменить</button>
				

			</div>
		</div>
	)
}
