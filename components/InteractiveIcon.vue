<template>
  <div>
    <a
      :href="link"
      target="_blank"
      class="relative flex flex-col justify-center items-center text-center group"
    >

      <img
        class="
          w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 mt-2 transform transform-gpu
          ease-out text-white
          transition-all duration-500
          group-hover:scale-[1.15] group-hover:-translate-y-2
        "
        :src="logo"
        :alt="name + ' logo'"
      >

      <span>
        {{name}}
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'InteractiveIcon',
  props: {
    name: {
      type: String,
      default: 'untitled'
    },
    logo: URL,
    link: URL
  }
}
</script>
