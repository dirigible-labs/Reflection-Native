'use static';

// const STORAGE_KEY = '@Reflection:primary_storage';

var { FBSDKAccessToken } = require('react-native-fbsdkcore');
console.log(FBSDKAccessToken.getCurrentAccessToken((t) => console.log(t)));