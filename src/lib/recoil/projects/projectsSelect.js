import { atom, selector } from "recoil";

export const useProjectSelectState = atom({
  key: "useProjectSelectState",
  default: [],
});

export const useProjectSelectValue = selector({
  key: "useProjectSelectValue",
  get: ({ get }) => {
    const project = get(useProjectSelectState);

    return project[0];
  },
});

export const useProjectAnimState = atom({
  key: "useProjectAnimState",
  default: false,
});

export const useProjectAnimValue = selector({
  key: "useProjectAnimValue",
  get: ({ get }) => {
    const anim = get(useProjectAnimState);

    return anim;
  },
});
