export interface Referral {
  givenname: string;
  surname: string;
  email?: string;
  phone?: string;
  homename?: string;
  street?: string;
  suburb?: string;
  state?: string;
  postcode?: string;
  country?: string;
}

export const GET_REFERALL_API = '/api/referrals';

export const CREATE_REFERALL_API = '/api/createReferral';

export const MAX_ROWS = 12;

export const DB_NAME = 'referrals';