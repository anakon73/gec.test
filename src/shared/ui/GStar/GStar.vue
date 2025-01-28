<script setup lang="ts">
import { Star, StarHalf } from 'lucide-vue-next'

export interface Props {
  state: 'full' | 'half' | 'empty'
}

defineProps<Props>()
</script>

<template>
  <div class="relative">
    <Star class="text-yellow size-[30px]" />
    <StarHalf
      v-if="state === 'half'"
      class="text-yellow fill-yellow absolute top-0 size-[30px]"
    />
    <Star
      v-else-if="state === 'full'"
      class="text-yellow fill-yellow absolute top-0 size-[30px]"
    />
  </div>
</template>
