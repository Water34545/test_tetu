import './style.css';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import ConnectBtn from '../ConnectBtn';

const AppHeader = () => {
  const items = [
    { label: <Link to="/">Home</Link>, key: 'home' }
  ];

  return <Layout.Header className='container'>
    <Menu items={items} mode='horizontal' theme='dark' className='menu'/>
    <ConnectBtn/>
  </Layout.Header>
};

export default AppHeader;