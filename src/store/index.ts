import { create } from "zustand";

type State = {
  count: number;
};

type Actions = {
  inc: () => void;
};

export const useStore = create<State & Actions>()((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
