<template>

    <modal name="manage-friend-modal"
           width="50%"
           height="auto">
        <div class="info-wrapper">
            <div class="input-wrapper">
                <p>Edit Friend Info</p>
                <!--<input class="info-input" type="text" v-model="name"/>-->

                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" label-position="left"
                         class="demo-ruleForm">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="name">
                        <el-radio-group v-model="ruleForm.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="标签" prop="name">
                        <el-tag
                                :key="tag"
                                v-for="tag in dynamicTags"
                                closable
                                :disable-transitions="false"
                                @close="handleTagClose(tag)">
                            {{tag}}
                        </el-tag>
                        <el-input
                                class="input-new-tag"
                                v-if="inputVisible"
                                v-model="inputValue"
                                ref="saveTagInput"
                                size="small"
                                @keyup.enter.native="handleInputConfirm"
                                @blur="handleInputConfirm"
                        >
                        </el-input>
                        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
                    </el-form-item>
                </el-form>

            </div>
            <div class="button-wrapper">
                <button class="cancel-button" @click="handleClose">Cancel</button>
                <button class="confirm-button" @click="handleConfirm">Confirm</button>
            </div>

        </div>
    </modal>

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
    import {router} from '../../main';

    @Component({
        components: {},
    })

    export default class ManageFriendModal extends Vue {

        @Provide() ruleForm = {
            name: '',
            sex: '男',

        }
        @Provide() rules = {
            name: [
                {required: true, message: '请输入活动名称', trigger: 'blur'},
                {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
            ]
        }

        @Provide() dynamicTags = ['标签一', '标签二', '标签三']
        @Provide() inputVisible = false
        @Provide() inputValue = ''

        @Provide() bgUrl = require('../../assets/img/flower.png')
        @Provide() invitationUrl = require('../../assets/img/dialogue-box.png')
        @Provide() name = "刘昊然"

        @State('auth') auth
        @Action('auth/fetchInfo') fetchInfo

        @Emit()
        handleClose() {
            this.$modal.hide('manage-friend-modal');
        }

        @Emit()
        handleConfirm() {
            this.fetchInfo(this.name)
            this.handleClose()
            router.push({name: 'GreetingPage', params: {name: this.name}})
        }

        @Emit()
        handleTagClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        }

        @Emit()
        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
                this.$refs.saveTagInput.$refs.input.focus();
            });
        }

        @Emit()
        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
                this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./ManageFriendModal.css"></style>
