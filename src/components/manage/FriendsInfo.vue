<template>
    <div class="body-wrapper">
        <h1>Manage Friends</h1>
        <div class="table-wrapper">
            <el-table
                    :data="tableData"
                    stripe
                    border
                    style="width: 100%">
                <el-table-column
                        label="Name"
                        prop="name">
                </el-table-column>
                <el-table-column
                        label="Sex"
                        prop="sex">
                </el-table-column>
                <el-table-column
                        label="Tags"
                        prop="tags">
                </el-table-column>
                <el-table-column label="Operation">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">Edit
                        </el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">Delete
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

            <button class="add-button" @click="handleAdd">+ New</button>
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
