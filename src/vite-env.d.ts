/// <reference types="vite/client" />

// CSS module declarations for all CSS files
declare module '*.css' {
  const content: string;
  export default content;
}

// Tailwind directive type declarations to resolve CSS warnings
declare const tailwindBase: () => void;
declare const tailwindComponents: () => void;
declare const tailwindUtilities: () => void;
declare const tailwindApply: (cssRule: string) => void;

// Alternative names for compatibility
declare function base(): void;
declare function components(): void;
declare function utilities(): void;
declare function apply(cssRule: string): void;

// Global interface for window properties
declare global {
  interface Window {
    __introPlayed?: boolean;
  }
}

export {};
