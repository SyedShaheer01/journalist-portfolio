import Container from "../ui/Container";
import '../../App.css'
import { Link } from "react-router-dom";
import Jimg from '../../assets/images/IMG_0612,JPG-Picsart-AiImageEnhancer.png'
import Mimg from '../../assets/images/IMG_1459.PNG'
import Bimg from '../../assets/images/IMG_1460.PNG'


const Journalism = () => {
  const data = {
    // news: [
    //   {
    //     title: "Breaking News Headline Goes Here",
    //     slug: "breaking-news-headline",
    //     excerpt:
    //       "A concise but impactful summary highlighting the key facts and context of the news story.",
    //     date: "Jan 2026",
    //     publication: "International News Desk",
    //   },
    // ],
    features: [
      {
        title: "Hindi articles",
        slug: "long-form-feature-story",
        excerpt:
          "Grassroots Stories Highlighting Bihar's Challenges.",
        date: "June 2022-November 2025",
        publication: "Website stories",
        logo: Mimg,
        link:"https://mainmedia.in/author/syed-jaffer-imam/",
      },
    ],
    investigative: [
      {
        title: "English Articles",
        slug: "investigative-report-title",
        excerpt:
          "Interviewed international players and covered the grassroots impact of this historic event in Rajgir, Bihar.",
        date: "September 2025",
        publication: "Covered 2025 Men’s Hockey Asia Cup for ‘The Bridge’ ",
        logo: Bimg,
        link:"https://thebridge.in/syed-jaffer-imam",


      },
    ],
  };

  const Section = ({ label, items, }) => (
  <section className="mb-0 p-5 rounded-[15px] journalism-box">
    {/* Section Header */}
    <div className="mb-10">
      <div className="h-px w-12 bg-accent mb-3"></div>
      <div className="flex items-center justify-between">

      <h2 className="font-heading text-2xl tracking-wide text-[oklch(0.85_0.16_89.69)] font-semibold">
        {label}
      </h2>
      {items.map((item,index)=>{
        return(
          
          <div key={index}>
            <img src={item.logo} alt="logo" width={140} height={140} />
          </div>
        )
        
      })}
      </div>
      
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

          <Link to={item.link} target="_blank">
          <button className="px-8 py-3
      bg-accent text-black
      border border-[oklch(0.85_0.16_89.69)]
      rounded-[20px]
      cursor-pointer
      text-sm
      transition-colors duration-500
      hover:bg-[oklch(0.85_0.16_89.69)]">
            My News Stories →
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

    <div className="flex justify-center items-center mt-8">
      <img src={Jimg} alt="" width={300} height={300} />
    </div>

    {/* Content */}
    <section className="py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Row 1 – Full width */}
          <Section label="MainMedia.in" items={data.features} logo={data.features.logo} />
          <Section label="Thebridge.in" items={data.investigative} />

          {/* Row 2 – Two columns */}
            {/* <Section label="News Articles" items={data.news} />
             <Section label="Investigative Pieces" items={data.investigative} /> */}


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
