<template>
  <canvas id="bg" class="fixed top-0 left-0" />
</template>

<script>
import * as THREE from 'three'

export default {
  data: () => ({
    mouseX: 0,
    mouseY: 0
  }),

  destroyed () {
    window.removeEventListener('mousemove', this.getMouse)
  },
  mounted () {
    this.initScene()

    window.addEventListener('mousemove', this.getMouse)
  },

  methods: {
    initScene () {
      const init = this

      const scene = new THREE.Scene()

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.z = 20

      const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)

      window.addEventListener('resize', () => renderer.setSize(window.innerWidth, window.innerHeight))

      const ambientLight = new THREE.AmbientLight(0xFFFFFF)

      scene.add(ambientLight)
      renderer.render(scene, camera)

      function addStar () {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24)
        const material = new THREE.MeshStandardMaterial({ color: 0xFFFFFF })
        const star = new THREE.Mesh(geometry, material)

        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(200))

        star.position.set(x, y, z)
        scene.add(star)
      }
      Array(300).fill().forEach(addStar)

      function animate () {
        const lookIntensity = 0.002
        const lookX = (init.mouseX - window.innerWidth / 2) * lookIntensity
        const lookY = (init.mouseY - window.innerHeight / 2) * -lookIntensity

        camera.lookAt(lookX, lookY, 0)

        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
    },
    getMouse (event) {
      this.mouseX = event.pageX
      this.mouseY = event.pageY
    }
  }
}
</script>
