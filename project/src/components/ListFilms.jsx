import React from 'react'
import ItemFilm from './ItemFilm'

export default function ListFilms() {
	const arr = [...(new Array(10))]
	return (
		<div className='list-films'>
			{arr.map((item, index) => <ItemFilm key={index} />)}
		</div>
	)
}
