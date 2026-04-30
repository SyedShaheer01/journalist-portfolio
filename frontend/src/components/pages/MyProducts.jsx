import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Swal from "sweetalert2";
import axios from "axios";

const MyProducts = () => {
  // 🔥 ADMIN DATA (later from backend)
  // const products = [
  //   {
  //     id: 1,
  //     title: "Premium Writing Course",
  //     description:
  //       "Learn professional storytelling and content writing techniques.",
  //     price: 5000,
  //     image:
  //       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
  //   },
  //   {
  //     id: 2,
  //     title: "Copywriting Mastery",
  //     description:
  //       "Master high-converting copywriting for brands and businesses.",
  //     price: 8000,
  //     image:
  //       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
  //   },
  // ];

  // 🔥 REF CODE STATE
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [products, setProduct] = useState([]);

  useEffect(()=>{
     
    axios.get("https://journalist-backend.vercel.app/api/product/list")

    .then(res=>{
      setProduct(res.data.data)

    })

  },[])

  // 🔥 APPLY CODE (API BASED)
  const applyCode = async () => {
    try {
      const res = await axios.post(
        "https://journalist-backend.vercel.app/api/refcode/apply-code",  
        { code: code }
      );

      if (res.data.success) {
        // 🔥 convert "20%" → 20
        const discountValue = parseInt(res.data.discount);

        setDiscount(discountValue);

        Swal.fire({
          title: "Good job!",
          text: res.data.message,
          icon: "success",
        });
      }

    } catch (error) {
      setDiscount(0);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.message || "Invalid code",
      });
    }
  };

  // 🔥 FINAL PRICE
  const getFinalPrice = (price) => {
    return price - (price * discount) / 100;
  };

  // 🔥 BUY FUNCTION
  const handleBuy = (product) => {
    const finalPrice = getFinalPrice(product.price);

    const message = `Hi, I want to buy "${product.title}" for Rs.${finalPrice}`;

    const whatsappURL = `https://wa.me/918051209496?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div>

      {/* HEADER */}
      <section className="py-28 main-heading border-b">
        <Container>
          <div className="max-w-4xl">
            <p className="text-accent uppercase tracking-widest text-xs mb-4">
              My Products
            </p>

            <h1 className="font-heading text-5xl mb-6">
              Digital Products & Courses
            </h1>

            <p className="text-secondary text-lg leading-relaxed">
              Explore my premium digital products designed to enhance your
              writing, storytelling, and content creation skills.
            </p>
          </div>
        </Container>
      </section>

      {/* REF CODE SECTION */}
      <section className="py-16">
        <Container>
          <div className="max-w-md">
            <p className="text-sm text-secondary mb-3">
              Have a reference code?
            </p>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter code"
                value={code}
                name="code"
                onChange={(e) => setCode(e.target.value)}
                className="flex-1 border border-[oklch(0.85_0.16_89.69)] rounded-[7px] px-4 py-3 outline-none"
              />

              <button
                onClick={applyCode}
                className="px-6 cursor-pointer bg-[oklch(0.85_0.16_89.69)] rounded-[7px] text-white text-sm"
              >
                Apply
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* PRODUCTS */}
      <section className="py-20">
        <Container>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

            {products.map((product,index) => {
              const finalPrice = getFinalPrice(product.price);

              return (
                <div
                  key={index}
                  className="group border border-[oklch(0.85_0.16_89.69)] rounded-2xl overflow-hidden bg-white"
                >

                  {/* IMAGE */}
                  <div className="h-64 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-h-full object-contain"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-8">

                    <h2 className="font-heading text-2xl mb-3">
                      {product.title}
                    </h2>

                    <p className="text-secondary mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* PRICE */}
                    <div className="mb-6">
                      {discount > 0 ? (
                        <div>
                          <span className="line-through text-gray-400 mr-2">
                            Rs.{product.price}
                          </span>

                          <span className="text-accent font-bold">
                            Rs.{finalPrice}
                          </span>
                        </div>
                      ) : (
                        <span className="font-bold">
                          Rs.{product.price}
                        </span>
                      )}
                    </div>

                    {/* BUTTON */}
                    <button
                      onClick={() => handleBuy(product)}
                      className="w-full py-3
                      bg-accent text-black
                      border border-[oklch(0.85_0.16_89.69)] 
                      rounded-xl
                      cursor-pointer
                      transition-colors duration-500
                      hover:bg-[oklch(0.85_0.16_89.69)] hover:text-white"
                    >
                      Buy Now →
                    </button>

                  </div>
                </div>
              );
            })}

          </div>

        </Container>
      </section>

    </div>
  );
};

export default MyProducts;