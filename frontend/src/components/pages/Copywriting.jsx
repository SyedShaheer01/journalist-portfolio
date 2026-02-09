import { Link } from "react-router-dom";
// import PageWrapper from "../components/layout/PageWrapper";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import Container from "../components/ui/Container";
import Container from "../ui/Container";
import CTAImg from '../../assets/images/IMG_0622,JPG-removebg-preview-Picsart-AiImageEnhancer.png'
import CopyImg from '../../assets/images/IMG_0617-removebg-preview-Picsart-AiImageEnhancer.png'

const Copywriting = () => {
  const copyTypes = [
    {
      title: "Advertising Copy",
      description:
        "Persuasive, concise copy for digital and traditional advertising campaigns.",
    },
    {
      title: "Script Writing",
      description:
        "Narrative-driven scripts for video, social media, and branded content.",
    },
    {
      title: "Website Copy",
      description:
        "Clear, conversion-focused website copy that communicates value quickly.",
    },
    {
      title: "Blogs & Articles",
      description:
        "Long-form content designed for engagement, clarity, and authority.",
    },
    {
      title: "Social Media Content",
      description:
        "Short-form content optimized for reach, engagement, and brand voice.",
    },
  ];

  const samples = [
    {
      title: "Brand Awareness Ad Campaign",
      slug: "brand-awareness-ad-campaign",
      type: "Advertising Copy",
      excerpt:
        "A campaign focused on building brand recall through concise messaging and emotional triggers.",
    },
    {
      title: "Product Launch Video Script",
      slug: "product-launch-video-script",
      type: "Script Writing",
      excerpt:
        "A structured script guiding viewers from problem to solution in under 60 seconds.",
    },
    {
      title: "Corporate Website Homepage Copy",
      slug: "corporate-website-homepage-copy",
      type: "Website Copy",
      excerpt:
        "Homepage copy designed to explain services clearly while building trust.",
    },
  ];

  return (
    // <PageWrapper>
    //   <Navbar />
        <div>

      {/* Header */}
      <section className="py-28 main-heading">
        <Container>
          <div className="max-w-4xl">
            <p className="text-accent uppercase tracking-widest text-xs mb-4">
              Copywriting & Content Writing
            </p>
            <h1 className="font-heading text-5xl mb-6">
              Writing That Communicates, Converts & Connects
            </h1>
            <p className="text-secondary text-lg leading-relaxed">
              I work on copywriting and content writing projects that focus on
              clarity, audience understanding, and purposeful communication
              across platforms.
            </p>
          </div>
        </Container>
      </section>

      {/* Copy Types */}
      <section className="py-5">
        <div className="flex justify-center items-center mb-10">
        <img src={CopyImg} alt="writing-img" width={250} height={250} />
        </div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-25 mb-5 ">
            {copyTypes.map((item, index) => (
              <div
                key={index}
                className=""
              >
                <h3 className="font-heading mb-3 custom-gradient text-3xl font-bold">
                  {item.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Samples */}
      <section className="py-24 bg-[oklch(0.36_0.05_171.92)] text-white">
        <Container>
          <div className=" gap-4 mb-12">
            <div className="h-px w-12 bg-accent"></div>
            <h2 className="font-heading text-3xl mb-2 text-[oklch(0.85_0.16_89.69)]">
              Selected Work Samples
            </h2>
            <hr className="copywriting-hr"/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {samples.map((item, index) => (
              <article key={index} className="border border-[oklch(0.85_0.16_89.69)] p-5 rounded-[10px]">
                <p className="text-secondary text-xs uppercase tracking-wider mb-2 ">
                  {item.type}
                </p>
                <h3 className="font-heading text-xl mb-3 text-[oklch(0.85_0.16_89.69)]">
                  {item.title}
                </h3>
                <p className="text-secondary leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Link
                  to={`/copywriting/${item.slug}`}
                  className="text-accent text-sm tracking-wide"

                >
                    <button className="border border-[oklch(0.85_0.16_89.69)] py-2 px-3 rounded-[30px]
                    transition-colors duration-500
                     hover:bg-[oklch(0.85_0.16_89.69)] cursor-pointer">

                  View full sample →
                    </button>
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <Container>
          <div className="flex flex-col justify-center items-center">
            <img className="mb-3" src={CTAImg} alt="CTAIMAGE" width={200} height={200} />
            <h2 className="font-heading text-3xl mb-4">
              Hire Me for Copywriting & Content Writing
            </h2>
            <p className="text-secondary mb-8 leading-relaxed">
              If you’re looking for thoughtful, effective, and audience-focused
              content, feel free to get in touch to discuss your project.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 font-semibold text-[oklch(0.85_0.16_89.69)] text-1xl
              border border-[oklch(0.85_0.16_89.69)] rounded-[10px]    transition-colors duration-500
                     hover:bg-[oklch(0.85_0.16_89.69)] hover:text-white cursor-pointer
              "
            >
              Contact Me
            </Link>
          </div>
        </Container>
      </section>

    </div>
    //   <Footer />
    // </PageWrapper>
  );
};

export default Copywriting;
