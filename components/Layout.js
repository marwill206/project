import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children, logoUrl, socials }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio Marijn Willems</title>
      </Head>

      <Header handleNav={handleNav} menuOpen={menuOpen} logoUrl={logoUrl} />

      <main>{children}</main>

      <Footer socials={socials}></Footer>
    </div>
  );
};

export default Layout;
