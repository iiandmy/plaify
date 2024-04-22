import Head from 'next/head'
import { Fragment } from 'react'

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Plaify</title>
				<meta
					name="description"
					content="Plaify is a modern web music player"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>Hello, World!</main>
		</Fragment>
	)
}
