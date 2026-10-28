import {database} from './database';
import {products} from './catalog';
import {productSchema,type Product} from './product-model';
export async function getCatalog(includeDrafts=false):Promise<Product[]>{const result=await database().prepare('SELECT data FROM catalog_items ORDER BY updated_at DESC').all<{data:string}>();const all=new Map(products.map(p=>[p.id,p]));for(const row of result.results){const parsed=productSchema.safeParse(JSON.parse(row.data));if(parsed.success)all.set(parsed.data.id,parsed.data);else throw new Error('Invalid saved catalogue record');}return Array.from(all.values()).filter(p=>includeDrafts||p.active);}
