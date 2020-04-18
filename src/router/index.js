import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../components/views/Welcome/Welcome.vue'
import Projects from '../components/views/Projects/Projects.vue'
import Contact from '../components/views/Contact/Contact.vue'
import Skills from '../components/views/Skills/Skills.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
