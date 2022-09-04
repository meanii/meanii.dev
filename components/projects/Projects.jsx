import { Grid } from "@nextui-org/react";
import { Project } from "./Project";

export default function Projects() {
    return (
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={4}>
                <Project />
            </Grid>
            <Grid xs={12} sm={4}>
                <Project />
            </Grid>
            <Grid xs={12} sm={4}>
                <Project />
            </Grid>
            <Grid xs={12} sm={4}>
                <Project />
            </Grid>
            <Grid xs={12} sm={4}>
                <Project />
            </Grid>
            <Grid xs={12} sm={4}>
                <Project />
            </Grid>
        </Grid.Container>
    );
}
