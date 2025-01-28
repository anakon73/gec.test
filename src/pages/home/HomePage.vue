<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RatingReviews } from '@/widgets/rating-reviews'
import { useRatings } from '@/shared/api/rating'

const { data: ratings } = useRatings()

const i18n = useI18n()

function changeLocale(l: 'ua' | 'en-Us') {
  localStorage.setItem('locale', l)
  i18n.locale.value = l
}
</script>

<template>
  <div
    class="
    flex items-center min-h-screen justify-center
    px-4 py-11 flex-col gap-10 max-w-[91.125rem] mx-auto
    "
  >
    <div class="self-end flex gap-1 font-medium">
      <button
        class="text-light-gray disabled:text-dark-gray"
        :disabled="$i18n.locale === 'ua'"
        @click="changeLocale('ua')"
      >
        {{ $t('localization.ua') }}
      </button>
      <p class="text-dark-gray">
        |
      </p>
      <button
        class="text-light-gray disabled:text-dark-gray"
        :disabled="$i18n.locale === 'en-Us'"
        @click="changeLocale('en-Us')"
      >
        {{ $t('localization.en') }}
      </button>
    </div>
    <RatingReviews v-for="rating in ratings" :key="rating.id" :="rating" />
  </div>
</template>
