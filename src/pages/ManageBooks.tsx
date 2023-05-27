import {Box, Button, Drawer, Grid, IconButton, InputAdornment, TextField, Tooltip, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';
import colorConfigs from "../configs/colorConfigs";
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import Footer from "../components/Footer";
import {useState} from "react";
import CreateEditViewBook, {Book, BookMode} from "../components/CreateEditViewBook";
import SearchIcon from "@mui/icons-material/Search";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Member} from "../components/CreateEditViewMember";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const rows: Book[] = [
    {isbn: "123", title: "ASADASD", author: "dads", copies: 10},
    {isbn: "234", title: "sadasd", author: "asdasd", copies: 10},
    {isbn: "456", title: "dssa", author: "asdasdasd", copies: 10},
    {isbn: "567", title: "sadasd", author: "asdasd", copies: 10},
    {isbn: "678", title: "asdasd", author: "asdasdasd", copies: 10},
    {isbn: "789", title: "asdasd", author: "sdasdsad", copies: 10},
    {isbn: "890", title: "asdasd", author: "asdasdasd", copies: 10},
    {isbn: "235", title: "asdasd", author: "asdasdasd", copies: 10},
    {isbn: "678", title: "asdasd", author: "sdasdasd", copies: 10},
]

const ManageBooks = () => {
    const [selectedBook, setSelectedBook] = useState<Book>({
        isbn: "", title: "", author: "", copies: 0
    });
    const [openNewBook, setOpenNewBook] = useState<boolean>(false);
    const [openEditBook, setOpenEditBook] = useState<boolean>(false);
    const [openViewBook, setOpenViewBook] = useState<boolean>(false);

    const columns: GridColDef[] = [
        {
            field: 'isbn',
            headerName: 'ISBN',
            type: 'string',
            minWidth: 100,
            renderHeader: (params) => {
                return <strong>{params.colDef.headerName}</strong>
            },
            sortable: true,
            disableColumnMenu: true,
            flex: 1
        },
        {
            field: 'title',
            headerName: 'Title',
            type: 'string',
            minWidth: 120,
            renderHeader: (params) => {
                return <strong>{params.colDef.headerName}</strong>
            },
            sortable: true,
            disableColumnMenu: true,
            flex: 1
        },
        {
            field: 'author',
            headerName: 'Author',
            type: 'string',
            minWidth: 150,
            renderHeader: (params) => {
                return <strong>{params.colDef.headerName}</strong>
            },
            sortable: true,
            disableColumnMenu: true,
            flex: 1
        },
        {
            field: 'copies',
            headerName: 'Copies',
            type: 'number',
            minWidth: 110,
            renderHeader: (params) => {
                return <strong>{params.colDef.headerName}</strong>
            },
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
            renderHeader: (params) => {
                return <strong>{params.colDef.headerName}</strong>
            },
            flex: 1,
            renderCell: (params: any) => {
                return (
                    <>
                        <Tooltip title={"view book"}>
                            <IconButton
                                onClick={() => {
                                    setSelectedBook((prevState: Book) => {return {...prevState,
                                        "isbn": params.row.isbn,
                                        "title": params.row.title,
                                        "author": params.row.author,
                                        "copies": params.row.copies
                                    }});
                                    setOpenViewBook(true);
                                }}
                            >
                                <VisibilityIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"edit book"}>
                            <IconButton
                                onClick={() => {
                                    setSelectedBook((prevState: Book) => {return {...prevState,
                                        "isbn": params.row.isbn,
                                        "title": params.row.title,
                                        "author": params.row.author,
                                        "copies": params.row.copies
                                    }});
                                    setOpenEditBook(true);
                                }}
                            >
                                <EditIcon/>
                            </IconButton>
                        </Tooltip>
                    </>
                );
            }
        },
    ];

    return (
        <>
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
                                <AutoStoriesOutlinedIcon
                                    sx={{color: "white"}}
                                />
                                <Typography
                                    color={"white"}
                                    pl={1}
                                    fontWeight={"bold"}
                                    variant={"h5"}
                                >
                                    Manage Books
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
                                        label="Search books"
                                        type="text"
                                        variant="standard"
                                        sx={{
                                            marginRight: "30px"
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
                                        onClick={() => {
                                            setSelectedBook({
                                                isbn: "",
                                                title: "",
                                                author: "",
                                                copies: 0
                                            });
                                            setOpenNewBook(true);
                                        }}
                                    >
                                        Add Book
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item xs={12} pt={3} pb={7}>
                                <Box
                                    border={"2px solid white"}
                                    borderRadius={"6px"}
                                >
                                    <Typography
                                        pl={2} pt={1} pb={1}
                                        bgcolor={"white"}
                                    >
                                        Book List
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
                                            getRowId={(row) => {
                                                return row.isbn;
                                            }}
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
                <Drawer
                    open={openNewBook}
                    anchor={"right"}
                    onClose={() => setOpenNewBook(false)}
                >
                    <Box
                        maxWidth={"400px"}
                        role={"presentation"}
                        height={"100vh"}
                        bgcolor={colorConfigs.mainBg}
                    >
                        <CreateEditViewBook
                            book={selectedBook}
                            mode={BookMode.CREATE}
                            action={{
                                setIsDrawerOpen: setOpenNewBook
                            }}
                        />
                    </Box>
                </Drawer>
                <Drawer
                    open={openViewBook}
                    anchor={"right"}
                    onClose={() => setOpenViewBook(false)}
                >
                    <Box
                        maxWidth={"400px"}
                        role={"presentation"}
                        height={"100vh"}
                        bgcolor={colorConfigs.mainBg}
                    >
                        <CreateEditViewBook
                            book={selectedBook}
                            mode={BookMode.VIEW}
                            action={{
                                setIsDrawerOpen: setOpenViewBook
                            }}
                        />
                    </Box>
                </Drawer>
                <Drawer
                    open={openEditBook}
                    anchor={"right"}
                    onClose={() => setOpenEditBook(false)}
                >
                    <Box
                        maxWidth={"400px"}
                        role={"presentation"}
                        height={"100vh"}
                        bgcolor={colorConfigs.mainBg}
                    >
                        <CreateEditViewBook
                            book={selectedBook}
                            mode={BookMode.EDIT}
                            action={{
                                setIsDrawerOpen: setOpenEditBook
                            }}
                        />
                    </Box>
                </Drawer>
            </>
        </>
    );
}

export default ManageBooks;