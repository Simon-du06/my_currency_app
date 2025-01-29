/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}${'/(tabs)'}/graphic` | `/graphic`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}/properties/[id]` | `/properties/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(root)'}${'/(tabs)'}/graphic` | `/graphic`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(root)'}${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(root)'}/properties/[id]` | `/properties/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(root)'}${'/(tabs)'}/graphic${`?${string}` | `#${string}` | ''}` | `/graphic${`?${string}` | `#${string}` | ''}` | `${'/(root)'}${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}${'/(tabs)'}/graphic` | `/graphic`; params?: Router.UnknownInputParams; } | { pathname: `${'/(root)'}${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | `${'/(root)'}/properties/${Router.SingleRoutePart<T>}` | `/properties/${Router.SingleRoutePart<T>}` | { pathname: `${'/(root)'}/properties/[id]` | `/properties/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
