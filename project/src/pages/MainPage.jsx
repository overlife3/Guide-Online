import React, { useState } from 'react'
import Display from '../components/Display/Display'
import CardFilm from '../components/CardFilm'
import DropDownBlock from '../components/DropDownBlock'
import MainDisplay from '../components/MainDisplay/MainDisplay'
import SearchFilmForm from '../components/SearchFilmForm'
import { CARD_WIDTH } from '../data/CARD_WIDTH'

export default function MainPage() {
	const arr = [...(new Array(23))]

	return (
		<>
				<section className="section new-film-section">
					<div className="container">
						<div className="top-display">
							<div className="container">
								<h2 className="section-title">Новинки</h2>
								<Display cardWidth={CARD_WIDTH.FILM}>
									{[...(new Array(10))].map((item, index) => 
										<Display.Item key={index} cardWidth={CARD_WIDTH.FILM}>
											<CardFilm />
										</Display.Item>
									)}	
								</Display>
							</div>
						</div>
					</div>
				</section>

				<section className="section search-section">
					<div className="container">
						<h1 className="section-title">Найди себе фильм</h1>
						<div className="choose-movie">
							<SearchFilmForm />
							<DropDownBlock />
						</div>
					</div>
				</section> 
				
				<section className="section recommendation-section">
					<div className="container">
						<h2 className="section-title">Мы рекомендуем</h2>
						<Display cardWidth={CARD_WIDTH.FILM}>
							{[...(new Array(20))].map((item, index) => 
								<Display.Item key={index}>
									<CardFilm />
								</Display.Item>
							)}	
						</Display>
					</div>
				</section>  

				<section className="section other-section">
					<div className="container">
						<h2 className="section-title">Другое</h2>
						<MainDisplay>
							{arr.map((item, index) => (
								<MainDisplay.Item key={index}>
									<CardFilm />

								</MainDisplay.Item>
							))}
						</MainDisplay>
					</div>
				</section>
		</>
	)
}
