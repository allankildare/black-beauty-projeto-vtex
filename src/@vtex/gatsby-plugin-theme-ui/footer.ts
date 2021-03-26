export default {
  footer: {
    position: 'relative',
    left: 0,
    bottom: 0,
    height: 'auto',
    padding: '60px 96px 40px 64px',

    footer1: {
      color: '#272639',
      fontSize: '15px',
      alignItems: 'start',
      justifyContent: 'space-evenly',

      boxFooter: {
        gridTemplateRows: '30px 200px',
        gap: 0,
        alignItems: 'start',
        h2: {
          fontSize: '30px',
          fontWeight: '500',
        },
        text: {
          color: '#878695',
          fontFamily: 'DM Sans',
          marginTop: '16px'
        },
      },
    },

    footer2: {
      color: '#272639',
      fontFamily: 'Playfair Display',
      fontSize: '15px',
      width: '300px',
      height: 'auto',
      justifyContent: 'flex-start',

      h2: {
        fontSize: '30px',
        fontWeight: '500',
      },

      input: {
        border: 'none',
        borderBottom: '1px solid #272639',
        borderRadius: 0,
        padding: 0,
        paddingBottom: '10px',
        fontSize: '1rem',
        outline: 'none',
        '&::placeholder': {
          fontFamily: 'DM Sans',
          color: '#272639',
          fontWeight: 700,
          opacity: 1,
          fontSize: '12px',
          textTransform: 'uppercase',
          
        },
      },

      button: {
        backgroundColor: '#272639',
        color: '#FFFFFF',
        width: '100%',
        marginTop: '30px',
        borderRadius: '0px',
        cursor: 'pointer',
      },
    },
    copyright: {
      position: 'absolute',
      left: '64px',
      bottom: '40px',
      color: '#878695',
      a: {
        color: '#878695',
        textDecoration: 'none',
        '&:visited': {
          color: '#878695',
        },
        '&:hover': {
          color: '#a09fb3'
        }
      }
    }
  },
}
