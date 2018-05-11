<template>

    <div class="footer-wrapper" :style="{ backgroundImage: 'url(' + bgUrl + ')' }">
    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue, Provide} from 'vue-property-decorator';

    @Component
    export default class Footer extends Vue {
        @Provide() bgUrl = require('../assets/img/gifts.png')
    }

</script>

<style scoped src="./Footer.css"></style>