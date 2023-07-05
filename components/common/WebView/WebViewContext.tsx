import React, { createContext, useContext, useState } from 'react';

export interface WebViewContextType {
  viewKey: number;
  reloadWebView: () => void;
}

const WebViewContext = createContext<WebViewContextType>({
  viewKey: 0,
  reloadWebView: () => {},
});

export const useWebView = () => useContext(WebViewContext);

interface ProviderProps {
  children: React.ReactNode;
}

export const WebViewProvider: React.FC<ProviderProps> = ({ children }) => {
  const [viewKey, setViewKey] = useState(0);

  const reloadWebView = () => setViewKey(viewKey + 1);

  return (
    <WebViewContext.Provider value={{ viewKey, reloadWebView }}>{children}</WebViewContext.Provider>
  );
};
