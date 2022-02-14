import Document, {Head, Html, Main, NextScript} from 'next/document'
import seoConfig from '../config/seo.json';


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="de-DE">
        <Head>
          <meta name="robots" content={"max-image-preview:" + seoConfig.maxImagePreview}/>
          <link rel="apple-touch-icon" sizes="57x57" href={seoConfig.iconDirectory + "/apple-icon-57x57.png"}/>
          <link rel="apple-touch-icon" sizes="60x60" href={seoConfig.iconDirectory + "/apple-icon-60x60.png"}/>
          <link rel="apple-touch-icon" sizes="72x72" href={seoConfig.iconDirectory + "/apple-icon-72x72.png"}/>
          <link rel="apple-touch-icon" sizes="76x76" href={seoConfig.iconDirectory + "/apple-icon-76x76.png"}/>
          <link rel="apple-touch-icon" sizes="114x114" href={seoConfig.iconDirectory + "/apple-icon-114x114.png"}/>
          <link rel="apple-touch-icon" sizes="120x120" href={seoConfig.iconDirectory + "/apple-icon-120x120.png"}/>
          <link rel="apple-touch-icon" sizes="144x144" href={seoConfig.iconDirectory + "/apple-icon-144x144.png"}/>
          <link rel="apple-touch-icon" sizes="152x152" href={seoConfig.iconDirectory + "/apple-icon-152x152.png"}/>
          <link rel="apple-touch-icon" sizes="180x180" href={seoConfig.iconDirectory + "/apple-icon-180x180.png"}/>
          <link rel="icon" sizes="16x16" href={seoConfig.iconDirectory + "/favicon-16x16.png"}/>
          <link rel="icon" sizes="32x32" href={seoConfig.iconDirectory + "/favicon-32x32.png"}/>
          <link rel="icon" sizes="96x96" href={seoConfig.iconDirectory + "/favicon-96x96.png"}/>
          <link rel="manifest" href={seoConfig.iconDirectory + "/site.webmanifest"}/>
          <link rel="mask-icon" href={seoConfig.iconDirectory + "/safari-pinned-tab.svg"} color={seoConfig.themeColor}/>
          <meta name="msapplication-TileColor" content={seoConfig.themeColor}/>
          <meta name="theme-color" content={seoConfig.themeColor}/>
          <meta name="description" content={seoConfig.description}/>
          <meta name="image" content={seoConfig.image}/>
          <meta property="og:image" content={seoConfig.image}/>
          <meta property="og:description" content={seoConfig.description}/>
          <meta property="og:site_name" content="Noah Gels"/>
          <meta property="og:locale" content="de_DE"/>
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
