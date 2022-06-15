import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../store";

const VaultPage = observer(() => {
  const {addr} = useParams();
  const [vault, setVault] = useState(null);
  const { vaultsStore: {fetchVaults, vaults} } = useStore();

  useEffect(() => {
    if(vaults.length < 1) fetchVaults();
  }, []);

  useEffect(() => {
    setVault(vaults.filter(vault => vault.addr === addr)[0]);
  }, [addr, vaults])

  return !vault ? <p>Loading...</p> :
    <h1>VaultPage {vault.name}</h1>
});

export default VaultPage;
