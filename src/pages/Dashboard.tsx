import {Box, Grid, ThemeProvider, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import colorConfigs from "../configs/colorConfigs";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SwipeUpOutlinedIcon from '@mui/icons-material/SwipeUpOutlined';

const Dashboard = () => {
    return (
        <>
            <Box
                bgcolor={colorConfigs.mainBg}
                minHeight={"100vh"}
                paddingBottom={"70px"}
            >
                <Grid container pt={2} pb={3} pl={1} pr={1}>
                    <Grid item xs={12}>
                        <Typography
                            variant={"h5"}
                            textAlign={"center"}
                        >
                            Welcome to Library Management System
                        </Typography>
                    </Grid>
                </Grid>
                <Grid pl={12} pr={12} container rowSpacing={4}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                        >
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: "#088F8F"
                                }}
                                to={"/manage-members"}
                            >
                                <Box
                                    bgcolor={"white"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    flexWrap={"wrap"}
                                    alignContent={"space-around"}
                                    height={"160px"}
                                    width={"200px"}
                                    borderRadius={"8px"}
                                >
                                    <PeopleAltOutlinedIcon
                                        sx={{
                                            fontSize: "100px",
                                            width: "100%"
                                        }}
                                    />
                                    <Typography
                                        variant={"h6"}
                                    >
                                        Manage Members
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                        >
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: "#088F8F"
                                }}
                                to={"/manage-books"}>
                                <Box
                                    bgcolor={"white"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    flexWrap={"wrap"}
                                    alignContent={"space-around"}
                                    height={"160px"}
                                    width={"200px"}
                                    borderRadius={"8px"}
                                >
                                    <AutoStoriesOutlinedIcon
                                        sx={{
                                            fontSize: "100px",
                                            width: "100%"
                                        }}
                                    />
                                    <Typography
                                        variant={"h6"}
                                    >
                                        Manage Books
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                        >
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: "#088F8F"
                                }}
                                to={"/issue-books"}>
                                <Box
                                    bgcolor={"white"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    flexWrap={"wrap"}
                                    alignContent={"space-around"}
                                    height={"160px"}
                                    width={"200px"}
                                    borderRadius={"8px"}
                                >
                                    <ShoppingCartOutlinedIcon
                                        sx={{
                                            fontSize: "100px",
                                            width: "100%"
                                        }}
                                    />
                                    <Typography
                                        variant={"h6"}
                                    >
                                        Issue Books
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                        >
                            <Link
                                style={{
                                    textDecoration: 'none',
                                    color: "#088F8F"
                                }}
                                to={"/handle-returns"}>
                                <Box
                                    bgcolor={"white"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    flexWrap={"wrap"}
                                    alignContent={"space-around"}
                                    height={"160px"}
                                    width={"200px"}
                                    borderRadius={"8px"}
                                >
                                    <SwipeUpOutlinedIcon
                                        sx={{
                                            fontSize: "100px",
                                            width: "100%"
                                        }}
                                    />
                                    <Typography
                                        variant={"h6"}
                                    >
                                        Handle Returns
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Typography
                    pt={2} pl={5} pr={5}
                    textAlign={"justify"}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque beatae cumque deserunt dolorum,
                    error eum facere fugiat illum, incidunt, minus molestias natus nesciunt quia quos recusandae sequi
                    unde? Aspernatur? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur
                    distinctio, error incidunt iure laboriosam minus quas repellat voluptas voluptate. Aperiam corporis
                    dicta, dolores ducimus earum magnam officiis quae sit! Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Atque blanditiis debitis delectus dolor earum eligendi facilis, fugit, harum illum
                    laboriosam laudantium molestias nihil omnis optio placeat quas ullam ut, vero! Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Aspernatur autem corporis dolor ex iure optio quaerat quisquam,
                    sint. Assumenda ea earum error eveniet necessitatibus nulla qui rem sequi tenetur voluptatem! Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolore eveniet in porro. Architecto
                    at, officia! Doloremque harum incidunt itaque magnam rem vel veniam vero. Amet debitis dolorum omnis
                    saepe.
                </Typography>
            </Box>
            <Footer/>
        </>
    )
}

export default Dashboard;