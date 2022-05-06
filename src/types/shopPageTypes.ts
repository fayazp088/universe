export type ShopType = {
    id?: number | null;
    title: string;
    routeName: string;
    items: ShopItemType[];
};

export type ShopItemType = {
    id?: number;
    name: string;
    imageUrl: string;
    price: number;
};
