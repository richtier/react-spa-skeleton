import React from 'react'

import { Link } from 'react-router-dom'

import HelloWorldSmallScreen from '../components/HelloWorldSmallScreen'
import HelloWorldLargeScreen from '../components/HelloWorldLargeScreen'
import useScreen from '../hooks/useScreen'


export default function (props) {
	const { isSmall } = useScreen()
	const Component = isSmall ? HelloWorldSmallScreen : HelloWorldLargeScreen
	return (
		<>
			<Component />
			<Link to={'/privacy'}>privacy</Link>
		</>
	)
}