import Head from 'next/head';
import '../src/assets/css/globals.scss';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

function MyApp({ Component, pageProps, router }) {
  const { route } = router;
  let bodyClassName = '';
  if (route === '/') {
    bodyClassName = 'home-page';
  } else if (route === '/about') {
    bodyClassName = 'about-page';
  } else if (route === '/project/[slug]') {
    bodyClassName = 'project-single-page';
  } 

  return (
    <>
      <Head>
        <title>GRAVITY FINANCE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="page_container" className={`${bodyClassName} overflow-hidden bg-siteBG`}>
        <Header />
        <div className="main_content">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp
