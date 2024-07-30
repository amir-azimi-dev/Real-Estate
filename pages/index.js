import Head from "next/head";
import Features from "@/components/templates/index/Features";
import Story from "@/components/templates/index/Story";
import Houses from "@/components/templates/index/Houses";
import Gallery from "@/components/templates/index/Gallery";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="author" content="Amir Azimi" />
        <meta name="description" content="A NextJS practice application." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Features />
      <Story />
      <Houses />
      <Gallery />
    </>
  );
}
