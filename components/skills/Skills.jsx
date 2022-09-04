import { Button, Container, Spacer } from "@nextui-org/react"
import { CONSTANT } from "../../constant/index.mjs";


export const Skills = () => {
    return (
        <Container gap={0} justify="center" css={{ d: 'flex', flexWrap: 'wrap' }}>
            {CONSTANT.SKILLS.map((skill, index) => {
                return (
                    <>
                        <Button auto flat color="secondary" rounded key={index}>
                            {<skill.icon />} <Spacer x={0.2} /> {skill.name}
                        </Button>
                        <Spacer x={1} y={2.5} />
                    </>
                )
            })}
        </Container>
    )
}