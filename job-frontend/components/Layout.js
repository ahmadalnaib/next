import Head from 'next/head';
import stytes from '../styles/Layout.module.css'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <div className={stytes.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Dundung | Job Platform | Find the best job',
  description: 'Dundung Find the latest Jobs offer in germany',
  keywords: 'job,germany',
};