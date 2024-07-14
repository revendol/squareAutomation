import { Router, Request, Response } from 'express';
import SquareController from "@controller/SquareController";

const router = Router();

export const p = {
  basePath: '/square',
  parse: '/parse'
} as const;

router.post(
  p.parse,
  (req: Request, res: Response) => SquareController.parse(req, res)
);

export default router;