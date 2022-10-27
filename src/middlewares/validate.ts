import { Request, Response, NextFunction } from 'express'
const Validate = (req: Request, res: Response, next: NextFunction) => {
  next()
}


export { Validate }