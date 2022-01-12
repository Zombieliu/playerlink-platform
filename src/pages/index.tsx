import type { NextPage } from 'next';
import Head from 'next/head';
import Home from "./home";
import Count from "./count";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PlayerLink-Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
          <Home></Home>
          {/*<Count></Count>*/}
      </header>
    </div>
  )
}

export default IndexPage
