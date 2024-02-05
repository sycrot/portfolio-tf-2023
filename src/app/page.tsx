import HeaderBanner from "@/components/header-banner";
import Aboutme from "./aboutme";
import Skills from "./skills";
import MyServices from "./my-services";
import PortfolioCard from "@/components/portfolio-card";
import Contactme from "@/components/contatcme";


export default function Home() {
  return (
    <main>
      <HeaderBanner />
      <Aboutme />
      <Skills />
      <PortfolioCard />
      <MyServices />
      <Contactme />
    </main>
  )
}
