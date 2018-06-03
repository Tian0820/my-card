<template>

    <modal name="manage-friend-modal"
           width="50%"
           height="auto"
    >
        <div class="info-wrapper">
            <div class="input-wrapper">
                <p>Edit Friend Info</p>
                <!--<input class="info-input" type="text" v-model="name"/>-->

                <edit-form v-if="auth.friendToEdit" :friendToEdit="auth.friendToEdit"></edit-form>

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
    import EditForm from '@/components/manage/EditForm.vue'

    @Component({
        components: {
            EditForm
        },
    })

    export default class ManageFriendModal extends Vue {

        @State('auth') auth

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./ManageFriendModal.css"></style>
