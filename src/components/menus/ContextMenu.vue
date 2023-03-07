<template>
    <div>
        <v-menu transition="scale-transition" class="sm">
            <template v-slot:activator="{ attrs, on }">
                <v-btn :ripple="false" style="float:right; cursor:pointer; margin-top:-22px; margin-right:-8px;" class="mb-2 min-button noRipple" x-small circle icon v-bind="attrs" @mousedown="refreshOptions()" v-on="on">
                    <v-icon small tile color="grey darken-2">
                        mdi-dots-vertical
                    </v-icon>
                </v-btn>
            </template>
            <!-- <template v-slot:activator="{ attrs, on }"> -->
            <!-- </template> -->

            <v-list :key="contextVisible">
                <v-list-item class="d-md" v-for="item in labels" :key="menuSuffix + item" link small>
                    <v-list-item-title style="font-size:small; " v-text="item" @click="callAction(item);"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>
<script>

import { uidGenerator } from "../../classes/UidGenerator.js";

export default {
    props: {
        labels: Array,
        labelActions: Object,
        elementCallback: Function,
        reloadList: Function
    },
    data: () => ({
        contextVisible: false,
        menuSuffix: "",
        btns: [
            ['Small', 'sm'],
        ],
        colors: ['teal darken-1'],
        x: 0,
        y: 0,
    }),
    methods: {
        callAction(index) {
            console.log(index);
            // const element = this.$props.elementCallback();
            this.$props.labelActions[index]();
            console.log(uidGenerator);
            // this.refreshOptions();
            // this.$props.reloadList();
            return;
        },
        refreshOptions() {

            // this.contextVisible = !this.contextVisible;


        },
        toggleContext() {
            this.contextVisible = !this.contextVisible;
            // this.x = e.clientX;
            // this.y = e.clientY;
        }
    },
    created() {
        this.menuSuffix = this.elementCallback()._uid;
    },
}
</script>
<style>
.min-button::before {
    display: none;
}

.min-button::after {
    display: none;
}
</style>