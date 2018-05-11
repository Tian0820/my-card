<template>

    <!--<div class="decoration-wrapper">-->
    <img class="decoration-wrapper" :src="url" draggable="false"/>
    <!--<span>{{ url }}</span>-->
    <!--</div>-->

</template>

<script lang="ts">
    import {Component, Prop, Vue, Provide} from 'vue-property-decorator';

    @Component
    export default class TopDecoration extends Vue {
        @Prop() private name: string;
        @Provide() url = require('../assets/img/' + this.name)

    }

</script>

<style scoped src="./TopDecoration.css"></style>