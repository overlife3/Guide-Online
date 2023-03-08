import React from 'react'
import CardActor from '../components/CardActor'
import CardFilm from '../components/CardFilm'
import Display from '../components/Display/Display'
import GenreBlock from '../components/GenreBlock'
import LinkServices from '../components/LinkServices'
import { CARD_WIDTH } from '../data/CARD_WIDTH'

export default function FilmPage() {
	return (
		<section className="film-page">
		<div className="container">
			<div className="film-page__body">
				<div className="film-page__top">
					<div className="film-page__left-block">
						<div className="film-page__poster">
							<img src="https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/a7de8b77-34a0-4b22-9574-acec6c689958/x1000" alt="poster" />
						</div>
						<div className="film-page__rating">
							<div className="rating-block">
								KP 7.2
							</div>
							<div className="rating-block">
								IMDB 7.8
							</div>
						</div>
					</div>
	
					<div className="film-page__right-block">
						<h3 className="block-title">Форсаж 2</h3>
						<div className="info-text">
							Год выхода: 2021
						</div>
						<div className="info-text">
							Режиссер: Том Круз
						</div>
						<div className="info-text">
							Страна: США
						</div>
						<div className="info-text">
							Возростной рейтинг: +16
						</div>
						<div className="genre">
							<GenreBlock>Боевики</GenreBlock>
							<GenreBlock>Драмы</GenreBlock>
							<GenreBlock>Фантастика</GenreBlock>
						</div>
						<div className="info-text">
							Продолжительность: 02:32
						</div>
	
						<div className="actors">
							<h4 className="chapter-title">Актерский состав</h4>

							<Display>
								{[...(new Array(4))].map((item, index) => 
									<Display.Item key={index} cardWidth={CARD_WIDTH.ACTOR}>
										<CardActor />
									</Display.Item>
								)}
							</Display>
	
						</div>
					</div>
				</div>

				<div className="film-page__bottom-block">
					<div className="description">
						<h4 className="chapter-title">Описание</h4>
						Его зовут Брайан, и он — фанат турбин и нитроускорителей. Он пытается попасть в автобанду легендарного Доминика Торетто, чемпиона опасных и незаконных уличных гонок. Брайан также полицейский, и его задание — втереться в доверие к Торетто, подозреваемому в причастности к дерзким грабежам грузовиков, совершаемым прямо на ходу
					</div>
					<div className="trailer">
						<h4 className="chapter-title">Трейлер</h4>
						<div className="trailer__container">
							<iframe className="trailer__video"
								src="https://www.youtube.com/embed/ZsJz2TJAPjw" title="YouTube video player" 
								frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
								allowFullScreen>
							</iframe>
						</div>
					</div>
					<div className="slogans">
						<h4 className="chapter-title">Слоганы</h4>
						<Display>
							{[...(new Array(20))].map((item, index) => 
								<Display.Item key={index} cardWidth={CARD_WIDTH.FILM}>
									<CardFilm />
								</Display.Item>
							)}	
						</Display>		
					</div>
					<div className="similar-movies">
						<h4 className="chapter-title">Похожие фильмы</h4>
						<Display>
							{[...(new Array(20))].map((item, index) => 
								<Display.Item key={index} cardWidth={CARD_WIDTH.FILM}>
									<CardFilm />
								</Display.Item>
							)}	
						</Display>
					</div>
					<div className="links-movies">
						<h4 className="chapter-title">Ссылки на сервисы</h4>
						<div className="links-movies__list">
							<LinkServices 
								url='#' logo='https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig' 
								name='Иви'
							/>
							<LinkServices 
								url='#' logo='https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig' 
								name='KION'
							/>
							<LinkServices 
								url='#' logo='https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig' 
								name='Wink'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}
