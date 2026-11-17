import { test, expect } from '@playwright/test';

test('пустая форма показывает ошибки email и пароля', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /вход и регистрация/i }).click();

    await page.locator('[data-marker="login-submit-button"]').click();

    await expect(page.getByText('Email обязателен', { exact: true })).toBeVisible();
    await expect(page.getByText('Пароль обязателен', { exact: true })).toBeVisible();
});
