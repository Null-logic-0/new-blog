/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import ModalImage from "@/src/components/ModalImage";
import { getNewsItem } from "@/src/lib/news";

export default async function InterceptedImagePage({ params }) {
  const { slug } = await params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalImage />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt="image"
            className="img"
          />
        </div>
      </dialog>
    </>
  );
}
