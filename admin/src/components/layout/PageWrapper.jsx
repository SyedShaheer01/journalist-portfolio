const PageWrapper = ({ children }) => {
  return (
    <main className="bg-background text-primary font-body">
      {children}
    </main>
  );
};

export default PageWrapper;