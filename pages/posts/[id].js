import Layout from '../../components/layout'

import { getAllPostsIds, getPost } from '../../lib/posts'

export default function Post({ post }) {
    return <Layout>
        {post.title}<br />
        {post.id}<br />
        {post.date}<br />
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
    const post = getPost(params.id)

    return {
        props: {
            post
        }
    }
}