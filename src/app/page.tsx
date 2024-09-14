import { Intro, GoodHandsLeft, Cards, GoodHandsRight, Hands, People, InTro, Info, Similar } from "@/blocks";
import { Footer } from "@/components";
import './page.css'
  
export default function Home() {
  return (
    <div>
      <Intro/>
      <GoodHandsLeft/>
      <Cards/>
      <GoodHandsRight/>
      <Hands/>
      <People/>
      <Footer/>
    </div>
  );
}

