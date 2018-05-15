<template>
  <div class="home">
    <Cover/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cover from '@/components/cover/Cover.vue'; // @ is an alias to /src

@Component({
  components: {
      Cover,
  },
})
export default class CoverPage extends Vue {}
</script>
