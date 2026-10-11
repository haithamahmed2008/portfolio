<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-white/90 dark:bg-[#0B0F19]/90 border-b border-slate-200/80 dark:border-gray-800/80 shadow-sm dark:shadow-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Row 1: Brand / Avatar (Start) & Switchers / Download CTA (End) -->
      <div class="h-16 flex items-center justify-between border-b border-slate-100 dark:border-gray-800/50">
        <!-- Brand / Identity -->
        <a href="#" class="group flex items-center gap-3">
          <div class="relative w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-cyan-500 via-violet-500 to-emerald-400 shadow-sm group-hover:scale-105 transition-transform duration-300">
            <img 
              :src="portfolioData.avatar" 
              alt="Haithm Malek" 
              class="w-full h-full object-cover rounded-full bg-slate-100 dark:bg-gray-900"
            />
            <span class="absolute bottom-0 end-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0B0F19]"></span>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {{ portfolioData.name }}
            </span>
            <span class="text-[11px] text-slate-500 dark:text-gray-400 font-mono hidden sm:inline">
              {{ t('hero.roleTag') }}
            </span>
          </div>
        </a>

        <!-- Controls: Theme, Language, Download Resume -->
        <div class="flex items-center gap-2 sm:gap-2.5">
          <!-- Dark / Light Mode Switcher Button -->
          <button 
            @click="toggleTheme"
            class="p-2 rounded-xl bg-slate-100 dark:bg-gray-900/90 border border-slate-200 dark:border-gray-700 hover:border-cyan-500/60 text-slate-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-sm"
            :title="isDark ? 'Switch to Light Mode' : 'التحويل للوضع الليلي'"
            aria-label="Toggle Theme Mode"
          >
            <Sun v-if="isDark" class="w-4 h-4 text-amber-400 animate-pulse" />
            <Moon v-else class="w-4 h-4 text-indigo-600" />
          </button>

          <!-- Language Switcher Button -->
          <button 
            @click="toggleLanguage"
            class="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-slate-100 dark:bg-gray-900/90 border border-slate-200 dark:border-gray-700 hover:border-cyan-500/60 text-slate-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-white text-xs font-semibold font-mono transition-all hover:scale-105 active:scale-95 shadow-sm"
            :title="locale === 'en' ? 'التحويل للغة العربية' : 'Switch to English'"
          >
            <Languages class="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>{{ locale === 'en' ? 'العربية' : 'EN' }}</span>
          </button>

          <!-- Download Resume Button -->
          <a 
            :href="portfolioData.resumePath" 
            download="Haithm_Malek_Resume.pdf"
            class="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 animate-pulse-slow"></span>
            <span class="relative flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-white group-hover:bg-opacity-80 transition-all shadow-sm">
              <Download class="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span class="hidden sm:inline">{{ t('nav.downloadResume') }}</span>
              <span class="sm:hidden">CV</span>
            </span>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen" 
            class="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-gray-300"
            aria-label="Toggle Navigation Menu"
          >
            <Menu v-if="!isMobileMenuOpen" class="w-4 h-4" />
            <X v-else class="w-4 h-4" />
          </button>
        </div>
      </div>

      <!-- Row 2: Centered Desktop Navigation Bar -->
      <div class="hidden md:flex items-center justify-center py-2">
        <nav class="flex items-center gap-1 bg-slate-100/90 dark:bg-[#111827]/90 border border-slate-200/90 dark:border-gray-800 rounded-full px-4 py-1.5 shadow-inner">
          <a 
            v-for="item in navItems" 
            :key="item.href" 
            :href="item.href" 
            class="px-4 py-1 text-xs font-semibold text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all rounded-full hover:bg-white dark:hover:bg-gray-800 shadow-none hover:shadow-sm"
          >
            {{ t(item.key) }}
          </a>
        </nav>
      </div>

    </div>

    <!-- Mobile Dropdown Menu -->
    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden bg-white/95 dark:bg-[#0B0F19]/95 border-b border-slate-200 dark:border-gray-800 px-6 py-4 flex flex-col gap-2 backdrop-blur-2xl shadow-xl"
    >
      <a 
        v-for="item in navItems" 
        :key="item.href" 
        :href="item.href" 
        @click="isMobileMenuOpen = false"
        class="text-sm font-medium text-slate-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 py-1.5 border-b border-slate-100 dark:border-gray-800/50 last:border-0"
      >
        {{ t(item.key) }}
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { Download, Menu, X, Languages, Sun, Moon } from 'lucide-vue-next';
import { portfolioData } from '../data/portfolioData';

const { t, locale } = useI18n();
const isMobileMenuOpen = ref(false);
const isDark = ref(true);

onMounted(() => {
  const savedTheme = localStorage.getItem('user-theme');
  if (savedTheme === 'light') {
    isDark.value = false;
    document.documentElement.classList.remove('dark');
  } else {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
});

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('user-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('user-theme', 'light');
  }
};

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'ar' : 'en';
  localStorage.setItem('user-locale', locale.value);
};

const navItems = [
  { key: 'nav.about', href: '#about' },
  { key: 'nav.experience', href: '#experience' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
];
</script>
