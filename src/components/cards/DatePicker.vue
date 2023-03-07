<template>

    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
        <template v-slot:activator="{ on, attrs }">
            <v-text-field hint="DD/MM/YYYY format" persistent-hint v-model="dateFormatted" label="Deadline" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" @blur="parseDate(dateFormatted)"></v-text-field>
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
    data: vm => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        menu1: false,
        menu2: false,
        modal: false
    }),
    props: {
        dateSetCallback: Function
    },
    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date)
        },
    },

    watch: {
        date() {
            this.dateFormatted = this.formatDate(this.date)
        },
    },

    methods: {
        passDateToDialog() {
            this.dateSetCallback(this.date.toString());
            this.modal = false;

        },
        formatDate(date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
        parseDate(date) {
            if (!date) return null

            const [day, month, year] = date.split('/')
            return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
        },
    },
}

</script>
<style>

</style>