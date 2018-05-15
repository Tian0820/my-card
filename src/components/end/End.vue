<template>
    <div class="body-wrapper" :style="{ backgroundImage: 'url(' + bgUrl + ')' }">
        <div class="container">

            <div class="card-wrapper">
                <p>Thank</p>
                <p>You!</p>
            </div>

            <img src="../../assets/img/balloons2.png" draggable="false"/>

        </div>

        <div class="pow-wrapper" :style="{ backgroundImage: 'url(' + powUrl + ')' }">

        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Provide, Emit} from 'vue-property-decorator';
    import {router} from '../../main';


    @Component({
        components: {
        },
    })

    export default class End extends Vue {

        @Provide() bgUrl = require('../../assets/img/dots.png')
        @Provide() powUrl = require('../../assets/img/pow.png')
        @Provide() invitationUrl = require('../../assets/img/dialogue-box.png')

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./End.css"></style>
