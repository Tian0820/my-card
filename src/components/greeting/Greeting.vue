<template>
    <div class="body-wrapper" :style="{ backgroundImage: 'url(' + bgUrl + ')' }">

        <p class="title">PARTY TIME</p>
        <div class="container">

            <div class="invitation-img">
                <!--<div class="blank-wrapper"></div>-->
                <div class="welcome-div">
                    <p class="invitation">
                        <span :style="{ fontSize: '48px' }">Welcome</span>
                        {{this.currentInfo.name}}
                        <br/>
                        8 p.m. ShangHai</p>
                </div>
                <!--<img src="../../assets/img/cake.png"/>-->

                <div :style="{ top: '53%' }">
                    <button class="accept-button" @click="goToEndPage">accept</button>
                </div>
            </div>

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

//        @Provide() themeUrl = require('../../assets/img/' + this.currentInfo.info + '.gif')

        @Emit()
        goToEndPage() {
            router.push({name: 'EndPage'})
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Greeting.css"></style>
