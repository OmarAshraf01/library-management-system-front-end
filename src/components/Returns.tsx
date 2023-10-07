import React, {SetStateAction, useEffect, useState} from "react";
import {ToastData} from "./Toast";
import {Box, Grid, IconButton, TextField, Typography} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SwipeUpOutlinedIcon from '@mui/icons-material/SwipeUpOutlined';
import AddCircleIcon from "@mui/icons-material/AddCircle";

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
    const [bookIsbnArray, setBookIsbnArray] = useState<string[]>([]);
    const [error, setError] = useState<ErrorMsgType>({memberIdError: "", issueNoteIdError: "", bookIsbnError: ""});
    const [toastConfig, setToastConfig] = useState<ToastData>({ open: false, message: "", type: "success" });

    useEffect(() => {
        setTimeout(() => {
            // @ts-ignore
            document.getElementById("return-member-id").focus();
        }, 500)
    }, [])

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
                            InputProps={{
                                endAdornment: (
                                    <IconButton
                                        onClick={() => {

                                        }}
                                    >
                                        <AddCircleIcon sx={{color: "white"}} />
                                    </IconButton>
                                )
                            }}
                            id={"issue-note-id"}
                            className={"lms-input-field"}
                            name={"issue-note-id"}
                            label={"Issue Note Id"}
                            fullWidth
                            variant={"standard"}
                            type={"number"}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            InputProps={{
                                endAdornment: (
                                    <IconButton
                                        onClick={() => {

                                        }}
                                    >
                                        <AddCircleIcon sx={{color: "white"}} />
                                    </IconButton>
                                )
                            }}
                            id={"return-book-isbn"}
                            className={"lms-input-field"}
                            name={"return-book-isbn"}
                            label={"Book ISBN"}
                            fullWidth
                            variant={"standard"}
                        />
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default Returns;