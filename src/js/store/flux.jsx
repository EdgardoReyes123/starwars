import { Favorite } from "@mui/icons-material";

const getState = ({ getStore, getActions, setStore }) => {
  const urlpersonajes = "https://swapi.dev/api/people";
  const urlplanetas = "https://swapi.dev/api/planets";
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      people: [],
      planet: [],
      favorites: [{}],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getPeople: async () => {
        let response = await fetch(urlpersonajes);
        let data = await response.json();
        setStore({ people: data.results });
      },
      isIn: (favorites, name) => {
        let isIn = false;
        for (let favorite of favorites) {
          if (favorite.name === name) {
            isIn = true;
          }
        }
        return isIn;
      },

      manageFavorites: (name) => {
        const store = getStore();
        let oldFavorites = [...store.favorites];
        let isIn = getActions().isIn(oldFavorites, name);
        let newFavorites;

        if (isIn) {
          newFavorites = oldFavorites.filter(
            (favorites) => favorites.name !== name
          );
        } else {
          newFavorites = [...store.favorites, { name: name }];
        }
        localStorage.setItem("favorites",JSON.stringify(newFavorites));
        setStore({ favorites: newFavorites });
      },

      getPlanets: async () => {
        let response = await fetch(urlplanetas);
        let data = await response.json();
        setStore({ planet: data.results });
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;