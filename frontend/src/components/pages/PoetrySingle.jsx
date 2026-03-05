import { useParams, Link } from "react-router-dom";
// import PageWrapper from "../components/layout/PageWrapper";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import Container from "../ui/Container";

const mockPoems = [
  {
    slug: "echoes-of-silence",
    title: "Echoes of Silence",
    date: "May 2025",
    content: `

In the quiet of forgotten nights,
I hear whispers of distant dreams,
Soft echoes of memories
Flowing like a silent stream.

The world sleeps,
But thoughts remain awake,
Tracing paths through
Every choice we make.

And somewhere in the silence,
Between shadow and light,
A story waits patiently
To be written tonight.

`,
  },
  {
    slug: "fragments-of-time",
    title: "Fragments of Time",
    date: "June 2025",
    content: `

Time scatters moments
Like leaves in the wind,
Some we hold tightly,
Others we rescind.

Memories drift quietly
Through corridors of mind,
Leaving traces of stories
We may never find.

Yet within each fragment
A universe survives,
Living softly inside
The rhythm of our lives.

`,
  },
];

const PoetrySingle = () => {

  const { slug } = useParams();
  const poem = mockPoems.find((p) => p.slug === slug);

  if (!poem) {
    return (
      
        <Container>
          <p className="py-20">Poem not found.</p>
        </Container>
     
    );
  }

  return (
   
    <div>


      <section className="py-24">
        <Container>

          <Link
            to="/poetry"
            className="text-accent text-sm mb-6 inline-block"
          >
            ← Back to Poetry
          </Link>

          <p className="text-secondary text-xs uppercase tracking-wider mb-3">
            {poem.date}
          </p>

          <h1 className="font-heading text-4xl mb-10">
            {poem.title}
          </h1>

          <div className="max-w-2xl text-secondary leading-relaxed whitespace-pre-line text-lg">
            {poem.content}
          </div>

        </Container>
      </section>

  </div>
     
  );
};

export default PoetrySingle;