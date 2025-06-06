import assert from 'assert';
import fs from 'fs';
import sinon from 'sinon';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';

import { fileURLToPath } from 'url';
import path from 'path';
import setButton from '../button.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

describe('Button working', function() {

  let window, document, clock;

  beforeEach(function() {
  const html = fs.readFileSync(path.resolve(process.cwd(), './index.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });

  global.window = dom.window;
  global.document = dom.window.document;

  // Protegemos la creación de elementos dentro de un "DOMContentLoaded"
  return new Promise((resolve) => {
    dom.window.addEventListener('DOMContentLoaded', () => {
      // Fake audio element
      const audio = document.createElement("audio");
      audio.id = "Audio_landpage";
      audio.play = sinon.stub().resolves();
      document.body.appendChild(audio);

      // Fake button
      const button = document.createElement("button");
      button.id = "startBtn";
      document.body.appendChild(button);

      // Inicializamos clock
      clock = sinon.useFakeTimers();

      resolve();
    });
  });
});

afterEach(function() {
  // Solo restauramos si clock existe
  if (clock) {
    clock.restore();
  }

  // Limpieza por seguridad
  delete global.document;
  delete global.window;
});

});
