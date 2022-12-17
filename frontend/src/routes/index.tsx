import { Home } from "../pages/home";

type propTypes = { 
	path: string,	
	component: JSX.Element[] | JSX.Element
};
export const publicRoutes : propTypes[] = [
	{ path: '',	component: <Home/>},
	{ path: '',	component: <Home/>},
	{ path: '',	component: <Home/>},
	{ path: '',	component: <Home/>},
	{ path: '',	component: <Home/>},
]; 
export const userRoutes : propTypes[] = [
	{ path: '',	component: <Home/>},
	{ path: '',	component: <Home/>},
	{ path: '',	component: <Home/>},
	{ path: '',	component: <Home/>},
	{ path: '',	component: <Home/>},
]; 
export const adminRoutes : propTypes[] = [
	{ path: '',	component: <Home/>},
	{ path: '',	component: <Home/>},
	{ path: '',	component: <Home/>},
	{ path: '',	component: <Home/>},
	{ path: '',	component: <Home/>},
]; 
