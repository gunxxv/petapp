import { PetProfileCollection } from "./ui-components";
import { NavBar } from "./ui-components";
import { Footer } from "./ui-components";
import { AddPet } from "./ui-components";
import { PetDetails } from "./ui-components";

import "./App.css";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();

  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [about, setAbout] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");

  const petDetailsOverrides = {
    Close: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowDetails(false);
      },
    },
  };

  const formOverrides = {
    TextField29766922: {
      placeholder: name,
    },
    TextField29766923: {
      placeholder: age,
    },
    TextField29766924: {
      placeholder: breed,
    },
    TextField36592694: {
      placeholder: about,
    },
    TextField36592701: {
      placeholder: color,
    },
    TextField36592708: {
      placeholder: image,
    },
    image: {
      src:
        updatePet == null
          ? "https://images.unsplash.com/photo-1538128835124-7805d3fd3f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2F0fHx8fHx8MTY1MjczMzE2Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          : updatePet.image,
    },
    Button29766926: {
      isDisabled: updatePet ? true : false,
    },
    Button36592716: {
      isDisabled: !updatePet ? true : false,
    },

    MyIcon: {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(false);
      },
    },
  };
  const navberOverrides = {
    image: {
      src: "https://img.icons8.com/color/50/000000/cat",
    },
    "Add Pet": {
      style: {
        cursor: "pointer",
      },
      onClick: () => {
        setShowForm(!showForm);
      },
    },
  };
  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navberOverrides} />
      <header className="App-header">
        {showDetails && (
          <PetDetails
            overrides={petDetailsOverrides}
            pet={pet}
            style={{
              textAlign: "left",
              margin: "1rem",
            }}
          />
        )}

        {showForm && (
          <AddPet
            pet={updatePet}
            overrides={formOverrides}
            style={{
              textAlign: "left",
              margin: "1rem",
            }}
          />
        )}

        <PetProfileCollection
          overrideItems={({ item, index }) => ({
            overrides: {
              Breed: { color: "blue" },
              Button29766907: {
                onClick: () => {
                  setShowDetails(!showDetails);
                  setPet(item);
                },
              },
              Button36482689: {
                onClick: () => {
                  if (!showForm) setShowForm(true);
                  setUpdatePet(item);
                  setName(item.name);
                  setAge(item.age);
                  setBreed(item.breed);
                  setAbout(item.about);
                  setColor(item.color);
                  setImage(item.image);
                },
              },
            },
          })}
        />
      </header>
      <Footer width={"100%"} />
    </div>
  );
}

export default App;
