<template>
    <div class="body-wrapper">

        <p class="title">PARTY TIME</p>
        <div class="container" :style="{ backgroundImage: 'url(' + themeUrl + ')' }">

            <div class="invitation-img">
                <div class="blank-wrapper"></div>
                <p class="invitation">Mr.{{this.currentInfo.lastName}} 8 p.m. ShangHai</p>
                <button class="accept-button" @click="goToEndPage">accept</button>
            </div>
            <!--<img src="../../assets/img/cake.png"/>-->


        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Provide, Emit} from 'vue-property-decorator';
    import {router} from '../../main';
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace
    } from 'vuex-class'

    @Component({
        components: {},
    })

    export default class Greeting extends Vue {

        @Prop() currentInfo
        @Provide() bgUrl = require('../../assets/img/flower.png')
        @Provide() invitationUrl = require('../../assets/img/dialogue-box.png')
        @Provide() themeUrl = require('../../assets/img/' + this.currentInfo.info + '.gif')

        @Emit()
        goToEndPage() {
            router.push({name: 'EndPage'})
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Greeting.css"></style>
