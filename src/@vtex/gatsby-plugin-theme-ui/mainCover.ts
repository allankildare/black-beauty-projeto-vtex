export default {
  mainCover: {
    backgroundColor: '#ECCAB7',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '90vh',
    mainTitle: {
      zIndex: 2,
      textAlign: 'center',
      color: '#D69D7D',
      letterSpacing: '4.5px',
      position: 'absolute',
      fontFamily: 'Playfair Display',
      fontSize: '150px',
      fontWeight: 400,
      lineHeight: 1,
    },
    coverButton: {
      zIndex: 2,
      position: 'absolute',
      bottom: '48px',
      backgroundColor: '#272639',
      padding: '12px 35px',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      borderRadius: 0,
      textTransform: 'uppercase',
    },
    img: {
      width: '80%',
      height: '100px',
      background: 'yellow',
    },
  },
  mainImg: {
    imgBox: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      width: '700px',
      height: '460px',
      position: 'relative',
      zIndex: 1,
    },
    newMake: {
      zIndex: 2,
      color: '#FEFBF5',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '3px',
      fontSize: '18px',
      fontWeight: 400,
      position: 'absolute',
      top: '30px',
      left: '50%',
      transform: 'translate(-50%, 0)',
    },
  },
}
