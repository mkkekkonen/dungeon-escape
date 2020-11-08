import { initContainer } from './ioc';
import { IEntryPoint } from './entryPoint';
import { types } from './constants';

const run = () => {
  const container = initContainer();

  const entryPoint = container.get<IEntryPoint>(types.ENTRY_POINT);

  entryPoint.run();
};

run();
