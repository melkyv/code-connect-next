import Image from "next/image"
import { Avatar } from "../Avatar"
import styles from "./cardpost.module.css"
import Link from "next/link"
import { incrementLikes, postComment } from "@/actions"
import { ThumbsUpButton } from "./ThumbsUpButton"
import { ModalComment } from "../ModalComment"

export const CardPost = ({ post, highlight }) => {
    const submitLike = incrementLikes.bind(null, post);
    const submitComment = postComment.bind(null, post);

    return (
        <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
            <header className={styles.header}>
                <figure style={{ height: highlight ? 300 : 133 }}>
                    <Image src={post.cover} alt={post.title} fill />
                </figure>
            </header>

            <section className={styles.body}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                {!highlight && <Link href={`/posts/${post.slug}`}>Ver detalhes</Link>}
            </section>

            <footer className={styles.footer}>
                <div className={styles.actions}>
                    <form action={submitLike}>
                        <ThumbsUpButton />
                        <p>
                            {post.likes}
                        </p>
                    </form>
                    <div>
                        <ModalComment action={submitComment}/>
                        <p>
                            {post.comments.length}
                        </p>
                    </div>
                </div>
                <Avatar name={post.author.name} imageSrc={post.author.avatar} />
            </footer>
        </article>
    )
}
