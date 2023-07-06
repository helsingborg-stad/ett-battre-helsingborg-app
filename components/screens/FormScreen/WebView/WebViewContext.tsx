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
  isSubmitted: boolean;
  updateIsSubmitted: (value: boolean) => void;
}

const WebViewContext = createContext<WebViewContextType>({
  viewKey: 0,
  navigatePreviousStep: () => {},
  navigateNextStep: () => {},
  reloadWebView: () => {},
  webViewRef: null,
  currentStep: 0,
  updateCurrentStep: () => {},
  isSubmitted: false,
  updateIsSubmitted: () => {},
});

export const useWebView = () => useContext(WebViewContext);

interface ProviderProps {
  children: React.ReactNode;
}

export const WebViewProvider: React.FC<ProviderProps> = ({ children }) => {
  const [viewKey, setViewKey] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const webViewRef = useRef<RNWebView | null>(null);

  console.log('Current step: ' + currentStep);
  console.log('Is submitted: ' + isSubmitted);

  const reloadWebView = () => {
    setViewKey(viewKey + 1);
    setCurrentStep(0);
    setIsSubmitted(false);
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
    setCurrentStep(value);
  };

  const updateIsSubmitted = (value: boolean) => {
    setIsSubmitted(value);
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
        isSubmitted,
        updateIsSubmitted,
      }}>
      {children}
    </WebViewContext.Provider>
  );
};
