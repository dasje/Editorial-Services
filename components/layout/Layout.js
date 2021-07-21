/* eslint-disable react/prop-types */
import React from 'react'

import Header from './Header'
import Footer from './Footer'
import facebookImg from '/public/images/logo.png'

import Head from 'next/head'

const Layout = ({ children, title, description, ogImage, url }) => {
  // website Url
  const pageUrl =
    "/";
  // image that will show on facebook
  const ogImg = {facebookImg};
  return (
    <>
      <Head>
        <title>
          {title
            ? title
            : "Alex Griffith's Editorial Services"}
        </title>
        <meta
          name="Alex Griffiths"
          key="Editorial and Writing Services"
          content={
            description
              ? description
              : "Showcase and contact methods for Alex Griffiths and his editorial services"
          }
        />
        <meta
          property="og:title"
          content={
            title
              ? title
              : "Editorial Services"
          }
          key="og:title"
        />
        <meta property="og:url" content={url ? url : pageUrl} key="og:url" />
        <meta
          property="og:image"
          content={ogImage ? ogImage : ogImg}
          key="og:image"
        />
        <meta
          property="og:description"
          content={
            description
              ? description
              : "Editorial services."
          }
          key="og:description"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <style jsx global>
        {`
          html,
          body {
            background: #f9f9f9;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
