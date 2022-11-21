<template>
    <div class="leftSideTab pt-2 pl-2 pr-2">
        <SectionTittle :titleStr="'Tasks'" :iconStr="'mdi-plus-box'" :formSubmit="refreshWeekly" />
        <div class="weeklyPinnedTasks mb-3 mt-2">
            <WeeklyPinned ref="userTasks" :weeklyFeed="feedInfo" />
        </div>
        <SectionTittle :titleStr="'Calendar'" :iconStr="'mdi-calendar-expand-horizontal'" />
        <div class="pt-2 overflow-auto">
            <CalendarPane />
        </div>

    </div>
</template>
<script>
// import { mdiPlusBox } from '@mdi/js';
import { pinnedInfo } from "../../../data/pinnedData.js";
import WeeklyPinned from "./weeklyPinned/WeeklyPinned.vue";
import CalendarPane from "../leftSideTab/calendar/CalendarPane.vue";
import SectionTittle from "./SectionTittle.vue";


export default {
    name: "LeftSideTab",
    props: {
    },
    components: { WeeklyPinned, CalendarPane, SectionTittle },
    data: () => ({
        feedInfo: pinnedInfo,
    }),
    methods: {
        refreshWeekly() {
            this.$refs.userTasks.forceRenderTasksList();
        }
    },
    created() {


    },
}
</script>
<style >
.leftSideTab {
    background-color: #e7edfe;
    width: 30vw;
    height: 100vh;
    float: left;
}

.weeklyPinnedTasks {
    height: 40%;
    overflow-y: scroll;

    mask-image: linear-gradient(to bottom, transparent 0%, black 18px, black calc(100% - 28px), transparent 100%);

}

.weeklyPinnedTasks::-webkit-scrollbar {
    /* width: var(--scrollbar-width); */
    mask-image: none;

}

.weeklyPinnedTasks::-webkit-scrollbar-thumb {
    mask-image: none;
    /* always round */
}

.weeklyPinnedTasks::-webkit-scrollbar-track {
    background-color: transparent;

}
</style>