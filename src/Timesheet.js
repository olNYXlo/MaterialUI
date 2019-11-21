import {Box, Container, Typography, CssBaseline, Grid,Paper,GridList, GridListTile,DialogTitle, GridListTileBar, IconButton, Hidden, InputAdornment} from '@material-ui/core';
import {Button, Popper, ButtonGroup, MenuItem, MenuList, ClickAwayListener, Grow, Fab, FormGroup, FormControlLabel, FormControl, Checkbox} from '@material-ui/core'
import {FormLabel,RadioGroup,Radio, InputLabel, Select, Icon, SvgIcon, Slider, TextField, FormHelperText, Input, FilledInput, OutlinedInput} from '@material-ui/core'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import {Link} from 'react-router-dom'
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


import harold from './harold.jpg';
import random from './random.jpg';
import boomer from './ok boomer.jpg';

class Timesheet extends React.Component {

  /*
  componentWillMount = () => {

    Axios.post('http://192.168.200.200:8080/backendapi/employee/60/timesheets/11/2019')
            .then(response => {
                this.setState({ calendar: response.data });
                console.log("Response Received : ", response);

            }).catch(err => {
                console.log("AXIOS ERROR : ", err);
            })

  }
  */

    constructor(){
        super();
        this.state = ({
          noOfMC : 0,
          temp : "",
          calendar : []
        });
        this.handleInput = this.handleInput.bind(this);
        this.handleNoOfMC = this.handleNoOfMC.bind(this);
    }

    handleInput = (input) => {
      this.setState({temp : input.target.value})
      sessionStorage.setItem(input.target.id, input.target.value)
      this.calendar[input.target.id-1][2] = (input.target.value);
      console.log("Inserting the values: " + input.target.value)
      console.log("Inserting into the index " + input.target.id)
      console.log(this.calendar[input.target.id-1])
      console.log(this.calendar)
      console.log(this.state)
    }

    handleNoOfMC = (selection) => {
        this.setState({noOfMC : selection.target.value})
    }
  

    calendar = [
        [
          "1",
          "Tue","MC"],["2",
          "Wed"],["3",
          "Thu"],["4",
          "Fri"],["5",
          "Sat"],["6",
          "Sun"],["7",
          "Mon"],["8",
          "Tue"],["9",
          "Wed"],["10",
          "Thu"],["11",
          "Fri"],["12",
          "Sat"],["13",
          "Sun"],["14",
          "Mon"],["15",
          "Tue"],["16",
          "Wed"],["17",
          "Thu"],["18",
          "Fri"],["19",
          "Sat"],["20",
          "Sun"],["21",
          "Mon"],["22",
          "Tue"],["23",
          "Wed"],["24",
          "Thu"],["25",
          "Fri"],["26",
          "Sat"],["27",
          "Sun"],["28",
          "Mon"],["29",
          "Tue"],["30",
          "Wed"],["31",
          "Thu"]
      ];

      fields = this.calendar.map( day => (


          <Grid container direction="column" key={day[0]}>

              <Grid item xs={4}>
              <TextField 
                defaultValue={day[0]}
                variant="outlined"
                margin="normal"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>

              <Grid item xs={4}>
              <TextField 
                defaultValue={day[1]}
                variant="outlined"
                margin="normal"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>

              <Grid item xs={4}>
                  <TextField required label="Hours Worked" variant="filled" margin="normal" 
                  onChange={this.handleInput} 
                  type = 'text'
                  id = {day[0]}
                  />
              </Grid>

              <Typography>
                {sessionStorage.getItem([day[0]])}
              </Typography>

          </Grid>
          
          
      ));

      week = [0,1,2,3,4];

      fields3 = this.week.map(value => (
        <GridList container direction="row" key={this.calendar[value][0]} cols={7}>
            <Grid container direction = "column">

              {this.calendar.length > value*7 && <Grid item xs={4}>
              <TextField 
                defaultValue={this.calendar[value*7][0]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

              {this.calendar.length > value*7 && <Grid item xs={4}>
              <TextField 
                defaultValue={this.calendar[value*7][1]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

              {this.calendar.length > value*7 && <Grid item xs = {4}>
                  <TextField required label="Hours Worked" variant="filled" margin="none" />
              </Grid>}

            </Grid>

              <Grid container direction = "column">
            {this.calendar.length > value*7+1 && <Grid item xs = {4}>
              <TextField 
                defaultValue={this.calendar[value*7+1][0]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

            {this.calendar.length > value*7+1 &&   <Grid item xs = {4}>
              <TextField 
                defaultValue={this.calendar[value*7+1][1]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

            {this.calendar.length > value*7+1 &&   <Grid item xs = {4}>
                  <TextField required label="Hours Worked" variant="filled" margin="none" />
              </Grid>}

              </Grid>

              <Grid container direction = "column">
            {this.calendar.length > value*7+2 && <Grid item xs={4}>
              <TextField 
                defaultValue={this.calendar[value*7+2][0]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

            {this.calendar.length > value*7+2 &&   <Grid item xs={4}>
              <TextField 
                defaultValue={this.calendar[value*7+2][1]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

            {this.calendar.length > value*7+2 &&   <Grid item xs={4}>
                  <TextField required label="Hours Worked" variant="filled" margin="none" />
              </Grid>}

              </Grid>

              <Grid container direction = "column">
            {this.calendar.length > value*7+3 && <Grid item xs={4}>
              <TextField 
                defaultValue={this.calendar[value*7+3][0]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

            {this.calendar.length > value*7+3 &&   <Grid item xs={4}>
              <TextField 
                defaultValue={this.calendar[value*7+3][1]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

            {this.calendar.length > value*7+3 &&   <Grid item xs={4}>
                  <TextField required label="Hours Worked" variant="filled" margin="none" />
              </Grid>}

              </Grid>

              <Grid container direction = "column">
            {this.calendar.length > value*7+4 && <Grid item xs={4}>
              <TextField 
                defaultValue={this.calendar[value*7+4][0]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

            {this.calendar.length > value*7+4 &&  <Grid item xs={4}>
              <TextField 
                defaultValue={this.calendar[value*7+4][1]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

            {this.calendar.length > value*7+4 &&   <Grid item xs={4}>
                  <TextField required label="Hours Worked" variant="filled" margin="none" />
              </Grid>}

              </Grid>

              <Grid container direction = "column">
            {this.calendar.length > value*7+5 && <Grid item xs={4}>
              <TextField 
                defaultValue={this.calendar[value*7+5][0]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

            {this.calendar.length > value*7+5 &&   <Grid item xs={4}>
              <TextField 
                defaultValue={this.calendar[value*7+5][1]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

            {this.calendar.length > value*7+5 &&   <Grid item xs={4}>
                  <TextField required label="Hours Worked" variant="filled" margin="none" />
              </Grid>}

              </Grid>

              <Grid container direction = "column">
            {this.calendar.length > value*7+6 && <Grid item xs={4}>
              <TextField 
                defaultValue={this.calendar[value*7+6][0]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

            {this.calendar.length > value*7+6 &&   <Grid item xs={4}>
              <TextField 
                defaultValue={this.calendar[value*7+6][1]}
                variant="outlined"
                margin="none"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>}

            {this.calendar.length > value*7+6 &&    <Grid item xs={4}>
                  <TextField required label="Hours Worked" variant="filled" margin="none" />
              </Grid>}

              </Grid>


        </GridList>

            ));





            

      

      MCs = () => {
        var count = 0
        var result = []
        while (parseInt(this.state.noOfMC) > count){
          result.push(
          <TextField type = "file" 
          helperText="Please upload your MC in png or jpeg format"
          inputProps={{
            accept : "image/*",
            multiple : false
            }}/>)
          count++
        }
      }


      render(){
          console.log(this.leftoverdays)

            var result = [];
            for (var i = 0; i < 5; i ++){
                result.push(
              <Grid container direction="column">
  
              <Grid item xs={2}>
              <TextField 
                defaultValue={this.calendar[i][0]}
                variant="outlined"
                margin="normal"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>
  
              <Grid item xs={2}>
              <TextField 
                defaultValue={this.calendar[i][1]}
                variant="outlined"
                margin="normal"
                InputProps={{
                    readOnly: true
                }}
                />
              </Grid>
  
              <Grid item xs={2}>
                  <TextField required label="Hours Worked" variant="filled" margin="normal" />
              </Grid>
  
          </Grid>
                )}



        var count = 0
        var result2 = []
        while (count < this.state.noOfMC){
          result2.push(
          <TextField 
          id = {count}
          type = "file" 
          helperText="Please upload your MC in png or jpeg format"
          inputProps={{
            accept : "image/*",
            multiple : false
            }}
            margin = "normal"
            variant = "filled"
            />)
          count++
        }

        return (
            <Container maxWidth="lg" >
            <Container style={{backgroundImage : `url(${harold})`, height : "100%", width : "100%", backgroundPosition : "center", backgroundSize : "cover", opacity :"0.9"}}>
            <Typography component="div" 
                style={{height: '50vh', color : "black" }}>
                
                </Typography>
            </Container>
            <Typography style={{color : "blue"}}>
              Timesheet displayed without margin (Using complicated conditional rendering)
            </Typography>
            <Grid container direction="column">
              {this.fields3}
            </Grid>

            <Typography style={{color : "blue"}}>
              Timesheet displayed with normal margin (Using simple mapping)
            </Typography>

            <GridList container direction="row" cols={7}>
              {this.fields}
            </GridList>

            <Typography>
              Printing Session Storage...
              <br/>
              {JSON.stringify(sessionStorage)}
              <br/>
              Printing value of item "1" inside Session Storage...
              <br/>
              {sessionStorage.getItem("1")}

            </Typography>
            <br/>

            <Typography>
              Printing Timesheet Values....
              <br/>
            {this.calendar}
            </Typography>
            <br/>


            <FormControl fullWidth>
                    <InputLabel id ="noOfMC">
                    Number Of MC
                    </InputLabel>

                    <Select labelId="noOfMC" value = {this.noOfMC} onChange={this.handleNoOfMC}>
                    <MenuItem value = "1">1</MenuItem>
                    <MenuItem value ="2">2</MenuItem>
                    <MenuItem value ="3">3</MenuItem>
                    <MenuItem value ="4">4</MenuItem>
                    <MenuItem value ="5">5</MenuItem>
                    </Select>



            </FormControl>

            <br/>

            

            <Typography>
              No Of MC :  
              {this.state.noOfMC}
              <br/>
              (Just to verify state is changed)
            </Typography>

            <br/>
            




            <GridList container cols = {4} spacing = "110">
              {result2}
            </GridList>
            <br/>

            

            
            







            </Container>
            
        )

      }


      

}

export default Timesheet;


