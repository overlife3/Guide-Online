import React from 'react'

export default function SearchFilmForm() {
	return (
		<form action="get" className="form-fields">
			<div className="form-block">
				<p>Жанр</p>
				<input type="text" placeholder="..." />
			</div>
			<div className="form-block" >
				<p>Страна</p>
				<input type="text" placeholder="..." />
			</div>
			<div className="form-block" >
				<p>Актер в главной роли</p>
				<input type="text" placeholder="..." />
			</div>
			<div className="form-block">
				<p>Год премьеры</p>
				<input type="text" placeholder="..." />
			</div>
			<div className="form-block">
				<p>Рейтинг</p>
				<input type="text" placeholder="..." />
			</div>
			<div className="form-block">
				<p>Найти фильм</p>
				<button type="submit" className="btn">
					Поиск
				</button>
			</div>
		</form>
	)
}
