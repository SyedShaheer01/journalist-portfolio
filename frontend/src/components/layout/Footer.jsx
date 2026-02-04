const Footer = () => {
  return (
    <footer className="border-t border-[oklch(0.92_0_0)] mt-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="max-w-6xl mx-auto text-center px-4 py-6 text-sm text-[oklch(0.21_0.02_202.83)] ">
       <span className="text-[oklch(0.85_0.16_89.69)]">Syed Jaffer Imam </span> © {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
