// import moment from 'moment';  - this will not work here!
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};
