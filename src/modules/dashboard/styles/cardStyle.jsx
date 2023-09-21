
import {
    defaultFont,
    primaryBoxShadow,
    infoBoxShadow,
    successBoxShadow,
    warningBoxShadow,
    dangerBoxShadow,

} from "styles/variable";
const cardHeader = {
    margin: "-20px 15px 0",
    borderRadius: "3px",
    padding: "15px",
    position: "relative"
};


const cardActions = {
    margin: "0 20px 10px",
    paddingTop: "10px",
    borderTop: "1px solid #eeeeee",
    height: "auto",
    ...defaultFont
};

const card = {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    overflow: "inherit"
};


const orangeCardHeader = {
    background: "linear-gradient(60deg, #ffa726, #fb8c00)",
    ...warningBoxShadow
};
const greenCardHeader = {
    background: "linear-gradient(60deg, #66bb6a, #43a047)",
    ...successBoxShadow
};
const redCardHeader = {
    background: "linear-gradient(60deg, #ef5350, #e53935)",
    ...dangerBoxShadow
};
const blueCardHeader = {
    background: "linear-gradient(60deg, #26c6da, #00acc1)",
    ...infoBoxShadow
};
const purpleCardHeader = {
    background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
    ...primaryBoxShadow
};


export {
    card, cardHeader,
    cardActions,
    orangeCardHeader,
    greenCardHeader,
    redCardHeader,
    blueCardHeader,
    purpleCardHeader,
};