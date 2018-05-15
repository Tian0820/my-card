<template>
    <div>
        <div class="body-wrapper">

            <div class="container">

                <div class="header-wrapper" :style="{ backgroundImage: 'url(' + snowUrl + ')' }">

                    <top-decoration v-for="item in imgPaths" :name="item"/>

                </div>

                <div class="greeting-wrapper">
                    <div class="ribbon-wrapper"
                         :style="{ backgroundImage: 'url(' + ribbonUrl + ')' }">
                        <span>Birthday</span>
                    </div>
                    <p>Happy 20th!</p>

                    <button class="open-button" @click="goToGreetingPage">open</button>

                </div>

            </div>

            <my-footer></my-footer>

        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Provide, Emit} from 'vue-property-decorator';
    import {router} from '../../main';
    import TopDecoration from '@/components/layout/TopDecoration.vue';
    import MyFooter from '@/components/layout/Footer.vue';

    @Component({
        components: {
            TopDecoration,
            MyFooter,
        },
    })

    export default class Cover extends Vue {
//        @Prop() private msg: string;

        @Provide() imgPaths: string[] = ["gift4.png", "gift1.png", "gift2.png", "gift3.png", "gift4.png", "gift5.png", "gift2.png"]
        @Provide() ribbonUrl = require('../../assets/img/ribbon.png')
        @Provide() snowUrl = require('../../assets/img/snow.png')

        @Emit()
        goToGreetingPage() {
            this.$modal.show('hello-world');
//            router.push({name: 'GreetingPage'})
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Cover.css"></style>
