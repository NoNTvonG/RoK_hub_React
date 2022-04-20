import React from 'react'
import AroundFrameTitle from '../UI/Frame/AroundFrameTitle'
import CustomInput from '../UI/Input/CustomInput'

const ResourcesSets = ({ title, text, data }) => {
	return (
		<AroundFrameTitle title={title}>
			<div className='box'>
				{data.map(x => (
					<CustomInput type='number' text={x} />
				))}
			</div>
		</AroundFrameTitle>
	)
}

export default ResourcesSets
