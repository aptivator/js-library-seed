import {expect}  from 'chai';
import {library} from '../src';

describe('library', () => {
  it('returns true', () => {
    expect(library()).to.equal(true);
  });
});
