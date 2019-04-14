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