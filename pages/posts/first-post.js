import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Page</h1>
            <Link href="/">
                <a>back to home</a>
            </Link>
        </Layout>
    )
}