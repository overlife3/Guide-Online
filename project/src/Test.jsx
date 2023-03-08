import React from 'react'
import Display from './components/Display/Display.jsx'
import CardFilm from './components/CardFilm.jsx'
import MainDisplay from './components/MainDisplay/MainDisplay.jsx'
import './components/Display/Display.css'
import Item from './components/MainDisplay/Item/Item'
export default function Test() {
	const arr = [...(new Array(23))]
	return (
		<div className='container'>
			<MainDisplay>
				{arr.map((item, index) => (
					<MainDisplay.Item key={index}>
						<CardFilm />

					 </MainDisplay.Item>
				))}
			</MainDisplay>
		</div>
	)
}
