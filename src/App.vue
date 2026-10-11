<template>
  <div 
    :dir="currentLocale === 'ar' ? 'rtl' : 'ltr'"
    :class="currentLocale === 'ar' ? 'font-arabic' : 'font-sans'"
    class="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-300 transition-all duration-300"
  >
    <!-- Sticky Glass Navigation Header -->
    <Navbar />

    <!-- Main Content Container -->
    <main class="flex-grow">
      <HeroSection />
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
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import SkillsSection from './components/SkillsSection.vue';
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
