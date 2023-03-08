import React from 'react'
import ListFilms from '../components/ListFilms'
import SearchFilmFormMini from '../components/SearchFilmFormMini'
import {useParams} from 'react-router-dom'
import {actionsData} from '../data/actionsData'
export default function ActionPage() {
	const {id} = useParams()

	return (
		<section className="action-page-section">
		<div className="container">
			<h1 className="action-page-section__title section-title">
				{actionsData[id].text}
			</h1>
			<SearchFilmFormMini />
			<ListFilms />
		</div>

	</section>
	)
}
