import { getPerformance } from "firebase/performance";
// import { getLCP, getFID, getCLS } from 'web-vitals';

const performance = getPerformance();
// Also see https://gist.github.com/herablog/f04f473b9d9a8f63848f63ce0aec3eff

export { performance };
