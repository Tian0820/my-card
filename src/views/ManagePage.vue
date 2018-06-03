<template>
    <div>
        <FriendsInfo v-if="auth.allFriends" :allFriends="{data: auth.allFriends}"/>
    </div>
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
    import FriendsInfo from '@/components/manage/FriendsInfo.vue'
    import {router, store} from '../main';

    Component.registerHooks([
        'beforeRouteEnter',
    ])

    @Component({
        components: {
            FriendsInfo
        },
    })

    export default class ManagePage extends Vue {

        @State('auth') auth

        beforeRouteEnter(to, from, next) {
            store.dispatch('auth/fetchAllFriends')
            next()
        }
    }

</script>
