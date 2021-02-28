import Head from 'next/head'
import Layout from '../../components/Layout'
import Date from '../../components/Date'

import utilStyles from '../../styles/utils.module.css'

import { getAllPostsIds, getPost } from '../../lib/posts'

export default function Post({ post }) {
    return <Layout>
        <Head>
            <title>{post.title}</title>
        </Head>
        {post.title}<br />
        {post.id}<br />
        <div className={utilStyles.lightText}>
            <Date dateString={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </Layout>
}

export async function getStaticPaths() {
    const paths = getAllPostsIds()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = await getPost(params.id)

    return {
        props: {
            post
        }
    }
}