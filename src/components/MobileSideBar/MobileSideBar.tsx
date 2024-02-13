import { Menu } from 'antd';

import styles from './MobileSideBar.module.css';

const MobileSideBar = ({ padding }: { padding: string }) => {
    return (
        <div className={styles.menu}>
            <Menu
                theme='light'
                mode='inline'
                className={styles.sideBarMenu}
                items={[
                    {
                        key: 'calendar',
                        label: 'Календарь',
                        style: {
                            paddingLeft: `${padding}`,
                            paddingRight: `${padding}`,
                        },
                    },
                    {
                        key: 'trainings',
                        label: 'Тренировки',
                        style: {
                            paddingLeft: `${padding}`,
                            paddingRight: `${padding}`,
                        },
                    },
                    {
                        key: 'achievements',
                        label: 'Достижения',
                        style: {
                            paddingLeft: `${padding}`,
                            paddingRight: `${padding}`,
                        },
                    },
                    {
                        key: 'profile',
                        label: 'Профиль',
                        style: {
                            paddingLeft: `${padding}`,
                            paddingRight: `${padding}`,
                        },
                    },
                ]}
            />
        </div>
    );
};

export { MobileSideBar };
