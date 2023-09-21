import asyncComponent from '../components/AsyncComponent'
import Dashboard from "@material-ui/icons/Dashboard";
import Settings from "@material-ui/icons/Settings";
import Assignment from "@material-ui/icons/Assignment";

const DashboardModule = asyncComponent(() =>
    import('./dashboard/Dashboard').then(module => module.default)
)

const ConfigurationModule = asyncComponent(() =>
    import('./dashboard/Configuration').then(module => module.default)
)

const RT = asyncComponent(() =>
    import('./rt/RT').then(module => module.default)
)

const appRoutes = [
    { path: "/configuration", sidebarName: "Configuration", navbarName: "Configuration", icon: Settings, component: ConfigurationModule },
    // { path: "/dashboard", sidebarName: "Dashboard", navbarName: "Dashboard", icon: Dashboard, component: DashboardModule },
    // { path: "/rt", sidebarName: "Request Tracker", navbarName: "Request Tracker", icon: Assignment, component: RT },
    // { path: "/table", sidebarName: "Table List", navbarName: "Table List", icon: ContentPaste, component: TableList },
    // { path: "/typography", sidebarName: "Typography", navbarName: "Typography", icon: LibraryBooks, component: Typography },
    // { path: "/icons", sidebarName: "Icons", navbarName: "Icons", icon: BubbleChart, component: Icons },
    // { path: "/maps", sidebarName: "Maps", navbarName: "Map", icon: LocationOn, component: Maps },
    // { path: "/notifications", sidebarName: "Notifications", navbarName: "Notifications", icon: Notifications, component: NotificationsPage },
    { redirect: true, path: "/", to: "/configuration", navbarName: "Redirect" }
];

export default appRoutes;