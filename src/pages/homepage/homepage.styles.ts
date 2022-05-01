import { makeStyles } from '@mui/styles';

const homePageStyles = makeStyles(() => ({
    homepage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 80px',
    },
    directoryMenu: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    menuItem: {
        minWidth: '30%',
        height: '240px',
        flex: '1 1 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        margin: '0 7.5px 15px',

        '&:first-child': {
            marginRight: '7.5px',
        },
        '&:last_child': {
            marginLeft: '7.5px',
        },
    },
    content: {
        height: '90px',
        padding: '0 25px',
        display: 'block',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
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
}));

export default homePageStyles;
