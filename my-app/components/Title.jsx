import Head from "next/head";

export default function Title({ text }) {
  return (
    <Head>
      <title>{text}</title>
    </Head>
  );
}
