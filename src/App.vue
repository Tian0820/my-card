<template>
    <div id="app">
        <info-modal></info-modal>
        <manage-friend-modal></manage-friend-modal>
        <!--<DeleteConfirmModal></DeleteConfirmModal>-->
        <delete-confirm-modal></delete-confirm-modal>

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
    import ManageFriendModal from '@/components/modal/ManageFriendModal.vue';
    import DeleteConfirmModal from '@/components/modal/DeleteConfirmModal.vue';

    @Component({
        components: {
            InfoModal,
            ManageFriendModal,
            DeleteConfirmModal
        }
    })

    export default class App extends Vue {
    }

</script>

<style lang="scss" src="./App.css"></style>
