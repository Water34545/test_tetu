import { runInAction, makeAutoObservable } from 'mobx';
import { ethers } from 'ethers';
import { loadContract } from '../utils/loadContract';

export default class contractStore {
  contract = null;
  balance = null;
  error = null;

  constructor() {
    makeAutoObservable(this);
  };

  getContract = async (addr) => {
    try {
      let contract = await loadContract(addr);
      const valletAddr = await contract.implementation();
      contract = await loadContract(valletAddr);
      runInAction(() => {
        this.contract = contract;
      });
    } catch (e) {
      runInAction(() => {
        this.error = `getContract error: ${e.message}`;
      })
    }
  };
  
  getBallance = async (address) => {
    try {
      let balance = await this.contract.balanceOf(address);
      balance = ethers.utils.formatEther(balance);
      runInAction(() => {
        this.balance = balance;
      });
    } catch (e) {
      runInAction(() => {
        this.error = `getBallance error: ${e.message}`;
      })
    }
  };
}