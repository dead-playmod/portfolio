<template>
  <div class="w-full h-full flex justify-center items-center">
    <div
      class="
        w-4/5
        xl:w-3/5
        h-5/6
        md:h-3/5
        border border-white/40
        rounded-xl
        flex flex-row
        shadow-main
        overflow-hidden
      "
    >
      <div class="hidden md:block w-1/3 bg-img bg-cover bg-top flex-grow" />

      <div
        class="
          w-full
          md:w-2/3
          bg-blur
          border-none
          flex flex-col
          overflow-hidden
        "
      >
        <div
          class="
            py-2
            bg-black/60
            border-b border-opacity-40
            text-2xl
            md:text-4xl
            text-center
            font-medium
            shadow-main
          "
        >
          Hey! My name is Marcin.
        </div>
        <div
          class="
            h-full
            m-2
            md:ml-4
            p-1
            md:px-3
            text-sm
            sm:text-base
            md:text-xl
            flex flex-col flex-grow
            overflow-y-scroll
          "
        >
          <div
            class="
              h-28
              w-28
              my-2
              mx-auto
              bg-img bg-cover
              rounded-full
              border border-white/40
              flex-shrink-0
              md:hidden
            "
          />
          <p class="mt-2 mb-4">
            I'm a beginner front-end developer, mostly interested in creating
            websites in JavaScript and it's various frameworks and libraries.
            Currently I'm mostly used to VueJS and NuxtJS, but I also had some
            limited experience with ReactJS and NextJS. Besides JavaScript I
            also know a bit of C#, mostly thru making some basic games in Unity
            Game Engine.
          </p>
          <hr class="border-opacity-40">
          <p class="my-4">
            Currently I'm studying computer science and searching for a job as a
            front-end developer in JavaScript, as of now I only know a bit of
            VueJS and ReactJS but I'm open to learning new JavaScript frameworks
            and libraries.
          </p>
          <hr class="mb-4 border-opacity-40">
          <div class="flex flex-col items-center">
            <span class="mb-3 font-semibold">Contact:</span>
            <div
              class="
                mb-5
                border-b border-opacity-0
                flex
                cursor-pointer
                transition
                group
                hover:border-opacity-100
              "
              @click="copy"
            >
              <div
                class="
                  mr-1
                  relative
                  overflow-hidden
                  flex
                  justify-center
                  items-center
                "
              >
                <font-awesome-icon
                  class="
                    transform
                    transition-transform
                    duration-300
                    group-hover:translate-y-[-130%]
                  "
                  :class="
                    emailCopied
                      ? 'translate-y-[-130%]'
                      : 'group-hover:translate-y-[-130%]'
                  "
                  icon="fa-solid fa-envelope"
                  fixed-width
                />

                <font-awesome-icon
                  class="
                    absolute
                    top-full
                    transform
                    transition-transform
                    duration-300
                  "
                  :class="
                    emailCopied
                      ? 'translate-y-[-260%]'
                      : 'group-hover:translate-y-[-130%]'
                  "
                  icon="fa-solid fa-copy"
                  fixed-width
                />

                <font-awesome-icon
                  class="
                    absolute
                    top-full
                    transform
                    transition-transform
                    duration-300
                  "
                  :class="emailCopied ? 'translate-y-[-130%]' : ''"
                  icon="fa-solid fa-circle-check"
                />
              </div>

              <span class="text-xs md:text-sm xl:text-xl">marcinwlodyka0@gmail.com</span>
            </div>

            <div>
              <a
                v-for="(link, i) in links"
                :key="'link' + i"
                :href="link.link"
                target="_blank"
              >
                <font-awesome-icon
                  :icon="'fa-brands ' + link.icon"
                  size="2xl"
                  :class="i == 0 ? 'mr-5' : ''"
                  class="
                    text-white/60
                    transform
                    transition
                    duration-300
                    hover:text-white hover:scale-110 hover:-translate-y-1
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data: () => ({
    links: [
      {
        icon: 'fa-github',
        link: 'https://github.com/dead-playmod'
      },
      {
        icon: 'fa-linkedin',
        link: 'https://www.linkedin.com/in/marcin-w%C5%82odyka-a9755522b/'
      }
    ],
    emailCopied: false
  }),
  methods: {
    copy () {
      this.emailCopied = true
      navigator.clipboard.writeText('marcinwlodyka0@gmail.com')
    }
  }
}
</script>

<style scoped>
.bg-img {
  background-image: url("@/assets/img/about_moon.jpg");
}
</style>
