import React from 'react'
import DropDownBlock from '../components/DropDownBlock'
import MainDisplay from '../components/MainDisplay/MainDisplay'
import SearchFilmForm from '../components/SearchFilmForm'
import CardFilm from '../components/CardFilm'

export default function SearchPage() {
	const arr = [...(new Array(23))]

	return (
		<section className="search-section section">
			<div className="container">
				<h1 className="section-title">Поиск фильма</h1>
				<div className="choose-movie">
					<SearchFilmForm />
					<DropDownBlock />
				</div>
				<h2 className="block-title">Найденные фильмы</h2>
				<MainDisplay>
					{arr.map((item, index) => (
						<MainDisplay.Item key={index}>
							<CardFilm />

						</MainDisplay.Item>
					))}
				</MainDisplay>
			</div>
		</section>
	)
}
