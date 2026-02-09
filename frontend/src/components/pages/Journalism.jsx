// import PageWrapper from "../layout/PageWrapper";
// import Navbar from "../layout/Navbar";
// import Footer from "../layout/Footer";
import Container from "../ui/Container";
import '../../App.css'
import { Link } from "react-router-dom";

const Journalism = () => {
  const data = {
    news: [
      {
        title: "Breaking News Headline Goes Here",
        slug: "breaking-news-headline",
        excerpt:
          "A concise but impactful summary highlighting the key facts and context of the news story.",
        date: "Jan 2026",
        publication: "International News Desk",
      },
    ],
    features: [
      {
        title: "Long-Form Feature Story Title",
        slug: "long-form-feature-story",
        excerpt:
          "A narrative-driven feature story that explores people, issues, and deeper context.",
        date: "Dec 2025",
        publication: "Weekly Magazine",
      },
    ],
    investigative: [
      {
        title: "Investigative Report Title",
        slug: "investigative-report-title",
        excerpt:
          "An investigative piece focused on accountability, evidence, and public interest journalism.",
        date: "Nov 2025",
        publication: "Investigations Unit",
      },
    ],
  };

  const Section = ({ label, items }) => (
  <section className="mb-0 p-5 rounded-[15px] journalism-box">
    {/* Section Header */}
    <div className="mb-10">
      <div className="h-px w-12 bg-accent mb-3"></div>
      <h2 className="font-heading text-2xl tracking-wide text-[oklch(0.85_0.16_89.69)] font-semibold">
        {label}
      </h2>
    </div>

    {/* Articles Grid */}
    <div className="space-y-10">
      {items.map((item, index) => (
        <article key={index}>
          <p className="text-secondary text-xs uppercase mb-2">
            {item.publication} • {item.date}
          </p>

          <h3 className="font-heading text-xl leading-snug mb-3">
            {item.title}
          </h3>

          <p className="text-secondary leading-relaxed mb-4">
            {item.excerpt}
          </p>

          <Link to={`/journalism/${item.slug}`}>
          <button className="px-8 py-3
      bg-accent text-black
      border border-[oklch(0.85_0.16_89.69)]
      rounded-[20px]
      cursor-pointer
      text-sm
      transition-colors duration-500
      hover:bg-[oklch(0.85_0.16_89.69)]">
            Read full story →
          </button>
        </Link>
        </article>
      ))}
    </div>
  </section>
);


  return (
  <div>
    {/* Page Header */}
    <section className="py-28 main-heading">
      <Container>
        <div className="max-w-4xl">
          <p className="text-accent uppercase tracking-widest text-xs mb-4">
            Journalism Portfolio
          </p>
          <h1 className="font-heading text-5xl leading-tight mb-6">
            Reporting, Features & Investigations
          </h1>
          <p className="text-secondary text-lg leading-relaxed">
            A curated selection of my journalism work covering news reporting,
            in-depth features, and investigative stories.
          </p>
        </div>
      </Container>
    </section>

    {/* Content */}
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Row 1 – Full width */}
          <Section label="Feature Stories" items={data.features} />
          <Section label="Investigative Pieces" items={data.investigative} />

          {/* Row 2 – Two columns */}
            <Section label="News Articles" items={data.news} />
             <Section label="Investigative Pieces" items={data.investigative} />


        </div>
      </Container>
    </section>
  </div>
);

};

export default Journalism;







// px-8 py-3
//       bg-accent text-black
//       border border-[oklch(0.85_0.16_89.69)]
//       rounded-[20px]
//       cursor-pointer
//       text-sm
//       transition-colors duration-500
//       hover:bg-[oklch(0.85_0.16_89.69)]


//  text-[oklch(0.85_0.16_89.69)]
