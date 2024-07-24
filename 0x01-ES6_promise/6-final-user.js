#!/usr/bin/env node

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((respond) => (
      respond.map((value) => ({
        status: value.status,
        value: value.status === 'fulfilled' ? value.value : String(value.reason),
      }))
    ));
}
