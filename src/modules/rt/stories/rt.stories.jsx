import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import RT from "../RT";
import Task from "../tasks/Task";
import Board from "../trello-board/Board";
import TaskCard from "../trello-board/TaskCard";
import userSample from "../../../__mocks__/users";
import taskSample from "../../../__mocks__/tasks";

const getUser = task => {
  return userSample.find(element => {
    return element.id === task.assignedTo;
  });
};

storiesOf("RT", module)
  .addDecorator(story => <div style={{ height: "100vh" }}>{story()}</div>)
  .add("RT", () => <RT />)
  .add("Task List", () => <Task />)
  .add("Task Card", () => (
    <TaskCard task={taskSample[0]} user={getUser(taskSample[0])} />
  ))
  .add("Trello Board", () => <Board />);
