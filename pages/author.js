import Head from 'next/head';
import Layout, { siteTitle }from '../components/layout';
import utilStyles from '../styles/utils.module.css';


function Author () {
    return (
        <>
            <Layout>
                <Head>
                    <title>{siteTitle}</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <section className={utilStyles.headingMd}>
                    <p>I am software Engineer. skilled in Big Data and Backend technologies.</p>
                </section>
            </Layout>
           
        </>
    )
}

export default Author;
