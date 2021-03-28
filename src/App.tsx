import React from 'react';

import {DashboardStack} from './navigation/dashboardStack';

const prop = !!process.env.REACT_IS_ISOLATED;

function DashboardMiniApp({isIsolated = prop}) {
  return <DashboardStack isIsolated={isIsolated} />;
}

export default DashboardMiniApp;
