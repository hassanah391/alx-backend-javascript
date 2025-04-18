import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const promises = [uploadPhoto(filename), signUpUser(firstName, lastName)];
  const results = await Promise.allSettled(promises);
  return results.map((o) => ({
    status: o.status,
    value: o.status === 'fulfilled' ? o.value : String(o.reason),
  }));
}
