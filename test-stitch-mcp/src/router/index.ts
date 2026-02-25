import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StepByStepConfig from '../views/StepByStepConfig.vue'
import GithubMcpConnection from '../views/GithubMcpConnection.vue'
import SkillsView from '../views/SkillsView.vue'
import AgentsView from '../views/AgentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return savedPosition || { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/curriculum/setup',
      name: 'curriculum-setup',
      component: StepByStepConfig
    },
    {
      path: '/github-mcp-connection',
      name: 'github-mcp-connection',
      component: GithubMcpConnection
    },
    {
      path: '/curriculum/skills',
      name: 'curriculum-skills',
      component: SkillsView
    },
    {
      path: '/curriculum/agents',
      name: 'curriculum-agents',
      component: AgentsView
    }
  ]
})

export default router
