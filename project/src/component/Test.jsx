import React, { useState, useEffect } from 'react'

export default function Test() {
	const [state, setState] = useState({})
	useEffect(() => {
		fetch('https://api.kinopoisk.dev/v1/movie', {
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': process.env.REACT_APP_X_API_KEY
			}
		}) 
			.then(res => {
				setState({...state, res: res})
			})
			.catch(err => {
				setState({...state, err: err})
			})
	
		return () => {}
	}, [])
	
	return (
		<div className="test">
			{console.log(state.res)}
		</div>
	)
}


