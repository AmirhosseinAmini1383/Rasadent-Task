import Image from "next/image";
import Link from "next/link";

function CoverImage({ name_fa, image, slug }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-md mb-6">
      <Link href={`/${slug}`}>
        <Image
          src={image || "/images/Rasadent.png"}
          alt={name_fa}
          fill
          className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
        />
      </Link>
    </div>
  );
}

export default CoverImage;
