import { getTree } from '../parser';
import { welcomeComponent, customComponent } from './constants';

describe('Get Tree', () => {
  it('should return a proper tree of jsx elements for the welcome component', () => {
    const result = getTree(welcomeComponent);
    expect(result).toEqual([
      {
        children: [
          {
            children: [
              { children: [], name: 'p' },
              { children: [{ children: [], name: 'span' }], name: 'div' },
            ],
            name: 'div',
          },
          { children: [], name: 'h1' },
        ],
        name: 'div',
      },
    ]);
  });

  it('should return a proper tree of jsx elements for the welcome component', () => {
    const result = getTree(customComponent);
    expect(result).toEqual([
      {
        children: [
          {
            children: [
              { children: [], name: 'p' },
              {
                children: [{ children: [], name: 'span' }],
                name: 'TestComponent',
              },
            ],
            name: 'div',
          },
          { children: [], name: 'h1' },
        ],
        name: 'div',
      },
    ]);
  });
});
