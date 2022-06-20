import {runInAction, makeAutoObservable} from 'mobx';

export default class valletStore {
  address = null;
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
      } catch (e) {
        runInAction(() => {
          this.error = `connect error: ${e.message}`;
        })
      }
    }
  };

  connect = async () => {
    const { ethereum } = window;
    const method = "eth_requestAccounts";

    try {
      const accounts = await ethereum.request({method});
      runInAction(() => {
        this.address = accounts[0];
      });
    } catch (e) {
      runInAction(() => {
        this.error = `connect error: ${e.message}`;
      })
    }
  };
}