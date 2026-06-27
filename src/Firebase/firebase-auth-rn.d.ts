import type {Persistence} from '@firebase/auth';

interface ReactNativeAsyncStorage {
  setItem(key: string, value: string): Promise<void>;
  getItem(key: string): Promise<string | null>;
  removeItem(key: string): Promise<void>;
}

declare module '@firebase/auth' {
  export function getReactNativePersistence(
    storage: ReactNativeAsyncStorage,
  ): Persistence;
}
