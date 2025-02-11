import "../app/globals.css";
import {Button} from "@radix-ui/themes";
import { Cloud, Users, ShipWheel, Database } from "lucide-react";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";



const Home = () => {
  return (
    <div className="w-full px-0 bg-primary">
      {/* Hero */}
      <div className="flex flex-col md:flex-row gap-12 px-4 md:px-10">
        <div className="py-10 md:py-20 flex-col md:flex-row">
          <p className="text-white  uppercase">Product overview</p>
          <h1 className="text-white text-4xl font-bold py-5">
            Elevate Your Business <br /> With Cloud Solutions
          </h1>
        </div>
        <div className="flex-col md:flex-row py-10 md:py-20 md:px-10">
          <p className="text-white">Our comprehensive cloud services provide scalable, reliable, and secure solutions tailored to your business needs.</p>
          <div className="flex flex-col md:flex-row py-8 gap-8 md:gap-12">
            <Button className="bg-accent border px-4 md:px-6 text-white bg-primary py-2 rounded-full" >On-Demand Demo</Button>
            <div className="flex cursor-pointer hover:underline items-center text-blue-500">
              <span className="capitalize">Unlock cloud potential</span>
              <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5"/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center w-full">
        <Image className="w-full" src="/altobg.png" alt="bg image" width={1250} height={200} />
      </div>
      
        {/* About Section  */}
      <div className="py-10 md:px-10 px-4">
        <div className="flex flex-col items-center justify-center text-white w-full h-full">
          <p className="text-center px-10">How It Works</p>
          <h3 className="text-center text-2xl md:text-4xl py-5 font-bold px-10">The Magic Behind<br/>AltoCloud</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="text-white text-bold w-1/2 text-2xl py-10">
            <h4 className="py-5 ">01.</h4>
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
            <div className="px-4 md:px-10 text-sm py-10 text-white">
              <p className="">Elevate Your Business With Cloud Solutions 
                Elevate Your Business With Cloud Solutions 
                Elevate Your Business With Cloud Solutions
              </p>
            </div>
          </div>
          <div className="w-full py-4">
            <Image className="w-full rounded-lg" src="/altobackground.jpg" alt="another section bg" width={500} height={300}/>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto px-10 py-20 md:py-20">
        <div className="flex flex-col items-center justify-center text-white w-full h-full">
          <p className="text-center px-10">How We Work</p>
          <h3 className="text-center text-4xl font-bold px-10">What Makes Us Stand<br/>Out</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-6 mb-12 divide-500">
          <div className="flex flex-col border-l-2 border-b-2 py-10 items-center justify-center transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50">
            <Cloud className="w-6 h-6 text-blue-500"/>
            <p className="text-white">Cloud Migration</p>
          </div>
          <div className="flex flex-col border-x-2 border-b-2 py-10 items-center justify-center transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50">
            <ShipWheel className="w-6 h-6 text-blue-500"/>
            <p className="text-white">DevOps</p>
          </div>
          <div className="flex flex-col border-l-2 py-10 items-center justify-center transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50">
            <Users className="w-6 h-6 text-blue-500"/>
            <p className="text-white">Cloud Security</p>
          </div>
          <div className="flex flex-col border-x-2 py-10 items-center justify-center transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50">
            <Database className="w-6 h-6 text-blue-500"/>
            <p className="text-white">Data Management</p>
          </div>
          <div className="w-full flex items-center cursor-pointer hover:underline justify-center text-blue-500">
              <span className="capitalize">View All Services</span>
              <ArrowRightIcon className="w-5 h-5 "/>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <div className="w-full flex flex-col text-white">
          <h4 className="text-4xl">Contact Us</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
