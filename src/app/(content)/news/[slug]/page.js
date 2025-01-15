import { getNewsItem } from "@/src/lib/news";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link className="image" href={`/news/${slug}/image`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={200}
            height={200}
          />
        </Link>
        <h1>{newsItem.title}1</h1>
        <time date={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}

export default NewsDetailPage;
