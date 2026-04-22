import { useParams, Link } from "react-router-dom";
import Container from "../ui/Container";
import '../../App.css'
import React, { useEffect, useState } from 'react'
import axios from "axios"



// const mockPosts = [
//   {
//     slug: "evolution-of-modern-journalism",
//     title: "The Evolution of Modern Journalism",
//     // category: "Journalism",
//     // date: "March 12, 2025",
//     content: `
//       Modern journalism has undergone significant transformation due to
//       technological advancements. Digital platforms have shifted the way
//       audiences consume information.

//       Today, speed and accuracy must coexist. Journalists are required to
//       balance real-time reporting with responsible verification.

//       The future of journalism lies in adaptability and audience trust.
//     `,
//   },
//   {
//     slug: "why-storytelling-matters",
//     title: "Why Storytelling Matters in Branding",
//     // category: "Copywriting",
//     // date: "April 02, 2025",
//     content: `
//       Storytelling creates emotional connection between brands and audiences.
//       It allows businesses to communicate values, not just services.

//       In a saturated digital environment, narratives differentiate brands.
//       Strong stories build loyalty and long-term recognition.
//     `,
//   },
// ];

const BlogSingle = () => {

  const [data, setData] = useState([]);


     // ✅ Fetch API
  useEffect(() => {
    axios.get("http://localhost:8000/api/blog/list")
      .then(res => {
        const apiData = res.data.data;

        setData(apiData);

      })
      .catch(err => console.log(err))
  }, [])

  const { slug } = useParams();
  const post = data.find((p) => p.slug === slug);

  if (!post) {
    return (
    //   <PageWrapper>
        // <Navbar />
        <Container>
          <p className="py-20">Article not found.</p>
        </Container>
        // <Footer />
    //   </PageWrapper>
    );
  }

  return (
    // <PageWrapper>
    //   <Navbar />
    <div>


      <section className="py-24 main-heading">
        <Container>
          <Link
            to="/blog"
            className="text-accent text-sm mb-6 inline-block border px-3 py-2 rounded-[30px]
            transition-colors duration-500
             hover:bg-[oklch(0.85_0.16_89.69)]"
            >
            ← Back to Blog
          </Link>
{/* 
          <p className="text-secondary text-xs uppercase tracking-wider mb-3">
            {post.category} • {post.date}
          </p> */}

          <h1 className="font-heading text-4xl mb-10">
            {post.title}
          </h1>

        </Container>
      </section>
     <Container>
  <div
    className="
      w-full
      bg-white/5
      backdrop-blur-md
      border border-white/10
      rounded-xl
      px-6 md:px-12
      py-8 md:py-12
      shadow-md
      text-secondary
      text-[17px] md:text-[18px]
      leading-[1.9]
      tracking-wide
      transition-all duration-500
      hover:shadow-xl
      mt-10
    "
  >
    {post.content}
  </div>
</Container>


    </div>
    //   <Footer />
    // </PageWrapper>
  );
};

export default BlogSingle;
