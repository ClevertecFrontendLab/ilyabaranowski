import Title from 'antd/lib/typography/Title';
import styles from './MainPage.module.css';
import { Button, Grid, Layout, Typography } from 'antd';
import { CalendarTwoTone, HeartFilled } from '@ant-design/icons';
import { ProfileIcon } from '../../assets/Icons/ProfileIcon';
const { Content } = Layout;
const { Text } = Typography;

export const MainPage = () => {
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
    const { lg } = screens;

    const cardItems = [
        {
            text: 'Расписать тренировки',
            icon: <HeartFilled />,
            buttonText: 'Тренировки'
        },
        {
            text: 'Назначить календарь',
            icon: <CalendarTwoTone />,
            buttonText: 'Календарь'
        },
        {
            text: 'Заполнить профиль',
            icon: <ProfileIcon />,
            buttonText: 'Профиль'
        }
    ];

    return (
        <Content className={styles.main}>
            <div className={styles.fitInfo}>
                <Text className={styles.text}>С CleverFit ты сможешь:</Text>
                <Text className={styles.text}>
                    — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                </Text>
                <Text className={styles.text}>
                    — отслеживать свои достижения в разделе статистики, сравнивая свои результаты
                    {lg ? <br /> : ' '}с нормами и рекордами;
                </Text>
                <Text className={styles.text}>
                    — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы
                    {lg ? <br /> : ' '} о тренировках;
                </Text>
                <Text className={styles.text}>
                    — выполнять расписанные тренировки для разных частей тела, следуя подробным
                    инструкциям и советам профессиональных тренеров.
                </Text>
            </div>
            <div className={styles.whatIsCleverFit}>
                <Title className={styles.title} level={4}>
                    CleverFit — это не просто приложение, а твой личный помощник {lg ? <br /> : ' '}
                    в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                </Title>
            </div>
            <div className={styles.cards}>
                {cardItems.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <Text className={styles.cardText}>{item.text}</Text>
                        <Button className={styles.cardButton} icon={item.icon} type='text'>
                            {item.buttonText}
                        </Button>
                    </div>
                ))}
            </div>
        </Content>
    );
};
