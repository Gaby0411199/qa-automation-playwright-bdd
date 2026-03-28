# QA Automation – Playwright + Cucumber/Gherkin (BDD)

![Playwright](https://img.shields.io/badge/Playwright-1.58-45ba4b?logo=playwright)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-23D96C?logo=cucumber)
![Node](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-blue)

BDD test automation framework using Playwright + Cucumber/Gherkin for web platform testing.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Playwright | Browser automation |
| Cucumber/Gherkin | BDD scenarios |
| Node.js | Runtime |
| Page Object Model | Test architecture |

---

## 📁 Project Structure
```
qa-automation-playwright-bdd/
├── features/
│   └── login.feature
├── pages/
│   └── LoginPage.js
├── steps/
│   └── login.steps.js
├── cucumber.json
└── package.json
```

---

## 📋 Test Scenarios

- ✅ Login exitoso con credenciales válidas
- ✅ Login fallido con contraseña incorrecta
- ✅ Login fallido con usuario bloqueado

---

## 🚀 How to Run
```bash
npm install
npx playwright install chromium
npx cucumber-js
```

---

## 👩‍💻 Author

**Gabriela Vargas** — QA Automation Engineer Junior

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?logo=linkedin)](https://linkedin.com/in/gabrielavargas-morales-b5667b369)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717?logo=github)](https://github.com/Gaby0411199)