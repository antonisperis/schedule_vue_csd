<template>
    <div :key="tasksKey" style="margin-right:0;padding: 12px;">
        <div id="taskList" v-for="i in weeklyFeed" :key="i._uid">
            <PinnedCard :uid="i._uid" :reloadTaskList="forceRenderTasksList" />
            <!-- {{ item }} -->
        </div>
    </div>
    <!-- <PinnedCard :key="12" :isBrief="true" :title="'222222'" :date="'22/22/22'" :description="'item.description'" /> -->

</template>

<script>
import PinnedCard from "../../cards/PinnedCard.vue";


export default {
    name: 'WeeklyPinned',
    // props: ['weeklyFeed'],
    data() {
        return {
            tasksKey: 0,
            selectedItem: null
        }
    },
    methods: {
        forceRenderTasksList() {
            console.log('reload weekly');
            this.tasksKey = !this.tasksKey;
            return;
        },
        handleSelectItem(item) {
            console.log(item);
            // you can also handle toggle action here manually to open and close dropdown
        }
    },
    components: { PinnedCard },
    computed: {
        weeklyFeed() {
            console.log(this.$store);
            return this.$store.state.tasks;
        }
    },

    created() {
    }
}

// export { forceRender }

</script>

<style>

</style>