import { Outlet } from 'react-router-dom'

import { Header } from '@/shared/components/layouts/Header'

const Layout = () => {
	return (
		<>
			<Header />
			<main className='container'>
				<Outlet />
			</main>
			<footer className='container'>footer</footer>
		</>
	)
}

export { Layout }
