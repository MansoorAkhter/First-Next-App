import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1 className="title">
        <Link href="/" style={{
          textDecoration: "none",
          color: "blue"
        }}>Back to home page!</Link>
      </h1>


      {/* <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Mansoor Akhter"
      /> */}

    </Layout>

  )
} 