import { Text } from '@nextui-org/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Layout } from '../components/atoms/Layout';
import Hero from '../components/hero/Hero';
import Header from '../components/navbar/Header';
import Projects from '../components/projects/Projects';
import { Skills } from '../components/skills/Skills';
import styles from '../styles/Home.module.css';
import { Github } from '../utils/github';

export default function Home() {
    const [me, setMe] = useState(null);
    useEffect(() => {
        (async () => {
            setMe(await new Github().me());
        })();
    }, []);

    return (
        <div>
            <Head>
                <meta property='og:url' content={`https://www.meanii.online`} />
                <title>anil&lsquo;s portfolio 🧋</title>
                <link rel='shortcut icon' href="https://avatars.githubusercontent.com/u/62683938?v=4" />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <meta
                    property='og:description'
                    content='Highly motivated, self-starting developer seeking to launch a career building web applications and and linux services.
'
                />
                <meta property='og:image' content="https://avatars.githubusercontent.com/u/62683938?v=4" />
                <meta
                    property='og:site_name'
                    content={`anil's portfolio`}
                />
            </Head>
            <Layout css={{ m: 6 }}>
                {/* init main components */}
                <Header />
                <Hero />

                {/* projects sections */}
                <div className={styles.projects}>
                    <Text
                        h1
                        size={40}
                        css={{
                            textGradient: '45deg, $blue600 -20%, $pink600 50%',
                        }}
                        weight='bold'>
                        Featured Projects
                    </Text>
                    <Projects />
                </div>

                {/* Skills section */}
                <div className={styles.skills}>
                    <Text
                        h1
                        size={40}
                        css={{
                            textGradient:
                                '45deg, $yellow600 -20%, $red600 100%',
                        }}
                        weight='bold'>
                        Skills
                    </Text>
                    <Skills />
                </div>
            </Layout>
        </div>
    );
}
