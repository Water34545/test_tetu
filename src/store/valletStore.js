import {runInAction, makeAutoObservable} from 'mobx';
import { ethers } from 'ethers';

export default class valletStore {
  address = null;
  ballance = null;
  error = null;

  constructor() {
    makeAutoObservable(this);
    this.getSelectedData();
  };

  getSelectedData = async () => {
    if(window.ethereum?.selectedAddress) {
      const account = window.ethereum?.selectedAddress;
      try {
        runInAction(() => {
          this.address = account;
        });
        this.getBallance();
      } catch (e) {
        runInAction(() => {
          this.error = `connect error: ${e.message}`;
        })
      }
    }
  };

  getBallance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      const balance = await provider.getBalance(this.address);
      const bal = ethers.utils.formatEther(balance);
      runInAction(() => {
        this.ballance = bal;
        this.error = null;
      });
    } catch (e) {
      runInAction(() => {
        this.error = `getBallance error: ${e.message}`;
      })
    }
  }

  connect = async () => {
    const { ethereum } = window;
    const method = "eth_requestAccounts";

    try {
      const accounts = await ethereum.request({method});
      runInAction(() => {
        this.address = accounts[0];
      });
      this.getBallance();
    } catch (e) {
      runInAction(() => {
        this.error = `connect error: ${e.message}`;
      })
    }
  };
}