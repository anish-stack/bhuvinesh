import Home from "@/components/Home";
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Home />
    </>
  );
}
