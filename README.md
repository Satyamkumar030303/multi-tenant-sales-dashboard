Multi-Tenant Sales Dashboard (Frontend)

A frontend-only SaaS sales dashboard built using React and Bootstrap, demonstrating multi-tenancy, role-based access control, and scalable frontend architecture.

Project Objective

This project simulates a multi-tenant SaaS sales platform where multiple organizations use the same application but with completely isolated data and role-based permissions.

The focus of this project is on:

Frontend architecture

Modularity and reusability

Tenant-based data handling

Role-based UI access

Optimization awareness

No backend is implemented as per assignment scope.

Features
Multi-Tenancy

Supports multiple organizations (Organization A, Organization B)

Switching tenant updates all displayed data

Role-Based Access

Admin: Can view and edit lead status

Agent: View-only access

Core Modules
Leads Module

Displays lead name, phone, and status

Filter leads by status

Tenant-specific data

Call Logs Module

Displays call history with lead name, time, duration, and outcome

Tenant-specific data

Tech Stack

React (Vite)

Bootstrap & Bootstrap Icons

Context API for state management

JavaScript (ES6)

Project Structure
src/
 auth/          → Authentication & user context
 components/    → Reusable UI components
 modules/       → Feature modules (Leads, Calls)
 pages/         → Page-level components
 App.jsx
 main.jsx


This structure ensures scalability and easy maintenance.

Tenancy Handling

Tenant information is stored in global context.
All modules read data based on the currently selected tenant, ensuring complete isolation between organizations.

Role-Based Access Control

UI permissions are controlled using role checks in components.
No backend logic is required to demonstrate RBAC at frontend level.

Optimization Awareness

Modular component structure

Minimal dependencies

Context API for global state

Clean separation of concerns

Easily extendable to API integration

Why No Backend?

The assignment focuses on frontend system design.
Mock data is used to simulate API behavior and tenant isolation.

The same frontend structure can be directly connected to REST or GraphQL APIs in real-world scenarios.

How to Run
npm install
npm run dev

Future Enhancements

Backend API integration

Authentication with JWT

Pagination and search

Charts and analytics

Settings module

Author

Satyam Kumar
Computer Science Student