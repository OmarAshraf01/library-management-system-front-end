import React, {ChangeEvent, SetStateAction, useEffect, useState} from "react";
import {ToastData} from "./Toast";
import {Box, Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SwipeUpOutlinedIcon from '@mui/icons-material/SwipeUpOutlined';

type Props = {
    isDrawerOpen: React.Dispatch<SetStateAction<boolean>>;
    onConfirm: (returnNote: ReturnNote) => void;
}

type ErrorMsgType = {
    memberIdError: string;
    issueNoteIdError: string;
    bookIsbnError: string;
}

export type ReturnNote = {
    memberId: string,
    returnItems: {
        issueNoteId: number,
        isbn: string
    }[]
}

const Returns = ({isDrawerOpen, onConfirm}: Props) => {
    const [memberId, setMemberId] = useState<string>("");
    const [issueNoteId, setIssueNoteId] = useState<number>(0);
    const [bookISBN, setBookISBN] = useState<string>("");
    const [issueNoteIdArray, setIssueNoteIdArray] = useState<number[]>([]);
    const [bookISBNArray, setBookISBNArray] = useState<string[]>([]);
    const [error, setError] = useState<ErrorMsgType>({memberIdError: " ", issueNoteIdError: " ", bookIsbnError: " "});
    const [toastConfig, setToastConfig] = useState<ToastData>({ open: false, message: "", type: "success" });

    useEffect(() => {
        setTimeout(() => {
            // @ts-ignore
            document.getElementById("return-member-id").focus();
        }, 500)
    }, [])

    const handleAddIssueNoteItems = () => {
        if (error.issueNoteIdError !== " ") {
            // @ts-ignore
            document.getElementById("issue-note-id").focus();
            return;
        }
        if (error.bookIsbnError !== " ") {
            // @ts-ignore
            document.getElementById("return-book-isbn").focus();
            return;
        }
        if (issueNoteId === 0 || !bookISBN) {
            if (!bookISBN) {
                // @ts-ignore
                document.getElementById("return-book-isbn").focus();
                setError((prevState) => {
                    return {...prevState, "bookIsbnError": "Book ISBN is required"}
                })
            }
            if (issueNoteId === 0) {
                // @ts-ignore
                document.getElementById("issue-note-id").focus();
                setError((prevState) => {
                    return {...prevState, "issueNoteIdError": "Issue note id is required"}
                })
            }
            return;
        }
        setIssueNoteIdArray((prevState) => {return [...prevState, issueNoteId]});
        setBookISBNArray((prevState) => {return [...prevState, bookISBN]});
        setIssueNoteId(0);
        setBookISBN("");
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
                        onClick={() => {isDrawerOpen(false)}}
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
                    <Grid display={"flex"} alignItems={"center"} item xs={12} pb={1}>
                        <SwipeUpOutlinedIcon sx={{color: "white"}}/>
                        <Typography pl={1} variant={"h5"} sx={{color: "white", fontWeight: "bold"}}>Handle Returns</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id={"return-member-id"}
                            className={"lms-input-field"}
                            name={"member-id"}
                            label={"Member ID"}
                            fullWidth
                            variant={"standard"}
                            error={(error.memberIdError !== " ")}
                            value={memberId}
                            helperText={error.memberIdError}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const {value} = event.target;
                                if (value.trim() === "") {
                                    setError((prevState) => {
                                        return {...prevState, "memberIdError": "Member UUID is required"}
                                    })
                                } else if (!/^[A-Fa-f\d]{8}(-[A-Fa-f\d]{4}){3}-[A-Fa-f\d]{12}$/.test(value)) {
                                    setError((prevState) => {
                                        return {...prevState, "memberIdError": "Enter valid member uuid"}
                                    })
                                } else {
                                    setError((prevState) => {
                                        return {...prevState, "memberIdError": " "}
                                    })
                                }
                                setMemberId(value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id={"issue-note-id"}
                            className={"lms-input-field"}
                            name={"issue-note-id"}
                            label={"Issue Note Id"}
                            fullWidth
                            variant={"standard"}
                            type={"number"}
                            value={(issueNoteId === 0) ? "" : issueNoteId}
                            inputProps={{min: "0", max: "10000"}}
                            helperText={error.issueNoteIdError}
                            onKeyDown={(event) => {
                                if (event.key === "e" || event.key === "-" || event.key === "." || event.key === "+" || event.key === "E") {
                                    event.preventDefault();
                                }
                            }}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                const {value} = event.target;
                                if (value === "") {
                                    setIssueNoteId(0);
                                    setError((prevState) => {
                                        return {...prevState, "issueNoteIdError": "Issue note id is required"}
                                    })
                                } else if (!isNaN(Number(value)) && Number(value) <= 10000) {
                                    if (issueNoteIdArray.includes(Number(value))) {
                                        setError((prevState) => {
                                            return {...prevState, "issueNoteIdError": "Return item list already includes this issue note id."}
                                        });
                                    } else {
                                        setError((prevState) => {
                                            return {...prevState, "issueNoteIdError": " "}
                                        })
                                    }
                                    setIssueNoteId(Number(value));
                                }
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id={"return-book-isbn"}
                            className={"lms-input-field"}
                            name={"return-book-isbn"}
                            label={"Book ISBN"}
                            fullWidth
                            variant={"standard"}
                            error={error.bookIsbnError !== " "}
                            value={bookISBN}
                            helperText={error.bookIsbnError}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" && bookISBN !== "" && error.bookIsbnError === " ") {
                                    setBookISBNArray((prevState) => {return [...prevState, bookISBN]})
                                    setBookISBN("")
                                }
                            }}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                const {value} = event.target;
                                if (value.trim() === "") {
                                    setError((prevState) => {
                                        return {...prevState, "bookIsbnError": "Book ISBN is required"}
                                    });
                                } else if (!/^\d{3}-\d-\d{2}-\d{6}-\d$/.test(value)) {
                                    setError((prevState) => {
                                        return {...prevState, "bookIsbnError": "Enter a valid book ISBN"}
                                    });
                                } else if (bookISBNArray.includes(value)) {
                                    setError((prevState) => {
                                        return {...prevState, "bookIsbnError": "Return item list already includes this Book ISBN."}
                                    });
                                } else {
                                    setError((prevState) => {
                                        return {...prevState, "bookIsbnError": " "}
                                    });
                                }
                                setBookISBN(value);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            variant={"contained"}
                            color={"inherit"}
                            sx={{
                                fontWeight: "bold"
                            }}
                            onClick={handleAddIssueNoteItems}
                        >
                            Add Issue Item
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Returns;