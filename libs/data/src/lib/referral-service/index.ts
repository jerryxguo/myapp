import { GET_REFERALL_API, CREATE_REFERALL_API } from '@myapp/data';

export async function getReferrals() {
  try{
    const response = await fetch(GET_REFERALL_API);
    return await response.json();
  } catch(error) {
    return [];
  }
}

export async function createReferral(referral) {
  const response = await fetch(CREATE_REFERALL_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(referral)
  });
  return await response.json();
}