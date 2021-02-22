import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <h1>First Page</h1>
            <Link href="/">
                <a>back to home</a>
            </Link>
        </>
    )
}