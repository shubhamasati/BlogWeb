import Layout from "../../components/layout";
import { getPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";


export default function Post({postData}) {
    return (
        <>
            <Layout>
                <Head>
                    <title>{postData.title}</title>
                </Head>
                <h1>{postData.title}</h1>
                {postData.date}
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.procDataHtml}} />
            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getPostIds();
    return {
        paths,
        fallback: false,
    }

}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id);
    console.log(postData)
    return {
        props: {
            postData,
        }
    }
}