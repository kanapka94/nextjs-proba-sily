import { AppProps } from 'next/app'

require('../styles/global.css')

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}