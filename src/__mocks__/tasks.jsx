const taskStatus = {
  queue: "Queue",
  assigned: "Assigned",
  fixed: "Fixed",
  done: "Done"
};

export { taskStatus };

export default [
  {
    id: 100,
    summary: "Test",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, banditos.",
    assignedTo: 110,
    status: "fixed"
  },
  {
    id: 101,
    summary: "Test1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, banditos.",
    assignedTo: 111,
    status: "queue"
  },
  {
    id: 102,
    summary: "Test2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, banditos.",
    assignedTo: 112,
    status: "done"
  }
];
