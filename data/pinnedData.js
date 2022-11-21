const pinnedInfo = [
    {
        _uid: "BUY6Drn9e1",
        isBrief: false,
        title: "HY-100 Assignment 2",
        date: "24/10/2022",
        description: "Check if a sudoku is solved correctly, and after that make an empty sudoku and try to solve it. Finally, check your solution if it is correct."
    },
    {
        _uid: "gJZoSLkfZV",
        isBrief: true,
        title: "HY-484 Assignment 3",
        date: "25/10/2022",
        description: "Apply BFS and DFS for a problem."
    },
    {
        _uid: "X1JAfdsZxy",
        isBrief: true,
        title: "HY-252 Assignment 2",
        date: "27/10/2022",
        description: "Create game of thrones application with the help of already given data."
    },
    {
        _uid: "X1JAweeewy",
        isBrief: true,
        title: "HY-240 Project Phase A",
        date: "27/10/2022",
        description: "Make a network with nodes"
    },
    {
        _uid: "X1ZewBAwee",
        isBrief: true,
        title: "HY-100 Assignment 2",
        date: "24/10/2022",
        description: "Make an empty sudoku and try to solve it."
    }
];

function addTask(taskJSON) {
    pinnedInfo.push(taskJSON);
    return;
}

export { pinnedInfo, addTask };