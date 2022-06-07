<template>
  <div class="w-full h-14 bg-blur border-0 border-b shadow-main">
    <ul class="h-full flex flex-row justify-end">
      <li class="flex items-center">
        <nuxt-link 
          class="
            h-full px-5 relative
            flex justify-center items-center 
            transition-colors ease-out duration-300
            overflow-hidden
            after:w-1/4 after:h-1 after:-mb-0.5 after:absolute after:bottom-0 after:bg-white/50 after:rounded-full 
            after:transition-all after:ease-out after:duration-[350ms] 
            hover:after:m-2 hover:bg-white/20 hover:after:bg-white
          " 
          v-for="(link, index) in links"
          :key="index"
          :to="'/' + link"
        >
          <span class="capitalize">
            {{ index }}
          </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    links: {
      home: '',
      about: 'about',
      projects: 'projects'
    }
  })
}
</script>

<style scoped>
.nuxt-link-exact-active::after {
  @apply bg-white w-1/2;
}
</style>