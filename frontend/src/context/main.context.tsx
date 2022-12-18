import { useState, useMemo, createContext } from 'react';


export const MainContext = createContext({});

type propTypes = { 
	children: JSX.Element[] | JSX.Element
};
export const MainProvider = ({ children, ...rest } : propTypes) => {
	
	const [loged, setLoged] = useState<boolean>(false);
  const [admin, setAdmin] = useState<boolean>(false);
	const [theme, setTheme] = useState<boolean>(false);

	const providerValues = useMemo(() => ({
			loged, 
			setLoged,
			admin,
			setAdmin,
			theme,
			setTheme,
    }), [theme, loged, admin]
  );

	return (
		<MainContext.Provider value={providerValues}>
			{children}
		</MainContext.Provider>		
	)
}