import Image from "next/image";
type Props = {
  src: string;
  alt: string;
};


export default function MDXImage({ src, alt }: Props) {
  return (
    <div>
      <Image
        className="rounded w-full mb-2"
        src={src}
        alt={alt}
        width={500}
        height={500}
        placeholder="blur"
        quality={100}
        sizes="(min-width: 740px) 674px, calc(95.48vw - 18px)"
        blurDataURL="/images/placeholder.png"
      />
    </div>
  );
}
