import NewsList from "@/src/components/NewsList";
import { getLatestNews } from "@/src/lib/news";

async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}

export default LatestNewsPage;
