import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Welcome } from '@/components/Welcome/Welcome';


function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript)</title>
      </Head>
      <div>
        <Welcome />
        
        <Link href="/next">
          Go to next page
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Home;