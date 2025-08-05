# DEV TEMPLATE 🧰

A reusable development environment template designed to enforce consistent code quality, formatting, and workflow automation across projects.

---

## 📦 Included Features

### ✅ Core Configuration

- `.editorconfig` — consistent indentation, final newlines, and whitespace trimming across editors
- `.prettierrc` — Prettier formatting rules for JS/TS/HTML/CSS
- `.gitignore` — ignores node dependencies, temp files, and OS clutter
- `commitlint.config.js` — enforces conventional commit messages
- `lint-staged.config.js` — formats and lints staged files pre-commit

### 🛠 Tooling & Automation

- `.husky` — Git hooks for pre-commit enforcement
- `.vscode` — recommended editor extensions and workspace settings
- `.config` — (optional) config placeholder for CLI or scripts

### 📚 Package Management

- `package.json` — dev dependencies for linting, formatting, and hooks
- `package-lock.json` — lockfile for reproducible installs

---

## 🚀 Usage

### Add to New Project via Git Subtree

```bash
git remote add devtemplate https://github.com/k4kabirmalik/devtemplate.git
git subtree add --prefix=devtemplate devtemplate master --squash
```

| 💡 Or copy files manually into your root folder for root-based config consumption

## Install Dependencies

```bash
npm install
```

## Setup Git Hooks (if using husky)

```bash
npx husky install
```

## 💡 Tips

- Ensure .editorconfig and .prettierrc match your project’s tabWidth and quote style.

- Customize lint-staged.config.js to reflect your file types (*.ts,*.html, etc.).

- Tailor your scope-enum in commitlint.config.js to fit your domain conventions.

## 🧠 Author

**Kabir Malik** — Precision-focused developer building scalable and modular systems. Connect on [GitHub](https://github.com/k4kabirmalik)

## 📜 License

This project is licensed under the MIT License — see the [LICENSE](./LICENSE) file for details.
