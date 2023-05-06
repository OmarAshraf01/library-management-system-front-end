import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <Box>
                <Typography>Welcome to Library Management System</Typography>
                <Link to={"/manage-members"}>Manage Members</Link>
                <Link to={"/manage-books"}>Manage Books</Link>
                <Link to={"/issue-books"}>Issue Books</Link>
                <Link to={"/handle-returns"}>Handle Returns</Link>
            </Box>
        </>
    )
}

export default Dashboard;