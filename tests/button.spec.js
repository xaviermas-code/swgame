// tests/button.spec.js
import { test, expect } from '@playwright/test';


test.describe('Button working', () => {

  test.beforeEach(async ({ page }) => {
    // Cargamos la página local
    await page.goto('file://' + process.cwd() + '/index.html');
  });

  test('should hide button and play audio after click', async ({ page }) => {
    // Verificamos que el botón es visible inicialmente
    const button = page.locator('#startBtn');
    await expect(button).toBeVisible();

    // Fake play() del audio (opcional si tu audio es cross-origin bloqueado)
    await page.evaluate(() => {
      const audio = document.getElementById('Audio_landpage');
      if (audio) {
        audio.play = () => Promise.resolve();
      }
    });

    // Hacemos click en el botón
    await button.click();

    // Verificamos que el botón desapareció
    await expect(button).toBeHidden();

    // Verificamos que el texto es visible
    const text = page.locator('#swText');
    await expect(text).toBeVisible();

    // (Opcional) Verificamos que el audio esté reproduciéndose
    const isPlaying = await page.evaluate(() => {
      const audio = document.getElementById('Audio_landpage');
      return !audio.paused;
    });
    expect(isPlaying).toBe(true);
  });

});
