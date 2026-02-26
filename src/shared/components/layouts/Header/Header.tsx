import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import { PAGES } from '@/shared/constants/urls.constant'

import styles from './Header.module.scss'

const { HOME, ABOUT } = PAGES

const Header = () => {
	return (
		<header className={classNames(styles.header, 'container')}>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<NavLink to={HOME} className={styles.link}>
							Home
						</NavLink>
					</li>
					<li className={styles.item}>
						<NavLink to={ABOUT} className={styles.link}>
							About
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export { Header }
