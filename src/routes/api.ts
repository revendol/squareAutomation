import {Router} from 'express';
import squareRouter, {p as squarePath} from './SquareRouter';

// Init
const apiRouter = Router();

/*================================================
 Add api routes
================================================*/
apiRouter.use(squarePath.basePath, squareRouter);

// **** Export default **** //

export default apiRouter;
