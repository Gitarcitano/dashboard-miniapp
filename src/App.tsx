import React from 'react';

import {DashboardStack} from './navigation/dashboardStack';
import {IS_ISOLATED} from '@env';

const prop = IS_ISOLATED === 'true';

function DashboardMiniApp({isIsolated = prop}) {
  console.log(prop);
  return <DashboardStack isIsolated={isIsolated} />;
}

export default DashboardMiniApp;
