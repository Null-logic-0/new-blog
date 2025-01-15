import NewsList from "@/src/components/NewsList";
import { getAllNews } from "@/src/lib/news";

async function NewsPage() {
  const news = await getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}

export default NewsPage;
