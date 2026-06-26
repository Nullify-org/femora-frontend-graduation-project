
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-PLYRINE6.js",
      "chunk-GTU2IOJB.js",
      "chunk-7ZUHCJQX.js",
      "chunk-OOKOPNJH.js",
      "chunk-BXHKRPLP.js"
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
      "chunk-MWDSQLLY.js",
      "chunk-H3MLE77K.js",
      "chunk-KPU4IQ44.js",
      "chunk-OOKOPNJH.js",
      "chunk-BXHKRPLP.js"
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
      "chunk-FFFMHPCP.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BFCAG6CQ.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZHZMC2KT.js"
    ],
    "route": "/verify-email"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-56LQBEL7.js"
    ],
    "route": "/email-verified"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TB2ZSI7W.js"
    ],
    "route": "/select-profile"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TSJE52QX.js"
    ],
    "route": "/onboarding/interests"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OHIENCJZ.js"
    ],
    "route": "/onboarding/goal"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LY5AV6OI.js"
    ],
    "route": "/onboarding/choose-role"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BGMJWJJF.js"
    ],
    "route": "/onboarding/welcome"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OA5365HM.js"
    ],
    "route": "/dashboard"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-6RFVRVSG.js",
      "chunk-7ZUHCJQX.js",
      "chunk-H3MLE77K.js",
      "chunk-KPU4IQ44.js",
      "chunk-BXHKRPLP.js"
    ],
    "route": "/dashboard/trainee"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DHAIZ5EN.js",
      "chunk-JPYSJY7S.js",
      "chunk-KPU4IQ44.js",
      "chunk-OOKOPNJH.js",
      "chunk-BXHKRPLP.js"
    ],
    "route": "/dashboard/instructor"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7SELAIYV.js",
      "chunk-ZUFNIQCQ.js",
      "chunk-JPYSJY7S.js",
      "chunk-KPU4IQ44.js",
      "chunk-BXHKRPLP.js"
    ],
    "route": "/dashboard/seller"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4FFB5HVN.js",
      "chunk-JPYSJY7S.js",
      "chunk-KPU4IQ44.js"
    ],
    "route": "/dashboard/admin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QOY5NTLR.js",
      "chunk-KPU4IQ44.js",
      "chunk-OOKOPNJH.js",
      "chunk-BXHKRPLP.js"
    ],
    "route": "/lms/catalog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MWDSQLLY.js",
      "chunk-H3MLE77K.js",
      "chunk-KPU4IQ44.js",
      "chunk-OOKOPNJH.js",
      "chunk-BXHKRPLP.js"
    ],
    "route": "/lms/course/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-WRZHWL3G.js",
      "chunk-KPU4IQ44.js",
      "chunk-OOKOPNJH.js",
      "chunk-BXHKRPLP.js"
    ],
    "route": "/lms/player/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KOQVQM66.js",
      "chunk-KPU4IQ44.js"
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
      "chunk-CIX44LWB.js",
      "chunk-7ZUHCJQX.js",
      "chunk-KPU4IQ44.js",
      "chunk-BXHKRPLP.js"
    ],
    "route": "/marketplace/catalog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IUOYSJI3.js",
      "chunk-GTU2IOJB.js",
      "chunk-7ZUHCJQX.js",
      "chunk-KPU4IQ44.js",
      "chunk-BXHKRPLP.js"
    ],
    "route": "/marketplace/product/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-36L3O5Z6.js",
      "chunk-GTU2IOJB.js",
      "chunk-KPU4IQ44.js",
      "chunk-BXHKRPLP.js"
    ],
    "route": "/marketplace/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Y5QWCZWL.js",
      "chunk-ZUFNIQCQ.js",
      "chunk-KPU4IQ44.js",
      "chunk-BXHKRPLP.js"
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
      "chunk-DQPVNRTW.js",
      "chunk-KPU4IQ44.js",
      "chunk-BXHKRPLP.js"
    ],
    "route": "/ai/chat"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6ZR6OJKF.js",
      "chunk-JPBG5VR6.js",
      "chunk-KPU4IQ44.js"
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
      "chunk-O5ZH5ZY4.js",
      "chunk-ZUFNIQCQ.js",
      "chunk-H3MLE77K.js",
      "chunk-KPU4IQ44.js",
      "chunk-BXHKRPLP.js"
    ],
    "route": "/profile/trainee"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NZVTLQJG.js",
      "chunk-JPBG5VR6.js",
      "chunk-KPU4IQ44.js"
    ],
    "route": "/profile/instructor"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N72QUHNC.js",
      "chunk-JPBG5VR6.js",
      "chunk-KPU4IQ44.js"
    ],
    "route": "/profile/seller"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MDELJQ6Q.js",
      "chunk-JPBG5VR6.js",
      "chunk-KPU4IQ44.js"
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
    'index.csr.html': {size: 1267, hash: 'b52be18786c57f46276cf0c95ed3b387acf465cf3114e43afa6866481f9c92f9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1807, hash: '974155cf0cda9d24e91b95896422ae050c0b8f801afb8a097b8e51afb4f63ff8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 11658, hash: '19592d974c4aeedad88beeef8a3ca4757630ae61e90d043e97f2134b75068f52', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'email-verified/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/email-verified_index_html.mjs').then(m => m.default)},
    'onboarding/goal/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_goal_index_html.mjs').then(m => m.default)},
    'onboarding/welcome/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_welcome_index_html.mjs').then(m => m.default)},
    'index.html': {size: 38357, hash: 'd5026b45155731a7bf6e31b94bbaa759cce337435064a9bf5c78a24f23d80a7a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'marketplace/checkout/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/marketplace_checkout_index_html.mjs').then(m => m.default)},
    'marketplace/catalog/index.html': {size: 10414, hash: '0b96c60c9fae70a7aca667d69fc5db38d0593e7d60c13ef0426b70ae1824156b', text: () => import('./assets-chunks/marketplace_catalog_index_html.mjs').then(m => m.default)},
    'profile/instructor/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_instructor_index_html.mjs').then(m => m.default)},
    'messaging/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/messaging_index_html.mjs').then(m => m.default)},
    'profile/preferences/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_preferences_index_html.mjs').then(m => m.default)},
    'verify-email/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/verify-email_index_html.mjs').then(m => m.default)},
    'onboarding/interests/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_interests_index_html.mjs').then(m => m.default)},
    'ai/chat/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/ai_chat_index_html.mjs').then(m => m.default)},
    'profile/seller/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_seller_index_html.mjs').then(m => m.default)},
    'lms/catalog/index.html': {size: 11049, hash: '10d65169e4b7faaa2e3505fc35c36b68562735bdb39004674693bea557a6929b', text: () => import('./assets-chunks/lms_catalog_index_html.mjs').then(m => m.default)},
    'select-profile/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/select-profile_index_html.mjs').then(m => m.default)},
    'profile/trainee/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/profile_trainee_index_html.mjs').then(m => m.default)},
    'marketplace/cart/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/marketplace_cart_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 6751, hash: '096cb3f01d132fefdce95cf4faf7566bfaa63dd09f4738a1db56f965e9eb588d', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'onboarding/choose-role/index.html': {size: 240, hash: 'db096474d521163c4f5fb7d700305222bcea1012b38583442ad232da75e59192', text: () => import('./assets-chunks/onboarding_choose-role_index_html.mjs').then(m => m.default)}
  },
};
