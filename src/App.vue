<template>
    <div id="app">
        <info-modal></info-modal>
        <manage-friend-modal></manage-friend-modal>
        <!--<DeleteConfirmModal></DeleteConfirmModal>-->
        <delete-confirm-modal></delete-confirm-modal>
        <add-friend-modal></add-friend-modal>

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
    import AddFriendModal from '@/components/modal/AddFriendModal.vue'

    @Component({
        components: {
            InfoModal,
            ManageFriendModal,
            DeleteConfirmModal,
            AddFriendModal
        }
    })

    export default class App extends Vue {
    }

</script>

<style lang="scss" src="./App.css"></style>
