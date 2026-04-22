import Container from "../ui/Container";
import '../../App.css'
import { Link } from "react-router-dom";
import Jimg from '../../assets/images/IMG_0612,JPG-Picsart-AiImageEnhancer.png'
import axios from "axios"
import React, { useEffect, useState } from 'react'

const Journalism = () => {

  const [data, setData] = useState([]);
  const [groupedData, setGroupedData] = useState({});



  // ✅ Fetch API
  useEffect(() => {
    axios.get("http://localhost:8000/api/journalism/list")
      .then(res => {
        const apiData = res.data.data;

        setData(apiData);

        // ✅ GROUP BY LABEL (IMPORTANT)
        const grouped = apiData.reduce((acc, item) => {
          const key = item.label || "Other"; // fallback

          if (!acc[key]) {
            acc[key] = [];
          }

          acc[key].push(item);
          return acc;
        }, {});

        setGroupedData(grouped);
      })
      .catch(err => console.log(err))
  }, [])

  // ✅ Section Component
  const Section = ({ label, items }) => (
    <section className="mb-0 p-5 rounded-[15px] journalism-box">

      {/* Header */}
      <div className="mb-10">
        <div className="h-px w-12 bg-accent mb-3"></div>

        <div className="flex items-center justify-between">
          <h2 className="font-heading text-2xl text-[oklch(0.85_0.16_89.69)] font-semibold">
            {label} {/* ✅ Label from API */}
          </h2>

          {/* ✅ Logo (first item ka) */}
          {items[0]?.logo && (
            <img src={items[0].logo} alt="logo" width={120} />
          )}
        </div>
      </div>

      {/* Articles */}
      <div className="space-y-10">
        {items.map((item, index) => (
          <article key={index}>
            <p className="text-secondary text-xs uppercase mb-2">
              {item.publication} • {item.date}
            </p>

            <h3 className="font-heading text-xl mb-3">
              {item.title}
            </h3>

            <p className="text-secondary mb-4">
              {item.excerpt}
            </p>

            <Link to={item.link} target="_blank">
              <button className="px-6 py-2 bg-accent text-black rounded-[20px] border 
                transition-colors duration-500
                hover:bg-[oklch(0.85_0.16_89.69)] border-[oklch(0.85_0.16_89.69)] cursor-pointer ">
                Read Article →
              </button>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );

  return (
    <div>

      {/* Header */}
      <section className="py-28 main-heading">
        <Container>
          <div className="max-w-4xl">
            <p className="text-accent uppercase text-xs mb-4">
              Journalism Portfolio
            </p>
            <h1 className="font-heading text-5xl mb-6">
              Reporting, Features & Investigations
            </h1>
            <p className="text-secondary text-lg">
              A curated selection of my journalism work.
            </p>
          </div>
        </Container>
      </section>

      {/* Image */}
      <div className="flex justify-center mt-8">
        <img src={Jimg} alt="" width={300} />
      </div>

      {/* ✅ Dynamic Sections */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

            {Object.entries(groupedData).map(([label, items], index) => (
              <Section key={index} label={label} items={items} />
            ))}

          </div>
        </Container>
      </section>

    </div>
  );
};

export default Journalism;