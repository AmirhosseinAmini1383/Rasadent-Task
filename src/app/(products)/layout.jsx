function layout({ children }) {
  return (
    <>
      <div className="container xl:max-w-screen-xl mx-auto">{children}</div>
    </>
  );
}

export default layout;
