# reactjs terminal command 

1.  npm create vite  ->
│
◇  Project name:
│  project-2
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Use rolldown-vite (Experimental)?:
│  No
│
◇  Install with npm and start now?
│  Yes
│

2. npm install
3. npm run dev

Here is a **clean, beginner-friendly list of IMPORTANT terminal commands for React JS**
(especially for **Vite + React**, which you are using) 🚀

---

## 🔹 1. Create a React App (Vite – Recommended)

```bash
npm create vite@latest
```

Then select:

* Framework → **React**
* Variant → **JavaScript** or **TypeScript**

---

## 🔹 2. Go inside project folder

```bash
cd project-name
```

Example:

```bash
cd project-2
```

---

## 🔹 3. Install dependencies (VERY IMPORTANT)

```bash
npm install
```

Creates `node_modules`

---

## 🔹 4. Start React development server

```bash
npm run dev
```

Runs app at:

```
http://localhost:5173
```

---

## 🔹 5. Stop the server

```bash
Ctrl + C
```

---

## 🔹 6. Install a package (library)

```bash
npm install package-name
```

Examples:

```bash
npm install react-router-dom
npm install axios
npm install tailwindcss
```

---

## 🔹 7. Install as dev dependency

```bash
npm install package-name --save-dev
```

Example:

```bash
npm install eslint --save-dev
```

---

## 🔹 8. Uninstall a package

```bash
npm uninstall package-name
```

Example:

```bash
npm uninstall axios
```

---

## 🔹 9. Build React app (Production)

```bash
npm run build
```

Creates:

```
dist/
```

---

## 🔹 10. Preview production build (Vite)

```bash
npm run preview
```

---

## 🔹 11. Check Node & npm version

```bash
node -v
npm -v
```

---

## 🔹 12. Fix common problems

### ❌ `vite not recognized`

```bash
npm install
```

### ❌ Node modules issue

```bash
rm -rf node_modules package-lock.json
npm install
```

(Windows alternative)

```bash
rmdir /s /q node_modules
del package-lock.json
npm install
```

---

## 🔹 13. Open project in VS Code

```bash
code .
```

---

## 🔹 14. Folder navigation commands

```bash
cd folder-name
cd ..
dir        # Windows
ls         # Mac/Linux
```

---

## 🔹 15. Install Tailwind CSS (Quick Start)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 🧠 MOST IMPORTANT RULE (Remember Forever)

> Always run React commands **inside the folder that contains `package.json`**

---

If you want, I can also give you:

* 🔥 **Daily React practice commands**
* 📁 **Perfect React folder structure**
* ⚛️ **Beginner → Advanced React roadmap**
* 🎯 **Interview-important commands**

Just tell me 😄
