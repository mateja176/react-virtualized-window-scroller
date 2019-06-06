import * as React from 'react';
import { WindowScroller, WindowScrollerChildProps } from 'react-virtualized';
import { render } from 'react-dom';

interface ChildProps extends WindowScrollerChildProps {
  registerChild: React.RefObject<HTMLDivElement>;
}

const App: React.FC = () => (
  <WindowScroller>
    {({ registerChild }: ChildProps) => {
      console.log('REGISTER_CHILD', registerChild);
      return <div ref={registerChild}>Hello</div>;
    }}
  </WindowScroller>
);

render(<App />, document.getElementById('app'));
