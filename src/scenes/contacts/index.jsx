import {Box,useTheme} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {tokens} from "../../theme";
import {mockDataContacts} from "../../data/mockData";
import Header from "../../components/Header";


const Contacts =()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        
        {field : "id",headerName:"ID",flex:0.5,headerAlign:"center",align:"center"},
        {field : "registrarId",headerName:"Registrar ID",headerAlign:"center",align:"center"},

        {field:"name",headerName:"Name",flex:1,headerAlign:"center",align:"center"},
        
        {field:"age",headerName:"Age",type:"number",headerAlign:"center",align:"center"},
        {field:"email",headerName:"Email",flex:1,headerAlign:"center",align:"center"},
        {field:"phone",headerName:"Phone Number",flex:1,cellClassName:"name-column--cell",headerAlign:"center",align:"center"},
        {field:"address",headerName:"Address",flex:1,headerAlign:"center",align:"center"},
        {field:"city",headerName:"City",flex:1,headerAlign:"center",align:"center"},
        {field:"zipCode",headerName:"ZipCode",flex:1,headerAlign:"center",align:"center"},

        
        
       
        
    ];
    return(
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of Contacts for Future Reference"/>
            <Box
                m="20px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root":{
                        border:"none"
                    },
                    "& .MuiDataGrid-cell":{
                        border:"none"
                    },
                    "& .name-column--cell":{
                        color:colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeaders":{
                        backgroundColor: colors.blueAccent[700],
                        borderBottom:"none"
                    },
                    "& .MuiDataGrid-virtualScroller":{
                        backgroundColor:colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer":{
                        borderTop:"none",
                        backgroundColor:colors.blueAccent[700]
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                        color:`${colors.grey[100]} !important`
                    }
                    
                }}
            > 
            <DataGrid 
            rows={mockDataContacts}
            columns={columns}
            components={{
                Toolbar:GridToolbar
            }}
     
            />
            </Box>
        </Box>
    )
}

export default Contacts;