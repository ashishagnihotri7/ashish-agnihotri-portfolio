// File: types/certificates.ts

export type CertificateCategory =
  | "Technical"
  | "Professional Development"
  | "Hackathon & Events";

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  description: string;
  category: CertificateCategory;
  verifyLink?: string;
  verifyText?: string; 
}
