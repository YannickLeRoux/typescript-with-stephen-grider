import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

@controller('/auth')
export class loginController {
  @get('/login')
  getLogin(req: Request, res: Response) {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email"/>
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password"/>
      </div>
      <button>Submit</button>
    </form>
    `);
  }
}
