<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { GStar } from '@/shared/ui/GStar'

export interface Props {
  rating: number
  reviews: number
}

const props = defineProps<Props>()

const { rating } = toRefs(props)

const starStates = computed(() => {
  const states: ('full' | 'half' | 'empty')[] = []
  let remainingRating = rating.value

  for (let i = 0; i < 5; i++) {
    if (remainingRating >= 1) {
      states.push('full')
      remainingRating -= 1
    }
    else if (remainingRating >= 0.5) {
      states.push('half')
      remainingRating -= 0.5
    }
    else {
      states.push('empty')
    }
  }

  return states
})
</script>

<template>
  <div class="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:flex-wrap">
    <div class="flex items-center gap-5">
      <p class="text-dark-gray text-2xl font-medium md:text-4xl">
        {{ rating }}
      </p>
      <div class="flex gap-1.5">
        <GStar
          v-for="(state, index) in starStates"
          :key="index"
          :state="state"
        />
      </div>
    </div>
    <p class="text-light-gray text-sm">
      {{ reviews }} {{ $t('rating.reviews') }}
    </p>
  </div>
</template>
