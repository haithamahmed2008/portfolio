<template>
  <section id="projects" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Radio class="w-3.5 h-3.5 animate-pulse" />
            <span>{{ t('projects.badge') }}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {{ t('projects.title') }}
          </h2>
          <p class="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl leading-relaxed">
            {{ t('projects.subtitle') }}
          </p>
        </div>

        <div class="flex items-center gap-2 font-mono text-xs text-gray-300 bg-[#111827] px-4 py-2.5 rounded-xl border border-gray-800">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{{ projectsList.length }} {{ t('projects.nodesBadge') }}</span>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <a 
          v-for="project in projectsList" 
          :key="project.id"
          :href="project.url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group relative flex flex-col rounded-2xl bg-[#111827] border border-gray-800 overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1.5"
        >
          <!-- Project Preview Image Container with Full Screenshot Fit -->
          <div class="relative w-full aspect-[16/10] bg-[#070B14] border-b border-gray-800 p-2 sm:p-2.5 flex items-center justify-center overflow-hidden">
            <!-- Window frame container for mockup feel -->
            <div class="w-full h-full rounded-xl overflow-hidden bg-[#0F172A]/90 border border-gray-800/80 shadow-inner flex items-center justify-center relative group-hover:border-cyan-500/30 transition-colors">
              <img 
                :src="project.image" 
                :alt="t(project.titleKey)"
                class="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                @error="handleImageError($event, project.fallbackImage)"
              />
            </div>
            
            <!-- Live Indicator Badge Overlay -->
            <div class="absolute top-4 start-4 z-10">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 border border-emerald-500/50 text-[11px] font-mono font-semibold text-emerald-400 backdrop-blur-md shadow-lg">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {{ t('projects.liveProd') }}
              </span>
            </div>

            <!-- External Link Icon Badge Overlay -->
            <div class="absolute top-4 end-4 z-10">
              <span class="p-2 rounded-xl bg-black/85 border border-gray-700 text-gray-200 group-hover:text-cyan-300 group-hover:border-cyan-500/60 flex items-center justify-center backdrop-blur-md shadow-lg transition-colors">
                <ExternalLink class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
              </span>
            </div>

            <!-- Category Ribbon Badge -->
            <div class="absolute bottom-4 start-4 z-10">
              <span class="px-2.5 py-1 rounded-md bg-black/85 border border-cyan-500/40 text-cyan-300 text-[11px] font-medium backdrop-blur-md shadow-lg">
                {{ t(project.badgeKey) }}
              </span>
            </div>
          </div>

          <!-- Project Details Body -->
          <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-1.5 mb-2.5">
                <div 
                  v-for="iconName in project.techIcons" 
                  :key="iconName" 
                  class="w-4 h-4"
                  :title="iconName.toUpperCase()"
                >
                  <TechIcon :name="iconName" />
                </div>
              </div>

              <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                {{ t(project.titleKey) }}
              </h3>
              
              <p class="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">
                {{ t(project.taglineKey) }}
              </p>
            </div>

            <!-- Structured Tech Details -->
            <div class="mt-5 pt-4 border-t border-gray-800/80 flex flex-col gap-2">
              <div class="flex items-center text-xs">
                <span class="text-gray-500 w-24 flex-shrink-0 font-mono text-[11px]">{{ t('projects.stackLabel') }}</span>
                <span class="text-cyan-300 font-medium truncate">{{ project.frameworks.join(', ') }}</span>
              </div>
              <div class="flex items-center text-xs">
                <span class="text-gray-500 w-24 flex-shrink-0 font-mono text-[11px]">{{ t('projects.databaseLabel') }}</span>
                <span class="text-emerald-300 font-medium truncate">{{ project.database.join(', ') }}</span>
              </div>
            </div>

            <!-- Launch Live System Prompt -->
            <div class="mt-4 pt-3 border-t border-gray-800/50 flex items-center justify-between text-xs font-mono text-gray-400 group-hover:text-cyan-400 transition-colors">
              <span class="truncate max-w-[180px]">{{ project.url.replace('https://', '') }}</span>
              <span class="flex items-center gap-1 font-semibold text-cyan-400">
                <span>{{ t('projects.launchPrompt') }}</span>
                <span class="rtl:rotate-180">&rarr;</span>
              </span>
            </div>

          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { Radio, ExternalLink } from 'lucide-vue-next';
import TechIcon from './TechIcon.vue';

const { t } = useI18n();

const handleImageError = (event, fallback) => {
  if (fallback && event.target.src !== fallback) {
    event.target.src = fallback;
  }
};

const projectsList = [
  {
    id: "saeedbawazir",
    url: "https://saeedbawazir.com",
    image: "./images/preview-saeedbawazir.png",
    fallbackImage: "./images/preview-saeedbawazir.svg",
    titleKey: "projects.items.saeedbawazir.title",
    badgeKey: "projects.items.saeedbawazir.badge",
    taglineKey: "projects.items.saeedbawazir.tagline",
    techIcons: ["php", "laravel", "vue", "mysql", "tailwind"],
    frameworks: ["Laravel", "Vue.js"],
    database: ["MySQL"]
  },
  {
    id: "daralamirat-hrms",
    url: "https://hrms.daralamiratpos.de/",
    image: "./images/preview-daralamirat-hrms.png",
    fallbackImage: "./images/preview-daralamirat-hrms.svg",
    titleKey: "projects.items.daralamiratHrms.title",
    badgeKey: "projects.items.daralamiratHrms.badge",
    taglineKey: "projects.items.daralamiratHrms.tagline",
    techIcons: ["laravel", "vue", "php", "mysql", "tailwind"],
    frameworks: ["Laravel", "Vue.js", "Pinia"],
    database: ["MySQL"]
  },
  {
    id: "daralamirat-appointment",
    url: "https://appointment.daralamiratpos.de",
    image: "./images/preview-daralamirat-appointment.png",
    fallbackImage: "./images/preview-daralamirat-appointment.svg",
    titleKey: "projects.items.daralamiratAppointment.title",
    badgeKey: "projects.items.daralamiratAppointment.badge",
    taglineKey: "projects.items.daralamiratAppointment.tagline",
    techIcons: ["vue", "laravel", "javascript", "mysql", "tailwind"],
    frameworks: ["Vue 3", "Laravel API"],
    database: ["MySQL"]
  },
  {
    id: "daralamirat-pos",
    url: "https://daralamiratpos.de",
    image: "./images/preview-daralamirat-pos.png",
    fallbackImage: "./images/preview-daralamirat-pos.svg",
    titleKey: "projects.items.daralamiratPos.title",
    badgeKey: "projects.items.daralamiratPos.badge",
    taglineKey: "projects.items.daralamiratPos.tagline",
    techIcons: ["php", "codeigniter", "vue", "mysql", "tailwind"],
    frameworks: ["CodeIgniter", "Vue 3", "Pinia"],
    database: ["MySQL"]
  },
  {
    id: "daralamirat-prod",
    url: "https://prod.daralamiratpos.de",
    image: "./images/preview-daralamirat-prod.png",
    fallbackImage: "./images/preview-daralamirat-prod.svg",
    titleKey: "projects.items.daralamiratProd.title",
    badgeKey: "projects.items.daralamiratProd.badge",
    taglineKey: "projects.items.daralamiratProd.tagline",
    techIcons: ["php", "laravel", "vue", "ai", "mysql"],
    frameworks: ["Laravel", "Vue 3"],
    database: ["MySQL Cluster"]
  }
];
</script>
