import { useParams, Link } from "react-router-dom";
// import PageWrapper from "../components/layout/PageWrapper";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import Container from "../components/ui/Container";
import Container from "../ui/Container";

const mockArticles = [
  {
    slug: "breaking-news-headline",
    title: "Breaking News Headline Goes Here",
    publication: "International News Desk",
    date: "Jan 2026",
    content: `
      This is the full article content.
      You can write long-form journalism here.
      Multiple paragraphs will be supported.
    `,
  },
  {
    slug: "long-form-feature-story",
    title: "Long-Form Feature Story Title",
    publication: "Weekly Magazine",
    date: "Dec 2025",
    content: `
      Feature stories allow deeper storytelling,
      narrative structure, and character-driven writing.
    `,
  },
  {
    slug: "investigative-report-title",
    title: "Investigative Report Title",
    publication: "Investigations Unit",
    date: "Nov 2025",
    content: `
      Investigative journalism content focusing
      on accountability and public interest.
    `,
  },
];

const JournalismSingle = () => {
  const { slug } = useParams();
  const article = mockArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
          <p className="py-20">Article not found.</p>
    );
  }

  return (
      <div>

      
      <section className="py-24 main-heading">
          <Container>
          <Link
            to="/journalism"
            className="text-accent text-sm mb-6 inline-block border p-3 rounded-[30px]
            transition-colors duration-500
             hover:bg-[oklch(0.85_0.16_89.69)]
             "
          >
            ← Back to Journalism
          </Link>

          <h1 className="font-heading text-4xl mb-4">
            {article.title}
          </h1>

          <p className="text-secondary text-sm mb-10">
            {article.publication} • {article.date}
          </p>

    </Container>
      </section>

      <Container>
        
          <div className="prose max-w-3xl text-secondary leading-relaxed mt-20">
             <h2 className="font-heading font-bold text-3xl mb-1 text-[oklch(0.85_0.16_89.69)]">
    Full Article:
  </h2>
    <hr className="article-hr mb-10" />
           <p className="bullet"> {article.content}</p>
          </div>
      </Container>
             </div>

  );
};

export default JournalismSingle;
