import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Loja de brinquedos de madeira artesanal, construídos com o propósito de 
          levar a alegria para as nossas crianças com brinquedos que possuem segurança, 
          qualidade e durabilidade."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
