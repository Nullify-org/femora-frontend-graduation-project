
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-OZOULMU4.js",
      "chunk-LDTH4FZY.js",
      "chunk-JSJJFGNN.js",
      "chunk-HLJP2KD6.js",
      "chunk-CF6RYO36.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BQQV5RKQ.js",
      "chunk-7UQGVTS7.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6ZOYNERC.js",
      "chunk-7UQGVTS7.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BDSILGJL.js"
    ],
    "route": "/verify-email"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WEI7QNFF.js"
    ],
    "route": "/email-verified"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JE6Q4XXG.js"
    ],
    "route": "/select-profile"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4FQ5ZL5E.js"
    ],
    "route": "/onboarding/interests"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EAYHR3IB.js"
    ],
    "route": "/onboarding/goal"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MIAK6U44.js"
    ],
    "route": "/onboarding/choose-role"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GJ77GGHG.js"
    ],
    "route": "/onboarding/welcome"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NII3UNTI.js",
      "chunk-6DIZA3MO.js",
      "chunk-IWOYFP6E.js",
      "chunk-LDTH4FZY.js",
      "chunk-HLJP2KD6.js",
      "chunk-CF6RYO36.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QVOTR4UB.js",
      "chunk-IWOYFP6E.js",
      "chunk-JSJJFGNN.js",
      "chunk-HLJP2KD6.js",
      "chunk-CF6RYO36.js",
      "chunk-7UQGVTS7.js"
    ],
    "route": "/lms/catalog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2J3EC4QP.js",
      "chunk-6DIZA3MO.js",
      "chunk-IWOYFP6E.js",
      "chunk-JSJJFGNN.js",
      "chunk-HLJP2KD6.js",
      "chunk-CF6RYO36.js"
    ],
    "route": "/lms/course/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-O6CRWANZ.js",
      "chunk-IWOYFP6E.js",
      "chunk-JSJJFGNN.js",
      "chunk-HLJP2KD6.js",
      "chunk-CF6RYO36.js"
    ],
    "route": "/lms/player/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ZJJ5YEO4.js",
      "chunk-IWOYFP6E.js",
      "chunk-CF6RYO36.js",
      "chunk-7UQGVTS7.js"
    ],
    "route": "/lms/quiz/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4IKA2BHM.js",
      "chunk-BQ2L7FCG.js",
      "chunk-IWOYFP6E.js"
    ],
    "route": "/lms/instructor"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3SEDO5J6.js",
      "chunk-IWOYFP6E.js",
      "chunk-LDTH4FZY.js",
      "chunk-HLJP2KD6.js",
      "chunk-CF6RYO36.js"
    ],
    "route": "/marketplace/catalog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WTASXOW6.js",
      "chunk-IVIVYKS3.js",
      "chunk-IWOYFP6E.js",
      "chunk-LDTH4FZY.js",
      "chunk-HLJP2KD6.js",
      "chunk-CF6RYO36.js"
    ],
    "route": "/marketplace/product/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NDBSTB4O.js",
      "chunk-IVIVYKS3.js",
      "chunk-IWOYFP6E.js",
      "chunk-HLJP2KD6.js",
      "chunk-CF6RYO36.js"
    ],
    "route": "/marketplace/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KWC3HLVB.js",
      "chunk-57XOQSW3.js",
      "chunk-IWOYFP6E.js",
      "chunk-HLJP2KD6.js",
      "chunk-CF6RYO36.js"
    ],
    "route": "/marketplace/checkout"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KJTBVFAJ.js",
      "chunk-BQ2L7FCG.js",
      "chunk-IWOYFP6E.js"
    ],
    "route": "/marketplace/seller"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4V2YDN2O.js",
      "chunk-IWOYFP6E.js",
      "chunk-HLJP2KD6.js",
      "chunk-CF6RYO36.js",
      "chunk-7UQGVTS7.js"
    ],
    "route": "/ai/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z7NT2OUF.js",
      "chunk-BQ2L7FCG.js",
      "chunk-IWOYFP6E.js"
    ],
    "route": "/messaging"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJIH4SW4.js",
      "chunk-57XOQSW3.js",
      "chunk-6DIZA3MO.js",
      "chunk-IWOYFP6E.js",
      "chunk-HLJP2KD6.js",
      "chunk-CF6RYO36.js"
    ],
    "route": "/profile/trainee"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5JIPGSZG.js",
      "chunk-BQ2L7FCG.js",
      "chunk-IWOYFP6E.js"
    ],
    "route": "/profile/instructor"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PYP4PSE4.js",
      "chunk-BQ2L7FCG.js",
      "chunk-IWOYFP6E.js"
    ],
    "route": "/profile/seller"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BURZNYMD.js",
      "chunk-BQ2L7FCG.js",
      "chunk-IWOYFP6E.js"
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
    'index.csr.html': {size: 36864, hash: '3c30512b6fc38748354708503620e3a2c3491879be64580155595603608d30b0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14424, hash: 'bcbc5be575574450241cec5516a4a90e976015fb0d442f231fe044167c96bad2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'email-verified/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/email-verified_index_html.mjs').then(m => m.default)},
    'onboarding/goal/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_goal_index_html.mjs').then(m => m.default)},
    'onboarding/welcome/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_welcome_index_html.mjs').then(m => m.default)},
    'index.html': {size: 71016, hash: '9088fc6ebd93e9575f233e138b5781d01a3469cb47bb60cc5900fdbbdafc9f37', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'lms/catalog/index.html': {size: 46090, hash: '9259d27f85bed775c91dbc8d5343f8ded9808ea2e1bc65d5e2c03fdf9e7a6e05', text: () => import('./assets-chunks/lms_catalog_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 54691, hash: 'a71c1c120d66d9c05e8a308b855c3bff3b5fd82348910b745334b9a0b98c9979', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'marketplace/checkout/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/marketplace_checkout_index_html.mjs').then(m => m.default)},
    'profile/trainee/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_trainee_index_html.mjs').then(m => m.default)},
    'ai/chat/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/ai_chat_index_html.mjs').then(m => m.default)},
    'profile/seller/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_seller_index_html.mjs').then(m => m.default)},
    'select-profile/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/select-profile_index_html.mjs').then(m => m.default)},
    'marketplace/catalog/index.html': {size: 44105, hash: '747b78e6150f44bac020ce5e966eb2b467dca4864a93dfe8a82a64565f6d8ba6', text: () => import('./assets-chunks/marketplace_catalog_index_html.mjs').then(m => m.default)},
    'onboarding/choose-role/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_choose-role_index_html.mjs').then(m => m.default)},
    'marketplace/seller/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/marketplace_seller_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 47790, hash: 'd13301e38425d45fc610900371370909cd6e0d0a13736b85d147536f9d652de1', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'profile/instructor/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_instructor_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'verify-email/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/verify-email_index_html.mjs').then(m => m.default)},
    'messaging/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/messaging_index_html.mjs').then(m => m.default)},
    'lms/instructor/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/lms_instructor_index_html.mjs').then(m => m.default)},
    'profile/preferences/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_preferences_index_html.mjs').then(m => m.default)},
    'onboarding/interests/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_interests_index_html.mjs').then(m => m.default)},
    'marketplace/cart/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/marketplace_cart_index_html.mjs').then(m => m.default)},
    'styles-QYGUQYRL.css': {size: 56709, hash: 'qP2sPbbGaT4', text: () => import('./assets-chunks/styles-QYGUQYRL_css.mjs').then(m => m.default)}
  },
};
