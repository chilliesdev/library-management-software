import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function Rating({ rating }) {
	
	const color = () => {
		let value = ''
		switch (rating){
			case 1: 
				value = 'text-dark'
				break
			case 2: 
				value = 'text-danger'
				break
			case 3: 
				value = 'text-warning'
				break
			case 4: 
				value = 'text-primary'
				break
			default:
				value = 'text-success'
		}
		return value
	}
	const ratingImg = []
	for (let i = 0; i < rating; i++) {
		ratingImg.push(<FaStar key={i}/>)
	}

	return (
		<div className={color()}>
			{ratingImg}
		</div>
	   
	)
}
