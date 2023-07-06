import React, { createContext, useContext, useState, useRef, RefObject } from 'react';
import { WebView as RNWebView } from 'react-native-webview';

export interface WebViewContextType {
  viewKey: number;
  navigatePreviousStep: (ref: RefObject<RNWebView>) => void;
  navigateNextStep: (ref: RefObject<RNWebView>) => void;
  reloadWebView: () => void;
  webViewRef: RefObject<RNWebView>;
  currentStep: number;
  updateCurrentStep: (value: number) => void;
}

const WebViewContext = createContext<WebViewContextType>({
  viewKey: 0,
  navigatePreviousStep: () => {},
  navigateNextStep: () => {},
  reloadWebView: () => {},
  webViewRef: null,
  currentStep: 0,
  updateCurrentStep: () => {},
});

export const useWebView = () => useContext(WebViewContext);

interface ProviderProps {
  children: React.ReactNode;
}

export const WebViewProvider: React.FC<ProviderProps> = ({ children }) => {
  const [viewKey, setViewKey] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const webViewRef = useRef<RNWebView | null>(null);

  const reloadWebView = () => {
    setViewKey(viewKey + 1);
    setCurrentStep(0);
  };

  const navigatePreviousStep = (ref: RefObject<RNWebView>) => {
    if (ref.current) {
      ref.current.injectJavaScript(`
            var formsApi = window.limeForms.getApi();
            formsApi.onReady(function() {
              formsApi.goToPrevStep()
            });
            true;
        `);
    }
  };

  const navigateNextStep = (ref: RefObject<RNWebView>) => {
    if (ref.current) {
      ref.current.injectJavaScript(`
            var formsApi = window.limeForms.getApi();
            formsApi.onReady(function() {
              formsApi.goToNextStep({skipValidation: false})
            });
            true;
        `);
    }
  };

  const updateCurrentStep = (value: number) => {
    console.log('update current step');
    setCurrentStep(value);
  };

  return (
    <WebViewContext.Provider
      value={{
        viewKey,
        navigatePreviousStep,
        navigateNextStep,
        reloadWebView,
        webViewRef,
        currentStep,
        updateCurrentStep,
      }}>
      {children}
    </WebViewContext.Provider>
  );
};
