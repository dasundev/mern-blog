import { Card, CardContent, CardHeader, Container, Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import PostItem from './PostItem'
import { makeStyles } from '@material-ui/core/styles';
import Api from '../../helper/API';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),

    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function PostList() {
  const classes = useStyles();
  const api = new Api();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getPostsList()
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      })
  })




  return !loading ? (
    <div>
      <main>
        <Container >
          <div className={classes.root}>
            <Grid container spacing={3}>

              {posts.map((post, index) => {
                return <Grid key={index} item xs={6} sm={3}><PostItem key={index} title={post.title} createdAt={post.createdAt} description={post.description} id={post._id}></PostItem></Grid>
              })}


            </Grid>
          </div>
        </Container>
      </main>
    </div>
  ) :
    <div>
      <main>
        <Container >
          <div className={classes.root}>
            <Grid container spacing={3}>

              <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Skeleton animation="wave" variant="circle" width={40} height={40} />
                    }
                    title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}

                    subheader={<Skeleton animation="wave" height={10} width="40%" />}
                  ></CardHeader>
                  <Skeleton animation="wave" variant="rect" className={classes.media}  height={180} />
                  <CardContent>
                    <React.Fragment>
                      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                      <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Skeleton animation="wave" variant="circle" width={40} height={40} />
                    }
                    title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}

                    subheader={<Skeleton animation="wave" height={10} width="40%" />}
                  ></CardHeader>
                  <Skeleton animation="wave" variant="rect" className={classes.media}  height={180} />
                  <CardContent>
                    <React.Fragment>
                      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                      <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Skeleton animation="wave" variant="circle" width={40} height={40} />
                    }
                    title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}

                    subheader={<Skeleton animation="wave" height={10} width="40%" />}
                  ></CardHeader>
                  <Skeleton animation="wave" variant="rect" className={classes.media}  height={180} />
                  <CardContent>
                    <React.Fragment>
                      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                      <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Skeleton animation="wave" variant="circle" width={40} height={40} />
                    }
                    title={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}

                    subheader={<Skeleton animation="wave" height={10} width="40%" />}
                  ></CardHeader>
                  <Skeleton animation="wave" variant="rect" className={classes.media}  height={180} />
                  <CardContent>
                    <React.Fragment>
                      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                      <Skeleton animation="wave" height={10} width="80%" />
                    </React.Fragment>
                  </CardContent>
                </Card>
              </Grid>

            </Grid>
            
          </div>
        </Container>
      </main>
    </div>

}
