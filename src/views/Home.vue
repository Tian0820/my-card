<template>
  <div class="home">
    <!--<img src="../assets/img/logo.png">-->
    <IndexPage/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import IndexPage from '@/components/IndexPage.vue'; // @ is an alias to /src

@Component({
  components: {
      IndexPage,
  },
})
export default class Home extends Vue {}
</script>
