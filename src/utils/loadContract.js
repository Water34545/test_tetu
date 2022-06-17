import { ethers } from 'ethers';
const NETWORK_ID = process.env.NETWORK_ID;

export const loadContract = async (name) => {
  console.log(process.env.NETWORK_ID)
  console.log(process.env.PUBLIC_URL)
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  let contract = null;

  try {
    const res = await fetch(`/contracts/${name}.json`);
    const Artifact = await res.json();
    contract = new ethers.Contract(
      Artifact.networks[NETWORK_ID].address,
      Artifact.abi,
      provider
    );
  } catch {
    console.log(`Contract ${name} is not deployed`);
  }

  return contract;
} 