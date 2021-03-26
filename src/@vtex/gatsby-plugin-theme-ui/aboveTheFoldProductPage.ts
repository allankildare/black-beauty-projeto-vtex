export default {
    productPageContainer: {
        container: {
            fontFamily: 'DM Sans',
            overflowX: 'hidden',
            card: {
                h1: {
                    color: '#878695',
                },
                '> div': {
                    '> div:nth-child(5)': {
                        display: 'none'
                    },
                    '> div:nth-child(6)': {
                        display: 'none'
                    },
                    '> div:nth-child(1) > div:nth-child(2)': {
                        color: '#D3B4A2',
                        fontWeight: 400,
                        fontSize: '24px'
                    },
                    '> button': {
                        backgroundColor: 'transparent',
                        color: '#272639',
                        fontWeight: 600,
                        fontSize: '14px', 
                        letterSpacing: '3px',
                        borderRadius: 0,
                        borderBottom: '1px solid #272639',
                        textTransform: 'uppercase',
                        width: 'auto',
                        padding: 0,
                        cursor: 'pointer'
                    },
                    
                },
            },
            title: {
                // color: '#878695'
            },
            '> div:nth-child(2) > div:nth-child(1) > div:nth-child(1)': {
                margin: 'auto 15px auto 15px',
            },
        }
    }
}