import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/spe1skb.css" />
        <link rel="preload" href="/Mockhand.ttf" as="font" crossOrigin="" />
        <link
            rel="preload"
            href="/MuseoSans_500.otf"
            as="font"
            crossOrigin=""
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}