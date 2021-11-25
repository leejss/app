import { atom } from "recoil";

// updatable and subscribable
// unit of shrable state
// updating the atom will trigger the re-render
export const fontState = atom({
  key: "fontSizeState",
  default: {
    size: 14,
    color: "red",
  },
});
