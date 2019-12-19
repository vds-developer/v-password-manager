// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase  : {
    apiKey: 'AIzaSyDpNIbS4olFwkvfl3h9bUtCLQkjrjLOA10',
    authDomain: 'void-password-manager.firebaseapp.com',
    databaseURL: 'https://void-password-manager.firebaseio.com',
    projectId: 'void-password-manager',
    storageBucket: 'void-password-manager.appspot.com',
    messagingSenderId: '174844101998',
    appId: "1:174844101998:web:cd57925cf18ea4e3"
  }
};
