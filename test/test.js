import expect from 'expect';
import hello from '../src/index';

describe('index', function() {
  it('ok', function() {
    expect(hello, 'hello');
  });
});
