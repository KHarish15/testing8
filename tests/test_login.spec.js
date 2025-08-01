import { test, expect } from '@playwright/test';

async function loginUser(page, email, password) {
  await page.locator('input[type="email"]').fill(email);
  await page.locator('input[type="password"]').fill(password);
  await page.locator('button').click();
}


test('Login with valid credentials', async ({ page }) => {
  await page.goto("file:///path/to/index.html"); // Replace with your actual file path
  await loginUser(page, "john.doe@example.com", "P@ssw0rd123");
  // Add assertion to check for successful login, e.g., redirection to another page.
  // Or for UI element changes or success messages.
  const successMessage = await page.locator('div#success-message').textContent();
  expect(successMessage).toBeDefined()
});

test('Login with invalid credentials', async ({ page }) => {
  await page.goto("file:///path/to/index.html"); // Replace with your actual file path
  await loginUser(page, "invalid_email_format", "short");
  const errorMessage = await page.locator('div#error-message').textContent();
  expect(errorMessage).toBeDefined(); // Check for an error message
});

test('Login with empty email', async ({ page }) => {
  await page.goto("file:///path/to/index.html"); // Replace with your actual file path
  await loginUser(page, "", "noemail@123");
  const errorMessage = await page.locator('div#error-message').textContent();
  expect(errorMessage).toBeDefined();//Check for an error message
});

test('Login with empty password', async ({ page }) => {
  await page.goto("file:///path/to/index.html"); // Replace with your actual file path
  await loginUser(page, "harry.potter@hogwarts.edu", "");
  const errorMessage = await page.locator('div#error-message').textContent();
  expect(errorMessage).toBeDefined(); // Check for an error message
});
