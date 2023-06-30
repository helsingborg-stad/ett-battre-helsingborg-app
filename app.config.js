module.exports = {
  expo: {
    name: 'Ett bättre Helsingborg',
    slug: 'ett-battre-helsingborg',
    version: '1.0.0',
    owner: 'helsingborg',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#FDDDE5',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.infracontrol.helsingborg',
      buildNumber: '2.0.0',
      infoPlist: {
        NSCameraUsageDescription:
          'Denna app behöver åtkomst till kameran för att kunna ladda upp bilder till ärenden.',
        NSLocationWhenInUseUsageDescription:
          'Denna app behöver åtkomst till din plats för att visa din plats på karta.',
      },
    },
    android: {
      permissions: [
        'INTERNET',
        'ACCESS_COARSE_LOCATION',
        'ACCESS_FINE_LOCATION',
        'READ_EXTERNAL_STORAGE',
      ],
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FDDDE5',
      },
      package: 'com.xxxxxxx.EttBattreHelsingborg',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: {
        projectId: 'db5f87e0-9ae7-49af-a7c2-a9da90f0db27',
      },
      webviewUrl: process.env.WEBVIEW_URL,
    },
  },
};
