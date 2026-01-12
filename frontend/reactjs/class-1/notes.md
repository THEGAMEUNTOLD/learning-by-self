# Chapter: Installing Tailwind CSS with React (Using Vite)

## Step 1: Create a New React Project Using Vite

First, we need to create a React project.
Open your terminal and type the following command:

```
npm create vite
```

When you run this command, Vite will ask you a few questions:

* Project name: `zero`
* Framework: `React`
* Variant: `JavaScript`

- Explanation:

* `npm create vite` is used to create a modern frontend project very quickly.
* Vite automatically sets up all the required files for a React application.

After completing this step, a new folder named **zero** is created on your computer.

## Step 2: Move Inside the Project Folder

Now, we must enter the project folder.
Run this command in the terminal:

```
cd zero
```
- Explanation:

* `cd` stands for change directory.
* This command moves the terminal inside the zero project folder.
* All further commands must be run inside this folder, otherwise they will not work.

## Step 3: Install Tailwind CSS

Now we install Tailwind CSS and its Vite plugin.

Run the following command:

```
npm install tailwindcss @tailwindcss/vite
```

- Explanation:

* `tailwindcss` is the main CSS framework.
* `@tailwindcss/vite` allows Tailwind CSS to work smoothly with Vite.
* This command downloads the required packages and saves them in the project.

After this step, Tailwind CSS is successfully installed in your project.

---

## Step 4: Update the `vite.config.js` File

Next, we need to tell Vite that our project will use Tailwind CSS.

Open the file `vite.config.js` and update it as shown below:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

- Explanation:

* `defineConfig` helps Vite understand the configuration clearly.
* `@vitejs/plugin-react` enables React support.
* `@tailwindcss/vite` connects Tailwind CSS to Vite.
* The `plugins` array tells Vite which tools to use while running the project.

## Step 5: Import Tailwind CSS in `index.css`

Now, we must include Tailwind CSS in our main CSS file.

Open `src/index.css` and add this line at the top:

```css
@import "tailwindcss";
```
-Explanation:

* This line loads all Tailwind utility classes into the project.
* Without this import, Tailwind CSS will not work.
* After this step, Tailwind is ready to be used in any React component.
