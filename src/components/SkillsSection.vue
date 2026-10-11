<template>
  <section id="skills" class="py-24 relative bg-slate-100/60 dark:bg-[#0B0F19]/60 border-t border-slate-200 dark:border-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/50 text-cyan-800 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4 shadow-sm hover:scale-105 transition-transform cursor-default">
          <Layers class="w-3.5 h-3.5 animate-bounce" />
          <span>{{ t('skills.badge') }}</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t('skills.title') }}
        </h2>
        <p class="mt-4 text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {{ t('skills.subtitle') }}
        </p>
      </div>

      <!-- 4 Domain Grid Cards with 3D Hover & Glowing Borders -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div 
          v-for="(skill, index) in skillsList" 
          :key="index"
          class="group rounded-2xl bg-white dark:bg-[#111827]/90 border border-slate-200 dark:border-gray-800 p-7 transition-all duration-300 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:bg-slate-50/90 dark:hover:bg-[#131D31] flex flex-col justify-between shadow-md dark:shadow-xl card-hover-3d"
          :class="skill.borderGlow"
        >
          <div>
            <!-- Card Header -->
            <div class="flex items-center justify-between mb-5">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" :class="skill.color">
                <component :is="getIcon(skill.icon)" class="w-6 h-6 text-white" />
              </div>
              <span class="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-gray-800/90 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-gray-700 transition-colors group-hover:border-cyan-500/30">
                0{{ index + 1 }} // {{ t('skills.domainTag') }}
              </span>
            </div>

            <!-- Domain Title & Description -->
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {{ t(skill.titleKey) }}
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
              {{ t(skill.descKey) }}
            </p>
          </div>

          <!-- Technologies Tag Matrix with Interactive Micro-Animations -->
          <div>
            <div class="text-[11px] font-mono uppercase text-slate-400 dark:text-gray-500 mb-3 tracking-wider">{{ t('skills.stackTitle') }}</div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div 
                v-for="(tech, tIdx) in skill.technologies" 
                :key="tIdx"
                class="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-gray-800 text-xs text-slate-700 dark:text-gray-200 group-hover:border-cyan-500/30 dark:group-hover:border-gray-700/80 transition-all duration-200 hover:scale-[1.03] hover:bg-slate-100 dark:hover:bg-gray-900 cursor-default"
              >
                <div class="w-4 h-4 flex-shrink-0 transition-transform hover:rotate-12">
                  <TechIcon :name="tech.icon" />
                </div>
                <div class="flex flex-col min-w-0">
                  <span class="font-medium text-[11px] sm:text-xs truncate text-slate-900 dark:text-gray-200">{{ tech.name }}</span>
                  <span class="text-[10px] text-slate-500 dark:text-gray-500 font-mono leading-none mt-0.5">{{ t('skills.levels.' + tech.levelKey) }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { Layers, Server, Layout, Database, Cpu } from 'lucide-vue-next';
import TechIcon from './TechIcon.vue';

const { t } = useI18n();

const getIcon = (name) => {
  switch (name) {
    case 'Server': return Server;
    case 'Layout': return Layout;
    case 'Database': return Database;
    case 'Cpu': return Cpu;
    default: return Layers;
  }
};

const skillsList = [
  {
    titleKey: 'skills.domains.backend.title',
    descKey: 'skills.domains.backend.description',
    icon: 'Server',
    color: 'from-cyan-500 to-blue-600',
    borderGlow: 'group-hover:border-cyan-500/50',
    technologies: [
      { name: 'Laravel', levelKey: 'expert', icon: 'laravel' },
      { name: 'PHP 8+', levelKey: 'expert', icon: 'php' },
      { name: 'CodeIgniter', levelKey: 'senior', icon: 'codeigniter' },
      { name: 'RESTful APIs', levelKey: 'expert', icon: 'api' },
      { name: 'OOP & SOLID', levelKey: 'expert', icon: 'code' },
      { name: 'Clean Architecture', levelKey: 'advanced', icon: 'layers' }
    ]
  },
  {
    titleKey: 'skills.domains.frontend.title',
    descKey: 'skills.domains.frontend.description',
    icon: 'Layout',
    color: 'from-violet-500 to-purple-600',
    borderGlow: 'group-hover:border-violet-500/50',
    technologies: [
      { name: 'Vue.js (Vue 3)', levelKey: 'expert', icon: 'vue' },
      { name: 'JavaScript ES6+', levelKey: 'expert', icon: 'javascript' },
      { name: 'Tailwind CSS', levelKey: 'expert', icon: 'tailwind' },
      { name: 'Pinia / Vuex', levelKey: 'expert', icon: 'pinia' },
      { name: 'HTML5 / CSS3', levelKey: 'expert', icon: 'html' },
      { name: 'Vite Tooling', levelKey: 'expert', icon: 'vite' }
    ]
  },
  {
    titleKey: 'skills.domains.database.title',
    descKey: 'skills.domains.database.description',
    icon: 'Database',
    color: 'from-emerald-500 to-teal-600',
    borderGlow: 'group-hover:border-emerald-500/50',
    technologies: [
      { name: 'MySQL', levelKey: 'expert', icon: 'mysql' },
      { name: 'SQL Server', levelKey: 'senior', icon: 'sql' },
      { name: 'Query Optimization', levelKey: 'expert', icon: 'zap' },
      { name: 'Indexing Strategies', levelKey: 'expert', icon: 'database' },
      { name: 'ACID Integrity', levelKey: 'expert', icon: 'shield' },
      { name: 'Schema Design', levelKey: 'expert', icon: 'chart' }
    ]
  },
  {
    titleKey: 'skills.domains.ai.title',
    descKey: 'skills.domains.ai.description',
    icon: 'Cpu',
    color: 'from-amber-500 to-rose-600',
    borderGlow: 'group-hover:border-amber-500/50',
    technologies: [
      { name: 'Cursor IDE', levelKey: 'mastery', icon: 'cursor' },
      { name: 'Claude 3.5 Sonnet', levelKey: 'mastery', icon: 'claude' },
      { name: 'GitHub Copilot', levelKey: 'expert', icon: 'copilot' },
      { name: 'Git & GitHub PRs', levelKey: 'expert', icon: 'git' },
      { name: 'OWASP Security', levelKey: 'expert', icon: 'shield' },
      { name: 'Linux & Cloud', levelKey: 'senior', icon: 'cloud' }
    ]
  }
];
</script>
