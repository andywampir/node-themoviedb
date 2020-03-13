/* eslint-disable camelcase */

// Return types
export interface CerificationReturnType {
  movie?: CertificationMovie;
  tv?: CertificationTv;
}

interface CertificationMovie {
  certifications: Certifications;
}

interface CertificationTv extends CertificationMovie {}

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
