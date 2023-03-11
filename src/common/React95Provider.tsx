import React from 'react';

type Props = {
  children: React.ReactNode;
};

const UtilsElementContext = React.createContext<HTMLDivElement | null>(null);

export function useUtilsElement() {
  const utils = React.useContext(UtilsElementContext);

  return utils;
}

export function React95Provider({ children }: Props) {
  const [utils, setUtils] = React.useState<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    const filtersWrapper = document.createElement('react95-utils');
    const div = document.createElement('div');
    filtersWrapper.appendChild(div);
    document.documentElement.appendChild(filtersWrapper);
    setUtils(div);

    return () => {
      filtersWrapper.remove();
    };
  }, []);

  return (
    <UtilsElementContext.Provider value={utils}>
      {children}
    </UtilsElementContext.Provider>
  );
}
