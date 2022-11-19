import { Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import styles from '../../styles/Hero.module.css';
import { Github } from '../../utils/github';

export default function Hero() {
    const [me, setMe] = useState(null);
    useEffect(() => {
        (async () => {
            setMe(await new Github().me())
        })();
    }, []);
    return (
        <>
            <div className={styles.container}>
                <Text h1 weight='bold'>
                    Hellow 🧋
                </Text>
                <Text h2 size={40} span>
                    I&lsquo;m {me?.name}
                </Text>
                <Text size={20} span>
                    {me?.bio}
                </Text>
            </div>
        </>
    );
}
