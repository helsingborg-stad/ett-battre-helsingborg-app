import React from 'react';
import { View } from 'react-native';
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
      console.log(receivedObject.to.name);
      console.log(receivedObject.to.index);
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
    <View style={{ flex: 1 }}>
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
    </View>
  );
};

export default WebView;
