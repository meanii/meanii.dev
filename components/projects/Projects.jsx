import { Grid } from "@nextui-org/react";
import { CONSTANT } from "../../constant/index.mjs";
import { Project } from "./Project";

export default function Projects() {

    return (
        <Grid.Container gap={2} justify="center">
            {CONSTANT.PROJECTS.map((project, index) => {
                return (
                    <Grid xs={12} sm={4} key={index}>
                        <Project {...project} />
                    </Grid>
                )
            })}

        </Grid.Container>
    );
}
