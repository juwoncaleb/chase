import Layout from '@/component/Layout'
import '@/styles/global.css'

export default function App({ Component, pageProps }) {
  return <Layout customHeaderBackground={true}>
    <Component {...pageProps} />
  </Layout>
}
