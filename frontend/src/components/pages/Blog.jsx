import { Link } from "react-router-dom";
// import PageWrapper from "../components/layout/PageWrapper";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
// import Container from "../components/ui/Container";
import Container from "../ui/Container";
import '../../App.css'
import React, { useEffect, useState } from 'react'
import axios from "axios"



const Blog = () => {

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
  
  /**
   * Admin controlled data (mock for now)
   * Later: GET /api/blog
   */
  // const blogPosts = [
  //   {
  //     title: "The Evolution of Modern Journalism",
  //     slug: "evolution-of-modern-journalism",
  //     excerpt:
  //       "Exploring how digital platforms have reshaped journalism and audience engagement.",
  //     image:
  //       "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200",
  //   //   category: "Journalism",
  //   //   date: "March 12, 2025",
  //   },
  //   {
  //     title: "The Evolution of Modern Journalism",
  //     slug: "evolution-of-modern-journalism",
  //     excerpt:
  //       "Exploring how digital platforms have reshaped journalism and audience engagement.",
  //     image:
  //       "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200",
  //   //   category: "Journalism",
  //   //   date: "March 12, 2025",
  //   },
  //   {
  //     title: "Why Storytelling Matters in Branding",
  //     slug: "why-storytelling-matters",
  //     excerpt:
  //       "Understanding the psychological power of storytelling in modern brand communication.",
  //     image:
  //       "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",
  //   //   category: "Copywriting",
  //   //   date: "April 02, 2025",
  //   },
  //   {
  //     title: "Why Storytelling Matters in Branding",
  //     slug: "why-storytelling-matters",
  //     excerpt:
  //       "Understanding the psychological power of storytelling in modern brand communication.",
  //     image:
  //       "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",
  //   //   category: "Copywriting",
  //   //   date: "April 02, 2025",
  //   },
  // ];

  return (
    // <PageWrapper>
    //   <Navbar />
    <div>


      {/* Header */}
      <section className="py-28 main-heading">
        <Container>
          <div className="max-w-4xl">
            <p className="text-accent uppercase tracking-widest text-xs mb-4">
              Blog
            </p>
            <h1 className="font-heading text-5xl mb-6">
              Insights, Articles & Reflections
            </h1>
            <p className="text-secondary text-lg leading-relaxed">
              A collection of thoughts on journalism, storytelling, communication,
              and creative writing.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {data.map((post, index) => (
                <article key={index} className="group border border-[oklch(0.85_0.16_89.69)] rounded-[10px] py-5 px-4">
                {/* Image */}
                <div className="overflow-hidden rounded-xl mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                    />
                </div>

                {/* Meta */}
                {/* <p className="text-secondary text-xs uppercase tracking-wider mb-2">
                  {post.category} • {post.date}
                </p> */}

                {/* Title */}
                <h2 className="font-heading text-2xl mb-3">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-secondary leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-accent text-sm tracking-wide border border-[oklch(0.85_0.16_89.69)] px-3 py-2 bg-[oklch(0.85_0.16_89.69)]0
                  rounded-[20px]  transition-colors duration-500
                  hover:bg-[oklch(0.85_0.16_89.69)]"
                  >
                  Read Article →
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

export default Blog;
