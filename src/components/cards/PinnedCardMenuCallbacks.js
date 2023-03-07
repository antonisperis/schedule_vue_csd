// import { store } from "@/store/Tasks";

// const editTask = (task) => {
//     console.log('editing...');
//     console.log(task);
// }

// const deleteTask = (task) => {
//     console.log('deleting...' + task._uid);
//     const id = task._uid;
//     store.commit('deleteTask', { id });
// }
// const moveToTopTask = (task) => {
//     console.log('moving to top...');

//     console.log(task);
// }
// const moveToBottomTask = (task) => {
//     console.log('moving to bottom...');

//     console.log(task);
// }



const pinnedContextLabels = ['Edit', 'Delete', 'Move To Top', 'Move To Bottom'];

// const pinnedContextActions = {
//     'Edit': editTask,
//     'Delete': deleteTask,
//     'Move To Top': moveToTopTask,
//     'Move To Bottom': moveToBottomTask
// }


export { pinnedContextLabels };