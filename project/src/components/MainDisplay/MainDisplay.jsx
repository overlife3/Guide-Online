import React, {Children, cloneElement, useRef, useState, useEffect} from 'react'
import cn from 'classnames'
import CardFilm from '../CardFilm'
import Item from './Item/Item'
import EmptyCard from './EmptyCard/EmptyCard'
import { config } from '../../config'

export default function MainDisplay({children}) {
	const [countColumns, setCountColumns] = useState(0)
	const [emptyCardsArr, setEmptyCardsArr] = useState([])
	const windowElRef = useRef()
	useEffect(() => {
		const resizeHandler = () => {
			const windowWidth = windowElRef.current.offsetWidth
			const itemWidth = config.cardFilmWidth + config.minMarginBetweenCard
			setCountColumns(Math.floor(windowWidth / itemWidth))
		}
		resizeHandler()

		window.addEventListener('resize', resizeHandler)

		return () => {
			window.removeEventListener('resize', resizeHandler)
		}
	}, [])

	useEffect(() => {
		setEmptyCardsArr([])
		if (countColumns) {
			const countEmptyCard = Math.ceil(children.length / countColumns) * countColumns - children.length
			const arrEmptyCard = []
			for (let i = 0; i < countEmptyCard; i++) {
				arrEmptyCard.push(<EmptyCard key={i} />) // key={i} пересечений ключей не будет, так как карточки с фильмами будут иметь свой ключ из id
			}
			setEmptyCardsArr(() => arrEmptyCard)
		}
	}, [countColumns])
	

	return (
		<div 
			className='main-display' 
			ref={windowElRef}
		>
			{
				[...children, ...emptyCardsArr]
			}
		</div>
	)
}

MainDisplay.Item = Item