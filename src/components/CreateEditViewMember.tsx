import React, {SetStateAction} from "react";
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
                                id={"member-uuid"}
                                name={"member-uuid"}
                                label={"Member UUID"}
                                fullWidth
                                variant={"standard"}
                                helperText={"Error"}
                            />
                        </Grid>
                    }
                    <Grid item xs={12}>
                        <TextField
                            required
                            id={"member-name"}
                            name={"member-name"}
                            label={"Member Name"}
                            fullWidth
                            variant={"standard"}
                            helperText={"Error"}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id={"member-address"}
                            name={"member-address"}
                            label={"Member Address"}
                            fullWidth
                            variant={"standard"}
                            helperText={"Error"}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id={"member-contact"}
                            name={"member-contact"}
                            label={"Member Contact"}
                            fullWidth
                            variant={"standard"}
                            helperText={"Error"}
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