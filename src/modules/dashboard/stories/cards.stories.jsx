import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import ProfileCard from "../Cards/ProfileCard";
import StatsCard from "../Cards/StatsCard";
import {
    ContentCopy,
    Warning
} from "@material-ui/icons";

storiesOf("Dashboard/Cards", module)
    .add("StatsCard", () => <StatsCard icon={ContentCopy}
        iconColor="orange"
        title="Used Space"
        description="49/50"
        small="GB"
        statIcon={Warning}
        statIconColor="danger"
        statLink={{ text: "Get More Space...", href: "#pablo" }} />)
    .add("ProfileCard", () => <ProfileCard />);
