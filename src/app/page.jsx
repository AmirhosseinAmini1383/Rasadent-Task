import Sliders from "./_components/Sliders";

export const metadata = {
  title: "خانه - رسادنت",
};

export default async function Home() {
  return (
    <div className="container xl:max-w-screen-xl mx-auto px-4 mt-8">
      <h1 className="text-secondary-400 font-black md:text-xl mb-10">
        برای نمایش و سرچ محصولات لطفا به صفحه <span>محصولات</span> بروید.
      </h1>
      <Sliders />
    </div>
  );
}
