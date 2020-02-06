import dva from 'dva';
import createLoading from 'dva-loading';
import { createBrowserHistory } from 'history';
import appModel from '../models/app';
import appRouter from '../routers/app';

const create = () => {
  const app = dva({
    history: createBrowserHistory()
  });

  app.use(createLoading());

  app.model(appModel);
  return app;
};

export default () => {
  const app = create();
  app.router(appRouter);
  const dva = app.start();
  return dva;
};
