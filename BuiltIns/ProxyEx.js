// to create proxy we use  Proxy constructor.

var richard = {status: 'looking for work'};
//create a proxy to provide an object and empty handler object.
var agent = new Proxy(richard, {});

console.log(agent.status); // returns 'looking for work'
