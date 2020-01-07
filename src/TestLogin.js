import React, {Component} from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import Axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import {NavLink} from 'react-router-dom';

class TestLogin extends Component {
    
    
    state={
        password: '1b2i@0Xa9I#B'
    }

    header = {
        headers : {
            'Content-Type': 'application/json;charset=UTF-8'
        }
        
    }

    pw = "1b2i@0Xa9I#B"

    loginHandler = () => {
        console.log(this.state.password);
        
        Axios.post("http://192.168.200.200:8080/backendapitest/manager/timesheets/"+"60"+"/login", this.pw, this.header)
        .then(res => {
            console.log(res);
        })
    }

    render()
    {
        return(
            <div>
             <Container     
            component="main" 
            maxWidth="sm"
            style={{borderRadius: '5px', border: "1px solid #BDBDBD", marginTop: "60px"}}>

                <b><p>TIMESHEET ID</p></b>
                  <TextField
                   input type = "number"
                   variant="outlined"
                   margin="normal"
                   fullWidth
                  />

                <b><p>PASSWORD</p></b>
                  <TextField
                  input type = "text"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  />

                  <Button 
                   onClick={this.loginHandler}
                   variant="contained"
                   style={{"backgroundColor": "#3868b5", "color": "white",
                   "marginLeft": "auto", "marginRight": "auto", "display": "block", "marginTop": "15px", 
                   "marginBottom": "15px"}}>LOGIN</Button>

            </Container>
            </div>

        )
    }
}
export default TestLogin;