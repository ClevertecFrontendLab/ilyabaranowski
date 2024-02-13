import { Layout, Menu } from 'antd';
import React from 'react';
const { Sider } = Layout;

import styles from './SideBar.module.css';
import { SideBarMenu } from '@components/SideBarMenu/SideBarMenu';
import { FitLogoIcon } from '../../assets/Icons/FitLogo';
import { LogoIcon } from '../../assets/Icons/Logo';
import { ExitIcon } from '../../assets/Icons/ExitIcon';
import { MobileSideBar } from '@components/MobileSideBar/MobileSideBar.tsx';
import ToggleSideBar from '@components/Buttons/ToggleSideBar/ToggleSideBar.tsx';

type SidebarProps = {
    sidebarWidth: number;
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
    mobile?: boolean;
};

const SideBar: React.FC<SidebarProps> = ({ collapsed, sidebarWidth, setCollapsed, mobile }) => {
    const collapsedWidth = mobile ? 64 : 0.1;
    const padding = mobile ? (collapsed ? '25px' : '18px') : '8px';
    const SideBarComponent = mobile ? SideBarMenu : MobileSideBar;
    const exitItems = [
        {
            className: `${styles.exitItem}`,
            key: 'exit',
            icon: mobile ? <ExitIcon /> : null,
            label: 'Выход',
        },
    ];

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme='light'
            width={sidebarWidth}
            collapsedWidth={collapsedWidth}
            className={styles.sider}
        >
            <div className={styles.sideBarContent}>
                {collapsed && mobile ? (
                    <FitLogoIcon className={styles.logoFit} />
                ) : (
                    <LogoIcon className={styles.logo} />
                )}
                <SideBarComponent padding={padding} />
            </div>

            <Menu className={styles.exit} items={exitItems} />
            <ToggleSideBar
                mobile={mobile}
                setCollapsed={setCollapsed}
                collapsed={collapsed}
            />
        </Sider>
    );
};

export default SideBar;
