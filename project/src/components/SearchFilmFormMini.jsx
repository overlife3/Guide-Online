import React from 'react'

export default function SearchFilmFormMini() {
	return (
		<form action="#" className="search-film">
			<h3 className="block-title">Найти фильм</h3>
			<div className="fields">
				<div className="field">
					<p className="field__name">Название:</p>
					<input type="text" placeholder="..." />
				</div>
				<div className="field">
					<p className="field__name">Жанр:</p>
					<div className="range-input">
						<div className="skeleton">Выпадающий список</div>
					</div>
				</div>
				<div className="field">
					<p className="field__name">Год премьеры:</p>
					<div className="range-input">
						<div className="skeleton">range-input</div>
					</div>
				</div>

			</div>
			<button className="btn" type="submit">Поиск</button>
		</form>
	)
}
