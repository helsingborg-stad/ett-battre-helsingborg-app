import React from 'react';
import { View } from 'react-native';
import { WebView as RNWebView } from 'react-native-webview';

import { useWebView } from './WebViewContext';

interface WebViewProps {
  url: string;
}

const WebView: React.FC<WebViewProps> = ({ url }) => {
  const { viewKey, webViewRef } = useWebView();

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
      />
    </View>
  );
};

export default WebView;
