import { useState, useContext, createContext } from 'react';

const mainContext = createContext({});
const useMain = useContext(mainContext);

export const MainProvider = ({ dark, ...rest } : {
	dark: boolean,
}) => {
	const [darkMode, setDarkMode] = useState(dark);
	return (
		<mainContext.Provider value={[darkMode, setDarkMode]}>
		</mainContext.Provider>		
	)
}