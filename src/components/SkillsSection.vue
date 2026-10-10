<template>
  <section id="skills" class="py-24 relative bg-[#0B0F19]/60 border-t border-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
          <Layers class="w-3.5 h-3.5" />
          <span>Core Engineering Competencies</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Specialized Skill Matrix &amp; Stack
        </h2>
        <p class="mt-4 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Battle-tested in demanding enterprise production environments with high transaction volumes, real-time POS processing, and clean maintainability.
        </p>
      </div>

      <!-- 4 Domain Grid Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div 
          v-for="(skill, index) in portfolioData.skills" 
          :key="index"
          class="group rounded-2xl bg-[#111827]/90 border border-gray-800 p-7 transition-all duration-300 hover:border-gray-700 hover:bg-[#131D31] flex flex-col justify-between shadow-xl"
          :class="skill.borderGlow"
        >
          <div>
            <!-- Card Header -->
            <div class="flex items-center justify-between mb-5">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr" :class="skill.color">
                <component :is="getIcon(skill.icon)" class="w-6 h-6 text-white" />
              </div>
              <span class="text-xs font-mono px-3 py-1 rounded-full bg-gray-800/90 text-gray-300 border border-gray-700">
                0{{ index + 1 }} // DOMAIN
              </span>
            </div>

            <!-- Domain Title & Description -->
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {{ skill.domain }}
            </h3>
            <p class="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
              {{ skill.description }}
            </p>
          </div>

          <!-- Technologies Tag Matrix with Brand Icons -->
          <div>
            <div class="text-[11px] font-mono uppercase text-gray-500 mb-3 tracking-wider">Production Stack</div>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div 
                v-for="(tech, tIdx) in skill.technologies" 
                :key="tIdx"
                class="flex items-center gap-2 p-2 rounded-lg bg-[#0B0F19] border border-gray-800 text-xs text-gray-200 group-hover:border-gray-700/80 transition-all hover:bg-gray-900"
              >
                <div class="w-4 h-4 flex-shrink-0">
                  <TechIcon :name="tech.icon" />
                </div>
                <div class="flex flex-col min-w-0">
                  <span class="font-medium text-[11px] sm:text-xs truncate text-gray-200">{{ tech.name }}</span>
                  <span class="text-[10px] text-gray-500 font-mono leading-none mt-0.5">{{ tech.level }}</span>
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
import { Layers, Server, Layout, Database, Cpu } from 'lucide-vue-next';
import TechIcon from './TechIcon.vue';
import { portfolioData } from '../data/portfolioData';

const getIcon = (name) => {
  switch (name) {
    case 'Server': return Server;
    case 'Layout': return Layout;
    case 'Database': return Database;
    case 'Cpu': return Cpu;
    default: return Layers;
  }
};
</script>
