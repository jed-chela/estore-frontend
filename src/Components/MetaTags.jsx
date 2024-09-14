import React from 'react';
import Helmet from 'react-helmet';

const MetaTags = ({ title, description, keywords, image, url, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || title} />
      <meta name="twitter:description" content={twitterDescription || description} />
      <meta name="twitter:image" content={twitterImage || image} />
    </Helmet>
  );
};

export default MetaTags;