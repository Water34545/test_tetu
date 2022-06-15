import { useParams } from "react-router-dom";

const VaultPage = () => {
  let {addr} = useParams();
  return <h1>
    VaultPage {addr}
  </h1>
};

export default VaultPage;
