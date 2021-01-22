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
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
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
  },
  styles: {
    h2: {
      fontFamily: 'monospace',
      fontWeight: 'monospace',
      lineHeight: 'monospace',
      fontSize: 20,
    }
  }
}

export default theme;