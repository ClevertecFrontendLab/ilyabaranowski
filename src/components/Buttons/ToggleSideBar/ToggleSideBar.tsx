import { Button } from 'antd';
import { OpenSideBarIcon } from '../../../assets/Icons/OpenSideBar';
import { CloseSideBarIcon } from '../../../assets/Icons/CloseSideBar';
import { MobileOpenSideBarIcon } from '../../../assets/Icons/MobileOpenSideBar';
import { MobileCloseSideBarIcon } from '../../../assets/Icons/MobileCloseSideBar';

import styles from './ToggleSideBar.module.css';
import React from 'react';

type ToggleSideBarButtonProps = {
    mobile?: boolean;
    collapsed?: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleSideBar: React.FC<ToggleSideBarButtonProps> = ({
                                                               setCollapsed,
                                                               collapsed,
                                                               mobile,
                                                           }) => {
    const IconComponent = collapsed ? (mobile ? OpenSideBarIcon : MobileOpenSideBarIcon) : (mobile ? CloseSideBarIcon : MobileCloseSideBarIcon);
    const testId = mobile ? 'sider-switch' : 'sider-switch-mobile';

    return (
        <Button
            type='text'
            className={styles.sideBarCloseButton}
            icon={<IconComponent />}
            data-test-id={testId}
            onClick={() => setCollapsed(!collapsed)}
        />
    );
};

export default ToggleSideBar;
