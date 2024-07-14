import {Request, Response} from 'express';
import StatusCodes from 'http-status-codes';
import {failure, success} from "@shared/response";
import ErrorMessage from "@shared/errorMessage";
const {OK, INTERNAL_SERVER_ERROR, BAD_REQUEST} = StatusCodes;
import SquareService from "@services/SquareService";

class SquareController {
  async parse(req: Request, res: Response) {
    try {
      console.log(req.body);
      return res.status(OK).send(success(ErrorMessage.HTTP_OK, {
        data: await SquareService.parse(req.body.email)
      }))
    } catch (err) {
      return res
        .status(INTERNAL_SERVER_ERROR)
        .send(failure({
          message: ErrorMessage.HTTP_INTERNAL_SERVER_ERROR,
          errors: err
        }));
    }
  }
}

export default new SquareController();