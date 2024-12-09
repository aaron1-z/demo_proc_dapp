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
   ![WhatsApp Image 2024-12-09 at 12 26 56_2a6695ca](https://github.com/user-attachments/assets/1c92e8cc-4edf-46ca-a57a-a7df4b8d9200)


4. **Access Frontend**  
   Start the frontend development server:  
   ```bash
   npm start
   ```  
   Open the app in your browser:  
   ```
   http://127.0.0.1:3000
   ```
![WhatsApp Image 2024-12-09 at 12 26 13_4c2168ca](https://github.com/user-attachments/assets/1c98fb52-4106-4cb3-ac92-07d835cb309b)



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

![WhatsApp Image 2024-12-09 at 12 25 17_aacc757b](https://github.com/user-attachments/assets/b81629b0-39d4-4d26-a757-234dc2f3ce65)


