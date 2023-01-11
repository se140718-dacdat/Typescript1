import { FC } from "react";
import { Route, RouteProps } from "react-router-dom";
import { Roles } from "./model";

export const AdminRoute: FC<RouteProps & { roleName: string }> = props => {
    return (
        props.roleName == Roles.ADMIN ?
            <Route></Route>
            :
            null
    );
}

export const CandidateRoute: FC<RouteProps & { roleName: string }> = props => {
    return (
        props.roleName == Roles.CANDIDATE ?
            <Route></Route>
            :
            null
    );
}