<template>

    <modal name="delete-confirm-modal"
           width="50%"
           height="auto">
        <div class="info-wrapper">
            <div class="input-wrapper">
                <p>Are you sure to delete?</p>
            </div>

            <div class="button-wrapper">
                <button class="cancel-button" @click="handleClose">Cancel</button>
                <button class="confirm-button" @click="handleConfirm">Confirm</button>
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
    import {Message} from "element-ui";

    @Component({
        components: {},
    })

    export default class DeleteConfirmModal extends Vue {

        @Action('auth/deleteFriend') deleteFriend
        @State('auth') auth

        @Emit()
        handleClose() {
            this.$modal.hide('delete-confirm-modal')
        }

        @Emit()
        handleConfirm() {
            this.deleteFriend({
                name: this.auth.friendToEdit.name,
                onSuccess: (success) => {
                    Message.success(success)
                    this.$modal.hide('delete-confirm-modal')
                },
                onError: (error) => {
                    Message.error(error)
                }
            })
        }

    }
</script>

<style scoped src="./DeleteConfirmModal.css"></style>

