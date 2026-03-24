// import PageWrapper from "../components/layout/PageWrapper";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";
import Container from "../ui/Container";
import { useState } from "react";
import '../../App.css'
import { FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {

  /**
   * FORM STATE
   */
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", form);

    // Later:
    // POST /api/contact

    alert("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
      <div>
    {/* // <PageWrapper> */}
      {/* <Navbar /> */}

      {/* Header */}
      <section className="py-28 main-heading">
        <Container>
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-widest text-xs mb-4">
              Contact
            </p>

            <h1 className="font-heading text-5xl mb-6">
              Let’s Work Together
            </h1>

            <p className="text-secondary text-lg leading-relaxed">
              Whether you have a project, collaboration, or inquiry,
              feel free to reach out. I’ll get back to you as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <Container>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

            {/* LEFT SIDE – INFO */}
            <div>
              <h2 className="font-heading font-bold text-2xl mb-6  text-[oklch(0.85_0.16_89.69)]">
                Get in Touch
              </h2>

              <p className="text-secondary mb-8 leading-relaxed">
                I’m available for journalism, copywriting, and creative
                projects. <br /> Let’s discuss how we can collaborate.
              </p>

              <div className="space-y-4 text-sm text-secondary">
                
                <p className="flex items-center gap-2">
                    <FiMail size={24} className="text-accent text-[oklch(0.85_0.16_89.69)]" />
                    <span className="text-[16px]"> info@jafferimam.in</span>
                </p>

                <p className="flex items-center gap-2">
                    <FiPhone size={24} className="text-accent text-[oklch(0.85_0.16_89.69)]" />
                    <span className="text-[16px]"> +91 8051209496</span>
                </p>

                {/* <p>Location: Karachi, Pakistan</p> */}

                </div>
            </div>

            {/* RIGHT SIDE – FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

  <div>
    <label htmlFor="name" className="text-sm mb-2 block">
      Name:
    </label>
    <input
      id="name"
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      required
      autoComplete="name"
      className="w-full border rounded-[10px] border-[oklch(0.85_0.16_89.69)] px-4 py-3 outline-none focus:border-accent"
    />
  </div>

  <div>
    <label htmlFor="email" className="text-sm mb-2 block">
      Email:
    </label>
    <input
      id="email"
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      required
      autoComplete="email"
      className="w-full border rounded-[10px] border-[oklch(0.85_0.16_89.69)] px-4 py-3 outline-none focus:border-accent"
    />
  </div>

  <div>
    <label htmlFor="message" className="text-sm mb-2 block">
      Message:
    </label>
    <textarea
      id="message"
      name="message"
      value={form.message}
      onChange={handleChange}
      rows="5"
      required
      autoComplete="off"
      className="w-full border rounded-[10px] border-[oklch(0.85_0.16_89.69)] px-4 py-3 outline-none focus:border-accent"
    />
  </div>

  <button
    type="submit"
    className="px-6 py-3 bg-accent text-white rounded-[10px] cursor-pointer text-sm bg-[oklch(0.85_0.16_89.69)]"
  >
    Send Message
  </button>

</form>
          </div>

        </Container>
      </section>
                  </div>

    //   <Footer />
    // </PageWrapper>
  );
};

export default Contact;