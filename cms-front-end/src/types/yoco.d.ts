interface YocoSDKConfig {
  publicKey: string;
}

type YocoLayout = "basic" | "advanced";

interface InlineConfig {
  layout: YocoLayout;
  amountInCents: number;
  currency: string;
}

interface YocoInstance {
  inline(config: InlineConfig): void;
}

interface YocoInstance {
  inline(config: InlineConfig): YocoInlineInstance;
}

interface TokenResponse {
  id: string;
  error?: {
    message: string;
  };
}

export interface YocoInlineInstance {
  mount(selector: string): void;
  unmount(): void;
  createToken(): Promise<TokenResponse>;
}

declare global {
  interface Window {
    YocoSDK?: new (config: YocoSDKConfig) => YocoInstance;
  }
}

export {};
