import React from 'react'
import SvgSelector from '../SvgSelector/SvgSelector'
import {useNavigate} from 'react-router-dom'

export default function CardFilm() {
	const navigate = useNavigate()

	return (
		<div className="card" >
			<div className="card-body">
				<div className="poster" onClick={() => navigate('/films/1')}>
					<div className="rating-age">+16</div>
					<div className="card-preview">
						<div className="side-buttons">
							<div className="icon show-title" data-title="В избранное">
								<SvgSelector id='favorites' />
							</div>
							<div className="icon show-title" data-title="Смотреть позже">
								<SvgSelector id='later' />
							</div>
							<div className="icon show-title" data-title="Похожие">
								<SvgSelector id='similar' />
							</div>
						</div>
						<p className="card-preview__info">Рейтинг <span className="rating">7.2</span></p>
						<p className="card-preview__info">Боевик, гонки</p>
					</div>


					<img src="https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/a7de8b77-34a0-4b22-9574-acec6c689958/x1000" alt="Постер к фильму" />							
				</div>
				<div className="card__info">
					<p className="name">Форсаж 2</p>
					<p className="year"><span className="rating">2021</span></p>
				</div>
				
			</div>

		</div>
	)
}
