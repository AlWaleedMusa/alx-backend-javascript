#!/usr/bin/env node

export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (firstName && lastName) {
      resolve({ firstName, lastName });
    } else {
      reject("did not work")
    }
  });
}
