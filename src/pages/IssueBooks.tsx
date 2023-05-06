import {Box, Grid, IconButton, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';
import colorConfigs from "../configs/colorConfigs";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Footer from "../components/Footer";

const IssueBooks = () => {
    return (
        <>
            <Box
                position={"fixed"}
                top={12}
                right={5}
            >
                <Link to={"/"}>
                    <IconButton>
                        <CancelIcon
                            sx={{color: "darkred"}}
                        />
                    </IconButton>
                </Link>
            </Box>
            <Box
                bgcolor={colorConfigs.mainBg}
                minHeight={"100vh"}
            >
                <Grid container pt={2}>
                    <Grid
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        item
                        xs={12}>
                        <ShoppingCartOutlinedIcon
                            sx={{color: "white"}}
                        />
                        <Typography
                            color={"white"}
                            pl={1}
                            fontWeight={"bold"}
                            variant={"h5"}
                        >
                            Issue Books
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>
        </>
    )
}

export default IssueBooks;