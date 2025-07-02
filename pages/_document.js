import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/lz.ico" />
      <title>Chase Inc</title>
      <meta name="description" content="Interior design marketing." />

      {/* OG Tags for WhatsApp / Facebook */}
      <meta property="og:title" content="Interior Design Agency in Lagos" />
      <meta
        property="og:description"
        content="We help interior designers get luxury clients."
      />
      <meta property="og:image" content="https://ik.imagekit.io/juwoncaleb/sloo_db56g1lM-.png?updatedAt=1751419701012" />
      <meta property="og:url" content="http://www.chaseinc.co/" />
      <meta property="og:type" content="website" />

      {/* Twitter card (optional) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Interior Design Agency in Lagos" />
      <meta
        name="twitter:description"
        content="We help interior designers get luxury clients."
      />
      <meta name="twitter:image" content="https://ik.imagekit.io/juwoncaleb/sloo_db56g1lM-.png?updatedAt=1751419701012" />
     
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Della+Respira&family=Italiana&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Italiana&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Della+Respira&family=Italiana&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant:wght@500&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,100;1,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Goudy+Bookletter+1911&family=Ysabeau+Infant:ital,wght@0,1;0,100;0,200;0,300;0,400;0,500;1,1;1,100;1,200;1,300;1,400&display=swap"
        rel="stylesheet"
      ></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
