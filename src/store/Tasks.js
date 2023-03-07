import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tasks: {
            "BUY6Drn9e1": {
                _uid: "BUY6Drn9e1",
                isBrief: false,
                title: "HY-100 Assignment 2",
                date: "24/10/2022",
                description: "Check if a sudoku is solved correctly, and after that make an empty sudoku and try to solve it. Finally, check your solution if it is correct."
            },
            "gJZoSLkfZV": {
                _uid: "gJZoSLkfZV",
                isBrief: true,
                title: "HY-484 Assignment 3",
                date: "25/10/2022",
                description: "Apply BFS and DFS for a problem."
            },
            "X1JAfdsZxy": {
                _uid: "X1JAfdsZxy",
                isBrief: true,
                title: "HY-252 Assignment 2",
                date: "27/10/2022",
                description: "Create game of thrones application with the help of already given data."
            },
            "X1JAweeewy": {
                _uid: "X1JAweeewy",
                isBrief: true,
                title: "HY-240 Project Phase A",
                date: "27/10/2022",
                description: "Make a network with nodes"
            }
        }
    },
    getters: {
        getTask: (state) => (index) => {
            return [state.tasks[index]._uid,
            state.tasks[index].date,
            state.tasks[index].description,
            state.tasks[index].isBrief,
            state.tasks[index].title];
        }
    },
    mutations: {
        deleteTask: (state, { id: deletingId, refresh: refreshOp }) => {
            console.log('deleting ' + deletingId);
            // const deletingIndex = state.tasks.findIndex(el => el._uid === deletingId);
            console.log(state.tasks)
            delete state.tasks[deletingId];
            refreshOp();
        }
    }
});