import git from 'isomorphic-git';
import http from 'isomorphic-git/http/web';
import { promises as fs } from 'fs';

export async function initializeRepo() {
  try {
    await git.init({ fs, dir: '/' });
    await git.addRemote({
      fs,
      dir: '/',
      remote: 'origin',
      url: 'https://github.com/Frenzyritz13/portfolio.git'
    });
    
    await git.add({ fs, dir: '/', filepath: '.' });
    
    await git.commit({
      fs,
      dir: '/',
      message: 'Initial commit',
      author: {
        name: 'Ritvi',
        email: 'frenzyritz13@gmail.com'
      }
    });

    await git.push({
      fs,
      http,
      dir: '/',
      remote: 'origin',
      ref: 'main',
      onAuth: () => ({
        username: process.env.GITHUB_TOKEN,
        password: process.env.GITHUB_TOKEN
      })
    });

    console.log('Successfully pushed to GitHub');
  } catch (error) {
    console.error('Error:', error);
  }
}