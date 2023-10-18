import Banner from "../components/banner/Banner";
import CardProductGrid from "../components/card/product/CardProductGrid";
import Collection from "../components/collection/Collection";
import { data } from "../components/data";
import Footer from "../components/footer/Footer";
import ModulTitle from "../components/modul/title/ModulTitle";

function HomePage() {
  return (
    <div className="App">
      <Banner className="mb-3" id="carouselBannerHome" data={data.banner} aria-hidden="true" />
      <Collection id="collectionHome" data={data.collection} aria-hidden="true" />
      <ModulTitle id="abc"/>
      <CardProductGrid data = {data.products} className="col-md-4"/>
      <Footer/>
    </div>
  );
}

export default HomePage;
