import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Check out our next event: <a href="/frow-ride">The Frow Ride</a>, on July 16th, 2023.
        </p>
      </section>
    </Layout>
  )
}
