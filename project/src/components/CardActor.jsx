import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function CardActor() {
	const navigate = useNavigate()
	
	return (
		<div className="actor-card" onClick={() => navigate('/searchfilm')}>
			<img src="https://st.kp.yandex.net/images/actor_iphone/iphone360_569853.jpg" alt="actor" />
			<p className="actor-name">Да Хань</p>
		</div>
	)
}
