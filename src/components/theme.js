 const theme = {
  colors: {
    text: '#333',
    background: '#fff',
    primary: '#6D28D9',
    secondary: '#8B5CF6',
    index: '#B291FE',
  },
  cards: {
    primary: {
      top: '20px',
      display: 'block',
      marginBottom: '80px',
      width: ['90%','75%','40%'],
      height: 'auto',
      borderColor: 'primary', 
      borderStyle: 'solid',
      borderRadius: '10px',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondary: {
      display: 'block',
      margin: '4%',
      borderColor: 'none',
      borderStyle: 'none',
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
    },
    nftIndex: {
      display: 'flex',
      margin: '4%',
      borderColor: 'none',
      borderStyle: 'none',
      justifyContent: 'left',
      alignItems: 'center',
      backgroundColor: 'background',
      '&:hover' : {
        backgroundColor: 'index'
      }
    },
    nftText: {
      display: 'block',
      marginLeft: '10px',
      borderColor: 'none',
      borderStyle: 'none',
      overflow: 'hidden',
      justifyContent: 'left',
    }
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'secondary',
      },
      cursor: 'pointer',
      display: 'flex',
      border: 'none',
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: ['16px', '18px', '20px'],
      marginLeft: '5%',
      width: '90%',
      height: '40px',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  boxs: {
    dragndrop: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: ['20vw', '10vw'],
      width: '90%',
      margin: '0 auto',
      marginBottom: 2,
      border: 'dotted',
      borderColor: 'text',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 0 ${t.colors.primary}`,
        outline: 'none',
      },
      '&:hover': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 0 ${t.colors.primary}`,
        outline: 'none',
      },
    }
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Open Sans", sans-serif'
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 800
  },
  forms: {
    input: {
      display: 'block',
      height: '40px',
      width: '90%',
      margin: '0 auto',
      border: 'groove',
      borderColor: 'text',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 0 ${t.colors.primary}`,
        outline: 'none',
      },
      '&:hover': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 0 ${t.colors.primary}`,
        outline: 'none',
      },
    },
    label: {
      fontFamily: 'heading',
      fontSize: ['14px', '16px', '18px'],
      fontWeight: 'bold',
      marginBottom: 1,
      marginLeft: '5%',
    },
    select: {
      height: '40px',
      width: '90%',
      marginLeft: '5%',
      border: 'groove',
      borderColor: 'text',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 0 ${t.colors.primary}`,
        outline: 'none',
      },
      '&:hover': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 0 ${t.colors.primary}`,
        outline: 'none',
      },
    }
  },
  layout: {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }
  },
  text: {
    default: {
      color: 'text',
      fontFamily: 'body',
      fontSize: ['12px', '14px', '16px'],
      textAlign: 'center',
    },
    heading: {
      fontFamily: 'heading',
      fontSize: ['18px', '20px', '22px'],
      textAlign: 'center',
      color: 'primary',
      textShadow: 'text'
    },
    footer: {
      fontFamily: 'heading',
      fontSize: ['10px', '12px', '14px'],
      fontWeight: 'body',
      textAlign: 'left',
      color: 'grey'
    }
  },
  styles: {
    h2: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      color: 'text',
      fontSize: '4vw',
      textAlign: 'center'
    },
    h3: {
      fontFamily: 'body',
      fontWeight: 'bold',
      color: 'text',
      fontSize: '18px',
      textAlign: 'left',
      marginLeft: '10px'
    },
    h4: {
      fontFamily: 'heading',
      fontWeight: 'body',
      color: 'text',
      fontSize: '15px',
      textAlign: 'left',
      marginTop: '5px',
      marginLeft: '10px'
    },
    progress: {
      color: 'primary',
      height: '10px',
      width: '90%',
      margin: '0 auto',
    },
    thumbsContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: 16
    },
    thumb: {
      display: 'inline-flex',
      borderRadius: 4,
      border: '1px solid #6D28D9',
      alignItems: 'center',
      margin: '0 auto',
      width: 100,
      height: 100,
      padding: 1,
      boxSizing: 'border-box'
    },
    thumbInner: {
      display: 'flex',
      minWidth: 0,
      overflow: 'hidden'
    },
    img: {
      display: 'block',
      width: 100,
      height: 90
    },
    nftImg: {
      display: 'block',
      width: 100,
      height: 100
    }
  }
}

export default theme;