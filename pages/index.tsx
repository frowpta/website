import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Date from "../components/date";

export type PostData = {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
  author?: string;
};

type HomeProps = {
  allPostsData: PostData[];
}

export default function Home(props: HomeProps) {
  const { allPostsData } = props;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Check out our next event: <a href="/frow-ride">The Frow Ride</a>, on
          September 14th, 2025.
        </p>
        <a href="/frow-ride" className={utilStyles.posterLink}>
          <img
            src="/images/illustration-black.png"
            className={utilStyles.posterImg}
          />
        </a>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
