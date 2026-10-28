import {requireChatGPTUser} from '../chatgpt-auth';
import {getAdmin} from '@/lib/admin';
import Workspace from './workspace';
export const dynamic='force-dynamic';
export default async function Page(){const user=await requireChatGPTUser('/crm');if(!await getAdmin())return <main style={{padding:50}}><h1>Admin access required</h1><p>Sign in with the Candlecave owner account to manage products and customers.</p><a href="/">Back to shop</a></main>;return <Workspace displayName={user.displayName}/>}
