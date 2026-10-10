<template>
  <div class="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-300">
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
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import FooterSection from './components/FooterSection.vue';
</script>
