import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { renderModuleFactory } from '@angular/platform-server';

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

const DIST_FOLDER = join(process.cwd(), 'dist');

const index = readFileSync(join('browser', 'index.html'), 'utf8');


renderModuleFactory(AppServerModuleNgFactory, {
  document: index,
  url: '/',
  extraProviders: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
})
.then(html => writeFileSync(join('browser', 'index.html'), html));