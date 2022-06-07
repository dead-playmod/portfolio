<template>
  <div class="w-full h-full fixed flex flex-col justify-center items-center">
    <div class="w-min-content flex flex-col text-center drop-shadow-main">
      <span class="text-4xl sm:text-6xl md:text-8xl font-bold whitespace-nowrap">Hey! I'm Marcin</span>
      <span class="sm:mt-3 text-lg sm:text-3xl md:text-4xl font-semibold whitespace-nowrap">and this is my portfolio page</span>
    </div>

    <div class="w-11/12 sm:w-auto mt-10 bg-blur rounded-xl flex flex-col justify-center items-center shadow-main">
      <div class="w-full py-1 bg-black/60 rounded-t-xl border-b border-opacity-40 text-center md:text-xl shadow-main">
        This page was created with:
      </div>

      <div class="pb-1 pt-3 rounded-b-xl flex flex-col items-center justify-center">
        <div class="px-4 flex flex-row flex-wrap justify-center">
          <InteractiveIcon
            v-for="(icon, i) in icons"
            :key="'icon' + i"
            class="px-4"
            :name="icon.name"
            :logo="icon.logo"
            :link="icon.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InteractiveIcon from '~/components/InteractiveIcon.vue'

export default {
  name: 'HomePage',
  components: { InteractiveIcon },
  data: () => ({
    icons: [
      {
        name: 'Yarn',
        logo: new URL('https://raw.githubusercontent.com/yarnpkg/assets/master/yarn-kitten-circle.svg'),
        link: new URL('https://yarnpkg.com/')
      },
      {
        name: 'VueJS',
        logo: new URL('https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'),
        link: new URL('https://vuejs.org/')
      },
      {
        name: 'NuxtJS',
        logo: new URL('https://nuxtjs.org/design-kit/colored-logo.svg'),
        link: new URL('https://nuxtjs.org/')
      },
      {
        name: 'TailwindCSS',
        logo: new URL('https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'),
        link: new URL('https://tailwindcss.com/')
      },
      {
        name: 'ThreeJS',
        logo: new URL('https://svgur.com/i/gXw.svg'),
        link: new URL('https://threejs.org/')
      },
      {
        name: 'Vercel',
        logo: new URL('https://svgur.com/i/gXm.svg'),
        link: new URL('https://vercel.com/docs')
      }
    ]
  })
}
</script>
