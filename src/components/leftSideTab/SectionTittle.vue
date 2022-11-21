<template>
    <h3 class="mt-0 ml-1 sectionTitle">{{ titleStr }}
        <TaskFormCard :icon="iconStr" :iconCallBack="formSubmit" />
    </h3>
</template>
<script>
import TaskFormCard from '../cards/TaskFormCard.vue';

export default {
    data: () => ({}),
    props: {
        titleStr: String,
        iconStr: String,
        formSubmit: Function
    },
    methods: {},
    components: { TaskFormCard }
}
</script>
<style>
.sectionTitle {
    border-bottom: 1px solid #ccc;
}
</style>