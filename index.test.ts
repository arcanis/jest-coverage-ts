const {Foo} = require('./Foo');

describe(`foo`, () => {
  it(`lol`, () => {
    new Foo(42);
  });
});

