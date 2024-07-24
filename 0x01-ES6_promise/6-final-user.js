#!/usr/bin/env node

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises)
    .then((values) => {
      const results = [];
      values.forEach((value) => {
        if (value.status === 'fulfilled') {
          results.push(value.value);
        } else {
          results.push(value.reason);
        }
      });
      console.log(results);
    });
}
