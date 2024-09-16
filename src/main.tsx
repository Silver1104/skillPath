import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ConvexReactClient } from "convex/react";
import {ConvexAuthProvider} from "@convex-dev/auth/react"
import './index.css'

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);
console.log(`ID here: `, convex);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <ConvexAuthProvider client={convex}>
        <App />
      </ConvexAuthProvider>
  </React.StrictMode>,
);
