import Image from "next/image";

function ProductImage({ images, name_fa }) {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 relative aspect-square overflow-hidden rounded-md">
      {images.length ? (
        <Image
          src={images[0].original_url}
          alt={name_fa}
          fill
          className="object-cover object-center hover:scale-105 transition-all duration-300 ease-out rounded-lg border border-secondary-300"
        />
      ) : (
        <Image
          src={"/images/Rasadent.png"}
          alt={name_fa}
          width="1080"
          height="1080"
          className="object-cover object-center hover:scale-105 transition-all duration-300 ease-out rounded-lg"
        />
      )}
    </div>
  );
}

export default ProductImage;
