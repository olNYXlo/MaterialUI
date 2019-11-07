import {Box, Container, Typography, CssBaseline, Grid,Paper,GridList, GridListTile,DialogTitle, GridListTileBar, IconButton} from '@material-ui/core';
import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import InstagramIcon from '@material-ui/icons/Instagram';
import ShareIcon from '@material-ui/icons/Share';
import harold from './harold.jpg';
import random from './random.jpg';

class Home extends React.Component{

    constructor(){
        super()
        this.state = ({
            name : "",
            age : ""
        })
    }


    render(){



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
                
                      
                <Grid item>
                    <Paper> row item 1</Paper>
                </Grid>
                <Grid item >
                    <Paper> row item 2</Paper>
                </Grid>
                <Grid item >
                    <Paper> row item 3</Paper>
                </Grid>
                </Grid>
                <br/>
                
                
                <GridList cols={2}>
                    <GridListTile key = "harold">
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
                </GridList>

                









            </Container>
            



        )
    }

}
export default Home



