import {OrderByPipe} from './order-by.pipe';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;
  beforeEach(() => {
    pipe = new OrderByPipe();
  })
  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('returns each next course date greater then previous', () => {
    const transform = pipe.transform([{
      title: 'string', duration: 0, date: 2,
      description: 'string', id: 0
    }, {
      title: 'string', duration: 0, date: 3,
      description: 'string', id: 0
    }, {
      title: 'string', duration: 0, date: 1,
      description: 'string', id: 0
    }]);
    expect(transform).toEqual([{
      title: 'string', duration: 0, date: 1,
      description: 'string', id: 0
    }, {
      title: 'string', duration: 0, date: 2,
      description: 'string', id: 0
    }, {
      title: 'string', duration: 0, date: 3,
      description: 'string', id: 0
    }])
  })
});
