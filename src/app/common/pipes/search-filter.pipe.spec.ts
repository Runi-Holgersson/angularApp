import { SearchFilterPipe } from './search-filter.pipe';
import {CourseContent} from "../interfaces/interfaces";

describe('SearchFilterPipe', () => {
  let pipe: SearchFilterPipe;
  const mockArray: CourseContent[] = [{
    title: 'course 1', duration: 0, date: 2,
    description: 'string', id: 0
  }, {
    title: 'course 2', duration: 0, date: 3,
    description: 'string', id: 0
  }, {
    title: 'course 3', duration: 0, date: 1,
    description: 'string', id: 0
  }];
  beforeEach(() => {
    pipe = new SearchFilterPipe();
  })
  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('returns array which item`s titles matches certain string', () => {
    const transform = pipe.transform(mockArray, '1');
    expect(transform).toEqual([{title: 'course 1', duration: 0, date: 2,
      description: 'string', id: 0}])
  })
});
