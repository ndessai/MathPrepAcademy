// Minimal typings for the Google Identity Services script
// (https://accounts.google.com/gsi/client), loaded on demand by LoginPage.

interface GoogleCredentialResponse {
  credential: string;
}

interface GoogleIdApi {
  initialize(options: {
    client_id: string;
    callback: (response: GoogleCredentialResponse) => void;
  }): void;
  renderButton(
    parent: HTMLElement,
    options: {
      type?: "standard" | "icon";
      theme?: "outline" | "filled_blue" | "filled_black";
      size?: "large" | "medium" | "small";
      text?: "signin_with" | "signup_with" | "continue_with" | "signin";
      shape?: "rectangular" | "pill" | "circle" | "square";
      width?: number;
    },
  ): void;
}

interface Window {
  google?: {
    accounts: {
      id: GoogleIdApi;
    };
  };
}
