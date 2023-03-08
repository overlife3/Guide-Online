import React from 'react'
import SvgSelector from '../SvgSelector/SvgSelector'
import HeaderProfile from './HeaderProfile'
import { useNavigate } from 'react-router-dom'
import logo from "../img/logo.png"

export default function Header() {
	const navigate = useNavigate()
	const isAuth = false

	const handleAnchor = (e) => {
		e.preventDefault()
		navigate('/')
	}
	return (
		<header className="section"> 
		<div className="header">
			<div className="container">
				<div className="row">
					<div className="header__logo" onClick={handleAnchor}>
						<img src={logo} alt="logo" />
					</div>
					<div className="gr-f">
						<div className="header__search-line search-line">
							<input type="text" placeholder="Найти фильм..." />
							<div className="search-logo">
								<SvgSelector id='search' />
							</div>
						</div>
						<HeaderProfile isAuth={isAuth} />
					</div>
					<div className="menu-burger">
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</div>
				</div>
			</div>
		</div>
	</header>
	)
}
