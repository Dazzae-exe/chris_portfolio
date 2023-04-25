import { atom, selector } from "recoil";

export const useProjectSelectState = atom({
  key: "useProjectSelectState",
  default: [
    {
      id: 0,
      name: "Thrumyeyes",
      projectImg: "https://i.postimg.cc/cJVynVSY/project-Portfolio-black.png",
      selected: false,
      link: 'https://thrumyeyesfilm.com/'
    },
    {
      id: 1,
      name: "Nubes",
      projectImg: "https://i.postimg.cc/Mp0JQsGr/nubes-app.png",
      selected: false,
      link: 'https://nubesweatherapp.netlify.app'
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