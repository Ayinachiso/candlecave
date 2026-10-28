import {env} from 'cloudflare:workers';
import {getChatGPTUser} from '@/app/chatgpt-auth';
export async function getAdmin(){const user=await getChatGPTUser();const allowed=(env.CANDLECAVE_ADMIN_EMAIL||'').toLowerCase().trim();return user&&allowed&&user.email.toLowerCase()===allowed?user:null;}
export function validOrigin(request:Request){const origin=request.headers.get('origin');return !origin||origin===new URL(request.url).origin;}
