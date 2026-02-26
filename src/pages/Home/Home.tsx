import { useState } from 'react'

const Home = () => {
	const [count, setCount] = useState(0)

	return (
		<div>
			<h1>Home</h1>
			<div>{count}</div>
			<button type='button' onClick={() => setCount(cnt => cnt + 1)}>
				ADD
			</button>
		</div>
	)
}

export { Home }
