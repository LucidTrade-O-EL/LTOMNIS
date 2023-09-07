declare module 'i18n-js' {
    export function t(scope: string, options?: any): string;
    export let locale: string;
    export let defaultLocale: string;
    export let fallbacks: boolean;
    export let translations: Record<string, any>;
    // ...add any other properties or methods you plan to use
  }
  