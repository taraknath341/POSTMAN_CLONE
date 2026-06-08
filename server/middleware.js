import { requestValidatorClass } from "./validator.js";

const errorHendleMiddleWare = (err, req, res, next) => {
   if (err?.msg) {
      res.status(err.status)
         .json({
            success: false,
            message: err.msg
         });
   } else {
      console.log(err);
      res.sendStatus(500);
   }
}

const requestValidatorMiddleware = (req, res, next) => {
   req.body = new requestValidatorClass(req.body);
   next();
}

export { errorHendleMiddleWare, requestValidatorMiddleware }