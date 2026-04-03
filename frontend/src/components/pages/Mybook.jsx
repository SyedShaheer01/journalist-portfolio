// import PageWrapper from "../components/layout/PageWrapper";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import Container from "../ui/Container";
import { FiExternalLink, FiCalendar } from "react-icons/fi";
import '../../App.css'
import Panic from '../../assets/images/panic book.jpeg'

const MyBooks = () => {

  /**
   * ADMIN CONTROLLED DATA (Mock)
   * Later: GET /api/books
   */
  const books = [
    {
      title: "A Panic Attack On The Subway",
      description:
        "A deep exploration of storytelling techniques across journalism, branding, and creative writing.",
      image:
        Panic,
      publishDate: "2024",
      link: "https://store.pothi.com/book/syed-jaffer-imam-panic-attack-subway/",
    },
    // {
    //   title: "Words That Influence",
    //   description:
    //     "A practical guide to writing persuasive copy that connects and converts.",
    //   image:
    //     "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200",
    //   publishDate: "2023",
    //   link: "https://amazon.com",
    // },
  ];

  return (
    <div>

    {/* // <PageWrapper> */}
    {/* //   <Navbar /> */}

      {/* Header */}
      <section className="py-28 main-heading">
        <Container>
          <div className="max-w-4xl">
            <p className="text-accent uppercase tracking-widest text-xs mb-4">
              My Books
            </p>

            <h1 className="font-heading text-5xl mb-6">
              Published Works & Books
            </h1>

            <p className="text-secondary text-lg leading-relaxed">
              A collection of books that reflect my work in storytelling,
              journalism, and content writing.
            </p>
          </div>
        </Container>
      </section>

      {/* Books Section */}
      <section className="py-24">
        <Container>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {books.map((book, index) => (
              <div
                key={index}
                className="group border border-[oklch(0.85_0.16_89.69)] rounded-2xl overflow-hidden bg-white"
              >

                {/* Book Cover */}
                <div className="overflow-hidden">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">

                  <h2 className="font-heading text-2xl mb-3 font-semibold text-[oklch(0.85_0.16_89.69)]">
                    {book.title}
                  </h2>

                  <p className="text-secondary leading-relaxed mb-6">
                    {book.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2 text-sm text-secondary">
                      <FiCalendar className="text-accent" />
                      <span>{book.publishDate}</span>
                    </div>

                    <a
                      href={book.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-accent text-sm"
                    >
                      View Book
                      <FiExternalLink />
                    </a>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </Container>
      </section>

       {/* <Footer /> */}
     {/* </PageWrapper> */}
    </div>
  );
};

export default MyBooks;