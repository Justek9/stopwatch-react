import { useState, useEffect } from 'react'
import Button from './components/Button'
import Stopwatch from './components/Stopwatch'
import styles from './App.module.scss'

const App = () => {
	const [stopwatch, setStopwatch] = useState(0)
	const [isOn, setIsOn] = useState(false)

	useEffect(() => {
		let interval = null
		if (isOn) {
			interval = setInterval(() => setStopwatch(stopwatch + 1), 10)
		}
		return () => clearInterval(interval)
	}, [isOn, stopwatch])

	const handleReset = ()=> {
		setStopwatch(0)
		setIsOn(false)
	}

	return (
		<div className={styles.container}>
			<Stopwatch stopwatch={stopwatch}></Stopwatch>
			<Button onClick={() => setIsOn(true)}>Start</Button>
			<Button onClick={() => setIsOn(false)}>Stop</Button>
			<Button onClick={() => handleReset()}>Reset</Button>
		</div>
	)
}

export default App
