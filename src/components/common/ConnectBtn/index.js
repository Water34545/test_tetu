import { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { Button } from 'antd';
import { useStore } from "../../../store";

const INSTALL_TEXT = 'Install metamask!';
const CONNECT_TEXT = 'Connect';

const ConnectBtn = observer(() => {
  const { valletStore: {error, address, connect} } = useStore();

  useEffect(() => {
    const eventName = `accountsChanged`;
    
    if (!window.ethereum) return;

    window.ethereum.on(eventName, connect);
    return () => {
      window.ethereum.removeListener(eventName, connect);
    };
  }, [connect]);

  const onClick = () => {
    if (!window.ethereum) window.open("https://metamask.io/download/", "_blank");
    if (!address) connect();
  }

  return <Button type="primary" shape="round" onClick={onClick}>
    {error || address || (window.ethereum ? CONNECT_TEXT : INSTALL_TEXT)}
  </Button>
});

export default ConnectBtn;