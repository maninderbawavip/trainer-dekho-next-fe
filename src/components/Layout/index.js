/**
 * Common Layout
 */
import React from "react";
import Head from "next/head";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Layout = ({
  store,
  title,
  Icon,
  metaDescription,
  OGTitle,
  OGDescription,
  OGImage,
  children,
}) => {

  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={OGTitle || title} />
        <meta
          property="og:description"
          content={OGDescription || metaDescription}
        />
        {/* <meta
          property="og:image"
          content={OGImage || Icon}
        /> */}
        <link rel="canonical" href={store?.store_info?.store_url} />
        {/* <link
          rel="icon"
          href={Icon || `https://dotpe.s3.ap-south-1.amazonaws.com/kiranaStatic/image/default-ssr-icon-22092020.png`}
        /> */}

        {/* <link
          rel="manifest"
          href={`data:application/json;base64,${Buffer.from(
            JSON.stringify(manifest)
          ).toString("base64")}`}
        /> */}
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
