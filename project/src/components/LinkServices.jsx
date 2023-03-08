import React from 'react'

export default function LinkServices({url, logo, name}) {
	return (
		<a href={url} className="links-movies__link click-block">
			<div className="click-block__body">
				<img className="logo" src={logo} alt="logo" />
				<p className="name-link">{name}</p>
			</div>
		</a>
	)
}
