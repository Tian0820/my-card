<template>
    <div class="home">
        <Greeting v-if="auth.currentInfo" :currentInfo="auth.currentInfo"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace
    } from 'vuex-class'
    import {router, store} from '../main';
    import Greeting from '@/components/greeting/Greeting.vue'; // @ is an alias to /src

    Component.registerHooks([
        'beforeRouteEnter',
    ])

    @Component({
        components: {
            Greeting,
        },
    })
    export default class GreetingPage extends Vue {

        @State('auth') auth

        beforeRouteEnter(to, from, next) {
            console.log(to.params.name)
            store.dispatch('auth/fetchInfo', to.params.name)
            next()
        }
    }
</script>
