import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../redux/slice/recipesSlice";
import stile from "./style/recipes.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Box, Typography } from "@mui/material";

export default function SearchInput() {
    const { recipes } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [isFocus, setIsFocus] = useState(false);

    const insertFilter = (e) => {
        let text = e.target.value;
        console.log(recipes);
        dispatch(addFilter(text));
        console.log(text);
    };
    return (
        <Box sx={{ width:"100%", display:"flex", justifyContent:"space-around", alignItems:"center", margin:"30px 0", flexDirection:{xs:"column",md:"row"} }}>
       
       <Typography as={"h2"} sx={{ fontSize:"22px" }} >Le 100 ricette migliori</Typography>

        <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
            }}
        >
            <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Cerca la tua ricetta"
                inputProps={{ "aria-label": "cerca la tua ricetta" }}
                onChange={insertFilter}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
        
        
        
        </Box>
    );
}
