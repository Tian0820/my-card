<template>

    <div class="footer-wrapper">
        <div class="left-wrapper">
            <img src="../assets/img/gifts1.png"/>
        </div>
        <div class="right-wrapper">
            <img src="../assets/img/gifts2.png"/>
        </div>
        <!--<div class="clear-fix"></div>-->

    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue, Provide} from 'vue-property-decorator';

    @Component
    export default class Footer extends Vue {
    }

</script>

<style scoped src="./Footer.css"></style>