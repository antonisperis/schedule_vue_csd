<template>
    <v-dialog v-model="dialog" max-width="400px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn slot="activator" style="float: right;margin-top: -2px;" icon tile small v-bind="attrs" v-on="on">
                <v-icon medium color="blue-grey darken-2">
                    {{ icon }}
                </v-icon>
            </v-btn>
        </template>
        <v-card width="400px">
            <v-card-title>
                <span class="text-h5">New Task</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-text-field prepend-icon="mdi-folder" v-model="title" :counter="10" label="Title" required></v-text-field>
                    <DatePicker :dateSetCallback="setDate" />
                    <v-textarea prepend-icon="mdi-pencil" v-model="description" label="Description" required></v-textarea>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                    Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="insertTask">
                    Create
                </v-btn>
            </v-card-actions>
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
    props: {
        icon: String,
        iconCallBack: Function
    },
    data: () => ({
        dialog: false,
        deadlineDate: formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
        title: "",
        description: ""
    }),

    methods: {
        setDate(dateStr) {
            this.deadlineDate = formatDate(dateStr);
            return;
        },
        insertTask() {
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
</script>
<style>

</style>