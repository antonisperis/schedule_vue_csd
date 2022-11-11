<template>
    <div class="leftSideTab">
        <div class="weeklyPinnedTasks overflow-auto">
            <WeeklyPinned :weeklyFeed="feedInfo" />
        </div>
    </div>
</template>
<script>
import { pinnedInfo } from "../../../data/pinnedData.js";
import WeeklyPinned from "./weeklyPinned/WeeklyPinned.vue";
export default {
    name: "LeftSideTab",
    props: {
        tasks: Array
    },
    components: { WeeklyPinned },
    data: () => ({
        feedInfo: pinnedInfo
    }),
    created() {


    },
}
</script>
<style >
.leftSideTab {
    background-color: #e7edfe;
    width: 30vw;
    height: 100vh;
    padding-top: 25px;
    padding-left: 20px;
}

.weeklyPinnedTasks {
    height: 50%;
    padding-left: 15px;
    align-content: center;
    /* width: 100%; */
    /* overflow-y: scroll; */
}
</style>