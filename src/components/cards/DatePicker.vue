<template>

    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
        <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="date" label="Picker in dialog" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false">
                Cancel
            </v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(date); passDateToDialog();">
                OK
            </v-btn>
        </v-date-picker>
    </v-dialog>
</template>
<script>
export default {
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
    }),
    props: {
        dateSetCallback: Function
    },
    methods: {
        passDateToDialog() {
            this.dateSetCallback(this.date.toString());
            this.modal = false;

        }
    }
}
</script>
<style>

</style>