import React, {ChangeEvent, SetStateAction, useEffect, useState} from "react";
import {Box, Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export enum BookMode {
    CREATE = "Create",
    EDIT = "Edit",
    VIEW = "View",
}

export type Book = {
    isbn: string;
    title: string;
    author: string;
    copies: number;
}

export type BookAction = {
    setIsDrawerOpen: React.Dispatch<SetStateAction<boolean>>
}

type Props = {
    mode: BookMode;
    book: Book;
    action: BookAction;
}

type ErrorMsgType = {
    isbnError: string;
    titleError: string;
    authorError: string;
    copiesError: string;
}

const CreateEditViewBook = ({mode, book, action} : Props) => {
    const [newBook, setNewBook] = useState<Book>({
        isbn: "", title: "", author: "", copies: 0
    });
    const [error, setError] = useState<ErrorMsgType>({
        isbnError: " ", titleError: " ", authorError: " ", copiesError: " "
    })

    useEffect(() => {
        setNewBook({...book})
    }, [book])

    const handleClear = () => {
        setNewBook((prevState) => {
            return {
                ...prevState,
                "isbn": (mode === BookMode.EDIT) ? prevState.isbn : "",
                "title": "",
                "author": "",
                "copies": 0
            }
        })
    }

    return (
        <>
            <Box
                position={"relative"}
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                borderLeft={"2px solid white"}
            >
                <Box
                    position={"absolute"}
                    top={12}
                    right={5}
                >
                    <IconButton
                        onClick={() => {action.setIsDrawerOpen(false)}}
                    >
                        <CancelIcon
                            sx={{color: "white"}}
                        />
                    </IconButton>
                </Box>
                <Grid
                    container
                    rowSpacing={3}
                    pt={2} pl={4} pr={4}
                >
                    <Grid item xs={12} pb={1}>
                        <Typography variant={"h5"} sx={{color: "white", fontWeight: "bold"}}>{mode.valueOf()} Book</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            InputProps={{
                                readOnly: (mode === BookMode.VIEW || mode === BookMode.EDIT),
                            }}
                            id={"book-isbn"}
                            className={"lms-input-field"}
                            name={"book-isbn"}
                            label={"Book ISBN"}
                            fullWidth
                            variant={"standard"}
                            value={newBook.isbn}
                            helperText={(mode === BookMode.VIEW || mode === BookMode.EDIT) ? "Read Only" : error.isbnError}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                const {value} = event.target;
                                if (value.trim() === "") {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "isbnError": "Book isbn is required"}
                                    })
                                } else if (!/^\d{3}-\d-\d{2}-\d{6}-\d$/.test(value)) {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "isbnError": "Enter valid book isbn number"}
                                    })
                                } else {
                                    setError((prevState) => {
                                        return {...prevState, "isbnError": " "}
                                    })
                                }
                                setNewBook((prevState: Book) => {
                                    return {...prevState, "isbn": value}
                                })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id={"book-title"}
                            className={"lms-input-field"}
                            name={"book-title"}
                            label={"Book Title"}
                            fullWidth
                            variant={"standard"}
                            value={newBook.title}
                            helperText={error.titleError}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                const {value} = event.target;
                                if (value.trim() === "") {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "titleError": "Book title is required"}
                                    })
                                } else if (!/^[A-Za-z][A-Za-z. ]+$/.test(value)) {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "titleError": "Enter valid book title"}
                                    })
                                } else {
                                    setError((prevState) => {
                                        return {...prevState, "titleError": " "}
                                    })
                                }
                                setNewBook((prevState: Book) => {
                                    return {...prevState, "title": value}
                                })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id={"book-author"}
                            className={"lms-input-field"}
                            name={"book-author"}
                            label={"Book Author"}
                            fullWidth
                            variant={"standard"}
                            value={newBook.author}
                            helperText={error.authorError}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                const {value} = event.target;
                                if (value.trim() === "") {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "authorError": "Book author is required"}
                                    })
                                } else if (!/^[A-Za-z][A-Za-z. ]+$/.test(value)) {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "authorError": "Enter valid book author"}
                                    })
                                } else {
                                    setError((prevState) => {
                                        return {...prevState, "authorError": " "}
                                    })
                                }
                                setNewBook((prevState: Book) => {
                                    return {...prevState, "author": value}
                                })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id={"book-copies"}
                            className={"lms-input-field"}
                            name={"book-copies"}
                            label={"Book Copies"}
                            fullWidth
                            variant={"standard"}
                            value={newBook.copies}
                            helperText={(mode === BookMode.VIEW || mode === BookMode.EDIT) ? "Read Only" : error.isbnError}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                const {value} = event.target;
                                if (value.trim() === "") {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "isbnError": "Book isbn is required"}
                                    })
                                } else if (!/^\d{3}-\d-\d{2}-\d{6}-\d$/.test(value)) {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "isbnError": "Enter valid book isbn number"}
                                    })
                                } else {
                                    setError((prevState) => {
                                        return {...prevState, "isbnError": " "}
                                    })
                                }
                                setNewBook((prevState: Book) => {
                                    return {...prevState, "isbn": value}
                                })
                            }}
                        />
                    </Grid>
                </Grid>
                {
                    (mode === BookMode.CREATE || mode === BookMode.EDIT) &&
                    <Box
                        display={"flex"}
                        justifyContent={"flex-end"}
                        gap={2}
                        pb={2} pt={2} pr={4}
                    >
                        <Button
                            variant={"contained"}
                            color={"inherit"}
                            sx={{
                                fontWeight: "bold"
                            }}
                            onClick={handleClear}
                        >
                            Clear
                        </Button>
                        <Button
                            variant={"contained"}
                            sx={{fontWeight: "bold"}}
                        >
                            {mode.valueOf()} Book
                        </Button>
                    </Box>
                }
            </Box>
        </>
    )
}

export default CreateEditViewBook;