export const header = theme => ({
  appBar: {
    color: '#aaa',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    '& a': {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            padding: 15,
            textDecoration: 'none',
            color: '#aaa',
            margin: '0 10'
          },
          '& a, a:after, a:before': {
            transition: 'all .5s'
          },
          '& a:hover': {
            color: '#fff'
          }
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  navBar: {
    '& ul': {
      listStyle: 'none',
        '& li': {
          display: 'inline-block'
        },
          '& a': {
            position: 'relative',
            padding: 15,
            textDecoration: 'none',
            color: '#aaa',
            fontWeight: 800,
            textTransform: 'uppercase',
            margin: '0 10'
          },
          '& a, a:after, a:before': {
            transition: 'all .5s'
          },
          '& a:hover': {
            color: '#fff'
          }
    }
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  }
});

export const footer = theme => ({
  footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 6
    },
    navContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& a': {
        color: '#3f51b5',
        textDecoration: 'none',
        textTransform: 'uppercase'
      }
    },
    gridHeader: {
      display: 'inline-flex'
    },
    headerIcon: {
      alignSelf: 'center'
    },
    title: {
      color: '#3f51b5',
      textTransform: 'uppercase',
      marginLeft: 10
    },
    avatar: {
      width: 25,
      height: 25,
      fontStyle: 'italic'
    },
    themoviedbLogo: {
      width: 190,
      float: 'right'
    },
    copyright: {
      textAlign: 'center'
    },
    trendingList: {
      display: 'flex',
      flexDirection: 'column',
      '& a': {
        color: '#3f51b5',
        textDecoration: 'none'
      }
    }
});

export const homeStyles = theme => ({
  appBar: {
    position: 'relative'
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  link: {
    textDecoration: 'none'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  mainContainer: {
    [theme.breakpoints.up('sm')]: {
      padding: '2rem'
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem 4 rem',
      margin: '0 auto',
      maxWidth: '80%'
    }
  }
});

export const movieDetailsStyles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  headerMovieDetails: {
    backgroundSize: 'cover !important',
    height: 350
  },
  infoContainer: {
    color: '#fff',
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: '100px 1fr',
    position: 'absolute',
    marginTop: '150px'
  },
  infoImg: {
    borderRadius: '25px',
    padding: '20px'
  },
  infoDetails: {
    fontSize: '.9rem',
    height: '140px',
    lineHeight: 'normal',
    padding: '20px'
  },
  mainContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: '1rem'
    },
    [theme.breakpoints.up('sm')]: {
      padding: '2rem 4rem'
    },
    [theme.breakpoints.up('700px')]: {
      padding: '4rem'
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      maxWidth: '70%'
    }
  },
  divider: {
    backgroundImage: 'radial-gradient(circle, rgb(178, 187, 239) 0%, rgba(210,208,208,0) 90%)',
    border: 'none',
    marginTop: 30,
    height: 2
  },
  containerTitle: {
    color: '#002984',
    margin: 5,
    textAlign: 'center'
  },  
  summaryContainer: {
    padding: '10px',
    width: '100%'
  },
  castContainer: {
    marginTop: 100
  },
  avatarWrapper: {
    flexBasis: '15%'
  },
  avatar: {
    margin: 20,
    width: 80,
    height: 80
  },
  avatarCharacterName: {
    fontSize: 14,
    margin: '0.5em 0',
    fontWeight: 500,
    textAlign: 'center'
  },
  avatarPersonName: {
    fontSize: 12,
    textAlign: 'center'
  },
  trailerContainer: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 450,
    padding: '10px'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});