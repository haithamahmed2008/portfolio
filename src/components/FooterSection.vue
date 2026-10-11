<template>
  <footer id="contact" class="pt-20 pb-12 bg-slate-100 dark:bg-[#080C14] border-t border-slate-200 dark:border-gray-900 relative overflow-hidden transition-colors duration-300">
    <!-- Ambient glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-cyan-500/10 via-violet-600/5 to-transparent blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Call to Action Box -->
      <div class="rounded-3xl bg-white dark:bg-gradient-to-b dark:from-[#111827] dark:to-[#0D131F] border border-slate-200 dark:border-gray-800 p-8 sm:p-12 mb-16 shadow-xl dark:shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-8">
            <span class="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest">{{ t('footer.ctaBadge') }}</span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
              {{ t('footer.ctaTitle') }}
            </h2>
            <p class="text-slate-600 dark:text-gray-400 mt-3 text-sm sm:text-base max-w-2xl leading-relaxed">
              {{ t('footer.ctaSubtitle') }}
            </p>
          </div>

          <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a 
              :href="'mailto:' + portfolioData.contact.email" 
              class="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-cyan-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Mail class="w-4 h-4" />
              <span>{{ t('footer.sendMessage') }}</span>
            </a>

            <a 
              :href="portfolioData.resumePath" 
              download="Haithm_Malek_Resume.pdf"
              class="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-[#1F2937] dark:hover:bg-gray-800 border border-slate-300 dark:border-gray-700 text-slate-700 hover:text-slate-900 dark:text-gray-200 dark:hover:text-white font-medium text-sm transition-all"
            >
              <Download class="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{{ t('footer.downloadResume') }}</span>
            </a>
          </div>

        </div>
      </div>

      <!-- Footer Info Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200 dark:border-gray-800/80 text-sm">
        
        <!-- Col 1: Identity with Personal Photo -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3.5 mb-4">
            <div class="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-cyan-500 to-violet-500 shadow-sm">
              <img 
                :src="portfolioData.avatar" 
                alt="Haithm Malek" 
                class="w-full h-full object-cover rounded-full bg-slate-100 dark:bg-gray-900"
              />
            </div>
            <div>
              <div class="font-bold text-slate-900 dark:text-white text-base">{{ portfolioData.name }}</div>
              <div class="text-xs text-slate-500 dark:text-gray-400 font-mono">{{ t('hero.roleTag') }}</div>
            </div>
          </div>
          <p class="text-slate-600 dark:text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed mb-4">
            {{ t('footer.bio') }}
          </p>
          <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-400">
            <MapPin class="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>{{ t('hero.location') }}</span>
          </div>
        </div>

        <!-- Col 2: Direct Contact -->
        <div>
          <h4 class="text-xs font-mono uppercase text-slate-400 dark:text-gray-400 tracking-wider mb-4">{{ t('footer.directContact') }}</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-gray-300">
            <li>
              <a :href="'mailto:' + portfolioData.contact.email" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2" dir="ltr">
                <Mail class="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{{ portfolioData.contact.email }}</span>
              </a>
            </li>
            <li>
              <a :href="'tel:' + portfolioData.contact.phone" class="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-2" dir="ltr">
                <Phone class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{{ portfolioData.contact.phone }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Socials & Profiles -->
        <div>
          <h4 class="text-xs font-mono uppercase text-slate-400 dark:text-gray-400 tracking-wider mb-4">{{ t('footer.onlineProfiles') }}</h4>
          <div class="flex items-center gap-3">
            <a 
              :href="portfolioData.socials.github" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-gray-800 transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github class="w-5 h-5" />
            </a>
            <a 
              :href="portfolioData.socials.linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-cyan-500/50 hover:bg-slate-50 dark:hover:bg-gray-800 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin class="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Copyright Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-gray-500 gap-4">
        <div>
          &copy; {{ new Date().getFullYear() }} {{ portfolioData.name }}. {{ t('footer.rights') }}
        </div>
        <div class="flex items-center gap-4 font-mono text-[11px]">
          <span class="text-emerald-600 dark:text-emerald-400">&bull; {{ t('footer.status') }}</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { Mail, Phone, MapPin, Download, Github, Linkedin } from 'lucide-vue-next';
import { portfolioData } from '../data/portfolioData';

const { t } = useI18n();
</script>
