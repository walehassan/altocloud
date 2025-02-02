import "../app/globals.css";
import {Button} from "@radix-ui/themes";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";



const Home = () => {
  return (
    <div className="container bg-primary">
      <div className="flex container mx-auto px-10 py-10 md:py-20">
        <div className="container">
          <p className="text-white uppercase">Product overview</p>
          <h1 className="text-white text-4xl font-bold py-5">
            Elevate Your Business <br /> With Cloud Solutions
          </h1>
        </div>
        <div>
          <p className="text-white">Our comprehensive cloud services provide scalable, reliable, and secure solutions tailored to your business needs.</p>
          <div className="flex justify-between py-8">
            <Button className="bg-accent border text-white py-2 px-4 rounded-full" >On-Demand Demo</Button>
            <div className="flex text-blue-500">
              <span className="capitalize">Unlock cloud potential</span>
              <ArrowRightIcon className="w-5 h-5 align-center"/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Image className="w-full" src="/altobg.png" alt="bg image" width={1250} height={200} />
      </div>
      <div className="container mx-auto px-10 py-20 md:py-20">
        <div className="flex flex-col items-center justify-center text-white w-full h-full">
          <p className="text-center px-10">How It Works</p>
          <h3 className="text-center text-4xl font-bold px-10">The Magic Behind<br/>AltoCloud</h3>
        </div>
        <div className="flex justify-between">
          <div className="text-white text-bold w-1/2 text-2xl py-10">
            <h4 className="py-5">01.</h4>
            <h4>
              Elevate Your Business<br/> With Cloud Solutions
            </h4>
            <h4 className="py-5">02.</h4>
            <h4>
              Elevate Your Business<br/> With Cloud Solutions
            </h4>
            <h4 className="py-5">03.</h4>
            <h4>
              Elevate Your Business<br/> With Cloud Solutions
            </h4>
            <div className="container text-sm py-10 text-white">
            <p className="">Elevate Your Business With Cloud Solutions 
                Elevate Your Business With Cloud Solutions 
                Elevate Your Business With Cloud Solutions
              </p>
            </div>
          </div>
          <div className="py-20">
            <Image className="rounded-lg px-0 " src="/altobackground.jpg" alt="another section bg" width={500} height={300}/>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10 py-20 md:py-20">
        <div className="flex flex-col items-center justify-center text-white w-full h-full">
          <p className="text-center px-10">How We Work</p>
          <h3 className="text-center text-4xl font-bold px-10">What Makes Us Stand<br/>Out</h3>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
