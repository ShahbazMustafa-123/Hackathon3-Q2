import Banner from "@/components/banner";
import HomeAbout from "@/components/HomeAbout";
import ChooseFoodItem from "@/components/ChooseFoodItem";
import WhyChooseFood from "@/components/WhyCHooesFood";
import Homechef from "@/components/HomeChef";
import HomeFoodProduct from "@/components/HomeFoodProdcut";

export default function Home() {
  return (
   <div>
    <Banner/>
    <hr className="bg-slate-800"/>
    <HomeAbout/>
    <ChooseFoodItem/>
    <WhyChooseFood/>
    <Homechef/>
    <HomeFoodProduct/>
    <hr className="bg-black"/>  
   </div>
  );
}
