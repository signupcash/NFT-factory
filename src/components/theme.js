 const theme = {
  colors: {
    text: '#333',
    background: '#fff',
    primary: '#6D28D9',
    secondary: '#8B5CF6',
  },
  cards: {
    primary: {
      position: 'relative',
      top: '20px',
      display: 'block',
      marginBottom: '80px',
      width: ['75%','50%','25%'],
      height: 'auto',
      borderColor: 'primary', 
      borderStyle: 'solid',
      borderRadius: '10px',
      overflow: 'hidden',
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    secondary: {
      position: 'relative',
      display: 'block',
      margin: '4%',
      borderColor: 'none',
      borderStyle: 'none',
      overflow: 'hidden',
      zIndex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'secondary',
        color: 'black',
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
      display: 'inline-block',
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
  },
}

export default theme;