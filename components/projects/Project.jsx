import { Card, Col, Row, Button, Text, Link } from "@nextui-org/react";
import { BsGithub } from 'react-icons/bs';

export const Project = ({ name, description, source, cover, isNew }) => {
    return (
        <Card isHoverable isPressable css={{ w: "100%", h: "400px" }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    {isNew ? (
                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                            New
                        </Text>
                    ) : (
                        <></>
                    )}

                    <Text h3 color="black">
                        {name}
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
                <Card.Image
                    src={cover}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    alt={description}
                />
            </Card.Body>
            <Card.Footer
                isBlurred
                css={{
                    position: "absolute",
                    bgBlur: "#ffffff66",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                <Row>
                    <Col>
                        <Text color="#000" size={12}>
                            {description}
                        </Text>
                    </Col>
                    <Col>
                        <Row justify="flex-end">
                            <Link href={source}>
                                <Button flat auto rounded color="secondary">
                                    <Text
                                        css={{ color: "inherit" }}
                                        size={12}
                                        weight="bold"
                                        transform="uppercase"
                                    >
                                        <BsGithub />
                                    </Text>
                                </Button>
                            </Link>
                        </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );

}