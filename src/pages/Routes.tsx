import React, { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { ROUTES } from '../constants/routes'
import { EmployeesPage } from './EmployeesPage/EmployeesPage'

export const Routes: FC = () => (
  <Switch>
    <Route to={ROUTES.main} component={EmployeesPage} />
    <Redirect from="*" to={ROUTES.main} />
  </Switch>
)
