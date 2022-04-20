import React from 'react'
import { useSelector } from 'react-redux'
import CommanderCard from './UI/Card/CommanderCard'

const CommandersList = () => {
	const commanders = useSelector(state =>
		state.commanders.commanders.map(({ detailedInfo, ...data }) => data)
	)

	return (
		<div className='commandersList'>
			{commanders.map(comm => (
				<CommanderCard
					icon={comm.icon}
					name={comm.name}
					id={comm.id}
					key={comm.id}
				/>
			))}
		</div>
	)
}

export default CommandersList
