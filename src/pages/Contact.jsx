import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageTopTitle from '../components/UI/Titles/PageTopTitle'

const Contact = () => {
	const dispatch = useDispatch()
	const comm = useSelector(state => state.test.home)
	const homeList = useSelector(state => state.test.homeList)
	const HomesName = useSelector(state =>
		state.test.homeList.map(home => home.name)
	)

	const inc = () => {
		dispatch({ type: 'ADD_HOME', payload: 5 })
	}
	const dec = () => {
		dispatch({ type: 'GET_HOME', payload: 5 })
	}
	const addHome = () => {
		dispatch({ type: 'GET_HOME_LIST', payload: '' })
	}

	return (
		<div>
			<PageTopTitle>Контакт</PageTopTitle>
			<input type='button' value='add' onClick={() => inc()} />
			<input type='button' value='get' onClick={() => dec()} />
			<p>{comm}</p>
			<p>+48 000 000 001</p>
			<hr />
			{HomesName.map(home => (
				<p>{home}</p>
			))}
			<hr />
			{homeList.map(home => (
				<div>
					<p>{home.id}</p>
					<h3>{home.name}</h3>
					<h5>{home.price}</h5>
				</div>
			))}
			<button onClick={() => addHome()}>ADD home</button>
		</div>
	)
}

export default Contact
