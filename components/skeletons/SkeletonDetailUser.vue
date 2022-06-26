<template>
  <div>
    <div
      class="relative w-24 h-24 mx-auto -mt-12 overflow-hidden bg-white border-4 border-white rounded-full"
    >
      <span
        class="absolute inset-0 bg-slate-200/60 motion-safe:animate-pulse"
      ></span>
    </div>
    <div class="px-8 py-6 space-y-4 motion-safe:animate-pulse">
      <div>
        <div class="w-8/12 h-4 mx-auto mt-3 rounded-full bg-slate-200/60"></div>
        <div
          class="w-6/12 h-2 mx-auto mt-2 mb-auto rounded-full bg-slate-200/60"
        ></div>
      </div>
      <div class="pt-8">
        <div class="w-4/12 h-3 rounded-full bg-slate-200/60"></div>
      </div>
      <div class="space-y-2">
        <div class="w-full h-2 rounded-full bg-slate-200/60"></div>
        <div class="w-full h-2 rounded-full bg-slate-200/60"></div>
        <div class="w-full h-2 rounded-full bg-slate-200/60"></div>
        <div class="w-6/12 h-2 rounded-full bg-slate-200/60"></div>
      </div>
      <div class="flex items-center justify-center gap-6 pt-4">
        <div class="w-3/12 h-2.5 rounded-full bg-slate-200/60 mb-auto"></div>
        <div class="w-3/12 h-2.5 rounded-full bg-slate-200/60 mb-auto"></div>
        <div class="w-3/12 h-2.5 rounded-full bg-slate-200/60 mb-auto"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonDetailUser',
}
</script>
