import { createBrowserRouter } from 'react-router-dom'

import { About } from '@/pages/About'
import { Home } from '@/pages/Home'

import { PAGES } from '@/shared/constants/urls.constant'

import { Layout } from '@/layouts/Layout'

const { HOME, ABOUT } = PAGES

export const router = createBrowserRouter([
	{
		path: HOME,
		Component: Layout,
		children: [
			{ index: true, Component: Home },
			{ path: ABOUT, Component: About }
		]
	}
])
