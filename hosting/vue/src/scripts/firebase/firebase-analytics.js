import { getAnalytics, logEvent } from "firebase/analytics";

const analytics = getAnalytics();

function logAnalyticsEvent(eventString) {
  logEvent(analytics, eventString);
}

export { logAnalyticsEvent };
