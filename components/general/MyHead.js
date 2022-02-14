import Head from 'next/head';

export default function MyHead({title}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:title" content={title}/>
      <meta name="og:title" content={title}/>
    </Head>
  )
}