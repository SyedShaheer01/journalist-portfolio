import Container from "../ui/Container";
import myImage from '../../assets/images/IMG_0610-removebg-preview-Picsart-AiImageEnhancer.png'
import aboutImg from '../../assets/images/IMG_0615,JPG.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import '../../App.css'



const Home = () => {
  return (
    <div>

    <section className="py-20 bg-[oklch(0.21_0.02_202.83)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Text Content */}
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-white">
              Syed <span className="text-[oklch(0.85_0.16_89.69)]">Jaffer Imam </span>
            </h1>

            {/* <p className="mt-4 text-white text-lg">
              Journalist | Copywriter | Storyteller | Content Creator
            </p> */}

            <p className="mt-6 max-w-xl text-white leading-relaxed">
              I am a journalist and writer with experience in news reporting,
              long-form features, copywriting, and creative storytelling, 
              focused on impact, and growth.
            </p>

          <div className="mt-8 flex gap-4">
  <button
    className="
      px-8 py-3
      bg-accent text-white
      border border-[oklch(0.85_0.16_89.69)]
      rounded-[5px]
      cursor-pointer
      text-sm
      transition-colors duration-300
      hover:bg-[oklch(0.85_0.16_89.69)]
    "
  >
    View My Work
  </button>

              <button className="
              transition-colors duration-300
           hover:bg-[oklch(0.71_0.15_88.14)]
              px-8 py-3 text-sm cursor-pointer text-white rounded-[5px] bg-[oklch(0.85_0.16_89.69)]">
                Contact Me
              </button>
            </div>

           <div className="flex gap-3 mt-6">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[oklch(0.85_0.16_89.69)] text-white hover:scale-105 transition cursor-pointer">
          <FaFacebookF />
        </div>

        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[oklch(0.85_0.16_89.69)] text-white hover:scale-105 transition cursor-pointer">
          <FaXTwitter />
        </div>

        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[oklch(0.85_0.16_89.69)] text-white hover:scale-105 transition cursor-pointer">
          <FaInstagram />
        </div>

        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[oklch(0.85_0.16_89.69)] text-white hover:scale-105 transition cursor-pointer">
          <FaYoutube />
        </div>

        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[oklch(0.85_0.16_89.69)] text-white hover:scale-105 transition cursor-pointer">
          <FaLinkedinIn />
        </div>
      </div>

          </div>

          {/* Visual Area */}
          <div className="flex items-center justify-center">
            <img src={myImage} alt="img" className="hero-img" />  
          </div>

        </div>
      </Container>
    </section>


  <section className="py-20 ">
      <Container>
       <div className="about-container">
        <div className="about-img">

            <img src={aboutImg} alt="img" width={400} height={400} />  
        </div>

        <div className="max-w-3xl about-text">
         <div className="mt-8 sm:mt-12 mb-5">
  <h2 className="font-heading font-bold text-3xl mb-1 text-[oklch(0.85_0.16_89.69)]">
    About Me
  </h2>
    <hr className="about-hr" />

</div>


          <p className="text-secondary leading-relaxed mb-4 about-info">
            I have over 4 years of experience in journalism and creative storytelling.
             My work focuses on reporting rural issues, sports, and historical sites,
              while creating clear, engaging content for digital platforms.
          </p>
          
          <p className="text-secondary leading-relaxed mb-4 about-info">
           Alongside journalism, I also work on direct response copywriting,
            video scripts, poetry, and short films.
          </p>

          {/* <p className="text-secondary leading-relaxed about-info">
            Beyond journalism, I explore creative writing, poetry, and scripts,
            allowing <br /> me to approach stories with both structure and imagination.
          </p> */}
        </div>
                  </div>

      </Container>
    </section>
    </div>
  );
};

export default Home;
