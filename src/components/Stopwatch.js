import styles from './Stopwatch.module.scss'

const Stopwatch = ({ stopwatch }) => {
	const hours = Math.floor(stopwatch / 360000)
	const minutes = Math.floor((stopwatch % 360000) / 6000)
		.toString()
		.padStart(2, '0')
	const seconds = Math.floor((stopwatch % 6000) / 100)
		.toString()
		.padStart(2, '0')
	const miliseconds = (stopwatch % 100).toString().padStart(2, '0')

	return (
		<div className={styles.stopwatch}>
			<span>{hours}:</span>
			<span>{minutes}:</span>
			<span>{seconds}:</span>
			<span>{miliseconds}</span>
		</div>
	)
}

export default Stopwatch
