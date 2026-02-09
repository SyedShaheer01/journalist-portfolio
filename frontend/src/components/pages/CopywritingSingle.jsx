import { useParams, Link } from "react-router-dom";
// import PageWrapper from "../components/layout/PageWrapper";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import Container from "../components/ui/Container";
import Container from "../ui/Container";

const mockSamples = [
  {
    slug: "brand-awareness-ad-campaign",
    title: "Brand Awareness Ad Campaign",
    type: "Advertising Copy",
    content: `
      This campaign focused on creating emotional resonance while maintaining
      clarity and brevity. The messaging strategy emphasized brand recall and
      audience relatability.
    `,
  },
  {
    slug: "product-launch-video-script",
    title: "Product Launch Video Script",
    type: "Script Writing",
    content: `
      A structured script designed to introduce the product, highlight the
      problem, and present the solution within a concise narrative format.
    `,
  },
  {
    slug: "corporate-website-homepage-copy",
    title: "Corporate Website Homepage Copy",
    type: "Website Copy",
    content: `
      Homepage copy crafted to communicate services clearly, build trust, and
      guide users toward conversion without aggressive sales language.
    `,
  },
];

const CopywritingSingle = () => {
  const { slug } = useParams();
  const sample = mockSamples.find((s) => s.slug === slug);

  if (!sample) {
    return (
    //   <PageWrapper>
        // <Navbar />
        <Container>
          <p className="py-20">Sample not found.</p>
        </Container>
        // <Footer />
    //   </PageWrapper>
    );
  }

  return (
    // <PageWrapper>
    //   <Navbar />

      <section className="py-24 main-heading">
        <Container>
          <Link
            to="/copywriting"
            className="text-accent text-sm mb-6 inline-block border p-3 rounded-[30px]
            transition-colors duration-500
             hover:bg-[oklch(0.85_0.16_89.69)]"
          >
            ← Back to Copywriting
          </Link>

          <p className="text-secondary text-xs uppercase tracking-wider mb-3">
            {sample.type}
          </p>

          <h1 className="font-heading text-4xl mb-10">
            {sample.title}
          </h1>

          <div className="max-w-3xl text-secondary leading-relaxed">
            {sample.content}
          </div>
        </Container>
      </section>

    //   <Footer />
    // </PageWrapper>
  );
};

export default CopywritingSingle;
