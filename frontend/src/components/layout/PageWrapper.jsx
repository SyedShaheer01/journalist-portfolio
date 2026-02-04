const PageWrapper = ({ children }) => {
  return (
    <main className="min-h-screen bg-background text-primary font-body">
      {children}
    </main>
  );
};

export default PageWrapper;