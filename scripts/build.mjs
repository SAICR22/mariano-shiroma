import { cpSync, copyFileSync, mkdirSync, rmSync } from 'node:fs';
rmSync('dist',{recursive:true,force:true});mkdirSync('dist');
copyFileSync('index.html','dist/index.html');
cpSync('src','dist/src',{recursive:true});
cpSync('public','dist',{recursive:true});
copyFileSync('CNAME','dist/CNAME');
