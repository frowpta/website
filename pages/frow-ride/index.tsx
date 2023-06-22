import Head from "next/head";
import Layout from "../../components/layout";
import { GetStaticProps, GetStaticPaths } from "next";
import { getContent } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import Date from '../../components/date'

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
    <Layout>
      <Head>
        <title>The Frow Ride</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{pageData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={pageData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </article>
    </Layout>
  );
}
