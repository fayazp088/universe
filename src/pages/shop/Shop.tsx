import React from 'react';
import PreviewCard from '../../components/previewCardCollection/PreviewCardCollection';
import SHOP_DATA from './shopData';
import { ShopType } from '../../types/shopPageTypes';

const Shop = () => {
    // const [shopData, setShopData] = useState(SHOP_DATA);

    return (
        <>
            {SHOP_DATA.map(({ id, title, routeName, items }: ShopType) => {
                return (
                    <PreviewCard
                        key={id}
                        title={title}
                        routeName={routeName}
                        items={items}
                    />
                );
            })}
        </>
    );
};

export default Shop;
