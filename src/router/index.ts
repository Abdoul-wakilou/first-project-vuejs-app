


import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AccueilView from '../views/AccueilView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import ConnexionView from '../views/ConnexionView.vue'
import MdpOublieView from '../views/MdpOublieView.vue'
import NouveauMdpView from '../views/NouveauMdpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView
    }, */
    {
      path: '/',
      name: 'Accueil',
      component: AccueilView
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: InscriptionView
    },
    {
      path: '/connexion',
      name: 'Connexion',
      component: ConnexionView
    },
    {
      path: '/mot-de-passe-oublie',
      name: 'MdpOublie',
      component: MdpOublieView
    },
    {
      path: '/nouveau-mot-de-passe',
      name: 'NouveauMdp',
      component: NouveauMdpView
    }
    /* {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    } */
  ]
})

export default router
