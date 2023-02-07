import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExportJson from "./ExportJson";
import FamilyCard from "./FamilyCard";
import FamilyCardInput from "./familyCardInput";
import FolderAccordion from "./FolderAccordian";
import { ToggleAccordian } from "./Redux/FamilyDetailsSlice";
import Search from "./Search";

const Home = () => {
  const jsonData = useSelector((state) => state.AccordianUi.data);
  // const [filteredData, setFilteredData] = useState(jsonData);
  // const [selected, setSelected] = useState(1);
  const [addingInProgress, setAddingInProgress] = useState(false);
  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  //   setFilteredData(
  //     filteredData.filter(
  //       (item) =>
  //         item.children &&
  //         item.children.some((child) =>
  //           child.name.toLowerCase().includes(event.target.value.toLowerCase())
  //         )
  //     )
  //   );
  // };
  const dispatch = useDispatch();
  // let searchNotFound = true;
  // useEffect(() => {
  //   const findFiltedData = (data) => {
  //     data?.forEach((item) => {
  //       while (item.children && searchNotFound) {
  //         if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
  //           searchNotFound = false;
  //           console.log("found");
  //         } else {
  //           findFiltedData(item.children);
  //           console.log("Not found");
  //         }
  //         return;
  //       }
  //     });
  //   };
  //   findFiltedData(filteredData);
  // }, [searchTerm]);

  // let itemNotFound = true;
  // const addFamily = (data) => {
  //   const foundParent = data.forEach((item) => {
  //     while (item.children && itemNotFound) {
  //       setFilteredData([...filteredData, { id: 10, name: "amal" }]);
  //       if (item.id === 2) {
  //         itemNotFound = false;
  //         const newdata = Object.assign({}, data, { name: "amal" });

  //         console.log(filteredData);
  //       } else {
  //         addFamily(item.children);
  //       }
  //     }
  //   });
  // };

  const jsonReader = (uploadedFile) => {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const jsonData = JSON.parse(fileReader.result);

      dispatch(ToggleAccordian.importJson([jsonData]));
    };
    if (uploadedFile !== undefined) fileReader.readAsText(uploadedFile);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* <Search
        searchTerm={searchTerm}
        setSearchTer={setSearchTerm}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
        handleSearch={handleSearch}
      /> */}
      <FolderAccordion data={jsonData} marginRight={0} />
      <Button onClick={() => setAddingInProgress(true)}>Add</Button>
      {addingInProgress ? (
        <FamilyCardInput setAddingInProgress={setAddingInProgress} />
      ) : (
        <FamilyCard />
      )}
      <input
        accept="application/JSON"
        id="icon-button-file"
        type="file"
        name="files"
        onChange={(e) => jsonReader(e.target.files[0])}
      ></input>
      <ExportJson />
    </div>
  );
};

export default Home;
