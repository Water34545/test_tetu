import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return <Layout.Header>
    <Menu mode='horizontal' theme='dark'>
      <Menu.Item key='home'>
        <Link to="/">Home</Link>
      </Menu.Item>
    </Menu>
  </Layout.Header>
};

export default AppHeader;