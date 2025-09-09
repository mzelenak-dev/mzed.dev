import Link from "next/link";
import Image from "next/image";
import genListKey from "@/lib/utils";

export default function BlogList({ blogPosts }) {
  
  return (
    <ul id="blogposts" className="z-1">
      { blogPosts && blogPosts.map((post) => (
        <li className="w-2.5 h-3.5 border-2 border-amber-500">
          <Link
            href={post}  
            key={`${post.path}-${genListKey()}`}
          >
            <Image
              src={post.metaData.image}
              width={500}
              height={500}
              alt="alt for image"
            />
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}