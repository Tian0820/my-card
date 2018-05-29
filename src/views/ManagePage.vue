<template>
    <div>
        <FriendsInfo/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Provide, Emit} from 'vue-property-decorator';
    import FriendsInfo from '@/components/manage/FriendsInfo.vue'

    @Component({
        components: {
            FriendsInfo
        },
    })

    export default class ManagePage extends Vue {

    }

</script>
