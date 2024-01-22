import * as Linking from 'expo-linking';
import React from 'react';
import { WebView as RNWebView } from 'react-native-webview';

import { useWebView } from './WebViewContext';

interface WebViewProps {
  url: string;
}

const WebView: React.FC<WebViewProps> = ({ url }) => {
  const { viewKey, webViewRef, updateCurrentStep, updateIsSubmitted } = useWebView();

  const injectedJavaScript = `
    var formsApi = window.limeForms.getApi();
    formsApi.onStepChange((from,to) => {
      const navObject = { from, to };
      const message = JSON.stringify(navObject);
      window.ReactNativeWebView.postMessage(message);
    });

    formsApi.onSubmitted(() => {
      const navObject = { submitted: true };
      const message = JSON.stringify(navObject);
      window.ReactNativeWebView.postMessage(message);
    });

    true;
  `;

  const handleMessage = (event: { nativeEvent: { data: string } }) => {
    const message = event.nativeEvent.data;
    const receivedObject = JSON.parse(message);

    if (typeof receivedObject === 'object') {
      if ('to' in receivedObject) {
        updateCurrentStep(receivedObject.to.index);
      }

      if ('submitted' in receivedObject && receivedObject.submitted === true) {
        updateIsSubmitted(true);
      }
    }
  };
  // Open clickable links in browser
  const handleShouldStartLoadWithRequest = (event: { url: string }) => {
    const { url: linkUrl } = event;

    if (url.startsWith('http') && linkUrl !== url) {
      Linking.openURL(linkUrl);
      return false;
    }

    return true;
  };

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
      setSupportMultipleWindows={false}
      onShouldStartLoadWithRequest={(event) => handleShouldStartLoadWithRequest(event)}
    />
  );
};

export default WebView;
