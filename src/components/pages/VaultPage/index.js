import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Layout, Tabs, Slider, Button } from 'antd';
import { ethers } from 'ethers';
import { useStore } from '../../../store';

const VaultPage = observer(() => {
  const {contractAddr} = useParams();
  const [vault, setVault] = useState(null);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
  const { vaultsStore: {vaults, fetchVaults} } = useStore();
  const { valletStore: {address} } = useStore();
  const { contractStore: {contract, error, balance, getContract, getBallance} } = useStore();

  useEffect(() => {
    if(vaults.length < 1) fetchVaults();
    if(contractAddr.length > 0) getContract(contractAddr);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setVault(vaults.filter(vault => vault.addr === contractAddr)[0]);
  }, [contractAddr, vaults]);

  useEffect(() => {
    if(contract && address) getBallance(address);
  }, [contractAddr, address, contract, getBallance]);
  
  const onClickDeposit = async () => {
    const amount = ethers.utils.parseEther(`${deposit}`);
    await contract.deposit(amount);
  }
  
  const onClickWithdraw = async () => {
    const amount = ethers.utils.parseEther(`${deposit}`);
    await contract.withdraw(amount);
  }

  if (error) return <p>{error}</p>

  return !vault && !contract ? <p>Loading...</p> :
    <Layout className='layout'>
      <Layout.Content style={{ padding: '26px' }}>
        Yours contract ballance is {balance}
        <Tabs defaultActiveKey='Deposit'>
          <Tabs.TabPane tab='Deposit' key='Deposit'>
            Add to deposit {deposit.toString(10)} eth;
            <Slider value={deposit} onChange={setDeposit} step={0.01}/>
            <Button type='primary' shape='round' onClick={onClickDeposit}>
              Deposit
            </Button>
          </Tabs.TabPane>
          <Tabs.TabPane tab='Withdraw' key='Withdraw'>
            Withdraw wrom deposit {withdraw} eth;
            <Slider value={withdraw} onChange={setWithdraw} step={0.01}/>
            <Button type='primary' shape='round' onClick={onClickWithdraw}>
              Withdraw
            </Button>
          </Tabs.TabPane>
        </Tabs>
      </Layout.Content>
    </Layout>
});

export default VaultPage;
