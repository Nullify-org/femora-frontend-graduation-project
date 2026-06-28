
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-OOL5F5CK.js",
      "chunk-IVZS2OFK.js",
      "chunk-A3PSHIVG.js",
      "chunk-3A7K2ANO.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/auth/login",
    "route": "/auth/login"
  },
  {
    "renderMode": 2,
    "redirectTo": "/auth/register",
    "route": "/auth/register"
  },
  {
    "renderMode": 2,
    "redirectTo": "/lms/catalog",
    "route": "/courses"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DASBCV33.js",
      "chunk-ZUVY23YE.js",
      "chunk-VN7G6PYI.js",
      "chunk-3A7K2ANO.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/courses/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/marketplace/cart",
    "route": "/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NVMWEOS7.js",
      "chunk-2NODKS4Z.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LXZ27XW5.js",
      "chunk-2NODKS4Z.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7DIEZBHO.js"
    ],
    "route": "/verify-email"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P6BNJCND.js"
    ],
    "route": "/email-verified"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VWT7POPB.js"
    ],
    "route": "/select-profile"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WEIUJQBI.js"
    ],
    "route": "/onboarding/interests"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-57F3ZX5M.js"
    ],
    "route": "/onboarding/goal"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZGYGOACT.js"
    ],
    "route": "/onboarding/choose-role"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7SGKFSKI.js"
    ],
    "route": "/onboarding/welcome"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SKCPDYJG.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QDMLTJQV.js",
      "chunk-A3PSHIVG.js",
      "chunk-ZUVY23YE.js",
      "chunk-VN7G6PYI.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/dashboard/trainee"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-V6IULSCX.js",
      "chunk-52EAV4QV.js",
      "chunk-VN7G6PYI.js",
      "chunk-3A7K2ANO.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/dashboard/instructor"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LI5PXFMW.js",
      "chunk-IUBOC7J7.js",
      "chunk-52EAV4QV.js",
      "chunk-VN7G6PYI.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/dashboard/seller"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3VLJ5HTH.js",
      "chunk-52EAV4QV.js",
      "chunk-VN7G6PYI.js"
    ],
    "route": "/dashboard/admin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-54OQJXHE.js",
      "chunk-VN7G6PYI.js",
      "chunk-3A7K2ANO.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/lms/catalog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DASBCV33.js",
      "chunk-ZUVY23YE.js",
      "chunk-VN7G6PYI.js",
      "chunk-3A7K2ANO.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/lms/course/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XARQDGLT.js",
      "chunk-VN7G6PYI.js",
      "chunk-3A7K2ANO.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/lms/player/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MUVV4WJW.js",
      "chunk-VN7G6PYI.js"
    ],
    "route": "/lms/quiz/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/lms/dashboard/instructor",
    "route": "/lms/instructor"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXKTYTF3.js",
      "chunk-A3PSHIVG.js",
      "chunk-VN7G6PYI.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/marketplace/catalog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3AE7ZYFJ.js",
      "chunk-IVZS2OFK.js",
      "chunk-A3PSHIVG.js",
      "chunk-VN7G6PYI.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/marketplace/product/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U3GPRJ5B.js",
      "chunk-IVZS2OFK.js",
      "chunk-VN7G6PYI.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/marketplace/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VFHL3GIY.js",
      "chunk-IUBOC7J7.js",
      "chunk-VN7G6PYI.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/marketplace/checkout"
  },
  {
    "renderMode": 2,
    "redirectTo": "/marketplace/dashboard/seller",
    "route": "/marketplace/seller"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6FX54QX5.js",
      "chunk-VN7G6PYI.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/ai/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IFOYATP3.js",
      "chunk-GV5XM6RX.js",
      "chunk-VN7G6PYI.js"
    ],
    "route": "/messaging"
  },
  {
    "renderMode": 2,
    "redirectTo": "/profile/trainee",
    "route": "/profile"
  },
  {
    "renderMode": 2,
    "redirectTo": "/profile/profile/preferences",
    "route": "/profile/edit"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2ZXBW4HM.js",
      "chunk-IUBOC7J7.js",
      "chunk-ZUVY23YE.js",
      "chunk-VN7G6PYI.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/profile/trainee"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PKQMREYN.js",
      "chunk-GV5XM6RX.js",
      "chunk-VN7G6PYI.js"
    ],
    "route": "/profile/instructor"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JH2TTFJ4.js",
      "chunk-GV5XM6RX.js",
      "chunk-VN7G6PYI.js"
    ],
    "route": "/profile/seller"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HMEDQZPN.js",
      "chunk-GV5XM6RX.js",
      "chunk-VN7G6PYI.js"
    ],
    "route": "/profile/preferences"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23737, hash: '5a7f172ab0fa0d0c26e1976e86eff8b39034cfc1f517492e521d5402c3b5746a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14628, hash: '1b1a0c85f700f0732380dcb98e6051711445b3bb41aab906fe376661a80a5d26', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'email-verified/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/email-verified_index_html.mjs').then(m => m.default)},
    'onboarding/goal/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_goal_index_html.mjs').then(m => m.default)},
    'onboarding/welcome/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_welcome_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 41043, hash: 'b598b7c0b7e3fd20c428b503efbd83c18813bcd84fde3292aec2842f92ed972a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'marketplace/catalog/index.html': {size: 39027, hash: '5024de2097fa722f4688bf9b4f934fefbd67a35e1675f27a0cf21562feb90262', text: () => import('./assets-chunks/marketplace_catalog_index_html.mjs').then(m => m.default)},
    'marketplace/checkout/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/marketplace_checkout_index_html.mjs').then(m => m.default)},
    'messaging/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/messaging_index_html.mjs').then(m => m.default)},
    'profile/instructor/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_instructor_index_html.mjs').then(m => m.default)},
    'profile/preferences/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_preferences_index_html.mjs').then(m => m.default)},
    'verify-email/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/verify-email_index_html.mjs').then(m => m.default)},
    'onboarding/interests/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_interests_index_html.mjs').then(m => m.default)},
    'ai/chat/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/ai_chat_index_html.mjs').then(m => m.default)},
    'profile/seller/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_seller_index_html.mjs').then(m => m.default)},
    'select-profile/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/select-profile_index_html.mjs').then(m => m.default)},
    'marketplace/cart/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/marketplace_cart_index_html.mjs').then(m => m.default)},
    'lms/catalog/index.html': {size: 40804, hash: 'fb098324a8dfc0485044149c2180efc9890d7e57b3246c6dd0e58dbe0ef66c2d', text: () => import('./assets-chunks/lms_catalog_index_html.mjs').then(m => m.default)},
    'profile/trainee/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_trainee_index_html.mjs').then(m => m.default)},
    'index.html': {size: 84834, hash: 'c9da0d1053cad78f9289e7f34eef159a6a1c50e8c6ccdcdcb5ae498ce4c10ac4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'onboarding/choose-role/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_choose-role_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 35159, hash: 'a2eb7b06cf3c9ebdcf5f0fcca545c4a4053bc100057a57949c8249cc534c6e6b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-C45BJSCF.css': {size: 78761, hash: 'QIPV0Q8azPw', text: () => import('./assets-chunks/styles-C45BJSCF_css.mjs').then(m => m.default)}
  },
};
