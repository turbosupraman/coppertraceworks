// Cloudflare Pages Function — usage counters with daily/monthly/last-used tracking
// All 27 tabs (0-26) with exact names from the tab bar

const TAB_KEYS = [];
for (let i = 0; i <= 50; i++) TAB_KEYS.push('tab-' + i);

const TAB_NAMES = {
  'tab-0':'LED Resistor','tab-1':'LC Resonance','tab-2':'Voltage Divider',
  'tab-3':'S-Parameters','tab-4':'Component Models','tab-5':'Radar',
  'tab-6':'Pulse Droop','tab-7':'RF Cascade Analyzer','tab-8':'Unit Converter',
  'tab-9':"Ohm's Law + Power",'tab-10':'RC Cutoff','tab-11':'dBm ↔ Voltage',
  'tab-12':'About','tab-13':'Via Properties','tab-14':'Min Copper Spacing',
  'tab-15':'Diff Pair / Xtalk','tab-16':'Trace Impedance','tab-17':'Decoupling Explorer',
  'tab-18':'Fusing Current','tab-19':'Bandwidth / Max Length','tab-20':'Conductor Properties',
  'tab-21':'Thermal','tab-22':'Planar Inductors','tab-23':'PPM-XTAL',
  'tab-24':'Mechanical Info','tab-25':'Embedded Resistors','tab-26':'4-20mA Sensor','tab-27':'Asteroids'
};

function fmtDate() { const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function fmtMonth() { const d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0'); }

export async function onRequest(context) {
  const { request, env } = context;
  const KV = env.COUNTERS;
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

  if (request.method === 'GET') {
    const today = fmtDate();
    const month = fmtMonth();
    const results = {};
    for (const k of TAB_KEYS) {
      results[k] = {
        all: parseInt(await KV.get('ctw-'+k) || '0'),
        today: parseInt(await KV.get('daily-'+today+'-'+k) || '0'),
        month: parseInt(await KV.get('monthly-'+month+'-'+k) || '0'),
        last: await KV.get('last-'+k) || null
      };
    }
    let totalAll=0, totalToday=0, totalMonth=0;
    for (const k of TAB_KEYS) { totalAll += results[k].all; totalToday += results[k].today; totalMonth += results[k].month; }
    const ranked = TAB_KEYS.slice().sort((a,b) => results[b].all - results[a].all);
    return new Response(JSON.stringify({
      counters: results,
      totals: { all: totalAll, today: totalToday, month: totalMonth },
      ranking: ranked,
      tabNames: TAB_NAMES
    }), { headers: cors });
  }

  if (request.method === 'POST') {
    const body = await request.json();
    const key = body.key;
    if (!key || !TAB_KEYS.includes(key)) {
      return new Response(JSON.stringify({ error: 'invalid key' }), { status: 400, headers: cors });
    }
    const today = fmtDate();
    const month = fmtMonth();
    const kvKey = 'ctw-' + key;
    let current = parseInt(await KV.get(kvKey) || '0') + 1;
    await KV.put(kvKey, String(current));
    const dailyKey = 'daily-' + today + '-' + key;
    let daily = parseInt(await KV.get(dailyKey) || '0') + 1;
    await KV.put(dailyKey, String(daily));
    const monthlyKey = 'monthly-' + month + '-' + key;
    let monthly = parseInt(await KV.get(monthlyKey) || '0') + 1;
    await KV.put(monthlyKey, String(monthly));
    await KV.put('last-'+key, new Date().toISOString());
    return new Response(JSON.stringify({ key, count: current, daily, monthly }), { headers: cors });
  }

  return new Response(JSON.stringify({ error: 'method not allowed' }), { status: 405, headers: cors });
}
