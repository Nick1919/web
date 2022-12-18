import { Header } from "./includes/header"
import { Footer } from "./includes/footer"


type propTypes = { 
	children: JSX.Element[] | JSX.Element
};
export const Layout = ({children} : propTypes)  => {
	return (
		<>
			<Header/>
			{children}
			<Footer/>
		</>
	)
}