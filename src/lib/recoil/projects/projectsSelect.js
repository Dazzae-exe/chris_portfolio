import { atom, selector } from "recoil";

export const useProjectSelectState = atom({
  key: "useProjectSelectState",
  default: [
    {
      id: 0,
      name: "Thrumyeyes",
      projectImg: "https://i.postimg.cc/cJVynVSY/project-Portfolio-black.png",
      selected: false,
    },
    {
      id: 1,
      name: "Nubes",
      projectImg: "https://i.postimg.cc/Mp0JQsGr/nubes-app.png",
      selected: false,
    },
  ],
});

export const useProjectSelectValue = selector({
  key: "useProjectSelectValue",
  get: ({ get }) => {
    const project = get(useProjectSelectState);

    return project;
  },
});