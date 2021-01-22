import React, { Component } from 'react';
import { 
  Box,
  Image,
  Flex, 
  Grid, 
  Link,
  ThemeProvider
} from 'theme-ui';
import theme from './theme';
import logo from '../images/signup-logo.png';

export class Footer extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex 
          bg='primary'
          sx={{
            mt: 5,
            fontSize: 1,
            variant: 'styles.footer',
            py: 4,
            backgroundColor: '#e5e7eb',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
          <Grid
            gap={'10vw'}
            columns={[ 2, null, 4 ]}
            sx={{
              display: 'grid',
              m: 4,
              mx: 'auto',
              px: 'auto',
            }}
          >
            <Box my={4}>
              <Link to='/' sx={{
                alignItems: 'left',
                mx: 4,
              }}
              >
                <Image width={'50%'} src={logo}/>
              </Link>
            </Box>
            <Box sx={{
              display: 'grid',
              gridTemplateRows: 'repeat(4, 32px)',
              gridAutoFlow: 'column'
            }}>
              <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}><b>GETTING STARTED</b></Link>
              <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Documentation</Link>
              <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Demos</Link>
              <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Intro Blog Post</Link>
            </Box>
            <Box sx={{
              display: 'grid',
              gridTemplateRows: 'repeat(3, 32px)',
              gridAutoFlow: 'column'
            }}>
              <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}><b>CORE</b></Link>
              <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Wallet</Link>
              <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Contact</Link>
            </Box>
            <Box sx={{
              display: 'grid',
              gridTemplateRows: 'repeat(5, 32px)',
              gridAutoFlow: 'column'
            }}>
              <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}><b>COMMUNITY</b></Link>
              <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Github</Link>
              <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Twitter</Link>
              <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Telegram</Link>
              <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>ReadCash</Link>
            </Box>
          </Grid>
        </Flex>
      </ThemeProvider>
    )
  }
}

export default Footer
