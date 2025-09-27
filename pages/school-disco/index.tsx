import { GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import { getContent } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageData = await getContent("pages/school-disco");
  return {
    props: {
      pageData,
    },
  };
};

export default function SchoolDisco({
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
        <title>School Disco</title>
        <meta
          key="description"
          name="description"
          content="The Frow PTA School Disco"
        />
        <meta
          key="og:image"
          property="og:image:secure_url"
          itemProp="image"
          content="https://frowpta.co.uk/images/disco-poster-october-2025.jpeg"
        />
        <meta key="og:title" name="og:title" content="School Disco" />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />

        <h2>✅ Step 1: Register Your Child</h2>

        <p>Let us know who’s coming and share any dietary needs.</p>

        <p><strong>Parents/carers, please fill out this quick form:</strong></p>

        <a href="https://forms.gle/F4azwEt8Y83aebc5A" className={utilStyles.cta}>👉 Register for the Disco 📝</a>

        <h2>💳 Step 2: Buy Your Tickets</h2>

        <p>Secure your child’s spot at the disco by purchasing tickets online.</p>

        <p><strong>Tickets are £5 and include food and drink!</strong></p>

        <a href="https://forest-row-primary-school-pta.sumupstore.com/product/school-disco" className={utilStyles.cta}>👉 Buy Tickets Now 🎟️</a>

        
      </article>
    </Layout>
  );
}