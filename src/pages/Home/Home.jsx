import { Button, Grid, TextField, Typography, Link, Box, Avatar } from "@mui/material";
import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';


function Copyright() {
  return (
    <Typography variant="body" color="textSecondary" align="center" >
      <strong>{`Copyright © ${new Date().getFullYear()} JhonS.`}</strong>
    </Typography>
  );
}

export const Home = () => {


  return (<>
            <Typography>Hola Mundo</Typography>
        </>
    );
};
