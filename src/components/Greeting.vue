<template>
    <div class="body-wrapper" :style="{ backgroundImage: 'url(' + bgUrl + ')' }">
        <div class="container">

            <div class="invitation-wrapper">
                <div class="invitation-img" :style="{ backgroundImage: 'url(' + invitationUrl + ')' }">
                    <div class="blank-wrapper"></div>
                    <button class="accept-button" @click="goToEndPage">accept</button>
                </div>
                <img src="../assets/img/cake.png"/>

            </div>

        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Provide, Emit} from 'vue-property-decorator';
    import {router} from '../main';


    @Component({
        components: {},
    })

    export default class Greeting extends Vue {

        @Provide() bgUrl = require('../assets/img/flower.png')
        @Provide() invitationUrl = require('../assets/img/dialogue-box.png')

        @Emit()
        goToEndPage() {
            router.push({name: 'EndPage'})
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Greeting.css"></style>
