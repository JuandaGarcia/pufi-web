import { useEffect } from 'react'

const Instagram = () => {
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					'https://www.instagram.com/juandagarciaa/?__a=1'
				)
				const data = await response.json()
				console.log(data)
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [])

	return <section>Instagram</section>
}

export default Instagram
