import {runInAction, makeAutoObservable} from 'mobx';

export default class vaultsStore {
  vaults = [];
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchVaults = async () => {
    this.vaults = [];

    try {
      const responce = await fetch("https://api.tetu.io/api/v1/reader/vaultInfos?network=MATIC");
      const data = await responce.json();
      runInAction(() => {
        this.vaults = data;
        this.error = null;
      })
    } catch (e) {
      runInAction(() => {
        this.error = `fetchVaults error: ${e.message}`;
      })
    }
  }
}