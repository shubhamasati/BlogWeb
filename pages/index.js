import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Bloghead from './bloghead'
import Layout from '../components/layout';
import { getPosts } from '../lib/posts'

export default function Home( {allPosts} ) {
  return (
    <>
        <Layout home>
            {
              // console.log(allPosts)
              allPosts.map( ({id, title, date}) => {
                return <Bloghead post_title={title} post_id={id} post_date={date}></Bloghead>
              })
            }
        </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  // console.log('I am inside getstatic')
  const allPosts = getPosts();
  // console.log(allPosts)
  return {
    props: { 
      allPosts
    },
  }
}