<template>
    <div :key="tasksKey" style="margin-right:0;padding: 12px;">
        <div id="taskList" v-for="item in weeklyFeed" :key="item._uid">
            <PinnedCard :key="item._uid" :isBrief="item.isBrief" :title="item.title" :date="item.date" :description="item.description" />
            <!-- {{ item }} -->
        </div>
    </div>
    <!-- <PinnedCard :key="12" :isBrief="true" :title="'222222'" :date="'22/22/22'" :description="'item.description'" /> -->

</template>

<script>
import PinnedCard from "../../cards/PinnedCard.vue";



export default {
    name: 'WeeklyPinned',
    props: ['weeklyFeed'],
    data() {
        return {
            tasksKey: 0,
        }
    },
    methods: {
        forceRenderTasksList() {
            this.tasksKey += 1;
            return;
        }
    },
    components: { PinnedCard },
    created() {
    }
}

// export { forceRender }

</script>

<style>

</style>