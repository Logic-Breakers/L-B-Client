import { atom } from "recoil";

export const categoryNameState = atom({
  key: "categoryNameState",
  default: "all",
});

export const houseDataState = atom({
  key: "houseDataState",
  default: [],
});
