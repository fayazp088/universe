import { makeStyles } from '@mui/styles';

const headerStyles = makeStyles(() => ({
    header: {
        height: '70px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '25px',
    },
    logo_container: {
        height: '100%',
        width: '70px',
        padding: '25px',
    },
    options: {
        width: '50%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    option: {
        padding: '10px 15px',
    },
}));

export default headerStyles;
