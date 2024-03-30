// import { KEY } from 'store/common/constants';
import React from 'react';
// import PermissionData from './middleware/PermissionData'
const Dashboard = React.lazy(() => import('pages/dashboard/views/Dashboard'));
const Thabet = React.lazy(() => import('pages/thabet/view/Thabet'));
const ThabetRegister = React.lazy(() => import('pages/thabetRegister/view/ThabetRegister'));
const Kubet = React.lazy(() => import('pages/kubet/view/Kubet'));
const KubetRegister = React.lazy(() => import('pages/kubetRegister/view/KubetRegister'));
const Settings = React.lazy(() => import('pages/settings/view/Settings'));

const routes = [
  // { path: '/thabet', exact: true, name: 'Thabet', component: Thabet },
  // { path: '/thabet-register', exact: true, name: 'ThabetRegister', component: ThabetRegister },
  { path: '/kubet', exact: true, name: 'Thabet', component: Kubet },
  { path: '/kubet-register', exact: true, name: 'KubetRegister', component: KubetRegister },
  // { path: '/settings', expect: true, name: 'Setting', component: Settings },
];

export default routes;
