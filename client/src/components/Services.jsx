import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServiceCard = ({color, title, icon, subtitle}) => (
  <div className="flex flex-row justify-start items-center white-glass p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="flex flex-col flex-1 ml-5">
      <h1 className="mt-2 text-white text-lg">{title}</h1>
      <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl text-gradient py-2">
            Services that we are
            <br />
            continue to improve 
          </h1>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start items-center">
        <ServiceCard 
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white"/>}
          subtitle="Security is guaranted. We always maintain privacy and mainting the quality of our products."
        />
        <ServiceCard 
          color="bg-[#8945F8]"
          title="Best Exchange Rates"
          icon={<BiSearchAlt fontSize={21} className="text-white"/>}
          subtitle="Security is guaranted. We always maintain privacy and mainting the quality of our products."
        />
        <ServiceCard 
          color="bg-[#F84450]"
          title="Fastest Transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white"/>}
          subtitle="Security is guaranted. We always maintain privacy and mainting the quality of our products."
        />
      </div>
    </div>
  );
}

export default Services;