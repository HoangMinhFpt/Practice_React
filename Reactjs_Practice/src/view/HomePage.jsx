import Banner from "../components/banner/Banner";
import Collection from "../components/collection/Collection";
import { data } from "../components/data";

function HomePage() {
  return (
    <div className="App">
      <Banner className="mb-3" id="carouselBannerHome" data={data.banner} aria-hidden="true" />
      <Collection />
    </div>
  );
}

export default HomePage;
