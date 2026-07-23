import { createRemoteJWKSet, jwtVerify } from "jose";

/** Profile claims extracted from a verified Google ID token. */
export interface GoogleClaims {
  sub: string;
  email: string;
  name: string;
  picture: string | null;
}

export type GoogleCredentialVerifier = (
  credential: string,
  clientId: string,
) => Promise<GoogleClaims>;

const GOOGLE_JWKS = createRemoteJWKSet(new URL("https://www.googleapis.com/oauth2/v3/certs"));

/**
 * Verify a Google Identity Services ID token (signature via Google's JWKS,
 * issuer, audience) and extract the profile. Rejects unverified emails —
 * attempt history is keyed by email, so an unverified one could be claimed
 * by someone else's future sign-in.
 */
export const verifyGoogleCredential: GoogleCredentialVerifier = async (credential, clientId) => {
  const { payload } = await jwtVerify(credential, GOOGLE_JWKS, {
    issuer: ["https://accounts.google.com", "accounts.google.com"],
    audience: clientId,
  });
  const { sub, email, email_verified: emailVerified, name, picture } = payload;
  if (typeof sub !== "string" || typeof email !== "string" || emailVerified !== true) {
    throw new Error("Google token is missing a verified email");
  }
  return {
    sub,
    email: email.toLowerCase(),
    name: typeof name === "string" && name.trim() !== "" ? name : email,
    picture: typeof picture === "string" ? picture : null,
  };
};
