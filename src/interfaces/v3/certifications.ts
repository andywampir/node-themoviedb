/* eslint-disable camelcase */

// Return types
export interface CerificationsReturnType {
  movie?: CertificationsMovie[];
  tv?: CertificationsTv[];
}

interface CertificationsMovie {
  certifications: Certifications;
}

interface CertificationsTv extends CertificationsMovie {}

interface Certification {
  certification: string;
  meaning: string;
  order: number;
}

interface Certifications {
  US: Certification;
  CA: Certification;
  DE: Certification;
  GB: Certification;
  AU: Certification;
  BR: Certification;
  FR: Certification;
  NZ: Certification;
  IN: Certification;
}
