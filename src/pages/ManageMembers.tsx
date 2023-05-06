import {Box, Button, Grid, IconButton, InputAdornment, TextField, Tooltip, Typography} from "@mui/material";
import colorConfigs from "../configs/colorConfigs";
import Footer from "../components/Footer";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const rows = [
    { id: 1, name: 'Snow', address: 'Jon dfdf dfdsaf dfadf dasfd', contact: 35 },
    { id: 2, name: 'Lannister', address: 'Cersei', contact: "089-3456789" },
    { id: 3, name: 'Lannister', address: 'Jaime', contact: 45 },
    { id: 4, name: 'Stark', address: 'Arya', contact: 16 },
    { id: 5, name: 'Targaryen', address: 'Daenerys', contact: null },
    { id: 6, name: 'Melisandre', address: null, contact: 150 },
    { id: 7, name: 'Clifford', address: 'Ferrara', contact: 44 },
    { id: 8, name: 'Frances', address: 'Rossini', contact: 36 },
    { id: 9, name: 'Roxie', address: 'Harvey', contact: 65 },
];

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'UUID',
        type: 'string',
        minWidth: 150,
        sortable: true,
        disableColumnMenu: true,
        flex: 1
    },
    {
        field: 'name',
        headerName: 'Name',
        type: 'string',
        minWidth: 150,
        sortable: true,
        disableColumnMenu: true,
        flex: 1
    },
    {
        field: 'address',
        headerName: 'Address',
        type: 'string',
        minWidth: 200,
        sortable: true,
        disableColumnMenu: true,
        flex: 1
    },
    {
        field: 'contact',
        headerName: 'Contact',
        type: 'string',
        minWidth: 110,
        sortable: true,
        disableColumnMenu: true,
        flex: 1
    },
    {
        field: 'actions',
        headerName: 'Actions',
        type: "actions",
        sortable: false,
        disableColumnMenu: true,
        minWidth: 150,
        flex: 1,
        renderCell: (params: any) => {
            return (
                <>
                    <Tooltip title={"view member"}>
                        <IconButton>
                            <VisibilityIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={"edit member"}>
                        <IconButton>
                            <EditIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={"delete member"}>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </>
            );
        }
    },
];

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
                        <Grid item xs={12} pt={4}>
                            <Box
                                border={"2px solid white"}
                                borderRadius={"6px"}
                            >
                                <Typography
                                    pl={2} pt={1} pb={1}
                                    bgcolor={"white"}
                                >
                                    Member List
                                </Typography>
                                <Box
                                    style={{
                                        height: 400,
                                        width: "100%",
                                        backgroundColor: "white"
                                    }}
                                >
                                    <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        initialState={{
                                            pagination: {
                                                paginationModel: {
                                                    page: 0,
                                                    pageSize: 5,
                                                },
                                            },
                                        }}
                                        pageSizeOptions={[5, 10, 15]}
                                        disableRowSelectionOnClick
                                    />
                                </Box>
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