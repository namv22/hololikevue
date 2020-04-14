<template>
  <div class="home">
    <img alt="Hololike logo" src="../assets/watermark small.png">
    <HelloWorld msg="Work in progress, please come back later!!!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
