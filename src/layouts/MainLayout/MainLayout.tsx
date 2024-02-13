import { Grid, Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.css';
import { useState } from 'react';
import SideBar from '@components/SideBar/SideBar';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
    const { md, lg, xl } = screens;

    return (
        <Layout className={styles.layout}>
            <SideBar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                sidebarWidth={md ? 208 : 106}
                mobile={md}
            />
            <Layout className={styles.innerLayout}>
                <Header lg={lg} md={md} xl={xl} />
                <Outlet />
                <Footer />
            </Layout>
        </Layout>
    );
};

export { MainLayout };
