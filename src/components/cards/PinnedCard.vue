<template lang="">
    <v-card class="pb-2 mb-4" @mouseover="editIcon=true;refreshEditKey();" @mouseleave="editIcon=false;refreshEditKey();">
        <v-list-item>
            <v-list-item-content class="pt-0 pb-0">
                    <v-list-item-title class="mt-3 mb-1 text-h7">
                        <b>{{taskTitle}}</b>
                        <!-- <TaskFormCard :key="editKey" :icon="'mdi-pencil'" :iconCallBack="getCardInfo" :editMode="true" :editIcon="true" /> -->
                        <!-- <v-icon @click = "getCardInfo" style="float:right; cursor:pointer; margin-right:-7px; " small tile color="grey darken-2">
                            mdi-dots-vertical
                        </v-icon> -->
                        <ContextMenu :key="taskId+'Context'" :labels="contextLabels" :labelActions="contextActions" :elementCallback = "getCardInfo" :reloadList = "reloadTaskList"/>
                    </v-list-item-title>
                    <v-list-item-subtitle class="mt-1">
                        <b style="color:red;">Deadline: {{taskDate}}</b>
                    </v-list-item-subtitle> 
                    <v-list-item-subtitle class="card-text descriptionText mt-3"  v-if="reveal===true">
                        <b>Description: </b>
                        <p style="white-space: pre-wrap;">{{taskDescription}}</p>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle style="float:right; margin-right:-10px;">
                        <v-btn style="float:right;white-space: pre-line;" :ripple="false"  plain x-small color="teal accent-5" @click="reveal = !reveal">
                            <div v-if="reveal===true">Show Less</div>
                            <div v-else-if="reveal===false">Show More</div>
                        </v-btn>
                    </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>
<script>
import ContextMenu from '../menus/ContextMenu.vue';
import { pinnedContextLabels } from './PinnedCardMenuCallbacks.js';
export default {

    name: "PinnedCard",
    props: {
        uid: String,
        reloadTaskList: Function
    },
    data: () => ({
        reveal: false,
        editIcon: false,
        editKey: 0,
        taskId: String,
        taskTitle: String,
        taskDate: String,
        taskDescription: String,

    }),
    methods: {
        getCardInfo() {
            return {
                _uid: this.taskId,
                title: this.taskTitle,
                date: this.taskDate,
                description: this.taskDescription,
            };
        },
        deleteTask() {
            const deletingId = this.taskId;
            this.$store.commit('deleteTask', deletingId);
            this.refreshEditKey();
            return;
        },
        refreshEditKey() {
            this.editKey = (!this.editKey);
            return;
        }
    },
    components: {
        ContextMenu
    },
    created() {
        [this.taskId, this.taskDate, this.taskDescription, this.isBrief, this.taskTitle] = this.$store.getters.getTask(this.$props.uid);
        this.contextLabels = pinnedContextLabels;
        const deletedId = this.taskId;
        this.contextActions = {
            'Edit': () => { },
            'Delete': () => {
                console.log('delete dispatch item')
                const refreshOp = (() => {
                    this.$props.reloadTaskList();
                });
                this.$store.commit('deleteTask', { id: deletedId, refresh: refreshOp });
            },
            'Move To Top': () => { },
            'Move To Bottom': () => { }
        }
    }
}
</script>
<style>
.v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
}
</style>