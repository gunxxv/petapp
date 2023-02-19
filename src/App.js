import { PetProfileCollection } from "./ui-components";
import { NavBar } from "./ui-components";
import { Footer } from "./ui-components";
import { AddPet } from "./ui-components";

import "./App.css";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const formOverrides = {
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
        {showForm && (
          <AddPet
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
              Button29766907: { onClick: () => alert(`${item.id}`) },
            },
          })}
        />
      </header>
      <Footer width={"100%"} />
    </div>
  );
}

export default App;
