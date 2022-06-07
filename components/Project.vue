<template>
  <div
    class="
      w-11/12
      sm:w-4/5
      xl:3/4
      2xl:w-1/2
      md:h-[20rem]
      my-10
      bg-blur
      rounded-xl
      flex flex-col
      shadow-main
    "
  >
    <div
      class="
        py-2
        bg-black/60
        rounded-t-xl
        border-b border-opacity-40
        text-center text-2xl
        md:text-3xl
        font-medium
        capitalize
        shadow-main
      "
    >
      {{ title }}
    </div>

    <div
      class="
        h-full
        p-2
        rounded-br-xl
        flex flex-col
        md:flex-row
        items-center
        overflow-hidden
      "
    >
      <div class="md:w-1/2 xl:w-[45%] p-4 xl:p-7 flex flex-col items-center">
        <div
          class="
            relative
            border border-white/40
            rounded
            shadow-main
            overflow-hidden
            group
          "
        >
          <button
            class="
              h-full
              p-2
              absolute
              left-0
              md:-left-8
              bg-gradient-to-r
              from-black/75
              flex
              items-center
              md:group-hover:left-0
              transition-all
              duration-300
              ease-out
            "
            @click="imgIndex > 0 ? imgIndex-- : (imgIndex = imgs.length - 1)"
          >
            <font-awesome-icon icon="fa-solid fa-caret-left" size="xl" />
          </button>

          <img
            :src="require(`@/assets/img/${imgs[imgIndex]}`)"
            alt="project image"
          >

          <button
            class="
              h-full
              p-2
              absolute
              right-0
              md:-right-8
              top-0
              from-black/75
              bg-gradient-to-l
              flex
              items-center
              md:group-hover:right-0
              transition-all
              duration-300
              ease-out
            "
            @click="imgIndex < imgs.length - 1 ? imgIndex++ : (imgIndex = 0)"
          >
            <font-awesome-icon icon="fa-solid fa-caret-right" size="xl" />
          </button>
        </div>

        <span class="hidden sm:block opacity-60 text-xs">hover over image</span>
      </div>

      <div
        class="
          md:w-1/2
          xl:w-[55%]
          md:h-full
          px-1
          sm:px-7
          py-2
          md:border-l
          border-opacity-40
          text-xs
          sm:text-base
          md:text-xl
          overflow-y-scroll
        "
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectElement',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    // eslint-disable-next-line vue/require-default-prop
    imgs: {
      type: Array
    }
  },
  data: () => ({
    imgIndex: 0
  })
}
</script>
