import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 500,
  },
  image: {
    width: 200,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
  
function App(){

    const classes = useStyles();
    return (
        <Grid md={12}>

        
        <div  className={classes.root}>
            <Grid   container  justify="center" style={{ minHeight: '100vh' }}>
                <Paper  className={classes.paper}>
                    <Grid  alignItems="center" container  justify="center" >
                    <Grid  item>
                        <ButtonBase  className={classes.image}>
                        <img className={classes.img} alt="complex" src="http://placekitten.com/g/500/500" />
                        </ButtonBase>
                    </Grid>
                    <Grid  item xs={12} sm container>
                        <Grid item xs container  direction="column" spacing={2}>
                        <Grid alignItems="center" item xs>
                            <Typography gutterBottom variant="subtitle1">
                            <strong>Biodata</strong>
                            </Typography>
                            <Typography  >
                            Nurhidayah Tasmin
                            </Typography>
                            <Typography>
                                Ujung Pandang, 3 Maret 1998
                            </Typography>
                            <Typography >
                            Mahasiswi Hampir Selesai
                            </Typography>
                            <Typography>
                                <span>Instagram : @nurhidayah_tasmin</span>
                            </Typography>
                        </Grid>

                        </Grid>
                    
                    </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </div>
        </Grid>
      );
}


export default App;