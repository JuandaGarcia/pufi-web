import { Post } from 'utils/types/Post'
import s from './Instagram.module.scss'

type Props = {
	posts: Post[]
}
const Instagram = ({ posts }: Props) => {
	return (
		<section className={s.instagram}>
			<p className={s.instagram__text}>Instagram</p>
			<h2 className={s.instagram__title}>#ESPUFI</h2>
			<div className={s.instagram__galery}>
				{posts.map(post => (
					<a
						key={post.id}
						href={post.permalink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							className={s.instagram__galery__photo}
							src={post.url}
							alt="Foto de Instagram"
						/>
					</a>
				))}
			</div>
		</section>
	)
}

export default Instagram
