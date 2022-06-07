<template>
  <div
    class="
      h-screen
      w-full
      flex flex-col
      justify-start
      items-center
      text-white
      overflow-hidden
    "
  >
    <Nav />
    <main-bg />
    <Nuxt class="z-10" />
  </div>
</template>

<script>
import Vue from 'vue'

// my components
// eslint-disable-next-line import/order
import MainBg from '@/components/MainBg.vue'
// eslint-disable-next-line import/order
import Nav from '@/components/Nav.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCaretLeft, faCaretRight, faCopy, faEnvelope, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faCaretLeft, faCaretRight, faCopy, faGithub, faLinkedin, faEnvelope, faCircleCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

export default {
  components: { MainBg, Nav }
}
</script>
