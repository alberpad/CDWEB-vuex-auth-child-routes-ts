export default [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/LoginViewCom'),
  },
  {
    path: '/secret',
    // Una ruta que tiene rutas hija no puede tener un nombre
    // name: 'secret',
    component: () => import('@/views/Secret/SecretViewCom'),
    meta: { requiresAuth: true },
    children: [
      {
        // Las rutas aquí no llevan /
        path: 'notes',
        component: () => import('@/views/Secret/NotesViewCom'),
      },
    ],
  },
];
