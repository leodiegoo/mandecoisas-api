import { app } from './app';
import './config/firebase';

const port = process.env.PORT || 3333;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Running at http://localhost:${port}`);
});
