import React from "react";

const Duplicates = ({ numberList }) => {

    let duplicates = []
    let uniques = []
    let hashMap = {}

    numberList.forEach(element => {
        if (hashMap[element]) {
            hashMap[element] += 1;
        } else {
            hashMap[element] = 1;
        }
    })

    Object.keys(hashMap).forEach(element => {
        if (hashMap[element] > 1) {
            duplicates.push(element);
        } else {
            uniques.push(element);
        }
    })

    return (
        <>
            Duplicates: {duplicates.join(", ")} <br/>
            uniques: {uniques.join(", ")}
        </>
    )
}

export default Duplicates;