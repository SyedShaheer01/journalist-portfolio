import { Link } from "react-router-dom";
// import PageWrapper from "../components/layout/PageWrapper";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import Container from "../ui/Container";
const Poetry = () => {

  /**
   * ADMIN CONTROLLED DATA (Mock)
   * Later API: GET /api/poetry
   */
  const poems = [
    {
      title: "Echoes of Silence",
      slug: "echoes-of-silence",
      excerpt:
        "A reflection on solitude and the quiet conversations we have with ourselves.",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200",
      date: "May 2025",
    },
    {
      title: "Fragments of Time",
      slug: "fragments-of-time",
      excerpt:
        "A poetic exploration of memories scattered across moments in life.",
      image:
        "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1200",
      date: "June 2025",
    },
  ];

  return (
    // <PageWrapper>
    //   <Navbar />
    <div>


      {/* Header */}
      <section className="py-28 bg-gray-50 border-b">
        <Container>
          <div className="max-w-4xl">
            <p className="text-accent uppercase tracking-widest text-xs mb-4">
              Poetry
            </p>

            <h1 className="font-heading text-5xl mb-6">
              Words, Emotions & Reflection
            </h1>

            <p className="text-secondary text-lg leading-relaxed">
              A collection of personal poetry exploring themes of identity,
              memory, solitude, and human emotion.
            </p>
          </div>
        </Container>
      </section>

      {/* Poetry Grid */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {poems.map((poem, index) => (
              <article key={index}>

                {/* Image */}
                <div className="overflow-hidden rounded-xl mb-6">
                  <img
                    src={poem.image}
                    alt={poem.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                <p className="text-secondary text-xs uppercase tracking-wider mb-2">
                  {poem.date}
                </p>

                <h2 className="font-heading text-2xl mb-3">
                  {poem.title}
                </h2>

                <p className="text-secondary leading-relaxed mb-4">
                  {poem.excerpt}
                </p>

                <Link
                  to={`/poetry/${poem.slug}`}
                  className="text-accent text-sm tracking-wide"
                >
                  Read Poem →
                </Link>

              </article>
            ))}
          </div>
        </Container>
      </section>
      </div>

    //   <Footer />
    // </PageWrapper>
  );
};

export default Poetry;