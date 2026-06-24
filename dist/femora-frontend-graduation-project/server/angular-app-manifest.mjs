
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-P5CZD7H2.js",
      "chunk-WYWC6YSO.js",
      "chunk-T2Z7VAPP.js",
      "chunk-RZ4PKAMA.js",
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
      "chunk-JU5SDCOP.js",
      "chunk-LGY4V5NU.js",
      "chunk-QCPYYBA5.js",
      "chunk-RZ4PKAMA.js",
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
      "chunk-DFH53SQN.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TYGTIB4P.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GLLCGY7J.js"
    ],
    "route": "/verify-email"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XAGEGHZH.js"
    ],
    "route": "/email-verified"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-2OFBXXRE.js"
    ],
    "route": "/select-profile"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QJHBKLM7.js"
    ],
    "route": "/onboarding/interests"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P2W7KXMO.js"
    ],
    "route": "/onboarding/goal"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R2A756WG.js"
    ],
    "route": "/onboarding/choose-role"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UWAOXBZX.js"
    ],
    "route": "/onboarding/welcome"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TPNSEZCX.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RGZX3ZAJ.js",
      "chunk-T2Z7VAPP.js",
      "chunk-LGY4V5NU.js",
      "chunk-QCPYYBA5.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/dashboard/trainee"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-76AT4Q76.js",
      "chunk-3D4WUECD.js",
      "chunk-QCPYYBA5.js",
      "chunk-RZ4PKAMA.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/dashboard/instructor"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-UEGZ6ALC.js",
      "chunk-PBNLQWYF.js",
      "chunk-3D4WUECD.js",
      "chunk-QCPYYBA5.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/dashboard/seller"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HMBNSJBX.js",
      "chunk-3D4WUECD.js",
      "chunk-QCPYYBA5.js"
    ],
    "route": "/dashboard/admin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EN75WCIH.js",
      "chunk-QCPYYBA5.js",
      "chunk-RZ4PKAMA.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/lms/catalog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-JU5SDCOP.js",
      "chunk-LGY4V5NU.js",
      "chunk-QCPYYBA5.js",
      "chunk-RZ4PKAMA.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/lms/course/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-APVCIFUV.js",
      "chunk-QCPYYBA5.js",
      "chunk-RZ4PKAMA.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/lms/player/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NSIWZIX4.js",
      "chunk-QCPYYBA5.js"
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
      "chunk-JXCEXHZH.js",
      "chunk-T2Z7VAPP.js",
      "chunk-QCPYYBA5.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/marketplace/catalog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OW2UQIQN.js",
      "chunk-WYWC6YSO.js",
      "chunk-T2Z7VAPP.js",
      "chunk-QCPYYBA5.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/marketplace/product/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FATRS5KH.js",
      "chunk-WYWC6YSO.js",
      "chunk-QCPYYBA5.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/marketplace/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LMBMOURT.js",
      "chunk-PBNLQWYF.js",
      "chunk-QCPYYBA5.js",
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
      "chunk-G7DOPQCB.js",
      "chunk-QCPYYBA5.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/ai/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HJF2EUJG.js",
      "chunk-H2LFTAT3.js",
      "chunk-QCPYYBA5.js"
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
      "chunk-CVTXGIWH.js",
      "chunk-PBNLQWYF.js",
      "chunk-LGY4V5NU.js",
      "chunk-QCPYYBA5.js",
      "chunk-HLJP2KD6.js"
    ],
    "route": "/profile/trainee"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7UYEMFED.js",
      "chunk-H2LFTAT3.js",
      "chunk-QCPYYBA5.js"
    ],
    "route": "/profile/instructor"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7WL6OGB2.js",
      "chunk-H2LFTAT3.js",
      "chunk-QCPYYBA5.js"
    ],
    "route": "/profile/seller"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NICJBINZ.js",
      "chunk-H2LFTAT3.js",
      "chunk-QCPYYBA5.js"
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
    'index.csr.html': {size: 23458, hash: 'c601ecbe1f71a582ba0cce7765bc30f6975c605456cfc1e7b92ff5cd97443ac5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14679, hash: 'bf37717ffe386516419dc779a185eb9882ad8478da596f3ef77014e55c88a748', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'email-verified/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/email-verified_index_html.mjs').then(m => m.default)},
    'onboarding/goal/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_goal_index_html.mjs').then(m => m.default)},
    'onboarding/welcome/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_welcome_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 41155, hash: 'e85483e38906b4c228f7b519fd0d39abf62677e3b5fa3da32b6c0a5285ef0096', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'marketplace/checkout/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/marketplace_checkout_index_html.mjs').then(m => m.default)},
    'marketplace/catalog/index.html': {size: 35557, hash: '0aca808681b0616d911a2a0f403564c345ca10b2475cd8aeca4f4cfbf5f4805f', text: () => import('./assets-chunks/marketplace_catalog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 84668, hash: '800a66901c5b703977b4525579d468083cef42d1330fc15396194a8cef77cdf8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'profile/instructor/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_instructor_index_html.mjs').then(m => m.default)},
    'messaging/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/messaging_index_html.mjs').then(m => m.default)},
    'verify-email/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/verify-email_index_html.mjs').then(m => m.default)},
    'onboarding/interests/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_interests_index_html.mjs').then(m => m.default)},
    'ai/chat/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/ai_chat_index_html.mjs').then(m => m.default)},
    'profile/preferences/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_preferences_index_html.mjs').then(m => m.default)},
    'profile/seller/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_seller_index_html.mjs').then(m => m.default)},
    'select-profile/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/select-profile_index_html.mjs').then(m => m.default)},
    'lms/catalog/index.html': {size: 37498, hash: '059ecec531a403ea5e26ffdda8e3c5b8b4588995b1743a007f5ba0a4d104df89', text: () => import('./assets-chunks/lms_catalog_index_html.mjs').then(m => m.default)},
    'marketplace/cart/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/marketplace_cart_index_html.mjs').then(m => m.default)},
    'profile/trainee/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_trainee_index_html.mjs').then(m => m.default)},
    'onboarding/choose-role/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_choose-role_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 34258, hash: '022ecafc52306df9e6f942c83c7f3602deac950bf238605abe3cdc2fd9f01c91', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-YJPO2BT2.css': {size: 70051, hash: 'HTlD8LtesIE', text: () => import('./assets-chunks/styles-YJPO2BT2_css.mjs').then(m => m.default)}
  },
};
