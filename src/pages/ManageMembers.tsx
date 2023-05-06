import {Box, Grid, IconButton, Typography} from "@mui/material";
import colorConfigs from "../configs/colorConfigs";
import Footer from "../components/Footer";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import {Link} from "react-router-dom";

const ManageMembers = () => {
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
                        <PeopleAltOutlinedIcon
                            sx={{color: "white"}}
                        />
                        <Typography
                            color={"white"}
                            pl={1}
                            fontWeight={"bold"}
                            variant={"h5"}
                        >
                            Manage Members
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>
        </>
    );
}

export default ManageMembers;