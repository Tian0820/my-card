<template>
  <div class="home">
    <!--<img src="../assets/img/logo.png">-->
    <Cover/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cover from '@/components/Cover.vue'; // @ is an alias to /src

@Component({
  components: {
      Cover,
  },
})
export default class Home extends Vue {}
</script>
