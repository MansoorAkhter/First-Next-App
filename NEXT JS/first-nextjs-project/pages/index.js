import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am <b>Mansoor Akhter</b>. I am a software engineer and animator you can contact me on 
        <a href="https://google.com">Facebook</a></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
         <Link href="/posts/first-post" style={{
          textDecoration: "none",
          color: "grey"
        }}>Next</Link>
      </section>
    </Layout>
  );
}