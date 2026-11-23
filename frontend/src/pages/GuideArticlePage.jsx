import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getGuide, guides } from "../data/guides";
import { BUSINESS_REF, SITE_URL } from "../data/business";
import AdSlot from "../components/AdSlot";
import NotFoundPage from "./NotFoundPage";

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

// Internal links inside guide text are written as plain sentences; the
// "related" list at the end carries the actual links. "img" blocks must use
// the business's own project photos (public/images/...).
const Block = ({ block }) => {
  switch (block.type) {
    case "h2":
      return <h2 className="text-2xl font-bold font-serif text-[#0F3D3E] mt-10 mb-4">{block.text}</h2>;
    case "h3":
      return <h3 className="text-lg font-bold text-[#0F3D3E] mt-6 mb-2">{block.text}</h3>;
    case "ul":
      return (
        <ul className="list-disc pl-6 space-y-2 my-4">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal pl-6 space-y-2 my-4">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      );
    case "img":
      return (
        <figure className="my-8">
          <img src={block.src} alt={block.alt} loading="lazy" className="w-full rounded-xl object-cover" />
          {block.caption && <figcaption className="text-xs text-stone-500 mt-2 text-center">{block.caption}</figcaption>}
        </figure>
      );
    case "tip":
      return (
        <aside className="my-6 border-l-4 border-[#C8A35F] bg-[#F8F5F0] px-5 py-4 rounded-r-lg">
          <p className="text-sm"><strong className="text-[#0F3D3E]">Tip: </strong>{block.text}</p>
        </aside>
      );
    default:
      return <p className="my-4">{block.text}</p>;
  }
};

const GuideArticlePage = () => {
  const { slug } = useParams();
  const guide = getGuide(slug);

  if (!guide) {
    return <NotFoundPage />;
  }

  const pageUrl = `${SITE_URL}/guides/${guide.slug}`;
  const imageUrl = `${SITE_URL}${guide.image}`;
  const title = `${guide.title} | Denova Creations`;

  // In-article ad goes after the second section heading, so it sits inside
  // the content rather than at the very top.
  const h2Indexes = guide.body.reduce((acc, b, i) => (b.type === "h2" ? [...acc, i] : acc), []);
  const adBeforeIndex = h2Indexes[1] ?? -1;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      image: imageUrl,
      datePublished: guide.published,
      dateModified: guide.updated,
      author: { "@type": "Organization", name: "Denova Creations", url: `${SITE_URL}/` },
      publisher: BUSINESS_REF,
      mainEntityOfPage: pageUrl,
    },
    guide.faqs?.length && {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ].filter(Boolean);

  const more = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <div className="bg-[#FAF8F5]">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={guide.description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={guide.description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={guide.description} />
        <meta name="twitter:image" content={imageUrl} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <article className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <nav className="text-xs text-stone-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:underline">Home</Link> /{" "}
          <Link to="/guides" className="hover:underline">Guides</Link> /{" "}
          <span>{guide.category}</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-[#0F3D3E] leading-tight mb-4">
            {guide.title}
          </h1>
          <p className="text-sm text-stone-500">
            By the Denova Creations design team · Updated {formatDate(guide.updated)} · {guide.readMinutes} min read
          </p>
        </header>

        <img
          src={guide.image}
          alt={guide.imageAlt}
          className="w-full rounded-xl mb-8 object-cover aspect-[16/9]"
        />

        <div className="text-stone-700 leading-relaxed text-[17px]">
          {guide.body.map((block, i) => (
            <React.Fragment key={i}>
              {i === adBeforeIndex && <AdSlot key={`${guide.slug}-inarticle`} unit="inArticle" className="my-8" />}
              <Block block={block} />
            </React.Fragment>
          ))}
        </div>

        {guide.faqs?.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold font-serif text-[#0F3D3E] mb-4">Frequently asked questions</h2>
            <div className="space-y-5">
              {guide.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-bold text-[#0F3D3E] mb-1">{f.q}</h3>
                  <p className="text-stone-700">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {guide.related?.length > 0 && (
          <section className="mt-12 bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0F3D3E] mb-3">Related</h2>
            <ul className="space-y-2">
              {guide.related.map((r) => (
                <li key={r.to}>
                  <Link to={r.to} className="text-[#0F3D3E] underline hover:text-[#C8A35F]">{r.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {more.length > 0 && (
        <section className="border-t border-stone-200 py-12">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl font-bold font-serif text-[#0F3D3E] mb-4">More guides</h2>
            <ul className="space-y-3">
              {more.map((g) => (
                <li key={g.slug}>
                  <Link to={`/guides/${g.slug}`} className="text-[#0F3D3E] font-semibold hover:underline">{g.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};

export default GuideArticlePage;
