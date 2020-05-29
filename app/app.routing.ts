import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { DetailsComponent } from "./details/details.component";

export const routes = [
    { path: "", component: LoginComponent },
    { path: "list", component: ListComponent },
    { path: "details", component:DetailsComponent}
];

export const navigatableComponents = [
    LoginComponent,
    ListComponent,
    DetailsComponent
];