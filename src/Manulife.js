import React from 'react';

import {Box, Container, Typography, CssBaseline, Grid,Paper,GridList, GridListTile,DialogTitle, GridListTileBar, IconButton, Hidden, InputAdornment} from '@material-ui/core';
import {Button, Popper, ButtonGroup, MenuItem, MenuList, ClickAwayListener, Grow, Fab, FormGroup, FormControlLabel, FormControl, Checkbox} from '@material-ui/core'
import {FormLabel,RadioGroup,Radio, InputLabel, Select, Icon, SvgIcon, Slider, TextField, FormHelperText, Input, FilledInput, OutlinedInput} from '@material-ui/core'
import {Divider} from '@material-ui/core'

import mf from './manulife.jpg';


const Manulife = () => {

    const [A,setA] = React.useState([]);
    const [B,setB] = React.useState([]);

    const handleChange = (input) => {

    }

    return (
        <Container style={{backgroundImage : `url(${mf})`, height : "100%", width : "100%", backgroundPosition : "center", backgroundSize : "cover" }}>
        <Paper style={{backgroundImage : `url(${mf})`, height : "100%", width : "100%", backgroundPosition : "center", backgroundSize : "cover" }}>
        
        <Grid container direction="column" spacing = {1} wrap = "wrap">

            <Grid item xs = {12} md = {6} lg={4}>
            <TextField
                label = "Policy Number(s)"
                margin = "normal"
                variant = "filled"
                style = {{
                    backgroundColor : "white",
                    opacity : 50
                }}
            />
            </Grid>

            <Grid item >
            <TextField
                label = "Full Name"
                margin = "normal"
                variant = "filled"
                style = {{
                    backgroundColor : "white",
                    opacity : 50
                }}
            />
            </Grid>

            <Grid item>
            <TextField
                label = "email"
                margin = "normal"
                variant = "filled"
                style = {{
                    backgroundColor : "white",
                    opacity : 50
                }}
            />
            </Grid>

            <Grid item>
            <TextField
                label = "NRIC / Passport Number"
                margin = "normal"
                variant = "filled"
                style = {{
                    backgroundColor : "white",
                    opacity : 50
                }}
            />
            </Grid>
        
        

        </Grid>



        </Paper>
        </Container>
    )




}

export default Manulife;













