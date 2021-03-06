import React,{useState,useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import souvenir from './images/souvenir.png';
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js';
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts.js';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    //https://reactjs.org/docs/hooks-effect.html
    //https://dmitripavlutin.com/react-useeffect-explanation/
    useEffect(() => {
        dispatch(getPosts());
    },[currentId,dispatch]);

    return (
        <Container>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Souvenirs</Typography>
                <img className={classes.image} src={souvenir} alt="souvenir" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className = {classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId = {setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;