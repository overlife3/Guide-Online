import React, {useContext} from 'react'
import { DisplayContext } from '../display-context'

export default function Item({children}) {
	const { widthItem } = useContext(DisplayContext)
	return (
		<div 
			className="item__main-container"
			style={{
				flexBasis: `${widthItem}px`,
			}}	
		>
			{children}
		</div>	
	)
}
