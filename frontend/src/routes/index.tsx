import { Landing } from "../pages/landing";

type propTypes = { 
	path: string,	
	component: JSX.Element[] | JSX.Element
};
export const publicRoutes : propTypes[] = [
	{ path: '',	component: <Landing/>},
	{ path: '',	component: <Landing/>},
	{ path: '',	component: <Landing/>},
	{ path: '',	component: <Landing/>},
	{ path: '',	component: <Landing/>},
]; 
export const userRoutes : propTypes[] = [
	{ path: '',	component: <Landing/>},
	{ path: '',	component: <Landing/>},
	{ path: '',	component: <Landing/>},
	{ path: '',	component: <Landing/>},
	{ path: '',	component: <Landing/>},
]; 
export const adminRoutes : propTypes[] = [
	{ path: '',	component: <Landing/>},
	{ path: '',	component: <Landing/>},
	{ path: '',	component: <Landing/>},
	{ path: '',	component: <Landing/>},
	{ path: '',	component: <Landing/>},
]; 
