import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Bloghead(props) {
    return (
        <div className={styles.bloghead}>
            <Link href="/posts/[id]" as={`/posts/${props.post_id}`}><a><h3>{props.post_title}</h3></a></Link>
            <p>{props.post_date}</p>
        </div>
    )
}