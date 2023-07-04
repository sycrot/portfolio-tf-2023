import HeaderBanner from "@/components/header-banner";
import Aboutme from "./aboutme";
import Portfolio from "./portfolio";
import Skills from "./skills";
import MyServices from "./my-services";
import Footer from "./footer";


export default function Home() {
  return (
    <main>
      <HeaderBanner />
      <Aboutme />
      <Portfolio />
      <Skills />
      <MyServices />
      <Footer />
    </main>
  )
}
