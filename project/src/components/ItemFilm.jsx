import React from 'react'
import GenreBlock from './GenreBlock'

export default function ItemFilm() {
	return (
		<div className="item">
			<div className="item__body">
				<div className="item__left-block">
					<div className="item__poster poster-film">
						<img src="https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/a7de8b77-34a0-4b22-9574-acec6c689958/x1000" alt="poster" />
					</div>
					<div className="item__sub-poster">
						<p className="year rating">2021</p>								
						<div className="rating show-title" data-title="Рейтинг">
							7.2
						</div>
					</div>
					<div className="rating-age">
						+16
					</div>
				</div>
				<div className="item__right-block">
					<h4 className="block-title">Форсаж 2</h4>
					<div className="genre">
						<GenreBlock>Боевик</GenreBlock>
						<GenreBlock>Экшн</GenreBlock>
						<GenreBlock>Драмvа</GenreBlock>
					</div>
					<div className="description">
						Его зовут Брайан, и он — фанат турбин и нитроускорителей. Он пытается попасть в автобанду легендарного Доминика Торетто, чемпиона опасных и незаконных уличных гонок. Брайан также полицейский, и его задание — втереться в доверие к Торетто, подозреваемому в причастности к дерзким грабежам грузовиков, совершаемым прямо на ходу.
					</div>
					<button className="btn">Смотреть</button>
				</div>
			</div>
		</div>
	)
}
