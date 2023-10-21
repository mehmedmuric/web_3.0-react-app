import React, {useContext} from 'react';
import { AiFillPayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import { Loader } from './';
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";


const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const Input = ({placeholder, name, value, type, handleChange}) => (
    <input 
      placeholder={placeholder}
      type={type}
      value={value}
      step="0.0001"
      onChange={(e) => handleChange(e, name)}
      className="my-2 p-2 w-full rounded-sm outline-none bg-transparent border-none text-white text-sm white-glass"
    />
  );

  const handleSubmit = (e) => {
    const {addressTo, amount, keyword, message} = formData;
    
    e.preventDefault();

    if(!addressTo || !amount || !keyword || !message) return;
    
    sendTransaction();
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="md:flex-row flex-col flex items-start justify-between mf:p-20 py-12 px-4">
        <div className="flex flex-col flex-1 justify-start mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 capitalize">Send crypto <br/> across the world</h1>
          <p className="text-left text-white font-light mt-5 md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily.
          </p>
            <button 
            type="button" onClick={connectWallet} 
            className="
            flex flex-row justify-center items-center my-5 
            bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <p className="text-white text-base font-semibold">Connect Wallet</p>
            </button>
            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
              <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
              <div className={commonStyles}>Security</div>
              <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
              <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
              <div className={commonStyles}>Low Fees</div>
              <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
            </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-center flex-col rounded-xl h-40 sm:w-72 w-full my-5 white-glass eth-card">
            <div className="flex w-full h-full justify-between flex-col">
              <div className='flex items-start justify-between'>
                <div className="w-10 h-10 rounded-full border-2 border-white justify-center items-center flex">
                  <SiEthereum fontSize={21} color='darkblue'/>
                </div>
                <BsInfoCircle fontSize={20} color='darkblue'/>
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-blue-800 font-semibold text-lg">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center blue-glass p-5 sm:w-96 w-full">
            <Input placeholder="Address To" type="text" name="addressTo" handleChange={() => {}}/>
            <Input placeholder="Amount (ETH)" type="number" name="amount" handleChange={() => {}}/>
            <Input placeholder="Keyword (Gif)" type="text" name="keyword" handleChange={() => {}}/>
            <Input placeholder="Enter message" type="text" name="message" handleChange={() => {}}/>
            <div className="h-[1px] w-full bg-gray-400 my-2"/>
            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] border-[#3d4f7c] p-2 rounded-full cursor-pointer hover:bg-[#2546bd]"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;