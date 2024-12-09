# **demo_proc_dapp**

Welcome to the `demo_proc_dapp` project! This is a decentralized application (DApp) built on the Internet Computer (IC), featuring a backend in Rust and a frontend in React.

---

## **Getting Started**

### **1. Prerequisites**
- Install [DFX SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- Install [Node.js](https://nodejs.org) (v16 or higher)
- Install [Git](https://git-scm.com/)

---

### **2. Running Locally**

1. **Start the IC Local Replica**  
   ```bash
   dfx start --background
   ```

2. **Deploy Canisters**  
   ```bash
   dfx deploy
   ```

3. **Access Backend**  
   Open the backend canister in your browser:  
   ```
   http://127.0.0.1:4943/?canisterId=<backend-canister-id>
   ```

4. **Access Frontend**  
   Start the frontend development server:  
   ```bash
   npm start
   ```  
   Open the app in your browser:  
   ```
   http://127.0.0.1:3000
   ```

---

## **Notes**

- If you make changes to the backend, update the Candid interface:  
  ```bash
  npm run generate
  ```

- For production, set `DFX_NETWORK` to `ic` or configure environment variables accordingly.

---

## **Explore**

- **Backend:** Rust-based canister logic.
- **Frontend:** React for user interaction.

![alt text](<Image1.jpg>)
