import { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import { getContent } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageData = await getContent("pages/frow-ride");
  return {
    props: {
      pageData,
    },
  };
};

export default function FrowRide({
  pageData,
}: {
  pageData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout skipHeader>
      <Head>
        <title>The Frow Ride</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </article>
    </Layout>
  );
}
