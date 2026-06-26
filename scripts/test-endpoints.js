#!/usr/bin/env node
// Simple endpoint tester for local API via proxy (http://localhost:4200)
// Usage: node scripts/test-endpoints.js

const DEFAULT_BASE = process.env.API_BASE || 'http://localhost:4200';
let fetchImpl = null;

const endpoints = [
  { name: 'auth/signin', method: 'POST', path: '/api/auth/signin', body: { email: 'test@example.com', password: 'password' } },
  { name: 'auth/register', method: 'POST', path: '/api/auth/register', body: { firstName: 'Test', lastName: 'User', email: 'test+1@example.com', password: 'password' } },
  { name: 'auth/refresh', method: 'POST', path: '/api/auth/refresh' },
  { name: 'auth/logout', method: 'POST', path: '/api/auth/logout' },
  { name: 'courses/list', method: 'GET', path: '/api/courses' },
  { name: 'course/get', method: 'GET', path: '/api/courses/1' },
  { name: 'profile/get', method: 'GET', path: '/api/profile' },
  { name: 'profile/update', method: 'PUT', path: '/api/profile', body: { firstName: 'Test' } },
  { name: 'cart/get', method: 'GET', path: '/api/cart' },
];

async function testEndpoint(base, endpoint, lang) {
  const url = base + endpoint.path;
  const opts = {
    method: endpoint.method,
    headers: { 'Accept-Language': lang, 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  if (endpoint.body) opts.body = JSON.stringify(endpoint.body);

  const start = Date.now();
  try {
    const res = await fetchImpl(url, opts);
    const ms = Date.now() - start;
    let text;
    try {
      text = await res.text();
      // try to pretty print JSON if possible
      try { text = JSON.stringify(JSON.parse(text), null, 2); } catch {}
    } catch (e) { text = '<no body>' }

    console.log(`\n[${lang}] ${endpoint.method} ${endpoint.path} -> ${res.status} ${res.statusText} (${ms}ms)`);
    console.log('Headers:');
    res.headers.forEach((v,k)=>console.log(`  ${k}: ${v}`));
    console.log('Body:');
    console.log(text);
  } catch (err) {
    const ms = Date.now() - start;
    console.error(`\n[${lang}] ${endpoint.method} ${endpoint.path} -> ERROR (${ms}ms)`);
    console.error(err);
  }
}

async function main() {
  // Ensure a fetch implementation is available (Node 18+ has global fetch)
  fetchImpl = globalThis.fetch || (await import('node-fetch')).then(m=>m.default);

  console.log('API base:', DEFAULT_BASE);
  for (const ep of endpoints) {
    await testEndpoint(DEFAULT_BASE, ep, 'en');
    await testEndpoint(DEFAULT_BASE, ep, 'ar');
  }
}

main().catch((e)=>{ console.error(e); process.exit(1); });
