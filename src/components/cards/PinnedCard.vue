<template lang="">
        <!-- <div class="card mb-3 shadow p-3 mb-4 bg-body rounded pinnedCard" >
            <div class="row">
                <div class="col-md-2">
                    <img src="../../assets/647857.png" class="img-fluid rounded pinnedCardPhoto">
                </div>
                <div class="col-md-10">
                    <div class="card-body pt-0 pb-0">
                        <h5 class="cardTittle">{{title}}</h5>
                        <p class="card-text date">{{date}}</p>
                        <p class="card-text descriptionText"  v-if="isBrief===false">{{description}}</p>
                    </div>
                </div>
            </div>
        </div> -->
    <v-card class="pb-2 mb-4" >
        <v-list-item>
            <v-list-item-content class="pt-0 pb-0">
                    <v-list-item-title style="color:#70747c;" class="mt-3 text-h7">
                        <b>{{title}}</b>
                    </v-list-item-title>
                    <v-list-item-subtitle class="mt-1">
                        <b style="color:red;">Deadline: {{date}}</b>
                    </v-list-item-subtitle> 
                    <v-list-item-subtitle class="card-text descriptionText mt-3"  v-if="reveal===true">
                        <b>Description: </b>
                        <p style="white-space: pre-wrap;">{{description}}</p>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle style="margin-top:-26px;">
                                <v-btn
                                    style="float:right;white-space: pre-line;"
                                    plain
                                    small
                                    color="teal accent-5"
                                    @click="reveal = !reveal"
                                >
                                    <div v-if="reveal===true">Show Less</div>
                                         <div v-else-if="reveal===false">Show More</div>
                                </v-btn>
                    </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>
<script>

export default {

    name: "PinnedCard",
    props: {
        isBrief: Boolean,
        title: String,
        date: String,
        description: String,
    },
    data: () => ({
        reveal: false,
    }),
    methods: {

    },
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