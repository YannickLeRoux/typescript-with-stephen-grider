import { Router, Request, Response, NextFunction } from 'express';

export interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.isLoggedIn) {
    next();
    return;
  } else {
    res.status(403);
    res.send('Not Allowed!');
  }
}

const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.isLoggedIn) {
    res.send(`
    <div>
    <p>You are logged in</p>
    <a href="/logout">logout</a>
    </div>
    `);
  } else {
    res.send(`
    <div>
    <p>You are NOT logged in</p>
    <a href="/login">login</a>
    </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/login');
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = { isLoggedIn: true };
    res.redirect('/');
  } else {
    res.send('You must provide correct email and password');
  }
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Here is some private informations');
});

export { router };
