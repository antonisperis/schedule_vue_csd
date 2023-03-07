<template>
    <v-dialog v-model="dialog" max-width="400px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-if="(editMode == false)" slot="activator" :ripple="false" @click="resetInput" style="float: right;margin-top: -2px;" icon tile small v-bind="attrs" v-on="on">
                <v-icon medium color="blue-grey darken-2">
                    {{ icon }}
                </v-icon>
            </v-btn>
        </template>
        <v-card width="400px">
            <v-card-title>
                <span class="text-h5">New Task</span>
            </v-card-title>
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text>
                    <v-container>
                        <v-text-field v-model="title" :rules="titleRequiredRules" prepend-icon="mdi-folder" label="Title" @blur="isFilled" required></v-text-field>
                        <DatePicker :dateSetCallback="setDate" />
                        <v-textarea prepend-icon="mdi-pencil" v-model="description" label="Description"></v-textarea>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="cancelCreation">
                        Cancel
                    </v-btn>
                    <v-btn :disabled="!this.title.replace(/\s/g, '').length" color="blue darken-1" text @click="insertTask">
                        Create
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-dialog>



</template>
<script>
import DatePicker from './DatePicker.vue';
import { addTask } from '../../../data/pinnedData.js';
const formatDate = (date) => {
    if (!date) return null

    const [year, month, day] = date.split('-')
    return `${day}/${month}/${year}`
}

export default {
    data: () => ({
        valid: false,
        titleRequiredRules: [
            v => !!v || 'Task title is required'
        ],
        dialog: false,
        deadlineDate: formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        title: "",
        description: ""
    }),
    props: {
        icon: String,
        iconCallBack: Function,
        editMode: Boolean,
        editIcon: Boolean
    },

    methods: {
        validate() {
            if (!this.title.replace(/\s/g, '').length) {
                return false;
            }
            else {
                return true;
            }
        },
        editTask() {
            var cardInfo = this.iconCallBack();
            console.log(cardInfo);

        },
        isFilled() {
            this.valid = true;
            return;
        },
        resetInput() {
            this.resetValidation();
            this.deadlineDate = formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10));
            this.title = "";
            this.description = "";
        },
        reset() {
            this.$refs.form.reset();

        },
        resetValidation() {
            if (this.$refs.form)
                this.$refs.form.resetValidation()
        },
        setDate(dateStr) {
            this.deadlineDate = formatDate(dateStr);
            return;
        },
        cancelCreation() {
            this.resetInput();
            // this.reset();
            this.dialog = false;
        },
        insertTask() {
            if (!this.validate()) {
                console.log("not validating")
                return;
            }
            if (!this.description.replace(/\s/g, '').length) {
                this.description = "No description added."
            }
            this.dialog = false;
            var uid = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < 10; i++) {
                uid += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            const task = {
                uid: uid,
                title: this.title,
                date: this.deadlineDate,
                description: this.description
            }
            addTask(task);
            console.log(task)
            this.iconCallBack();
        }
    },
    components: { DatePicker }
}

export { formatDate };
</script>
<style>

</style>