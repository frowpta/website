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
        <meta
          key="description"
          name="description"
          content="Kids ride The Forest Way together"
        />
        <meta
          key="og:image"
          property="og:image:secure_url"
          itemProp="image"
          content="https://frowpta.co.uk/images/Childrens-Cycle-Event.png"
        />
        <meta key="og:title" name="og:title" content="The Frow Ride" />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </article>
    </Layout>
  );
}
