import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function GenreBlock({children}) {
	const navigate = useNavigate()
	return (
		<span className="genre-name" onClick={() => navigate('/searchfilm')}>
			{children}
		</span>
	)
}
