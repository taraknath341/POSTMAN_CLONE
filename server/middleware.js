import { requestValidatorClass } from "./validator.js";

const errorHendleMiddleWare = (err, req, res, next) => {
   if (err?.msg) {
      res.status(err.status).json({
         success: false,
         message: err.msg
      });
      return
   }
   res.status(400).json({
      success: false,
      message: err.message
   });
}

const requestValidatorMiddleware = (req, res, next) => {
   req.body = new requestValidatorClass(req.body);
   next();
}

export { errorHendleMiddleWare, requestValidatorMiddleware }