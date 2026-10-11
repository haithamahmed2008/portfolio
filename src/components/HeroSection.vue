<template>
  <section id="about" class="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
    <!-- Ambient Background Glows -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute top-1/3 right-10 w-[500px] h-[500px] bg-violet-600/10 dark:bg-violet-600/10 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        <!-- Left Column: Bio & Main Value Proposition -->
        <div class="lg:col-span-7 flex flex-col items-start">
          
          <!-- Badges Row -->
          <div class="flex flex-wrap items-center gap-3 mb-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold backdrop-blur-md shadow-sm dark:shadow-inner">
              <span class="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
              <span>{{ t('hero.badge') }}</span>
            </div>

            <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-gray-900/80 border border-slate-200 dark:border-gray-800 text-slate-700 dark:text-gray-300 text-xs font-mono shadow-sm">
              <MapPin class="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{{ t('hero.location') }}</span>
            </div>
          </div>

          <!-- Strong, Broad Full-Stack Headline -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.22] mb-6">
            {{ t('hero.titlePrefix') }} <br class="hidden sm:block" />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-600 to-violet-600 dark:from-cyan-400 dark:via-teal-300 dark:to-violet-400">
              {{ t('hero.titleGradient') }}
            </span>
            <br />
            {{ t('hero.titleSuffix') }}
          </h1>

          <!-- Personal Headshot Card & Bio Combined -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-4 sm:p-5 rounded-2xl bg-white dark:bg-gradient-to-r dark:from-[#111827]/90 dark:to-[#0F172A]/80 border border-slate-200 dark:border-gray-800 mb-8 backdrop-blur-md w-full shadow-md dark:shadow-none">
            <div class="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-violet-500 to-emerald-400 shadow-xl shadow-cyan-500/10">
              <img 
                :src="portfolioData.avatar" 
                alt="Haithm Malek" 
                class="w-full h-full object-cover rounded-[14px] bg-slate-100 dark:bg-gray-900"
              />
              <div class="absolute -bottom-1 -right-1 p-1 bg-white dark:bg-[#0B0F19] rounded-full shadow-sm">
                <CheckCircle class="w-4 h-4 text-emerald-500 dark:text-emerald-400 fill-emerald-500/20" />
              </div>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-bold">{{ t('hero.roleTag') }}</span>
                <span class="text-slate-400 dark:text-gray-500">•</span>
                <span class="text-xs font-mono text-slate-500 dark:text-gray-400">{{ t('hero.experience') }}</span>
              </div>
              <p class="text-sm sm:text-[15px] text-slate-600 dark:text-gray-300 leading-relaxed mt-1.5 font-normal">
                {{ t('hero.summary') }}
              </p>
            </div>
          </div>

          <!-- Core Metrics Highlight Row -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-8">
            <div 
              v-for="(stat, idx) in statsList" 
              :key="idx" 
              class="bg-white dark:bg-[#111827]/80 border border-slate-200 dark:border-gray-800 rounded-xl p-3.5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 dark:hover:border-gray-700 flex flex-col justify-between shadow-sm dark:shadow-none"
            >
              <div class="flex items-center justify-between">
                <div class="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-mono bg-gradient-to-r from-cyan-600 to-violet-600 dark:from-cyan-400 dark:to-violet-400 bg-clip-text text-transparent">
                  {{ stat.value }}
                </div>
                <component :is="stat.iconComp" class="w-4 h-4 text-slate-400 dark:text-gray-400" />
              </div>
              <div class="text-[11px] sm:text-xs text-slate-500 dark:text-gray-400 mt-1.5 font-medium leading-tight">
                {{ t(stat.labelKey) }}
              </div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              class="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>{{ t('hero.exploreProjects') }}</span>
              <ArrowRight class="w-4 h-4 text-cyan-100 rtl:rotate-180" />
            </a>

            <a 
              :href="portfolioData.resumePath" 
              download="Haithm_Malek_Resume.pdf"
              class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-300 dark:border-gray-700 hover:border-cyan-500/50 text-slate-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-white font-medium text-sm sm:text-base hover:bg-slate-50 dark:hover:bg-gray-800/80 transition-all duration-300 shadow-sm"
            >
              <FileDown class="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{{ t('hero.downloadCv') }}</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Interactive Code Terminal (Always Styled Crisp & Sleek) -->
        <div class="lg:col-span-5 w-full" dir="ltr">
          <div class="relative rounded-2xl bg-[#0E1424] border border-slate-700 dark:border-gray-800 shadow-2xl overflow-hidden group hover:border-cyan-500/40 transition-all duration-500 text-left">
            
            <!-- Terminal Header -->
            <div class="bg-[#151D30] px-4 py-3 border-b border-gray-800 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <div class="text-xs font-mono text-gray-300 flex items-center gap-2">
                <Terminal class="w-3.5 h-3.5 text-cyan-400" />
                <span>{{ t('hero.terminalHeader') }}</span>
              </div>
              <div class="text-[10px] font-mono text-cyan-400 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800/50">
                {{ t('hero.terminalBadge') }}
              </div>
            </div>

            <!-- Terminal Code Window -->
            <div class="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-gray-300">
              <div class="text-gray-500">{{ t('hero.terminalComment') }}</div>
              <div class="text-violet-400">namespace <span class="text-white">App\Services\Core;</span></div>
              <div class="text-violet-400 mt-2">class <span class="text-amber-300">ApplicationEngine</span> <span class="text-violet-400">implements</span> <span class="text-cyan-300">FullStackInterface</span></div>
              <div>{</div>
              <div class="pl-4 text-emerald-400">
                <span class="text-violet-400">public function</span> handleSecureTransaction(<span class="text-cyan-300">Payload</span> $data): <span class="text-cyan-300">Response</span>
              </div>
              <div class="pl-4">{</div>
              <div class="pl-8 text-gray-400">
                <span class="text-violet-400">return</span> <span class="text-cyan-300">DB::transaction</span>(<span class="text-violet-400">function</span> () <span class="text-violet-400">use</span> ($data) {
              </div>
              <div class="pl-12 text-slate-300">
                <span class="text-gray-500">// 1. Validate &amp; Guard Business Rules</span>
              </div>
              <div class="pl-12 text-slate-300">
                <span class="text-cyan-400">$this</span>-&gt;securityGuard-&gt;enforceRBAC($data-&gt;user);
              </div>
              <div class="pl-12 text-slate-300 mt-1">
                <span class="text-gray-500">// 2. Execute High-Speed Query Pipeline</span>
              </div>
              <div class="pl-12 text-slate-300">
                $record = <span class="text-cyan-400">$this</span>-&gt;repository-&gt;createAtomic($data);
              </div>
              <div class="pl-12 text-slate-300 mt-1">
                <span class="text-gray-500">// 3. Broadcast to Reactive Vue 3 Client</span>
              </div>
              <div class="pl-12 text-slate-300">
                <span class="text-cyan-400">$this</span>-&gt;eventDispatcher-&gt;dispatchToFrontend($record);
              </div>
              <div class="pl-12 text-emerald-400 mt-1">
                <span class="text-violet-400">return</span> <span class="text-amber-300">Response::json</span>([<span class="text-emerald-300">'status'</span> =&gt; <span class="text-cyan-300">200</span>, <span class="text-emerald-300">'payload'</span> =&gt; $record]);
              </div>
              <div class="pl-8 text-gray-400">});</div>
              <div class="pl-4">}</div>
              <div>}</div>
            </div>

            <!-- Terminal Interactive Footer Status -->
            <div class="bg-[#111827] px-4 py-2.5 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400 font-mono">
              <div class="flex items-center gap-2">
                <CheckCircle2 class="w-3.5 h-3.5 text-emerald-400" />
                <span>{{ t('hero.terminalFooterLeft') }}</span>
              </div>
              <div class="text-gray-500">{{ t('hero.terminalFooterRight') }}</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { ArrowRight, FileDown, Terminal, CheckCircle2, CheckCircle, MapPin, Server, Sparkles, Shield, Zap } from 'lucide-vue-next';
import { portfolioData } from '../data/portfolioData';

const { t } = useI18n();

const statsList = [
  { labelKey: 'hero.stats.exp', value: '6+ Yrs', iconComp: Sparkles },
  { labelKey: 'hero.stats.stack', value: 'PHP / Vue / SQL', iconComp: Server },
  { labelKey: 'hero.stats.arch', value: 'Clean & SOLID', iconComp: Shield },
  { labelKey: 'hero.stats.velocity', value: 'AI-Accelerated', iconComp: Zap },
];
</script>
