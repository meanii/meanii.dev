import { Button, Text } from '@nextui-org/react';
import { Layout } from '../components/atoms/Layout';
import Hero from '../components/hero/Hero';
import Header from '../components/navbar/Header';
import Projects from '../components/projects/Projects';
import { Skills } from '../components/skills/Skills';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Layout css={{ m: 6 }}>
        <Header />

        <Hero />

        {/* projects sections */}
        <div className={styles.projects}>
          <Text
            h1
            size={40}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
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
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            Skills
          </Text>
          <Skills />
        </div>

      </Layout>
    </div>
  )
}
