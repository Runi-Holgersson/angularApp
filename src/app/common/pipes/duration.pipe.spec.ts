import {DurationPipe} from './duration.pipe';


describe('DurationPipe', () => {
  let pipe: DurationPipe;
  beforeEach(() => {
    pipe = new DurationPipe();
  });
  it('creates an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('returns minutes string if date parameter is less then 60', () => {
    const transform = pipe.transform(50);
    expect(transform).toBe("50min");
  })
  it ('returns minutes and hours string if date parameter is greater or equal to 60', () =>{
    const transform = pipe.transform(125);
    expect(transform).toBe("2h5min");
  })
});
