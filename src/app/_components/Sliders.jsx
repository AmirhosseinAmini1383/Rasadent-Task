"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

function Sliders() {
  const slides = [
    {
      imageSrc: "/images/slidesImages/vecteezy.jpeg",
      description:
        "مسواک زدن یکی از ساده‌ترین و مؤثرترین راه‌ها برای حفظ سلامت دهان و دندان است. با مسواک زدن منظم، می‌توان از تجمع پلاک، پوسیدگی دندان و بیماری‌های لثه جلوگیری کرد. این کار نه‌تنها به داشتن لبخندی زیبا کمک می‌کند، بلکه سلامت کلی بدن را نیز بهبود می‌بخشد، چرا که بسیاری از بیماری‌ها می‌توانند از طریق دهان آغاز شوند. رعایت بهداشت دهان، اولین قدم در مراقبت از سلامت عمومی است.",
    },
    {
      imageSrc: "/images/slidesImages/caroline.jpg",
      description:
        "سلامت دندان‌ها و فک، نقش کلیدی در کیفیت زندگی انسان دارد. دندان‌های سالم نه‌تنها در جویدن و گوارش بهتر غذا مؤثرند، بلکه در صحبت‌کردن، اعتماد به‌نفس و زیبایی چهره هم تأثیر زیادی دارند. مشکلات فک می‌توانند منجر به درد، اختلال در خواب و حتی سردردهای مزمن شوند. رسیدگی منظم به بهداشت دهان و دندان، از بروز این مشکلات جلوگیری کرده و سلامت عمومی بدن را تضمین می‌کند.",
    },
    {
      imageSrc: "/images/slidesImages/pexels.jpg",
      description:
        "خرابی یا درد دندان می‌تواند نشانه‌ای از مشکلات جدی‌تر باشد. با مراجعه به یک دندان‌پزشک معتبر، از پیشرفت آسیب و درمان‌های پرهزینه جلوگیری کنید. با مراجعه به یک دندان‌پزشک معتبر، از پیشرفت آسیب و درمان‌های پرهزینه جلوگیری کنید. سلامت دهان را به تعویق نیندازید!",
    },
    {
      imageSrc: "/images/slidesImages/jon-tyson.jpg",
      description:
        "استفاده از لوازم دندان‌پزشکی اصل و اورجینال، تضمین‌کننده‌ی دقت در درمان و حفظ سلامت بیماران است. محصولات باکیفیت، طول عمر بیشتر و عملکرد مطمئن‌تری دارند. از تجهیزات تأییدشده و برندهای معتبر استفاده کنید تا خیالتان از کیفیت و ایمنی راحت باشد. انتخاب درست ابزار، قدمی مهم در ارائه خدمات حرفه‌ای دندان‌پزشکی است.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-[780px] m-auto py-16 relative aspect-video group">
      <Image
        src={slides[currentIndex].imageSrc}
        alt="اسلایدر"
        fill
        className="object-cover object-center rounded-2xl"
      />

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-secondary-700 text-white cursor-pointer">
        <ArrowLeftIcon onClick={prevSlide} className="w-4 h-4" />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-secondary-700 text-white cursor-pointer">
        <ArrowRightIcon onClick={nextSlide} className="w-4 h-4" />
      </div>

      <div className="absolute -bottom-15 px-5 py-10 m-8 rounded-xl bg-[rgba(2,21,38,0.85)] text-white">
        <div className="text-base">{slides[currentIndex].description}</div>
      </div>
    </div>
  );
}

export default Sliders;
