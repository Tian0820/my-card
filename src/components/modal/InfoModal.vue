<template>

    <modal name="info-modal"
           width="50%"
           height="auto">
        <div class="info-wrapper">
            <div class="input-wrapper">
                <p>Who are you?</p>
                <!--<input class="info-input" type="text" v-model="name"/>-->

                <select v-model="name">
                    <option v-for="friend in auth.allFriends" :key="friend.name" :value="friend.name">{{friend.name}}
                    </option>
                </select>
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

    @Component({
        components: {},
    })

    export default class InfoModal extends Vue {

        @Provide() bgUrl = require('../../assets/img/flower.png')
        @Provide() invitationUrl = require('../../assets/img/dialogue-box.png')
        @Provide() name = "刘昊然"

        @State('auth') auth
        @Action('auth/fetchInfo') fetchInfo

        @Emit()
        handleClose() {
            this.$modal.hide('info-modal');
        }

        @Emit()
        handleConfirm() {
            this.fetchInfo(this.name)
            this.handleClose()
            router.push({name: 'GreetingPage', params: {name: this.name}})
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./InfoModal.css"></style>
