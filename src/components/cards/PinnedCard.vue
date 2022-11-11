<template lang="">
        <div class="card mb-3 shadow p-3 mb-4 bg-body rounded pinnedCard" >
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
        </div>
</template>
<script>

export default {

    name: "PinnedCard",
    props: {
        isBrief: Boolean,
        title: String,
        date: String,
        description: String,
    }
}
</script>
<style lang="">
</style>