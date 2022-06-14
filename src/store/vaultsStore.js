import {runInAction, makeAutoObservable} from 'mobx';

class vaultsStore {
  vaults = [];
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchVaults() {
    this.vaults = []

    try {
      const responce = await fetch("https://api.tetu.io/api/v1/reader/vaultInfos?network=MATIC");
      const data = await responce.json();
      console.log(data)
      runInAction(() => {
        this.vaults = [...data]
        this.error = null
      })
    } catch (e) {
      runInAction(() => {
        this.error = `fetchVaults error: ${e.massage}`
      })
    }
  }
}

export default new vaultsStore();