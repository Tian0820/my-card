<template>
    <div class="home">
        <Cover/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Cover from '@/components/Cover.vue'; // @ is an alias to /src

    @Component({
        components: {
            Cover,
        },
    })
    export default class GreetingPage extends Vue {
    }
</script>
