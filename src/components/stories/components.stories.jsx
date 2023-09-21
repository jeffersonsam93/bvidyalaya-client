import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import PageNotFound from "../PageNotFound";
import Table from "../Table";
import DataTable from "../DataTable";

storiesOf("Components", module)
  .add("Page Not Found", () => <PageNotFound />)
  .add("DataTable", () => <DataTable />)
  .add("Table", () => (
    <Table
      tableHeaderColor="warning"
      tableHead={["ID", "Name", "Salary", "Country"]}
      tableData={[
        ["1", "Dakota Rice", "$36,738", "Niger"],
        ["2", "Minerva Hooper", "$23,789", "Curaçao"],
        ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
        ["4", "Philip Chaney", "$38,735", "Korea, South"]
      ]}
    />
  ));
