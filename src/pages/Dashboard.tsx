import {Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import colorConfigs from "../configs/colorConfigs";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SwipeUpOutlinedIcon from '@mui/icons-material/SwipeUpOutlined';
import CircleIcon from '@mui/icons-material/Circle';

const Dashboard = () => {
    return (
        <>
            <Box
                bgcolor={colorConfigs.mainBg}
                minHeight={"100vh"}
                paddingBottom={"45px"}
            >
                <Grid container pt={2} pb={3} pl={1} pr={1}>
                    <Grid item xs={12}>
                        <Typography
                            sx={{
                                textDecoration: "underline",
                                color: "white",
                                fontWeight: "bold"
                            }}
                            variant={"h5"}
                            textAlign={"center"}
                        >
                            Welcome to Library Management System
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography pt={2} pl={2} pr={2} color={"white"} textAlign={"center"} fontStyle={"italic"}>
                            A system that enables library administrator to manage members, manage books, manage issue
                            book details and handle returns
                        </Typography>
                    </Grid>
                </Grid>
                <Grid pl={11} pr={11} container rowSpacing={4}>
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
                                    id={"manage-members"}
                                    bgcolor={"white"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    flexWrap={"wrap"}
                                    alignContent={"space-around"}
                                    height={"160px"}
                                    width={"200px"}
                                    borderRadius={"8px"}
                                    sx={{
                                        transition: "background-color 0.7s, color 0.7s",
                                    }}
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
                                    id={"manage-books"}
                                    bgcolor={"white"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    flexWrap={"wrap"}
                                    alignContent={"space-around"}
                                    height={"160px"}
                                    width={"200px"}
                                    borderRadius={"8px"}
                                    sx={{
                                        transition: "background-color 0.7s, color 0.7s",
                                    }}
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
                                    id={"issue-books"}
                                    bgcolor={"white"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    flexWrap={"wrap"}
                                    alignContent={"space-around"}
                                    height={"160px"}
                                    width={"200px"}
                                    borderRadius={"8px"}
                                    sx={{
                                        transition: "background-color 0.7s, color 0.7s",
                                    }}
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
                                    id={"handle-returns"}
                                    bgcolor={"white"}
                                    display={"flex"}
                                    justifyContent={"center"}
                                    flexWrap={"wrap"}
                                    alignContent={"space-around"}
                                    height={"160px"}
                                    width={"200px"}
                                    borderRadius={"8px"}
                                    sx={{
                                        transition: "background-color 0.7s, color 0.7s",
                                    }}
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
                <Box
                    pt={2} pl={5} pr={5}
                    textAlign={"justify"}
                    color={"white"}
                >
                    <Typography fontWeight={"bold"}>
                        Highlighted features of the system,
                    </Typography>
                    <List dense={true}>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{fontSize: "10px", color: "white"}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary="Members are registered to the system by UUID, and no two members can have the same contact number."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{fontSize: "10px", color: "white"}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary="Books are registered to the system by international standard book number (isbn)."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{fontSize: "10px", color: "white"}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary="When members take books from the library they will receive an issue note."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{fontSize: "10px", color: "white"}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary="The issue note contains all the take away book ISBNs along with the member UUID."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{fontSize: "10px", color: "white"}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary="All issue notes have unique issue id to uniquely identify them when the books are returned."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{fontSize: "10px", color: "white"}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary="Issue note can only have maximum 3 distinct ISBNs."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{fontSize: "10px", color: "white"}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary="A member cannot take the same book from the system twice at the same time or at two different times (with another issue note)."
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <CircleIcon sx={{fontSize: "10px", color: "white"}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary="A member can only take maximum of 3 different books from the system. If he/she needs another, he/she must return a book that he/she already got."
                            />
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Footer/>
        </>
    )
}

export default Dashboard;