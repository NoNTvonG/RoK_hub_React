import React from 'react'
import CS from './CustomInput.module.scss'

const CustomInput = ({ type, icon, text, status }) => {
	return (
		<div className={CS.input}>
			{icon && <img src={icon} alt='' />}
			{text && <span className={CS.text}>{text}</span>}
			<input type={type} disabled={status} />
		</div>
	)
}

export default CustomInput
