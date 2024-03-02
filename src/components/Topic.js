import React from "react";
import Select from "react-select";

//style the dropdown menu
const customStyles = {
    container: (provided, state) => ({
        ...provided,
        border: "2px solid #e1af4f",
        width: 270,
        borderRadius: 15,
        color: "#e1af4f",
        padding: 7,
        backgroundColor: "#1A6340",
        display: "flex",
        alignItems: "center",
        boxShadow: "2px 2px 4px black",
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        width: 200,
        padding: 5,
        backgroundColor: "#1A6340",
    }),
    placeholder: (provided, state) => ({
        ...provided,
        color: "#e1af4f",
        fontStyle: "bold",
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: "#e1af4f",
    }),
    control: (provided, state) => ({
        ...provided,
        width: 270,
        border: "0px solid #e1af4f",
        boxShadow: "0px",
    }),
    indicatorContainer: (provided, state) => ({
        ...provided,
        width: 36,
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        width: 36,
        backgroundColor: "#1A6340",
    }),
    svg: (provided, state) => ({
        ...provided,
        color: "#1A6340",
    }),
    input: (provided, state) => ({
        ...provided,
        color: "#1A6340",
    }),
    option: (provided, state) => ({
        ...provided,
        borderBottom: "1px solid #0D482C",
        color: "#e1af4f",
        padding: 20,
        backgroundColor: "#1A6340",
        fontStyle: "bold",
    }),
};
//end of styling part

function Topic({ quizCategories, changeTopic }) {
    const newArray = quizCategories.map((category) => {
        return { value: category.id, label: category.name };
    });
    return (
        <div className="Topic">
            <Select
                options={newArray}
                onChange={changeTopic}
                styles={customStyles}
            />
        </div>
    );
}

export default Topic;
