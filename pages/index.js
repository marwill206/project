import React from 'react';
import client from '@/lib/contentful';
import Layout from "../components/Layout"
import Script from 'next/script';

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: 'portfoliomarijnWillems' });
  return {
    props: {
      items: res.items,
    },
  };
}

const Home = ({ items }) => {
  if (!Array.isArray(items)) {
    return <div>No items found</div>;
  }
  // console.log(items);
  return (
    <Layout>
    <div className="mt-80 mb-80">
      <h1>Hello, Next.js!</h1>
      <ul>
        {items.map((item) => (
          <li className="bg-header mb-80 mt-80" key={item.sys.id}>{item.fields.vNaam}</li>
        ))}
      </ul>
    </div>
    </Layout>
  );
};

export default Home;