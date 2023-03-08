import React, {useRef} from 'react'
import { cloneElement } from 'react'
import { Children } from 'react'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import CardFilm from '../CardFilm'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import Item from './Item/Item'
import { DisplayContext } from './display-context'
import { config } from '../../config'
import classNames from 'classnames'

export default function Display({cardWidth, children}) {
	const [offset, setOffset] = useState(0)
	const [widthItem, setWidthItem] = useState(0)
	const [countItemInWindowEl, setCountItemInWindowEl] = useState(0)
	const [arrowsVisible, setArrowsVisible] = useState([false, true])
	const windowElRef = useRef()
	cardWidth = cardWidth || 0

	useEffect(() => {
		const chooseWidth = (windowWidth, widthItem, countItemInWindowEl) => {
			const intermediateWidth = windowWidth - widthItem * (countItemInWindowEl - 1) - cardWidth
			widthItem += intermediateWidth / 4
			const margin = widthItem - cardWidth
			if (intermediateWidth < 1)  {
				return setWidthItem(() => {
					return (windowWidth + margin) / countItemInWindowEl
				})
			} else {
				chooseWidth(windowWidth, widthItem, countItemInWindowEl)
			}
		}
		const resizeHandler = () => {
			const windowWidth = windowElRef.current.offsetWidth
			const addedMargin = config.minMarginBetweenCard
			const countItemInWindowEl = Math.floor(windowWidth / (cardWidth + addedMargin))
			setCountItemInWindowEl(countItemInWindowEl)
			const widthItem = windowWidth / countItemInWindowEl
			chooseWidth(windowWidth, widthItem, countItemInWindowEl)
		}
		resizeHandler()

		window.addEventListener('resize', resizeHandler)

		return () => {
			window.removeEventListener('resize', resizeHandler)
		}
	}, [cardWidth])

	useEffect(() => {
		if (countItemInWindowEl >= children.length) 
			setArrowsVisible([false, false])
	}, [countItemInWindowEl])

	const handleLeftArrowClick = () => {
		if (offset === -widthItem)	
			setArrowsVisible([false, true])
		else
			setArrowsVisible([true, true])
		setOffset((currentOffset) => {
			const newOffset = currentOffset + widthItem
			return Math.min(newOffset, 0)
		})
	}

	const handleRightArrowClick = () => {
		const maxOffest = -(widthItem * (children.length - countItemInWindowEl))
		if (offset - maxOffest === widthItem) 
			setArrowsVisible([true, false])
		else
			setArrowsVisible([true, true])
		setOffset((currentOffset) => {
			const newOffset = currentOffset - widthItem
			return Math.max(newOffset, maxOffest)
		})
	}


	return (
		<DisplayContext.Provider value={{widthItem: widthItem}}>
			<div className='display'>
			<div className="display-container">
				<div className="window" ref={windowElRef}>
					<div className={
						cn(['arrow', 'arrow-left', 
							{visible: arrowsVisible[0]}
						])
					}>
						<AiOutlineArrowLeft onClick={handleLeftArrowClick}/>
					</div>

					<div 
						className="all-items-conteiner"
						style={{
							transform: `translateX(${offset}px)`
						}}
					>
						{children}
					</div>
					
					<div className={
						cn(['arrow', 'arrow-right', 
							{visible: arrowsVisible[1]}
						])
					}>
						<AiOutlineArrowRight onClick={handleRightArrowClick}/>
					</div>
				</div>
			</div>
			</div>
		</DisplayContext.Provider>
	)
}


Display.Item = Item