<template>
    <div class="body-wrapper">
        <h1>好友管理</h1>
        <div class="table-wrapper">
            <el-table
                    :data="tableData"
                    stripe
                    border
                    style="width: 100%">
                <el-table-column
                        label="姓名"
                        prop="name">
                </el-table-column>
                <el-table-column
                        label="性别"
                        prop="sex">
                </el-table-column>
                <el-table-column
                        label="标签"
                        prop="tags">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑
                        </el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

            <button class="add-button" @click="handleAdd">+ 增加好友</button>
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

    @Component({
        components: {},
    })

    export default class FriendsInfo extends Vue {

        @Prop() allFriends

        @Mutation('auth/saveFriendToEdit') saveFriendToEdit

        @Provide() tableData = this.allFriends.data

        @Emit()
        handleEdit(index, row) {
            console.log(index, row);
            this.saveFriendToEdit(row)
            this.$modal.show('manage-friend-modal')
        }

        @Emit()
        handleDelete(index, row) {
            console.log(index, row);
            this.saveFriendToEdit(row)
            this.$modal.show('delete-confirm-modal')
        }

        @Emit()
        handleAdd() {
            this.$modal.show('add-friend-modal')
        }
    }

</script>

<style scoped src="./FriendsInfo.css"></style>
