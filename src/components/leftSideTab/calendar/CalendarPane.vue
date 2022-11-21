
<template >
    <div style="display:flex;justify-content:center;">
        <v-date-picker no-title v-model="picker" color="green lighten-1"></v-date-picker>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        }
    },
}
</script>
<style>

</style>