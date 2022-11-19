import { Navbar, Link, Text, Button, Spacer } from '@nextui-org/react';
import { User } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Github } from '../../utils/github';

export default function App() {
    const collapseItems = ['About', 'Blog', 'Project', 'Contact'];
    const [me, setMe] = useState(null);
    useEffect(() => {
        (async () => {
            setMe(await new Github().me())
        })();
    }, []);

    return (
        <Navbar isBordered variant='floating'>
            <Navbar.Toggle showIn='xs' />
            <Navbar.Brand
                css={{
                    '@xs': {
                        w: '20%',
                    },
                }}>
                <User
                    src={me?.avatar_url}
                    name={me?.name}
                    zoomed>
                    <User.Link href={me?.html_url}>
                        @{me?.login}
                    </User.Link>
                </User>
            </Navbar.Brand>

            <Navbar.Content
                css={{
                    '@xs': {
                        w: '12%',
                        jc: 'flex-end',
                    },
                }}>
                <Link href='https://github.com/sponsors/meanii'>
                    <Button shadow animated color='gradient' auto rounded flat>
                        <Text weight='bold'></Text>
                        <Text weight='bold'>❤️</Text>
                        <Spacer x={0.2}></Spacer>
                        <Text weight='bold'>Sponser</Text>
                    </Button>
                </Link>
            </Navbar.Content>  

            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item}
                        activeColor='secondary'
                        isActive={index === 2}>
                        <Link
                            color='inherit'
                            css={{
                                minWidth: '100%',
                            }}
                            href='#'>
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}
