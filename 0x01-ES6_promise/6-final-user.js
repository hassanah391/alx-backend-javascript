import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const promises = [uploadPhoto(filename), signUpUser(firstName, lastName)];
  return Promise.allSettled(promises);
}
