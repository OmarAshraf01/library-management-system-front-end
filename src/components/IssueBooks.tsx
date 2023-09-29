import {Box, Button, Grid, IconButton, TextField, Typography} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React, {SetStateAction, useState} from "react";

type Props = {
    isDrawerOpen: React.Dispatch<SetStateAction<boolean>>
}

const IssueBooks = ({isDrawerOpen}: Props) => {
    const [memberId, setMemberId] = useState<string>("");

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
                        <ShoppingCartOutlinedIcon sx={{color: "white"}}/>
                        <Typography pl={1} variant={"h5"} sx={{color: "white", fontWeight: "bold"}}>Issue Books</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id={"member-id"}
                            className={"lms-input-field"}
                            name={"member-id"}
                            label={"Member ID"}
                            fullWidth
                            variant={"standard"}
                            value={memberId}
                            // helperText={"Read Only"}
                            onChange={() => {

                            }}
                        />
                    </Grid>
                </Grid>
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
                        Issue
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default IssueBooks;