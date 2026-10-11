<template>
  <footer id="contact" class="pt-20 pb-12 bg-[#080C14] border-t border-gray-900 relative overflow-hidden">
    <!-- Ambient glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-cyan-500/10 via-violet-600/5 to-transparent blur-[120px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Call to Action Box -->
      <div class="rounded-3xl bg-gradient-to-b from-[#111827] to-[#0D131F] border border-gray-800 p-8 sm:p-12 mb-16 shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-8">
            <span class="text-xs font-mono text-cyan-400 uppercase tracking-widest">{{ t('footer.ctaBadge') }}</span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2">
              {{ t('footer.ctaTitle') }}
            </h2>
            <p class="text-gray-400 mt-3 text-sm sm:text-base max-w-2xl leading-relaxed">
              {{ t('footer.ctaSubtitle') }}
            </p>
          </div>

          <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a 
              :href="'mailto:' + portfolioData.contact.email" 
              class="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Mail class="w-4 h-4" />
              <span>{{ t('footer.sendMessage') }}</span>
            </a>

            <a 
              :href="portfolioData.resumePath" 
              download="Haithm_Malek_Resume.pdf"
              class="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1F2937] hover:bg-gray-800 border border-gray-700 text-gray-200 hover:text-white font-medium text-sm transition-all"
            >
              <Download class="w-4 h-4 text-cyan-400" />
              <span>{{ t('footer.downloadResume') }}</span>
            </a>
          </div>

        </div>
      </div>

      <!-- Footer Info Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-800/80 text-sm">
        
        <!-- Col 1: Identity with Personal Photo -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3.5 mb-4">
            <div class="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-cyan-500 to-violet-500">
              <img 
                :src="portfolioData.avatar" 
                alt="Haithm Malek" 
                class="w-full h-full object-cover rounded-full bg-gray-900"
              />
            </div>
            <div>
              <div class="font-bold text-white text-base">{{ portfolioData.name }}</div>
              <div class="text-xs text-gray-400 font-mono">{{ t('hero.roleTag') }}</div>
            </div>
          </div>
          <p class="text-gray-400 text-xs sm:text-sm max-w-sm leading-relaxed mb-4">
            {{ t('footer.bio') }}
          </p>
          <div class="flex items-center gap-2 text-xs text-gray-400">
            <MapPin class="w-4 h-4 text-cyan-400" />
            <span>{{ t('hero.location') }}</span>
          </div>
        </div>

        <!-- Col 2: Direct Contact -->
        <div>
          <h4 class="text-xs font-mono uppercase text-gray-400 tracking-wider mb-4">{{ t('footer.directContact') }}</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm text-gray-300">
            <li>
              <a :href="'mailto:' + portfolioData.contact.email" class="hover:text-cyan-400 transition-colors flex items-center gap-2" dir="ltr">
                <Mail class="w-3.5 h-3.5 text-cyan-400" />
                <span>{{ portfolioData.contact.email }}</span>
              </a>
            </li>
            <li>
              <a :href="'tel:' + portfolioData.contact.phone" class="hover:text-cyan-400 transition-colors flex items-center gap-2" dir="ltr">
                <Phone class="w-3.5 h-3.5 text-emerald-400" />
                <span>{{ portfolioData.contact.phone }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Socials & Profiles -->
        <div>
          <h4 class="text-xs font-mono uppercase text-gray-400 tracking-wider mb-4">{{ t('footer.onlineProfiles') }}</h4>
          <div class="flex items-center gap-3">
            <a 
              :href="portfolioData.socials.github" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-gray-800 transition-all"
              aria-label="GitHub Profile"
            >
              <Github class="w-5 h-5" />
            </a>
            <a 
              :href="portfolioData.socials.linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-gray-800 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin class="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Copyright Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <div>
          &copy; {{ new Date().getFullYear() }} {{ portfolioData.name }}. {{ t('footer.rights') }}
        </div>
        <div class="flex items-center gap-4 font-mono text-[11px]">
          <span class="text-emerald-400">&bull; {{ t('footer.status') }}</span>
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
