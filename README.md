# Campus Item Connect

A responsive **Lost & Found web application** built with **Next.js, React, TypeScript, and CSS**. The application helps users report lost or found items, upload item images, search and filter posts, and manage their own reports through a personal dashboard.

## Features

* 🔐 **Login & Signup** – Create an account and securely access the application demo.
* 📷 **Image Upload** – Add and preview an image while reporting a lost or found item.
* 📝 **Item Reporting** – Create detailed lost and found item reports.
* 🔎 **Search & Filtering** – Search items and filter them by category, type, and status.
* 📄 **Dynamic Item Pages** – View detailed information for individual items.
* 📊 **Personal Dashboard** – Manage items reported by the logged-in user.
* ✏️ **Edit & Delete** – Update or remove personal item reports.
* ✅ **Resolve Items** – Mark an item as resolved when it has been recovered.
* 👤 **Profile** – View and manage the user's profile section.
* 📱 **Responsive UI** – Designed to work across desktop and mobile screen sizes.
* 🧩 **Reusable Components** – Built using reusable React components for maintainable code.
* 💾 **Browser Storage** – Uses localStorage for demo authentication and application data.

## Tech Stack

* **Frontend:** React, Next.js
* **Language:** TypeScript
* **Styling:** CSS
* **Routing:** Next.js App Router
* **Data Storage:** Browser localStorage
* **Development:** VS Code
* **Version Control:** Git & GitHub

## Project Structure

```text
campus-item-connect/
│
├── app/
│   ├── dashboard/
│   ├── items/
│   ├── login/
│   ├── profile/
│   ├── report/
│   ├── signup/
│   └── page.tsx
│
├── components/
│   ├── AppProvider.tsx
│   ├── AuthForm.tsx
│   ├── DashboardClient.tsx
│   ├── HomeClient.tsx
│   ├── ItemCard.tsx
│   ├── ItemDetails.tsx
│   ├── Navbar.tsx
│   ├── ProfileClient.tsx
│   └── ReportForm.tsx
│
├── public/
├── README.md
├── package.json
└── tsconfig.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Jahnavi-ganumuri/campus-item-connect.git
```

### 2. Open the project

```bash
cd campus-item-connect
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit:

```text
http://localhost:3000
```

## How to Use

### Create an Account

1. Open the application.
2. Select **Sign Up**.
3. Enter your details.
4. Create your account.
5. Login using your account credentials.

### Report an Item

1. Open **Report Item**.
2. Select **Lost** or **Found**.
3. Enter the item details.
4. Upload an image.
5. Submit the report.

### Find an Item

1. Use the search bar to search for an item.
2. Apply category or status filters.
3. Select an item to view its details.

### Manage Your Reports

From the **Dashboard**, users can:

* View their reported items
* Edit reports
* Delete reports
* Mark items as resolved

## Data Storage

This project uses **browser localStorage** for demonstration purposes.

This allows the application to run without requiring an external database or backend configuration.

Because localStorage is browser-specific, the data is stored locally on the user's device and is not shared between different users or browsers.

## Future Improvements

The project can be extended with:

* Node.js/Express backend
* MongoDB or PostgreSQL database
* Secure server-side authentication
* Cloud image storage
* User-to-user messaging
* Email notifications
* Real-time item updates
* Deployment using Vercel or another hosting platform

## What I Learned

Through this project, I practiced:

* Building reusable React components
* Working with Next.js routing
* Managing application state
* Creating responsive web interfaces
* Handling forms and image uploads
* Implementing search and filtering
* Managing browser-based data
* Using Git and GitHub for version control
* Using AI-assisted development tools for debugging and code refinement

## Project Purpose

This project was developed as a practical frontend application to demonstrate skills in **React, Next.js, TypeScript, responsive UI development, component-based design, and problem solving**.

## GitHub

**Repository:**
https://github.com/Jahnavi-ganumuri/campus-item-connect
