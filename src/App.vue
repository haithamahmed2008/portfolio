<template>
  <div 
    :dir="currentLocale === 'ar' ? 'rtl' : 'ltr'"
    :class="currentLocale === 'ar' ? 'font-arabic' : 'font-sans'"
    class="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-700 dark:selection:text-cyan-300 transition-colors duration-300 relative overflow-hidden"
  >
    <!-- Dynamic Animated Interactive Particle Mesh -->
    <ParticleCanvas />

    <!-- Sticky Glass Navigation Header -->
    <Navbar />

    <!-- Main Content Container with Staggered Visual Flow -->
    <main class="flex-grow relative z-10">
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
    </main>

    <!-- Footer & Contact Section -->
    <FooterSection />
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import ParticleCanvas from './components/ParticleCanvas.vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import FooterSection from './components/FooterSection.vue';

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.dir = locale.value === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale.value;
  }
});
</script>
