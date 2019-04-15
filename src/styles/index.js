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
    gridContainer : {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr 2fr'
      },
      [theme.breakpoints.down(700)]: {
        gridTemplateColumns: '1fr'
      }
    },
    navContainer: {
      [theme.breakpoints.down('sm')]: {
        gridColumn: 'span 2'
      },
      [theme.breakpoints.down(700)]: {
        gridColumn: 'span 3',
        flexDirection: 'row',
        margin: '0 0 3rem 6rem'
      },
      [theme.breakpoints.down(550)]: {
        display: 'none'
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& a': {
        color: '#3f51b5',
        textDecoration: 'none',
        textTransform: 'uppercase'
      }
    },
    navList: {
      [theme.breakpoints.down(700)]: {
        display: 'flex'
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
      marginLeft: 10,
      [theme.breakpoints.down(700)]: {
        display: 'none'
      }
    },
    avatar: {
      width: 25,
      height: 25,
      fontStyle: 'italic'
    },
    logoContainer: {
      [theme.breakpoints.down('sm')]: {
        gridRow: 2
      },
      [theme.breakpoints.down(700)]: {
        gridRow: 3,
        gridColumn: 1
      }
    },
    themoviedbLogo: {
      width: 190,
      float: 'right',
      [theme.breakpoints.down('sm')]: {
        width: 130,
        float: 'left'
      },
      [theme.breakpoints.down(700)]: {
        width: 100,
      }
    },
    copyrightContainer: {
      [theme.breakpoints.down('sm')]: {
        gridRow: 2
      },
      [theme.breakpoints.down(700)]: {
        gridRow: 3,
        fontSize: '0.7rem'
      },
      gridColumn: 'span 3',
      textAlign: 'center'
    },
    trendingContainer: {
      [theme.breakpoints.down('sm')]: {
        gridColumn: 3
      },
      [theme.breakpoints.down(700)]: {
        display: 'none'
      }
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

export const searchResultsStyles = theme => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  card: {
    display: 'flex',
    width: 850,
  },
  image: {
    minwidth: 154
  },
  img: {
    margin: 'auto',
    display: 'block',
    Width: '100%'
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  link: {
    alignSelf: 'flex-end',
    textDecoration: 'none'
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