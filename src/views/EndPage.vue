<template>
    <div class="home">
        <End/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import End from '@/components/end/End.vue'; // @ is an alias to /src

    @Component({
        components: {
            End,
        },
    })
    export default class EndPage extends Vue {
    }
</script>
