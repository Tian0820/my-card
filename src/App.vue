<template>
    <div id="app">
        <info-modal></info-modal>

        <!--<div id="nav">-->
        <!--<router-link to="/">Home</router-link> |-->
        <!--<router-link to="/about">About</router-link>-->
        <!--</div>-->
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Provide, Emit} from 'vue-property-decorator';
    import InfoModal from '@/components/modal/InfoModal.vue';

    @Component({
        components: {
            InfoModal
        }
    })

    export default class App extends Vue {

    }

</script>

<style lang="scss" src="./App.css"></style>
