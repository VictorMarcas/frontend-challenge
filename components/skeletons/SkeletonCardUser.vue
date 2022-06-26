<template>
  <div class="flex items-center gap-4 p-4 rounded-lg bg-slate-50">
    <div
      class="w-20 h-20 mb-auto rounded-full bg-slate-200/60 shrink-0 motion-safe:animate-pulse"
    ></div>
    <div class="flex flex-col flex-1 h-full gap-2 motion-safe:animate-pulse">
      <div class="w-full h-3 mt-3 rounded-full bg-slate-200/60"></div>
      <div class="w-8/12 h-2 mb-auto rounded-full bg-slate-200/60"></div>
      <div class="flex items-center gap-3">
        <div class="w-3/12 h-2.5 rounded-full bg-slate-200/60 mb-auto"></div>
        <div class="w-3/12 h-2.5 rounded-full bg-slate-200/60 mb-auto"></div>
        <div class="w-3/12 h-2.5 rounded-full bg-slate-200/60 mb-auto"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonCardUser',
}
</script>
