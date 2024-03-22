import PieChart from "../../global/PieChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Pie = () =>{
    return(
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart"></Header>
            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>
    )
}

export default Pie;