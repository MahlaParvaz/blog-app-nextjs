import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ slug, coverImageUrl }) {
  return (
    <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-6">
      <Link href={`/blogs/${slug}`}>
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={coverImageUrl}
        />
      </Link>
    </div>
  );
}
