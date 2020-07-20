import { LogglyTracker } from 'loggly-jslogger';

const logger = new LogglyTracker();

logger.push({ 'logglyKey': '25e5fb20-8625-4309-9858-4cbb24caab22' });

export default logger;