import { Text } from "@nextui-org/react";
import styles from '../../styles/Hero.module.css'

export default function Hero() {
    return (
        <>
            <div className={styles.container}>
                <Text h1 weight="bold">
                    Hellow 🧋
                </Text>
                <Text h2 size={40} span>
                    I'm anil
                </Text>
                <Text  size={20} span>
                Highly motivated, self-starting developer seeking to launch a career building web applications and and linux services.
                </Text>
            </div>
        </>
    )
}