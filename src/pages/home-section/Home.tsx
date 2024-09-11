import Header from "../../components/header/Header";
import TrustContainer from "../../components/trustee/TrustContainer";
import Services from "../../components/service-section/Services";
import Partnership from "../../components/partnership/Partnership";
import Metric from "../../components/metric-section/Metric";
import Global from "../../components/global-section/Global";

const Home = () => {
  return (
    <>
      <Header />
      <TrustContainer />
      <Services />
      <Partnership />
      <Metric />
      <Global />
    </>
  );
};

export default Home;
