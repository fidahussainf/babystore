
import Blog from "./Components/Blog";
import FeaturesSection from "./Components/FeaturesSection";
import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header/Header";
import SubscribeSection from "./Components/SubscribeSection";
import Descriptions from "./Components/Descriptions";
import Categories from "./Components/Common/Categories";
import MayYouLikes from "./Components/MayYouLikes";

function App() {
  return (
    <div className="font-inter">
      <Header />
      <Categories/>
      <MayYouLikes/>
      <Blog/>
      <Descriptions/>
      <SubscribeSection />
      <FeaturesSection/>
      <Footer/>
    </div>
  );
}

export default App;
