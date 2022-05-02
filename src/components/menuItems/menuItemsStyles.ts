import { makeStyles } from '@mui/styles';

const menuItemStyles = makeStyles(() => ({
    menuItem: {
        minWidth: '30%',
        height: '240px',
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        margin: '0 7.5px 15px',
        overflow: 'hidden',

        '&:first-child': {
            marginRight: '7.5px',
        },
        '&:last_child': {
            marginLeft: '7.5px',
        },

        '&:hover': {
            cursor: 'pointer',
        },
    },
    size: {
        height: '400px',
    },
    content: {
        height: '90px',
        padding: '0 25px',
        display: 'flex',
        flexDirection: 'column !important' as 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        backgroundColor: '#fff',
        opacity: 0.7,
        position: 'absolute',

        '&:hover': {
            opacity: 0.9,
        },
    },
    title: {
        fontWeight: 'bold',
        marginBottom: '6px',
        fontSize: '22px',
        color: '#4a4a4a',
    },
    subtitle: {
        fontWeight: 'lighter',
        fontSize: '16px',
    },
    background: {
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 6s cubic-bezier(.17,.67,.83,.67)',
        },
    },
}));

export default menuItemStyles;
