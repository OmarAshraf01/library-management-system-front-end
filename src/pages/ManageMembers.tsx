import {Box, Button, Grid, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import colorConfigs from "../configs/colorConfigs";
import Footer from "../components/Footer";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
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
                            sx={{color: "white"}}
                        />
                    </IconButton>
                </Link>
            </Box>
            <Box
                bgcolor={colorConfigs.mainBg}
                minHeight={"100vh"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                >
                    <Grid maxWidth={"1200px"} container pt={2} pl={3} pr={3}>
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
                        <Grid item xs={12} pt={4}>
                            <Box
                                display={"flex"}
                                gap={2}
                                flexWrap={"wrap"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <TextField
                                    id="search-field"
                                    label="Search members"
                                    type="text"
                                    variant="standard"
                                    sx={{
                                        marginRight: "30px",
                                        borderBottom: "2px solid white"
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchIcon sx={{color: "white"}}/>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <Button
                                    sx={{
                                        height: "35px",
                                        fontWeight: "bold"
                                    }}
                                    variant={"contained"}
                                >
                                    Add Member
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Footer/>
        </>
    );
}

export default ManageMembers;