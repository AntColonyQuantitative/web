"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Layout, Menu, MenuProps } from "antd";
import "./globals.css";
import { useState } from 'react';
import LoginForm from '@/pages/login';

const { Header, Footer, Sider, Content } = Layout;
const items: MenuProps['items'] = [
  {
    label: '登录',
    key: 'login',
  },
  {
    label: '策略',
    key: 'strategy',
    children: [
      {
        key: "1",
        label: 'T1',
      },
      {
        label: "T2",
        key: 't2',
      },
      {
        label: "T3",
        key: 't3',
      },
    ],
  },

];

const HomePage = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Layout>
    <div className='header flex items-center '>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />

    </div>

    <Layout>
      <Content className="content flex items-center">
        <div className='absolute right-60 bg-white flex items-center justify-center px-6' style={{
          width: 500,
          height: 300,
          borderRadius: 16
        }}>
          <LoginForm />

        </div>
      </Content>
    </Layout>
    <Footer className="footer flex items-center justify-center">Copyright © 2023  - All rights reserved</Footer>
  </Layout>
}
  ;

export default HomePage;
