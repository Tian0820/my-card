<template>

    <div>
        <el-form :model="infoForm" :rules="rules" ref="infoForm" label-width="100px" label-position="left"
                 class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="infoForm.name" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="">
                <el-radio-group v-model="infoForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="标签" prop="">
                <el-tag
                        :key="tag"
                        v-for="tag in infoForm.tags"
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

        <div class="button-wrapper">
            <button class="cancel-button" @click="handleClose">Cancel</button>
            <button class="confirm-button" @click="handleConfirm">Confirm</button>
        </div>
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
    import {router} from '../../main';
    import {Message} from "element-ui";

    @Component({
        components: {},
    })

    export default class EditForm extends Vue {

        @State('auth') auth
        @Action('auth/fetchInfo') fetchInfo

        @Prop() friendToEdit

        @Provide() infoForm = {
            name: this.friendToEdit.name,
            sex: this.friendToEdit.sex,
            tags: this.friendToEdit.tags.split(' ')
        }
        @Provide() rules = {
            name: [
                {required: true, message: '请输入名字', trigger: 'blur'},
            ]
        }

        @Provide() inputVisible = false
        @Provide() inputValue = ''

        @Action('auth/updateFriend') updateFriend

        @Emit()
        handleTagClose(tag) {
            this.infoForm.tags.splice(this.infoForm.tags.indexOf(tag), 1);
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
                this.infoForm.tags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        }

        @Emit()
        handleClose() {
            this.$modal.hide('manage-friend-modal');
        }

        @Emit()
        handleConfirm() {
            this.updateFriend({
                info: this.infoForm,
                onSuccess: (success) => {
                    Message.success(success)
                    this.$modal.hide('manage-friend-modal')
                },
                onError: (error) => {
                    Message.error(error)
                }
            })
        }

    }

</script>

<style scoped src="./EditForm.css"></style>
