///////////////////////////////////////////////////
/*! isStandalonePWA 0.1.0
    Detect if PWA is running in standalone mode
    https://github.com/faisalman/is-standalone-pwa
    Author: Faisal Salman <f@faisalman.com>
    MIT License */
///////////////////////////////////////////////////

export function isStandalonePWA(): boolean {    
    return typeof window !== 'undefined' &&

            // matchMedia()
            (window?.matchMedia('(display-mode: standalone)').matches ||

            // iOS
            // @ts-ignore
            window.navigator?.standalone ||

            // Android
            document.referrer.startsWith('android-app://') ||

            // Windows
            // @ts-ignore
            window?.Windows ||
            /trident.+(msapphost|webview)\//i.test(navigator.userAgent) ||
            document.referrer.startsWith('app-info://platform/microsoft-store'));
};