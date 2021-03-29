import React from 'react';

import {DashboardStack} from './navigation/dashboardStack';

function DashboardMiniApp({isIsolated = true}) {
  return <DashboardStack isIsolated={isIsolated} />;
}

export default DashboardMiniApp;
