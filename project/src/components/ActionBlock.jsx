import React from 'react'
import SvgSelector from '../SvgSelector/SvgSelector'
import {useNavigate} from 'react-router-dom'

export default function ActionBlock({id, nameAction}) {
	const navigate = useNavigate()
	
	return (
		<div class="profile__action profile-block action" onClick={() => {navigate(`/actions/${id}`)}}>
			<div class="action-icon">
				<SvgSelector id={id} />
			</div>
			<p class="action__name">{nameAction}</p>
		</div>
	)
}
