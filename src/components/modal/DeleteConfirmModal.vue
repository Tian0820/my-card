<template>

    <modal name="delete-confirm-modal"
           width="50%"
           height="auto">
        <div class="info-wrapper">
            <div class="input-wrapper">
                <p>Are you sure to delete?</p>
            </div>

            <div class="button-wrapper">
                <button class="cancel-button" @click="">Cancel</button>
                <button class="confirm-button" @click="">Confirm</button>
            </div>
        </div>
    </modal>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Provide, Emit} from 'vue-property-decorator';
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace
    } from 'vuex-class'
    import {router} from '../../main';

    @Component({
        components: {},
    })

    export default class DeleteConfirmModal extends Vue {

    }
</script>

<style scoped src="./DeleteConfirmModal.css"></style>

