import React from 'react'
import SvgSelector from '../SvgSelector/SvgSelector'

export default function SideMenu() {
	return (
		<div className="side-menu">
		<div className="side-menu__body">
			<div className="side-menu__profile">
				<div className="side-menu__auth">
					<button className="sign-up btn">Войти</button>
					<button className="register btn">Регистрация</button>
				</div>
				<div className="side-menu__search-line search-line">
					<input type="text" placeholder="Найти фильм..." />
					<div className="search-logo">
						<SvgSelector id="search" />
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}
