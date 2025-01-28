<script setup lang="ts">
import { GRating } from '@/entities/rating'
import { GButton } from '@/shared/ui/GButton'
import { GPopover } from '@/shared/ui/GPopover'

export interface Props {
  title: string
  image: string
  rating: number
  reviews: number
  url: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="
    [box-shadow:_0px_4px_15px_0px_#0000000D]
    p-[30px] w-full flex flex-col gap-5
    sm:flex-row sm:items-center sm:justify-between
    "
  >
    <div class="flex flex-col gap-5 md:flex-row md:gap-[50px] lg:gap-[60px]">
      <div class="flex gap-5 items-center ">
        <img :src="image" :alt="`${title} image`" class="size-10 object-cover">
        <h2 class="text-lg font-medium text-dark-gray md:text-xl">
          {{ title }}
        </h2>
      </div>
      <GRating :rating="rating" :reviews="reviews" />
    </div>
    <div class="flex flex-col gap-2.5 sm:flex-row">
      <GButton as="a" href="https://www.google.com/" target="_blank">
        {{ $t('rating.view') }}
      </GButton>
      <GPopover
        :image="image"
        :rating="rating"
        :reviews="reviews"
        :title="title"
        :url="url"
      >
        <template #trigger>
          <GButton variant="gradient" class="w-full">
            {{ $t('rating.write') }}
          </GButton>
        </template>
        <template #default>
          <div class="space-y-4">
            <div class="text-xs">
              <p class="text-dark-gray">
                {{ $t('rating.url') }}
              </p>
              <p class="text-light-gray">
                {{ url }}
              </p>
            </div>
            <div class="text-xs">
              <p class="text-dark-gray">
                {{ $t('rating.title') }}
              </p>
              <p class="text-light-gray">
                {{ title }}
              </p>
            </div>
            <div class="text-xs">
              <p class="text-dark-gray">
                {{ $t('rating.image') }}
              </p>
              <p class="text-light-gray whitespace-pre-wrap break-words">
                {{ image }}
              </p>
            </div>
          </div>
        </template>
      </GPopover>
    </div>
  </div>
</template>
