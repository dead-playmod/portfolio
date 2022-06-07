<template>
  <div class="h-full m-1 flex flex-col items-center overflow-y-scroll">
    <!-- project 1 -->
    <Project title="portfolio page" :imgs="[ 'portfolio/portfolio_1.png', 'portfolio/portfolio_2.png', 'portfolio/portfolio_3.png' ]">
      The page you are on right now. Page created as a form of introducing myself, and to show of my projects. This page was built using
      <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">NuxtJS</a>, and
      <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">VueJS</a>,
       styling was done mostly with
      <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">TailwindCSS</a>,
      <a href="https://threejs.org/" target="_blank" rel="noopener noreferrer">ThreeJS</a>
       was used to make the 3D background. GitHub link can be found
      <a href="https://github.com/dead-playmod/portfolio" target="_blank" rel="noopener noreferrer">here</a>.
    </Project>

    <!-- project 2 -->
    <Project
      title="cyberbug"
      :imgs="[ 'cyberbug/cyberbug_1.png', 'cyberbug/cyberbug_2.png', 'cyberbug/cyberbug_3.png' ]"
    >
      Cyberbug is a game project me and my friend made for a
      <a href="https://itch.io/jam/game-off-2021" target="_blank" rel="noopener noreferrer">Game Off 2021</a>,
      it was a game jam organized on
      <a href="https://itch.io" target="_blank" rel="noopener noreferrer">Itch.io</a>
      in which participants had to follow a one-word theme “Bug”. Game we made for this jam was a first-person action shooter, in which you had to fight of incoming waves of bugs, gameplay itself was inspired by a zombie mod from Call of Duty games. Project was created using
      <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">Unity Game Engin</a>
      and coded using
      <a href="https://docs.microsoft.com/pl-pl/dotnet/csharp/" target="_blank" rel="noopener noreferrer">C#</a>.
      Submission page for this project can be found
      <a href="https://itch.io/jam/game-off-2021/rate/1301171" target="_blank" rel="noopener noreferrer">here</a>.
    </Project>

    <!-- project 3 -->
    <Project title="portfolio page (NextJS + ReactJS)" :imgs="[ 'nextjs.png' ]">
      Another portfolio page which is currently work in progress. This page was made with intent of learning
      <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">NextJS</a>
      and
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a>.
      Github link can be found
      <a href="https://github.com/dead-playmod/portfolio-nextjs" target="_blank" rel="noopener noreferrer">her</a>.
    </Project>
  </div>
</template>

<script>
import Project from '~/components/Project.vue'

export default {
  name: 'ProjectsPage',
  components: { Project }
}
</script>

<style scoped>
a {
  text-decoration: underline;
}
</style>
