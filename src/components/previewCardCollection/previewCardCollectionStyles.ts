import { makeStyles } from '@mui/styles';

export const previewCardCollectionStyles = makeStyles(() => ({
    collectionPreview: {
        display: 'flex',
        flexDirection: 'column !important' as 'column',
        marginBottom: '30px',
    },
    title: { fontSize: '28px', marginBottom: '25px' },
    preview: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
}));

export const previewCardStyles = makeStyles(() => ({
    collection_item: {
        width: '22%',
        display: 'flex',
        flexDirection: 'column !important' as 'column',
        height: '350px',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '95%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: '5px',
    },
    collection_footer: {
        width: '100%',
        height: '5%',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '18px',
    },
    name: {
        width: '90%',
        marginBottom: '15px',
    },
    price: {
        width: '10%',
    },
}));
