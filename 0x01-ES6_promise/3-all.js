import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()]).then((profile) => {
    console.log(`${profile[1].body} ${profile[0].firstName} ${profile[0].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
