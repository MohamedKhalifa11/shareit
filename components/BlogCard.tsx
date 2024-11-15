import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const BlogCard = ({ post }: { post: BlogTypeCard }) => {
  const {
    _CreatedAt,
    views,
    author: { _id: authorId, name },
    title,
    category,
    _id,
    image,
    describtion,
  } = post;

  return (
    <li className="blog-card group">
      <div className="flex-between">
        <p className="blog_card_date">{formatDate(_CreatedAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/blog/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/blog/${_id}`}>
        <p className="blog-card_desc">{describtion}</p>
        <img src={image} alt="blog image" className="blog-card_img" />
      </Link>

      <div className="flex-between mt-5 gap-3">
        <Link href={`/query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="blog-card_btn" asChild>
          <Link href={`/blog/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default BlogCard;
