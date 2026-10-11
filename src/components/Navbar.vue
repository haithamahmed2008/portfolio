<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-white/80 dark:bg-[#0B0F19]/85 border-b border-slate-200/80 dark:border-gray-800/80 shadow-sm dark:shadow-none">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Logo / Avatar + Name -->
      <a href="#" class="group flex items-center gap-3.5">
        <div class="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-cyan-500 via-violet-500 to-emerald-400 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
          <img 
            :src="portfolioData.avatar" 
            alt="Haithm Malek" 
            class="w-full h-full object-cover rounded-full bg-slate-100 dark:bg-gray-900"
          />
          <span class="absolute bottom-0 end-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0B0F19]"></span>
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {{ portfolioData.name }}
          </span>
          <span class="text-xs text-slate-500 dark:text-gray-400 font-mono flex items-center gap-1.5">
            {{ t('hero.roleTag') }}
          </span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-[#111827]/70 border border-slate-200 dark:border-gray-800/80 rounded-full px-5 py-2 backdrop-blur-md">
        <a 
          v-for="item in navItems" 
          :key="item.href" 
          :href="item.href" 
          class="px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all rounded-full hover:bg-white/80 dark:hover:bg-gray-800/60 shadow-none hover:shadow-sm"
        >
          {{ t(item.key) }}
        </a>
      </nav>

      <!-- Theme Switcher, Language Switcher & Action Buttons -->
      <div class="hidden sm:flex items-center gap-3">
        <!-- Dark / Light Mode Switcher Button -->
        <button 
          @click="toggleTheme"
          class="p-2.5 rounded-xl bg-slate-100 dark:bg-gray-900/90 border border-slate-200 dark:border-gray-700 hover:border-cyan-500/60 text-slate-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm dark:shadow-md"
          :title="isDark ? 'Switch to Light Mode' : 'التحويل للوضع الليلي'"
          aria-label="Toggle Theme Mode"
        >
          <Sun v-if="isDark" class="w-4 h-4 text-amber-400 animate-pulse" />
          <Moon v-else class="w-4 h-4 text-indigo-600" />
        </button>

        <!-- Language Switcher Button -->
        <button 
          @click="toggleLanguage"
          class="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-gray-900/90 border border-slate-200 dark:border-gray-700 hover:border-cyan-500/60 text-slate-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-white text-xs font-semibold font-mono transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm dark:shadow-md"
          :title="locale === 'en' ? 'التحويل للغة العربية' : 'Switch to English'"
        >
          <Languages class="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span>{{ locale === 'en' ? 'العربية' : 'EN' }}</span>
        </button>

        <!-- Download Resume Button -->
        <a 
          :href="portfolioData.resumePath" 
          download="Haithm_Malek_Resume.pdf"
          class="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 animate-pulse-slow"></span>
          <span class="relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-white group-hover:bg-opacity-80 transition-all duration-300 shadow-md text-xs sm:text-sm">
            <Download class="w-4 h-4 text-cyan-600 dark:text-cyan-400 transition-transform group-hover:-translate-y-0.5" />
            <span>{{ t('nav.downloadResume') }}</span>
          </span>
        </a>
      </div>

      <!-- Mobile Controls (Theme Toggle + Language + Menu) -->
      <div class="flex md:hidden items-center gap-2">
        <button 
          @click="toggleTheme"
          class="p-2 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-gray-200"
          aria-label="Toggle Theme"
        >
          <Sun v-if="isDark" class="w-4 h-4 text-amber-400" />
          <Moon v-else class="w-4 h-4 text-indigo-600" />
        </button>

        <button 
          @click="toggleLanguage"
          class="flex items-center gap-1.5 px-2.5 py-2 rounded-xl bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-gray-200 text-xs font-mono font-bold"
        >
          <Languages class="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>{{ locale === 'en' ? 'AR' : 'EN' }}</span>
        </button>

        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="p-2 rounded-xl bg-slate-100 dark:bg-gray-800/60 border border-slate-200 dark:border-gray-700 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden bg-white/95 dark:bg-[#0B0F19]/95 border-b border-slate-200 dark:border-gray-800 px-6 py-6 flex flex-col gap-4 backdrop-blur-2xl shadow-xl"
    >
      <a 
        v-for="item in navItems" 
        :key="item.href" 
        :href="item.href" 
        @click="isMobileMenuOpen = false"
        class="text-base font-medium text-slate-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 py-1"
      >
        {{ t(item.key) }}
      </a>
      <div class="pt-4 border-t border-slate-200 dark:border-gray-800 flex flex-col gap-3">
        <a 
          :href="portfolioData.resumePath" 
          download="Haithm_Malek_Resume.pdf"
          class="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-sm shadow-md"
        >
          <Download class="w-4 h-4" />
          <span>{{ t('nav.downloadResume') }}</span>
        </a>
      </div>
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
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
];
</script>
