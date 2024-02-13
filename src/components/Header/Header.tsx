import React from "react";
import { Button, Breadcrumb, Layout } from 'antd';
const { Header: H } = Layout;

import styles from './Header.module.css';
import { SettingOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';

type HeaderProps = {
    xl: boolean | undefined;
    lg: boolean | undefined;
    md: boolean | undefined;
};

const Header: React.FC<HeaderProps> = ({ lg, md, xl }) => {
    const level = xl ? 1 : lg ? 2 : md ? 3 : 4;
    const minWidth = lg ? 124 : md ? 105 : 32;
    const shape = md ? 'default' : 'circle';
    const icon = lg || !md ? <SettingOutlined /> : null;
    const type = md ? 'text' : 'default';
    const settingsText = md ? 'Настройки' : '';

    return (
        <H className={styles.header}>
            <Breadcrumb>
                <Breadcrumb.Item separator={''} className={styles.breadCrumb}>
                    Главная
                </Breadcrumb.Item>
            </Breadcrumb>

            <div className={styles.content}>
                <Title level={level}>
                    Приветствуем тебя {!md && <br />} в CleverFit — приложении,{' '}
                    {md && <br />} которое поможет тебе добиться своей мечты!
                </Title>
                <Button
                    style={{ minWidth }}
                    shape={shape}
                    icon={icon}
                    type={type}
                >
                    {settingsText}
                </Button>
            </div>
        </H>
    );
};


export default Header;
