import Header from "../components/Header";
import MediaList from "../components/MediaList";
import { trending_movies } from "../data/trending_movies";
import { top_shows } from "../data/top_shows";
import "./home.css";

function Home() {
  return (
    <>
      <Header />

      <MediaList
        title="Trending Movies"
        items={trending_movies}
      />
      <MediaList
        title="Top TV Shows"
        items={top_shows}
      />
    </>
  );
}

export default Home;