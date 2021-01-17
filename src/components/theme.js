 const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Poppins", "Helvetica Neue", sans-serif',
    monospace: '"Roboto", "Ubuntu", sans-serif',
  },
  colors: {
    text: 'black',
    background: 'white',
    primary: '#6d66FF',
    secondary: '#6d90ff'
  },
  links: {
    nav: {
      px: 2,
      py: 1,
    }
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'secondary'
      }
    }
  }
}

export default theme;