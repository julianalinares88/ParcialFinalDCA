import { EventPost } from "./post";

export type AppState = {
    screen: string;
    products: EventPost[];
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
    'NAVIGATE' = 'NAVIGATE',
    'GETPRODUCTS' = 'GETPRODUCTS',
    'CREATEPRODUCT' = 'CREATEPRODUCT',
}

export enum Screens {
    'ADMINVIEW' = 'ADMINVIEW',
    'USERVIEW' = 'USERVIEW',
    
}