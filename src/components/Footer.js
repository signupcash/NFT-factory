import React, { Component } from 'react';
import { Link } from 'theme-ui';

export class Footer extends Component {
  render() {
    return (
      <footer sx={{
        fontSize: 1,
        variant: 'styles.footer',
        p: 4,
        bg: 'muted',
      }}>
        <div sx={{
          display: 'grid',
          gridTemplateRows: 'repeat(4, 32px)',
          gridTemplateColumns: [
            'repeat(2, 1fr)',
            'repeat(4, 1fr)'
          ],
          gridAutoFlow: 'column',
          px: 2,
          py: 4,
          m: 4
        }}>
          <Link to='/' sx={{
            variant: 'styles.navlink', 
            p: 2,
            py: 2,
            px: 4,
            fontFamily: '"Poppins", sans-serif',
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#6d66FF'
          }}
          >
            signup
          </Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>GETTING STARTED</Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Documentation</Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Demos</Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Intro Blog Post</Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>CORE</Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Wallet</Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Contact</Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>COMMUNITY</Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Github</Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Twitter</Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>Telegram</Link>
          <Link to='/' sx={{ variant: 'styles.navlink', p: 2 }}>ReadCash</Link>
        </div>
      </footer>
    )
  }
}

export default Footer
