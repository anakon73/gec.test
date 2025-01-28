<script setup lang="ts">
import {
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'radix-vue'
import type { VNode } from 'vue'

export interface Slots {
  default?: () => VNode[] | VNode | string
  trigger?: () => VNode[] | VNode | string
}

defineSlots<Slots>()
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger>
      <slot name="trigger" />
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        side="bottom"
        :side-offset="5"
        class="rounded p-5 w-72 bg-white popover-shadow"
      >
        <slot name="default" />
        <PopoverArrow class="fill-white" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
