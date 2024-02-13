import { CalendarTwoTone, HeartFilled, TrophyFilled } from '@ant-design/icons';
import { ProfileIcon } from '../../assets/Icons/ProfileIcon';
import { Menu } from 'antd';

import styles from './SideBarMenu.module.css';

const SideBarMenu = ({ padding }: { padding: string }) => {
    return (
        <div className={styles.menu}>
            <Menu
                theme='light'
                mode='inline'
                className={styles.sideBarMenu}
                items={[
                    {
                        key: 'calendar',
                        icon: <CalendarTwoTone />,
                        label: 'Календарь',

                        style: {
                            paddingLeft: `${padding}`,
                        },
                    },
                    {
                        key: 'trainings',
                        icon: <HeartFilled />,
                        label: 'Тренировки',
                        style: {
                            paddingLeft: `${padding}`,
                        },
                    },
                    {
                        key: 'achievements',
                        icon: <TrophyFilled />,
                        label: 'Достижения',
                        style: {
                            paddingLeft: `${padding}`,
                        },
                    },
                    {
                        key: 'profile',
                        icon: <ProfileIcon />,
                        label: 'Профиль',
                        style: {
                            paddingLeft: `${padding}`,
                        },
                    },
                ]}
            />
        </div>
    );
};

export { SideBarMenu };
