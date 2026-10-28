import {z} from 'zod';
export const SHOP_URL='https://shopaza.africa/candlecave';
export const moods=['All favourites','Your glow','A little drama','Good energy','More to love'];
export function isShopazaUrl(value:string){try{const u=new URL(value);return u.protocol==='https:'&&u.hostname==='shopaza.africa'&&!u.username&&!u.password&&(u.pathname==='/candlecave'||u.pathname.startsWith('/candlecave/products/'));}catch{return false}}
export const productSchema=z.object({
 id:z.string().regex(/^[a-z0-9][a-z0-9-]{0,79}$/),name:z.string().trim().min(2).max(80),
 notes:z.string().trim().max(180),family:z.enum(['Your glow','A little drama','Good energy','More to love']),
 price:z.number().finite().min(1).max(10000000),image:z.string().max(400).refine(v=>/^\/images\/[a-zA-Z0-9_.-]+$/.test(v)||/^\/api\/media\/[a-f0-9-]{36}\.(jpg|png|webp|mp4)$/.test(v),'Upload a product image.'),
 colour:z.string().regex(/^#[0-9a-fA-F]{6}$/),tagline:z.string().trim().min(2).max(100),description:z.string().trim().min(10).max(3000),
 category:z.enum(['Reed diffuser','Scented candle','Room spray','Car diffuser','Home décor']),
 shopUrl:z.string().max(500).refine(v=>v===''||isShopazaUrl(v),'Use a Candlecave Shopaza product link.'),
 active:z.boolean(),featured:z.boolean(),available:z.boolean()
}).refine(p=>!p.active||isShopazaUrl(p.shopUrl),'A published product needs its Shopaza link.').refine(p=>!p.image.endsWith('.mp4'),'Use a photo for the product cover.');
export type Product=z.infer<typeof productSchema>;
