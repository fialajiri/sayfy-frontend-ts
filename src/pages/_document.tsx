import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="cs">
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="cs_CZ" />
          <meta
            property="og:image"
            content={`${process.env.HOST_URL}/images/og-image.jpg`}
          />
          <meta
            name="keywords"
            content="Sayfyho Memorial, cyklistický závod, Sayfy, Teplice, Město Hrob, kola, cyklistika, závody"
          />
          <meta
            name="description"
            content="Domovská stránka cyklistického závodu Sayfyho Memorial"
          />
          {/* <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
          <div id="drawer-hook"></div>
          <div id="backdrop-hook"></div>
          <div id="modal-hook"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
