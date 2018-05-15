<template>
    <div class="home">
        <Greeting/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Greeting from '@/components/greeting/Greeting.vue'; // @ is an alias to /src

    @Component({
        components: {
            Greeting,
        },
    })
    export default class GreetingPage extends Vue {
    }
</script>
