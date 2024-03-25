import { atom } from "recoil";

export const categoryNameState = atom({
  key: "categoryNameState",
  default: "전체보기",
});

export const houseDataState = atom({
  key: "houseDataState",
  default: [],
});
