// scripts/build.js  (CommonJS)
const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "..", "dist");

// 1) гарантуємо існування dist
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
  console.log("📂 Створено папку dist");
} else {
  console.log("ℹ️ Папка dist вже існує");
}

// 2) запускаємо ЗІБРАНИЙ entrypoint (після tsc)
// якщо у тебе головний файл — src/main.ts, то тут буде dist/main.js
const entry = path.join(distPath, "main.js");

if (!fs.existsSync(entry)) {
  console.error("❌ Не знайдено зібраний файл:", entry);
  process.exit(1);
}

require(entry); // виконуємо скомпільований код