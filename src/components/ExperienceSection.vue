<template>
  <section id="experience" class="py-20 relative transition-colors duration-300">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800/50 text-cyan-800 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3 shadow-sm hover:scale-105 transition-transform cursor-default">
            <Briefcase class="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>{{ t('experience.badge') }}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {{ t('experience.title') }}
          </h2>
          <p class="mt-2 text-sm text-slate-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            {{ t('experience.subtitle') }}
          </p>
        </div>
      </div>

      <!-- Divider line -->
      <div class="w-full h-px bg-slate-200 dark:bg-zinc-800 mb-10"></div>

      <!-- Clean 2-Column Minimal Timeline Layout (Like Vignesh Saravanan Reference) -->
      <div class="space-y-12 relative">
        <!-- Connecting Vertical Timeline Bar -->
        <div class="hidden md:block absolute start-[220px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent"></div>

        <div 
          v-for="job in experienceList" 
          :key="job.id"
          class="flex flex-col md:flex-row gap-4 md:gap-10 items-start group"
        >
          <!-- Left Column: Sticky-feel Date Badge & Timeline Dot -->
          <div class="md:w-[220px] flex-shrink-0 flex md:flex-row items-center md:justify-between gap-3 relative">
            <h3 class="text-xs sm:text-sm font-mono font-bold text-slate-500 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {{ t(`experience.roles.${job.id}.period`) }}
            </h3>

            <!-- Timeline Circular Dot -->
            <div class="hidden md:flex relative z-10 w-6 h-6 rounded-full bg-white dark:bg-[#0B0F19] border-2 border-slate-300 dark:border-gray-700 items-center justify-center group-hover:border-cyan-500 transition-colors">
              <span class="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform"></span>
            </div>
          </div>

          <!-- Right Column: Role Title, Company, Location & Short Impact Bullets -->
          <div class="flex-1 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-gray-800 p-6 transition-all duration-300 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:shadow-xl dark:shadow-none card-hover-3d">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-1">
              <h4 class="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400">
                {{ t(`experience.roles.${job.id}.role`) }}
              </h4>
              <span class="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-gray-700">
                {{ t(`experience.roles.${job.id}.type`) }}
              </span>
            </div>

            <h5 class="text-sm sm:text-base font-semibold text-slate-800 dark:text-gray-200 mb-1">
              {{ t(`experience.roles.${job.id}.company`) }}
            </h5>

            <p class="text-xs text-slate-500 dark:text-gray-400 font-mono mb-4 flex items-center gap-1.5">
              <MapPin class="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
              <span>{{ t(`experience.roles.${job.id}.location`) }}</span>
            </p>

            <!-- Short Bullet Points -->
            <ul class="list-disc ps-5 space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed marker:text-cyan-500">
              <li 
                v-for="(point, pIdx) in getHighlights(job.id)" 
                :key="pIdx"
              >
                {{ point }}
              </li>
            </ul>

            <!-- Tech Badges -->
            <div class="mt-4 pt-3 border-t border-slate-100 dark:border-gray-800/80 flex flex-wrap items-center gap-1.5">
              <div 
                v-for="tech in job.techStack" 
                :key="tech.name"
                class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-100 dark:bg-[#0B0F19] border border-slate-200 dark:border-gray-800 text-[10px] text-slate-700 dark:text-gray-300 font-mono"
              >
                <div class="w-3 h-3 flex-shrink-0">
                  <TechIcon :name="tech.icon" />
                </div>
                <span>{{ tech.name }}</span>
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
import { Briefcase, MapPin } from 'lucide-vue-next';
import TechIcon from './TechIcon.vue';

const { t, tm } = useI18n();

const getHighlights = (id) => {
  const messages = tm(`experience.roles.${id}.highlights`);
  return Array.isArray(messages) ? messages : [];
};

const experienceList = [
  {
    id: 'freelance',
    techStack: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Vue 3', icon: 'vue' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'CodeIgniter', icon: 'codeigniter' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Tailwind CSS', icon: 'tailwind' }
    ]
  },
  {
    id: 'gtg',
    techStack: [
      { name: 'MySQL & SQL', icon: 'mysql' },
      { name: 'Automation Portals', icon: 'html' },
      { name: 'Security & Access', icon: 'shield' }
    ]
  },
  {
    id: 'school',
    techStack: [
      { name: 'LMS Databases', icon: 'database' },
      { name: 'IT Infrastructure', icon: 'server' },
      { name: 'Cloud Academic Tools', icon: 'cloud' }
    ]
  },
  {
    id: 'dot',
    techStack: [
      { name: 'PHP MVC', icon: 'php' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'CodeIgniter', icon: 'codeigniter' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'JavaScript', icon: 'javascript' }
    ]
  }
];
</script>
