'use client'
import { Button, MenuItem, Select } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from  "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from '@mui/material';


export default function DateReserve() {
    return (
        <div className="bg-slate-100 rounded-lg  space-y-2 w-fit px-10 py-5 flex flex-col justify-center">

            <div></div>
            <TextField label="Name-Lastname"
            name="Name-Lastname" 
            variant="standard"
            className="bg-white w-[100%]"/>

            <TextField  label="Citizen ID"
            name="Citizen ID" 
            variant="standard"
             className="bg-white w-[100%] "/>

            

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white w-[100%]"/>
            </LocalizationProvider>

            <Select className="h-[2em] w-[100%]" id="hospital" variant="standard">
                <MenuItem value="Chula" >Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi">Rajavithi Hospital </MenuItem>
                <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
            </Select>
            <br/>
            
        </div>
    );
}