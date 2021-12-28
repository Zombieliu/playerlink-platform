import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "./header";
const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>david</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
          <Header></Header>
      </header>
    </div>
  )
}

export default IndexPage
