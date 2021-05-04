import Tile from "./Tile";
import "./App.css";

function App() {
  const json_data = [
    {
      location: "Sadasivpet",
      place: "Aspire Series A Growth Plus",
      Start: "2021-04-10",
      End: "2021-04-10",
      Expected_yield: "12%",
      min_inv: "10L",
      IRR: "10",
      funded: "20",
      total_value: "5",
      id: 1,
      img:
        "https://www.sustainableplaces.eu/wp-content/uploads/2017/02/SmartBuilding.jpg",
    },
    {
      location: "Kondpur",
      place: "Aspire Series B Growth Plus",
      Start: "2021-04-10",
      End: "2021-04-10",
      Expected_yield: "12%",
      min_inv: "10L",
      IRR: "20",
      funded: "50",
      total_value: "50",
      id: 2,
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Transamerica_Pyramid_%2816870350723%29.jpg/1200px-Transamerica_Pyramid_%2816870350723%29.jpg",
    },
    {
      location: "Bachupally",
      place: "Aspire Series C Growth Plus",
      Start: "2021-04-10",
      End: "2021-04-10",
      Expected_yield: "12%",
      min_inv: "20L",
      IRR: "30",
      funded: "90",
      total_value: "10",
      id: 3,
      img:
        "https://upload.wikimedia.org/wikipedia/commons/1/1f/Lloyds_building_taken_2011.jpg",
    },
  ];

  return (
    <div className="tile-holder">
      {json_data.map((data) => (
        <Tile data={data} key={data.id} />
      ))}
      <div className="info">
        <h1 id="line1">
          Discover our Property where you'll find amazing amenities
        </h1>
        <hr id="line-br" />
        <p id="line2">View More Properties</p>
      </div>
    </div>
  );
}

export default App;
