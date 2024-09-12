// src/setupJest.ts
import 'zone.js';  // Load the main zone.js file
import 'zone.js/testing'; // Load the zone testing utilities
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
