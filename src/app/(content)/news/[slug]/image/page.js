/* eslint-disable @next/next/no-img-element */

import { getNewsItem } from "@/src/lib/news";
import Image from "next/image";

async function ImagePage({ params }) {
  const { slug } = await params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt="image" className="img" />
    </div>
  );
}

export default ImagePage;
