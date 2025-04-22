import { initializeRepo } from '../utils/git';

initializeRepo()
  .then(() => console.log('Repository initialized and pushed'))
  .catch(console.error);