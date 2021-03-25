export default {
  footer: {
    position: 'relative',
    left: 0,
    bottom: 0,
    height: 'auto',
    padding: '0 48px 0 64px',

    footer1: {
      color: '#272639',
      fontSize: '15px',
      alignItems: 'start',
      justifyContent: 'space-evenly',

      boxFooter: {
        gridTemplateRows: '30px 200px',
        gap: 0,
        alignContent: 'start',
        h2: {
          fontSize: '30px',
          fontWeight: '500',
        },
        ul: {
          listStyleType: 'none',
          color: '#878695',
          li: {
            lineHeight: '22px',
          },
          fontFamily: 'DM Sans',
        },
      },
    },

    footer2: {
      color: '#272639',
      fontFamily: 'Playfair Display',
      fontSize: '15px',
      width: '300px',
      height: 'auto',
      alignItems: 'start',
      justifyContent: 'flex-start',

      h2: {
        fontSize: '30px',
        fontWeight: '500',
      },

      input: {
        border: 'none',
        borderBottom: '1px solid #272639',
        '&::placeholder': {
          color: '#272639',
          opacity: '1',
          fontSize: '10px',
          textTransform: 'uppercase',
          fontFamily: 'DM Sans',
        },
      },

      button: {
        backgroundColor: '#272639',
        color: '#FFFFFF',
        width: '350px',
        marginTop: '30px',
        borderRadius: '0px',
        cursor: 'pointer',
      },
    },
  },
}
