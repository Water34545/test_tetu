import { ethers } from 'ethers';

export const loadContract = async (addres) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  let contract = null;

  try {
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
  
    const abiResp = await fetch(`https://api.polygonscan.com/api?module=contract&action=getabi&address=${addres}&apikey=VYW2NF7NZK63M81GENYQZKP1B631PKM9ZG`);
    const abi = await abiResp.json();
    contract = new ethers.Contract(
      addres,
      abi.result,
      signer
    );
  } catch(e) {
    throw(e);
  }

  return contract;
} 