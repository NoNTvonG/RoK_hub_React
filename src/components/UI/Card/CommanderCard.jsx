import React from 'react'
import { useHistory } from 'react-router-dom'
import CS from './CommanderCard.module.scss'

const CommanderCard = ({ icon, name, id }) => {
	const router = useHistory()

	return (
		<div className={CS.card} onClick={() => router.push(`/commanders/${id}`)}>
			<div className={CS.cardImg}>
				<img src={icon} alt='icon' />
				<span></span>
			</div>
			<div className={CS.cardTitle}>
				<p>{name}</p>
			</div>
		</div>
	)
}

export default CommanderCard
