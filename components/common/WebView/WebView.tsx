import React from 'react';
import { WebView as RNWebView } from 'react-native-webview';

import { useWebView } from './WebViewContext';

interface WebViewProps {
  url: string;
}

const WebView: React.FC<WebViewProps> = ({ url }) => {
  const { viewKey } = useWebView();

  return (
    <RNWebView
      key={viewKey}
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
  );
};

export default WebView;
