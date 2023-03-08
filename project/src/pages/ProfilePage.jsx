import React from 'react'
import ActionBlock from '../components/ActionBlock'
import ProfileAvatar from '../components/ProfileAvatar'
import { useNavigate } from 'react-router-dom'

export default function ProfilePage() {
	const navigate = useNavigate()

	return (
		<main class="section main-section profile">
			<div class="container">
				<div className="profile__body">
					<div class="info-profile profile__info">

						<div class="info-profile__text">
							<p class="name">
								Константин Семенов
							</p>
							<p class="email">
								konsem04@mail.ru
							</p>
							<div class="info-profile__edit-profile edit-profile-block profile-block" onClick={() => navigate('/editprofile')}>
								Редактировать						
							</div>
						</div>

						<ProfileAvatar />
					</div>

					<div class="profile__actions">
						<ActionBlock id='favorites' nameAction='Избранное' />
						<ActionBlock id='later' nameAction='Смотреть позже' />
						<ActionBlock id='liked' nameAction='Понравившееся' />
					</div>
				</div>
				<button className="btn" onClick={() => navigate('/')}>Вернуться</button>
			</div>
		</main>
	)
}
