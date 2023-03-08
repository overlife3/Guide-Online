import React from 'react'
import { config } from '../../../config'

export default function EmptyCard() {
	return (
		<div style={{
			width: config.cardFilmWidth,
			height: "100%"
		}}>
		</div>
	)
}
