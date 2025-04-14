
const styles = {
    section: {
        minHeight: "50vh",
        width: '100%',
        position: 'relative',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        minHeight: '100vh',
        position: 'relative',
        marginTop: 14,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 8,
        topContainer: {
            zIndex: 30,
            top: 2,
            display: 'flex',
            justifyContent: {
                xs: 'center',
                md: 'space-between'
            },
            flexWrap: 'wrap',
            minHeight: 80,
            width: '100%',
            paddingX: {
                sm: 6,
                xs: 1
            },
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%)'
        },
        topCards: {
            color: 'white',
            minHeight: 100,
            width: {
                xs: '100%'
            },
            display: 'grid',
            placeItems: 'center',
            gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr ',
                md: '1fr 1fr 1fr',
            },

            padding: 1,
        },
        topCard: {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            height: 100,
            width: {
                xs: '100%',
                sm: 250,

            },
            borderLeft: '1px solid white',
            padding: 1

        },
        callToAction: {
            margintTop: 2,
            position: {
                xs: 'relative',
                md: 'absolute'
            },
            right: 0,
            top: 0,
            width: 200,
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            borderRadius: 2,
            color: 'white',
        },
        mainContainer: {
            color: 'white',
            zIndex: 30,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 1,
            minHeight: 550,
            width: {
                md: '70%',
                sm: '100%',
                xs: '100%'
            },
        },
        mainCards: {
            display: 'grid',
            placeItems: 'center',
            alignItems: 'flex-end',
            gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr'

            },
            minHeight: 250,
            width: '100%',
        },
        mainCard: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "left",
            padding: 2,
            color: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            margin: 1,
            width: {
                sm: 250,
                xs: '90%'
            },
        },
        mainText: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            minHeight: 250
        }
    },
    products: {
        position: 'relative',
        marginTop: 8,
        padding: 0.5,
        minHeight: 740,
        width: {
            xs: '100%',
            sm: '90%',
            md: '80%'
        },
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'center',
        grid: {
            display: 'grid',
            placeItems: 'center',
            gap: 2,
            gridTemplateColumns: `repeat( auto-fit, minmax(300px, 1fr) )`,
            width: '100%',
        },
        card: {
            border: '1px solid',
            width: 0,
            height: 200,
        },
        content: {
            position: 'relative',
            minHeight: 600,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: {
                xs: 'column',
                sm: 'column',
                md: 'row'
            },
            gap: 1,
            width: '100%',

        },
        image: {
            zIndex: 10,
            height: 600,
            padding: 6,
            width: {
                xs: '100%',
                md: '50%',

            }
        },
        text: {
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            height: 600,
            width: {
                xs: '100%',
                md: '40%',
            },
            padding: 2
        },
        topDivider: {
            height: 30,
            width: '90%',
            border: '1px solid black',
            position: 'absolute',
            top: 0
        }
    },
    aboutUs: {
        title: {
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 4,
            position: 'relative',
            '&:after': {
                content: '""',
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '50px',
                height: '3px',
                backgroundColor: '#d32f2f', // Linha vermelha abaixo do título
            },
        },
        mainContainer: {
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Colunas em telas grandes, empilhado em telas pequenas
            gap: 4,
            maxWidth: '1200px',
            margin: '0 auto',
            mb: 4,
        },
        text: {
            flex: 1,
            backgroundColor: '#424242', // Fundo cinza escuro
            color: 'white',
            padding: '20px',
            borderRadius: '8px',
            border: '2px solid #d32f2f', // Borda vermelha
        },
        cards: {
            flex: 1,
            padding: '20px',
            borderRadius: '8px',
            border: '2px solid #d32f2f', // Borda vermelha
        },
        cardItem: {
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 2,
            borderBottom: '1px solid #d32f2f', // Linha vermelha separadora
            pb: 1,
        },
        cardNumber: {
            color: '#d32f2f', // Número em vermelho
            fontWeight: 'bold',
        },
    }
}
export default styles;