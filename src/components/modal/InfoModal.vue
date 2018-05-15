<template>

    <modal name="hello-world">
        hello, world!
    </modal>

</template>

<script lang="ts">
    import {Component, Prop, Vue, Provide, Emit} from 'vue-property-decorator';


    @Component({
        components: {},
    })

    export default class InfoModal extends Vue {

        @Provide() bgUrl = require('../../assets/img/flower.png')
        @Provide() invitationUrl = require('../../assets/img/dialogue-box.png')

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./InfoModal.css"></style>
