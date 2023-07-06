import React from 'react';
import { WebView as RNWebView } from 'react-native-webview';

import { useWebView } from './WebViewContext';

interface WebViewProps {
  url: string;
}

const WebView: React.FC<WebViewProps> = ({ url }) => {
  const { viewKey, webViewRef, updateCurrentStep } = useWebView();

  const handleMessage = (event) => {
    const message = event.nativeEvent.data;
    const receivedObject = JSON.parse(message);

    if (typeof receivedObject === 'object' && 'to' in receivedObject) {
      updateCurrentStep(receivedObject.to.index);
    }
  };

  const injectedJavaScript = `
    var formsApi = window.limeForms.getApi();
    formsApi.onStepChange((from,to) => {
      const navObject = { from, to };
      const message = JSON.stringify(navObject);
      window.ReactNativeWebView.postMessage(message);
    });

    true;
  `;

  return (
    <RNWebView
      key={viewKey}
      ref={webViewRef}
      originWhitelist={['*']}
      source={{
        uri: url,
      }}
      javaScriptEnabled
      domStorageEnabled
      geolocationEnabled
      allowFileAccess
      cacheEnabled={false}
      allowsFullscreenVideo
      style={{
        flex: 1,
        backgroundColor: 'transparent',
      }}
      onMessage={(event) => handleMessage(event)}
      injectedJavaScript={injectedJavaScript}
    />
  );
};

export default WebView;
