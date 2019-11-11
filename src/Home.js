import {Box, Container, Typography, CssBaseline, Grid,Paper,GridList, GridListTile,DialogTitle, GridListTileBar, IconButton, Hidden} from '@material-ui/core';
import {Button, Popper, ButtonGroup, MenuItem, MenuList, ClickAwayListener, Grow, Fab, FormGroup, FormControlLabel, FormControl, Checkbox} from '@material-ui/core'
import {FormLabel,RadioGroup,Radio, InputLabel, Select, Icon, SvgIcon} from '@material-ui/core'
import React from 'react';

// ICONS
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import InstagramIcon from '@material-ui/icons/Instagram';
import ShareIcon from '@material-ui/icons/Share';
import SportsKabaddiTwoToneIcon from '@material-ui/icons/SportsKabaddiTwoTone';
import SportsMmaTwoToneIcon from '@material-ui/icons/SportsMmaTwoTone';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import FlightIcon from '@material-ui/icons/Flight';
import FaceIcon from '@material-ui/icons/Face';
import AccessibleForwardSharpIcon from '@material-ui/icons/AccessibleForwardSharp';
import AccessibilitySharpIcon from '@material-ui/icons/AccessibilitySharp';

import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider
  } from "@material-ui/pickers";

// choose your lib
import DateFnsUtils from "@date-io/date-fns";
import MomentUtils from '@date-io/moment';
import LuxonUtils from '@date-io/luxon';
import dayjs from 'dayjs'




// IMAGES
import harold from './harold.jpg';
import random from './random.jpg';
import boomer from './ok boomer.jpg';
import PickleRickIcon from './PickleRickIcon.svg';
import GiantHeadIcon from './GiantHeadIcon.svg';
import ChristianIcon from './ChristianIcon.svg';
import MuslimIcon from './MuslimIcon.svg';
import BuddistIcon from './BuddistIcon.svg';

class Home extends React.Component{

    constructor(){
        super();
        this.state = ({
            name : "",
            age : "",
            religion : ""
        });
        this.handleReligion = this.handleReligion.bind(this);
    }
    handleReligion = (selection) => {
        this.setState({religion : selection.target.value})
    }


    render(){
        const customIcons = (selection) => {
            switch (selection) {
                case 'Giant Head':
                    return <img  src={GiantHeadIcon}/>;
                case 'Christian' :
                    return <img src={ChristianIcon}/>;
                case 'Buddhist' :
                    return <img src={BuddistIcon}/>;
                case 'Muslim' :
                    return <img src={MuslimIcon}/>;
                default:
                    return <img src={PickleRickIcon}/>;
            }

        }



        return(
            
            

            
            <Container maxWidth="md">
                

                <Typography>
                    Inside Container 1
                </Typography>
                <Box color ="#afe8fa" component="h1">
                <Typography component="div" 
                style={{ backgroundColor: '#cfe8fc', height: '10vh', color : "black" }}>
                Inside Box 1
                </Typography>
                    <button>Press me</button>
                </Box>
                
                <Container maxWidth="xs">
                    <Typography style={{color : "blue", backgroundColor: 'red'}}>
                        Inner Container
                    </Typography>

                </Container>
                <br/>
                
                <Grid container direction="column"  alignItems="center" spacing = {1}>
                <Grid  item >
                    <Paper> item 1</Paper>
                </Grid>
                
                <Grid  item >
                    <Paper> item 2</Paper>
                </Grid>
                <Grid  item >
                    <Paper> item 3</Paper>
                </Grid>
                </Grid>

                <br/>


                
                <Grid container direction="row" spacing = {2} justify="center">
                
                <Hidden smDown>     
                <Grid item>
                    <Paper> row item 1</Paper>
                </Grid>
                <Grid item >
                    <Paper> row item 2</Paper>
                </Grid>
                <Grid item >
                    <Paper> row item 3</Paper>
                </Grid>
                </Hidden> 
                </Grid>
                <br/>
                
                
                <GridList cols={2}>
                    

                    <GridListTile key = "harold" >
                        <img src={harold} alt = {harold}/>
                        <GridListTileBar title = "Hide The Pain Harold" 
                        actionIcon={
                        <IconButton>
                            <ThumbUpIcon color="primary" fontSize="large"/>
                            
                        </IconButton>
                        }/>
                    </GridListTile>

                    <GridListTile key = "random">
                        <img src={random} alt = {random}/>
                        <GridListTileBar title = "Random Person" 
                        actionIcon={
                        <IconButton>
                            <TagFacesIcon color="primary" fontSize="small"/>
                            <InstagramIcon color="secondary"/>
                            <ShareIcon color="error" fontSize="large"/>
                        </IconButton>
                        }/>
                    </GridListTile>
                

                <GridListTile key = "boomer" rows = "5" cols = "2">
                        <img src={boomer} alt = {boomer}/>
                        <GridListTileBar title = "OK Boomer" 
                        actionIcon={
                        <IconButton>
                            <TagFacesIcon color="primary" fontSize="small"/>
                            <InstagramIcon color="secondary"/>
                            <ShareIcon color="error" fontSize="large"/>
                        </IconButton>
                        }/>
                    </GridListTile>





                </GridList>
                <br/>

                <ButtonGroup fullWidth variant='contained'>
                    <Button color="secondary">Nuclear</Button>
                    <Button color="primary">Apocalypse</Button>
                    <Button variant="outlined" color="action">Doomsday</Button>



                </ButtonGroup>
                <br/>
                <br/>

                <Fab>
                    <FaceIcon color="action"/>
                </Fab>
                <Fab color="primary">
                    <SportsKabaddiTwoToneIcon color="error"/>
                </Fab>
                <Fab color="secondary" variant="extended">
                <SportsMmaTwoToneIcon color="primary"/>
                Fight Tickets Available                
                </Fab>

                <Fab size ="large" color="primary" variant="extended">
                    BOOK FLIGHT TICKETS NOW
                    <FlightTakeoffIcon color="action"/>
                    <FlightIcon color="disabled"/>
                    <FlightLandIcon color="inherit"/>
                </Fab>

                <FormGroup row>
                    <FormControlLabel control={
                        <Checkbox indeterminate/>
                    } label="Developer" />

                    <FormControlLabel control={
                        <Checkbox color="primary" icon={<FaceIcon/>} checkedIcon={<FaceIcon/>}/>
                    } label="Business Analyst" />

                    <FormControlLabel control={
                        <Checkbox color="secondary"/>
                    } label="Product Owner" labelPlacement="bottom"/>

                    <FormControlLabel control={
                        <Checkbox color="secondary"/>
                    } label="UI / UX" labelPlacement="top"/>

                </FormGroup>

                <br/>
                <Typography variant="h1" color="primary" align="center" >
                    DateFnsUtils Library
                    </Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker format="dd/mm/yyyy, MMMM" variant="inline"/>
                    <TimePicker format="hh:mm:ss a, HH:mm:ss" variant="dialog"/>
                    <DateTimePicker variant="static"/>
                </MuiPickersUtilsProvider>

                <br/>
                <Typography variant="h1" color="secondary" align="center" >
                    MomentUtils Library
                    </Typography>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <DatePicker format="DD/MM/YYYY, dd MMMM" margin="dense" variant="inline"/>
                    <TimePicker format="hh:mm:ss a, HH:mm:ss" variant="dialog"/>
                    <DateTimePicker variant="static"/>
                </MuiPickersUtilsProvider>     
                           
                <br/>
                <Typography variant="h1" color="textPrimary" align="center" >
                    LuxonUtils Library
                    </Typography>
                <MuiPickersUtilsProvider utils={LuxonUtils}>
                    <DatePicker format="dd/mm/yyyy, MM/YYYY" margin="dense" variant="inline"/>
                    <TimePicker format="hh:mm:ss a, HH:mm:ss" variant="dialog"/>
                    <DateTimePicker variant="static"/>
                </MuiPickersUtilsProvider>

                <br/>
                <FormLabel component="legend">
                    Gender
                </FormLabel>
                <RadioGroup>
                <FormControlLabel value="male" label = "male" control={<Radio checkedIcon={<AccessibilitySharpIcon/>}/>}/>
                <FormControlLabel value="female" label = "female" control={<Radio checkedIcon={<AccessibilitySharpIcon/>}/>}/>
                <FormControlLabel value="other" label = "other" control={<Radio checkedIcon={<AccessibleForwardSharpIcon/>}/>}/>
                </RadioGroup>

                <br/>

                <FormControl>
                    <InputLabel id ="selectedReligion">
                    Religion
                    </InputLabel>

                    <Select labelId="selectedReligion" value = {this.religion} onChange={this.handleReligion}>
                    <MenuItem value ="PickleRick">Pickle Rick</MenuItem>
                    <MenuItem value ="Christian">Christian</MenuItem>
                    <MenuItem value ="Muslim">Muslim</MenuItem>
                    <MenuItem value ="Buddhist">Buddhist</MenuItem>
                    <MenuItem value="Giant Head">Giant Head</MenuItem>
                    </Select>



                </FormControl>
                <br/>
                <Typography>Welcome To The {this.state.religion} Community </Typography>
                <div>
                    {this.state.religion &&
                    <Icon>
                    {customIcons(this.state.religion)}
                    </Icon>
                    }
                </div>
                

                <br/>
                <SvgIcon>
                    <path d="M50 24l-1.80-1.41L13 16.17V4h-2v12.23m-5.58-5.59L4 12l8 8 9-8z"/>
                </SvgIcon>





















            </Container>
            



        )
    }

}
export default Home


// To do routing With ButtonBase

