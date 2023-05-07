import React, {ChangeEvent, SetStateAction, useState} from "react";
import {Box, Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

export enum MemberMode {
    CREATE = "Create",
    EDIT = "Edit",
    VIEW = "View"
}

export type Member = {
    id: string | null;
    name: string;
    address: string;
    contact: string;
}

export type MemberAction = {
    setIsDrawerOpen: React.Dispatch<SetStateAction<boolean>>;
}

type Props = {
    mode: MemberMode;
    member: Member;
    action: MemberAction;
}

type ErrorMsgType = {
    nameError: string;
    addressError: string;
    contactError: string;
}

const CreateEditViewMember = ({mode, member, action} : Props) => {
    const [newMember, setNewMember] = useState<Member>({
        id: null, name: "", address: "", contact: ""
    });
    const [error, setError] = useState<ErrorMsgType>({
        nameError: " ", addressError: " ", contactError: " "
    })

    return (
        <>
            <Box
                position={"relative"}
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
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
                        <Typography variant={"h5"} sx={{color: "white", fontWeight: "bold"}}>{mode.valueOf()} Member</Typography>
                    </Grid>
                    {
                        (mode === MemberMode.EDIT || mode === MemberMode.VIEW) &&
                        <Grid item xs={12}>
                            <TextField
                                required
                                InputProps={{
                                    readOnly: (mode === MemberMode.VIEW || mode === MemberMode.EDIT),
                                }}
                                id={"member-uuid"}
                                name={"member-uuid"}
                                label={"Member UUID"}
                                fullWidth
                                variant={"standard"}
                                helperText={"Read Only"}
                            />
                        </Grid>
                    }
                    <Grid item xs={12}>
                        <TextField
                            required
                            InputProps={{
                                readOnly: (mode === MemberMode.VIEW),
                            }}
                            id={"member-name"}
                            name={"member-name"}
                            label={"Member Name"}
                            fullWidth
                            variant={"standard"}
                            value={newMember.name}
                            helperText={(mode === MemberMode.VIEW) ? "Read Only" : error.nameError}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                const {value} = event.target;
                                if (value.trim() === "") {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "nameError" : "Member name is required"}
                                    });
                                } else if (!/^[A-Za-z][A-Za-z. ]+$/.test(value)) {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "nameError" : "Enter valid member name"}
                                    })
                                } else {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "nameError": " "}
                                    })
                                }
                                setNewMember((prevState: Member) => {
                                    return {...prevState, "name" : value}
                                })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            InputProps={{
                                readOnly: (mode === MemberMode.VIEW),
                            }}
                            id={"member-address"}
                            name={"member-address"}
                            label={"Member Address"}
                            fullWidth
                            variant={"standard"}
                            value={newMember.address}
                            helperText={(mode === MemberMode.VIEW) ? "Read Only" : error.addressError}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                const {value} = event.target;
                                if (value.trim() === "") {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "addressError" : "Member address is required"}
                                    });
                                } else if (!/^[A-Za-z\d][A-Za-z\d-|/# ,.:;\\]+$/.test(value)) {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "addressError" : "Enter valid member address"}
                                    })
                                } else {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "addressError": " "}
                                    })
                                }
                                setNewMember((prevState: Member) => {
                                    return {...prevState, "address" : value}
                                })
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            InputProps={{
                                readOnly: (mode === MemberMode.VIEW),
                            }}
                            id={"member-contact"}
                            name={"member-contact"}
                            label={"Member Contact"}
                            fullWidth
                            variant={"standard"}
                            value={newMember.contact}
                            helperText={(mode === MemberMode.VIEW) ? "Read Only" : error.contactError}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                const {value} = event.target;
                                if (value.trim() === "") {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "contactError" : "Member contact number is required"}
                                    });
                                } else if (!/^\d{3}-\d{7}$/.test(value)) {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "contactError" : "Enter valid member contact number"}
                                    })
                                } else {
                                    setError((prevState: ErrorMsgType) => {
                                        return {...prevState, "contactError": " "}
                                    })
                                }
                                setNewMember((prevState: Member) => {
                                    return {...prevState, "contact" : value}
                                })
                            }}
                        />
                    </Grid>
                </Grid>
                {
                    (mode === MemberMode.CREATE || mode === MemberMode.EDIT) &&
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
                        >
                            Clear
                        </Button>
                        <Button
                            variant={"contained"}
                            sx={{fontWeight: "bold"}}
                        >
                            {mode.valueOf()} Member
                        </Button>
                    </Box>
                }
            </Box>
        </>
    );
}

export default CreateEditViewMember;