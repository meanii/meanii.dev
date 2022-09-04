import { Navbar, Link, Text, Avatar, Dropdown, Button, Spacer } from "@nextui-org/react";
import { AcmeLogo } from "../atoms/AcmeLogo";
import { MdDarkMode } from 'react-icons/md';



export default function App() {
    const collapseItems = [
        "About",
        "Blog",
        "Project",
        "Contact"
    ];

    return (
        <Navbar isBordered variant="floating">
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >
                <AcmeLogo />
                <Text b color="inherit" hideIn="xs">
                    ACME
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="secondary"
                hideIn="xs"
                variant="highlight-rounded"
            >
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link isActive href="#">
                    Blog
                </Navbar.Link>
                <Navbar.Link href="#">Project</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content
                css={{
                    "@xs": {
                        w: "12%",
                        jc: "flex-end",
                    },
                }}
            >
                <Button shadow animated color="gradient" auto rounded flat>
                    <Text weight="bold"></Text>
                    <Text weight="bold">❤️</Text>
                    <Spacer x={0.2}></Spacer>
                    <Text weight="bold">Sponser</Text>
                </Button>
            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item}
                        activeColor="secondary"
                        isActive={index === 2}
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}
