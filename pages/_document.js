import Document, {Head, Html, Main, NextScript} from 'next/document'
import seoConfig from '../config/seo.json';


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="de-DE">
        <Head>
          <meta name="robots" content={"max-image-preview:" + seoConfig.maxImagePreview}/>
          <link rel="apple-touch-icon" sizes="120x120" href={seoConfig.iconDirectory + "/apple-touch-icon.png"}/>
          <link rel="icon" sizes="16x16" href={seoConfig.iconDirectory + "/favicon-16x16.ico"}/>
          <link rel="icon" sizes="32x32" href={seoConfig.iconDirectory + "/favicon-32x32.ico"}/>
          <link rel="icon" sizes="96x96" href={seoConfig.iconDirectory + "/favicon-96x96.ico"}/>
          <link rel="manifest" href={seoConfig.iconDirectory + "/site.webmanifest"}/>
          <link rel="mask-icon" href={seoConfig.iconDirectory + "/safari-pinned-tab.svg"} color={seoConfig.themeColor}/>
          <meta name="msapplication-TileColor" content={seoConfig.themeColor}/>
          <meta name="theme-color" content={seoConfig.themeColor}/>
          <meta name="description" content={seoConfig.description}/>
          <meta name="image" content={seoConfig.image}/>
          <meta property="og:image" content={seoConfig.image}/>
          <meta property="og:description" content={seoConfig.description}/>
          <meta name="twitter:title" content=""/>
          <meta name="twitter:description" content={seoConfig.description}/>
          <meta name="twitter:image" content={seoConfig.image}/>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
