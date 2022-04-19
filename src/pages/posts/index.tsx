import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
	return (
		<>
			<Head>
				<title>Posts | Ignews</title>
			</Head>

			<main className={styles.container}>
				<div className={styles.posts}>
					<a href="#">
						<time>19 de Abril de 2022</time>
						<strong>Creating a new psots</strong>
						<p>Description posts here!! 😎🥳</p>
					</a>

					<a href="#">
						<time>19 de Abril de 2022</time>
						<strong>Creating a new psots</strong>
						<p>Description posts here!! 😎🥳</p>
					</a>

					<a href="#">
						<time>19 de Abril de 2022</time>
						<strong>Creating a new psots</strong>
						<p>Description posts here!! 😎🥳</p>
					</a>
				</div>
			</main>
		</>
	)
}