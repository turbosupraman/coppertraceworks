// Cloudflare Pages Function — global calculator usage counters
// KV namespace: COUNTERS (binding set in wrangler.jsonc or Cloudflare dashboard)

export async function onRequest(context) {
  const { request, env } = context;
  const COUNTERS = env.COUNTERS;
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  const keys = [
    'led','lc','vd','comp','radar','fusing','bw','cond','droop','decoup',
    'link','ohms','rc','dbm','dbmv','planar','xtal','mech','embed','loop420',
    'thermal','via','spacing','diff','trace','deembed','portext'
  ];

  if (request.method === 'GET') {
    // Read all counters
    const results = {};
    for (const k of keys) {
      const val = await COUNTERS.get('ctw-' + k);
      results[k] = val ? parseInt(val) : 0;
    }
    return new Response(JSON.stringify(results), { headers: corsHeaders });
  }

  if (request.method === 'POST') {
    // Increment one counter
    const body = await request.json();
    const key = body.key;
    if (!key || !keys.includes(key)) {
      return new Response(JSON.stringify({ error: 'invalid key' }), {
        status: 400, headers: corsHeaders
      });
    }
    const kvKey = 'ctw-' + key;
    let current = parseInt(await COUNTERS.get(kvKey) || '0');
    current++;
    await COUNTERS.put(kvKey, String(current));
    return new Response(JSON.stringify({ key, count: current }), { headers: corsHeaders });
  }

  return new Response(JSON.stringify({ error: 'method not allowed' }), {
    status: 405, headers: corsHeaders
  });
}
