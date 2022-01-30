import {
  getRemoteConfig,
  getValue,
  fetchAndActivate,
} from "firebase/remote-config";

const remoteConfig = getRemoteConfig();

remoteConfig.settings.minimumFetchIntervalMillis = 3600000;

remoteConfig.defaultConfig = {
  welcome_message: "Welcome",
};

const welcome = getValue(remoteConfig, "welcome_message");

console.log(welcome);

fetchAndActivate(remoteConfig)
  .then(() => {
    const down = getValue(remoteConfig, "down_time");
    console.log(down);
  })
  .catch((err) => {
    console.error(err);
  });
