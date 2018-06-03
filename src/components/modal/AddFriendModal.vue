<template>

    <modal name="add-friend-modal"
           width="50%"
           height="auto">
        <div class="info-wrapper">
            <div class="input-wrapper">
                <p>Add new Friend</p>
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

    export default class AddFriendModal extends Vue {

        @Action('auth/deleteFriend') deleteFriend
        @State('auth') auth

        @Emit()
        handleClose() {
            this.$modal.hide('add-friend-modal')
        }

        @Emit()
        handleConfirm() {
            this.deleteFriend({
                name: this.auth.friendToEdit.name,
                onSuccess: (success) => {
                    Message.success(success)
                    this.$modal.hide('add-friend-modal')
                },
                onError: (error) => {
                    Message.error(error)
                }
            })
        }

    }
</script>

<style scoped src="./AddFriendModal.css"></style>

