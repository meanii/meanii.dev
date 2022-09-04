import { Box } from "./Box";

export const Layout = ({ children }) => (
    <Box
        css={{
            maxW: "100%",
            position: "relative"
        }}
    >
        {children}
    </Box>
);
