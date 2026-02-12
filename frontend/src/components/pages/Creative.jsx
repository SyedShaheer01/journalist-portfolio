// import PageWrapper from "../components/layout/PageWrapper";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import Container from "../components/ui/Container";
import Container from "../ui/Container";
import CreativeImg from "../../assets/images/IMG_0620-removebg-preview-Picsart-AiImageEnhancer.png"
import Panjatani from "../../assets/images/PJEP.jpg"
import Kohinoor from "../../assets/images/Kahani Kohinoor logo PNG.png"
import Nawa from "../../assets/images/WhatsApp Image 2026-02-11 at 1.09.13 AM.jpeg"
import Sports from "../../assets/images/WhatsApp Image 2026-02-11 at 1.12.01 AM.jpeg"
import Chappal from "../../assets/images/WhatsApp Image 2026-02-11 at 1.12.24 AM.jpeg"
import Travel from "../../assets/images/WhatsApp Image 2026-02-11 at 1.13.33 AM.jpeg"
import Film from "../../assets/images/WhatsApp Image 2026-02-11 at 1.16.15 AM.jpeg"

const Creative = () => {
  /**
   * ADMIN CONTROLLED DATA (TEMP MOCK)
   * Later this will come from API:
   * GET /api/creative
   */
  const creativeIntro = {
    heading: "Creative Writing & Storytelling",
    description:
      "Beyond journalism and copywriting, I explore creativity through poetry, scripts, and experimental storytelling across different mediums.",
  };

  const creativeCategories = [
    {
      title: "Poetry",
      description:
        "Exploring emotions, identity, and personal reflections through poetry.",
    },
    {
      title: "Scriptwriting",
      description:
        "Narrative-driven scripts for visual storytelling and digital platforms.",
    },
    {
      title: "Experimental Writing",
      description:
        "Short creative pieces exploring form, voice, and unconventional storytelling.",
    },
  ];

  const creativeProjects = [
    {
      title: "Panjatani Kids",
      image: Panjatani,
        link:"https://www.instagram.com/reel/DKmJF8HIMtj/?igsh=MXFkdDNta2x1N2M5bg=",
    },
    {
      title: "Nawa e sukhan",
      image: Nawa,
      link: "https://www.instagram.com/reel/DTiHKKpjHDF/?igsh=c3c5ODY4eXB0OGls",
    },
    {
      title: "Hawai Chppal Films",
      image: Chappal,
      link: "https://www.instagram.com/reel/DRUoymtjCvV/?igsh=bmVyOXl2cHZ6ZTQx",
    },
    {
      title: "Kahani Kohinoor",
      image: Kohinoor,
      link: "https://youtube.com/shorts/JKskF7ufAd8?si=Ia77oXf5FMSdSKwS",
    },
    {
      title: "Being Sports Hindi",
      image: Sports,
      link: "https://youtube.com/shorts/tM8YX3UU_sM?si=s9B4maix2UEQNTgo",
    },
    {
      title: "Travel & Heal",
      image: Travel,
      link: "https://youtu.be/m5ROIE0PSWU?si=fd6pB1yp9ryTK3Xn",
    },
    {
      title: "Short film",
      image: Film,
      link: "https://youtube.com/playlist?list=PLBCu6RmvMcQUDh3mocqJiGKwy21cjOBYk&si=4AQhsfCoqpl7LBJV",
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
              Creative Work
            </p>
            <h1 className="font-heading text-5xl mb-6">
              {creativeIntro.heading}
            </h1>
            <p className="text-secondary text-lg leading-relaxed">
              {creativeIntro.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Creative Categories */}
      <section className="pb-24 pt-5">
        <div className="flex justify-center items-center mb-8">
          <img src={CreativeImg} alt="img" width={250} height={250} />
        </div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {creativeCategories.map((item, index) => (
              <div
                key={index}
                className="border border-[oklch(0.85_0.16_89.69)] rounded-xl p-8 "
              >
                <h3 className="font-heading text-xl mb-4">
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

      {/* Creative Projects (Admin Controlled Cards) */}
      <section className="py-24 bg-[oklch(0.36_0.05_171.92)]">
        <Container>
          <div className=" mb-14">
            {/* <div className="h-px w-12 bg-accent"></div> */}
          <h2 className="font-heading text-2xl sm:text-3xl mb-2 font-semibold text-[oklch(0.85_0.16_89.69)]">
            Selected Creative Projects
          </h2>

             <hr className="creative-hr"/>
          </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {creativeProjects.map((item, index) => (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-2xl text-white border border-[oklch(0.85_0.16_89.69)] bg-[oklch(0.36_0.05_171.92)] hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl mb-3 group-hover:text-[oklch(0.85_0.16_89.69)] transition">
          {item.title}
        </h3>
        <p className="text-secondary leading-relaxed text-sm">
          {item.description}
        </p>
      </div>
    </a>
  ))}
</div>

        </Container>
      </section>

    </div>
    //   <Footer />
    // </PageWrapper>
  );
};

export default Creative;
