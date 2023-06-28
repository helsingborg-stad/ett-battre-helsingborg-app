module.exports = {
  expo: {
    name: 'EttBattreHelsingborg',
    slug: 'EttBattreHelsingborg',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      permissions: [
        'INTERNET',
        'ACCESS_COARSE_LOCATION',
        'ACCESS_FINE_LOCATION',
        'FOREGROUND_SERVICE',
        'READ_EXTERNAL_STORAGE',
      ],
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.jonatanhanson.EttBattreHelsingborg',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: 'b9a89ae8-e86f-40e2-97eb-84ee101ce9bb',
      },
      webviewUrl: process.env.WEBVIEW_URL,
    },
  },
};
