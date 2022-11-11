<template>
    <div style="overflow: visible; margin-right: 0px;" v-for="item in weeklyFeed" :key="item._uid">
        <PinnedCard :key="item._uid" :isBrief="item.isBrief" :title="item.title" :date="item.date" :description="item.description" />
        <!-- {{ item }} -->
    </div>
    <!-- <PinnedCard :key="12" :isBrief="true" :title="'222222'" :date="'22/22/22'" :description="'item.description'" /> -->

</template>

<script>
import PinnedCard from "../../cards/PinnedCard.vue";

export default {
    name: 'WeeklyPinned',
    props: ['weeklyFeed'],
    components: { PinnedCard },
    created() {
        console.log(this.weeklyFeed)
    }
}

</script>

<style>

</style>