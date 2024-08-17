# Product House

## Links :

- [Product House Live Link](https://newjobtask.web.app) 
- [Server Side Repository](https://github.com/Rafidul01/ph-job-task-server)

## Description

A simple MERN Stack project to display products with some filtering functionality. 

## Features
- Filtering: Filter products by brand, category, and price range.
- Sorting: Sort products by price or creation date.
- Search Option: Search with the name of the product.
- Pagination: Navigate through products using pagination.


## Technologies Used
- React
- Tailwind CSS
- DaisyUI
- React Icons

## Setup Instructions
1. **Install React Router Dom**

    ```bash
    npm install react-router-dom
    npm install localforage match-sorter sort-by
2. **Installed Tailwind and DaisyUI**
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    npm i -D daisyui@latest

3. **Installed React Icons, React Helmet and Firebase for Auth**
    npm i react-icons
    npm install firebase
    npm i react-helmet-async

## To clone and run to your PC 

1. **Clone The Repository**
2. **Install all the npm Package**
    ```bash
    npm i
3. **Create a .env.local file in the root directory to manage firebase environment variables:**
- VITE_APIKEY= Your firebase API Key
- VITE_AUTHDOMAIN= Your firebase AUTHDOMAIN
- VITE_PROJECTID= Your firebase project Id
- VITE_STORAGEBUCKET= Your firebase STORAGEBUCKET
- VITE_MESSAGINGSENDERID= Your MESSAGINGSENDERID
- VITE_APPID= Your APPID

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
