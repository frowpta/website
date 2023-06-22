import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Forest Row Primary PTA";
export const siteTitle = "Forest Row Primary PTA Website";

export default function Layout({
  children,
  home,
  skipHeader,
}: {
  children: React.ReactNode;
  home?: boolean;
  skipHeader?: boolean;
}) {
  const includeHeader = !skipHeader;
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          key="description"
          name="description"
          content="The online home for PTA of Forest Row Primary School"
        />
        <meta
          key="og:image"
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px`}
        />
        <meta key="og:title" name="og:title" content={siteTitle} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      </Head>
      {includeHeader && (
        <header className={styles.header}>
          {home ? (
            <>
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : (
            <>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  {name}
                </Link>
              </h2>
            </>
          )}
        </header>
      )}
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
