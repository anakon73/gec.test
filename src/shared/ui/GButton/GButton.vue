<script setup lang="ts">
import type { ClassValue } from 'clsx'

import { cn } from '@/shared/lib/styles'

export interface Props {
  class?: ClassValue
  type?: HTMLButtonElement['type']
  variant?: 'border' | 'gradient'
  as?: 'button' | 'a'
  href?: string
  target?: HTMLAnchorElement['target']
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  as: 'button',
  variant: 'border',
})
</script>

<template>
  <component
    :is="as"
    :href="href"
    :target="target"
    :class="cn(
      `px-5 py-3 text-sm font-medium rounded-lg
      relative overflow-hidden cursor-pointer text-center focus:outline-none`,
      variant === 'border'
        && 'text-dark-gray bg-gradient-to-r from-[#E6F7F5] to-[#F8FCFC]',
      variant === 'gradient'
        && 'text-white bg-gradient-to-r from-[#3CB9A0] to-[#1786AC]',
      props.class,
    )"
    :type="type"
  >
    <span v-if="variant === 'border'" class="gradient-border" />
    <slot />
  </component>
</template>
