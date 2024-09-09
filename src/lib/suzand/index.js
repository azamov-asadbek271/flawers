import { create } from "zustand";

const useAppStore = create((set) => ({
  admin: null,
  setAdmin: (admin) => set((state) => ({ admin: admin })),

}));
