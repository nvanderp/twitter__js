const _ = require('lodash');

//private
const data = [];
var count = 1;

//public
function add(name, content) {
  data.push({ name: name, content: content, id:count.toString()});
  count++;
}

function list() {
  return _.cloneDeep(data);
}

function find(properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

//private
// prettier-ignore
// const getFakeName = function() {
//   const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
//   const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
//   return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
// };
// // prettier-ignore
// const getFakeTweet = function() {
//   const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
//   return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
// };


  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
//  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";


for (let i = 0; i < 10; i++) {
  module.exports.add(fakeFirsts[i] + " " + fakeLasts[i], "Fullstack Academy is " + awesome_adj[i] + "! The instructors are just so " + awesome_adj[i] + ". #fullstacklove #codedreams");
  //module.exports.add(getFakeName(), getFakeTweet());
}
