import { Helmet } from "react-helmet-async";
import seoConfig from "../../seo.config.js";

export default function SEO() {
  const { meta, openGraph, twitter, structuredData, canonical } = seoConfig;

  return (
    <Helmet>
      {/* Meta básicos */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content={meta.author} />
      <meta name="robots" content={meta.robots} />
      <meta name="viewport" content={meta.viewport} />
      <meta name="googlebot" content={meta.googlebot} />

      {/* Canonical */}
      {canonical.enabled && <link rel="canonical" href={canonical.baseUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content={openGraph.type} />
      <meta property="og:url" content={openGraph.url} />
      <meta property="og:title" content={openGraph.title} />
      <meta property="og:description" content={openGraph.description} />
      <meta property="og:image" content={`https://umayogaproject.com${openGraph.image}`} />
      <meta property="og:site_name" content={openGraph.siteName} />
      <meta property="og:locale" content={openGraph.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitter.card} />
      <meta name="twitter:site" content={twitter.site} />
      <meta name="twitter:creator" content={twitter.creator} />
      <meta name="twitter:title" content={twitter.title} />
      <meta name="twitter:description" content={twitter.description} />
      <meta name="twitter:image" content={`https://umayogaproject.com${twitter.image}`} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          ...structuredData.organization,
        })}
      </script>
    </Helmet>
  );
}
