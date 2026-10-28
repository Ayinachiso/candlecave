import Store from '../store';
import {getCatalog} from '@/lib/catalog-server';
export const dynamic='force-dynamic';
export const metadata={title:'Candle care | Candlecave'};
export default async function Page(){
  let products: Awaited<ReturnType<typeof getCatalog>>|null=null;
  try{products=await getCatalog();}catch{}
  if(!products)return <main className="catalog-unavailable"><h1>A moment, please.</h1><p>Our collection is temporarily unavailable. You can still shop directly on Shopaza.</p><a className="button" href="https://shopaza.africa/candlecave">Open the Candlecave store</a></main>;
  return <Store mode="care" initialProducts={products}/>;
}
