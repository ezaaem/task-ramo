import Header from "./Header";
import About from "./About";
import Leatest from "./Leatest";
import Shared from "./Shared";
import HowItWork from "./HowItWork";
import Explore from "./Explore";
import Pricing from "./Pricing";
import OurRecent from "./OurRecent";
import { Trusted } from "./Trusted";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Leatest />
      <Shared />
      <HowItWork />
      <Explore />
      <Pricing />
      <OurRecent />
      <Trusted />
      <Footer />
    </>
  );
}
