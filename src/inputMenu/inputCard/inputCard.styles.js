// Styled component for the form container
import { BODY_COLOR } from "../../consts/staticConsts";

export const FORM_CONTAINER_STYLES = {
    backgroundColor: BODY_COLOR,
    borderRadius: "10px", /* Rounded corners */
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", /* Shadow effect */
    display: "flex",
    flexDirection: "row",
    marginBottom: '10px',
    alignItems: "flex-end",
    width: "480px",
    padding: "0 20px",

  };
// Styled component for the label
export const LABEL = {
    display: "flex",
    fontWeight: "500",
    FontFace: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontSize: "18px",
    marginBottom: "6px",
};

// Styled component for the select dropdown
export const INPUT = {
    display: "flex",
    padding: "3px",
    width: "100%",
    margin: 0,
}

// Styled component for the select dropdown
export const SELECT = {
    display: "flex",
    padding: "3px",
    width: "100%",
    margin: 0,
    minWidth: "120px",
}

export const CHECKBOX = {
    display: "flex",
    padding: "10px",
    minWidth: "25px",                                                                                       
    minHeight: "25px",
    width: "100%",
    margin: 0,
}

export const ICON = {
    alignItems: "center",
    display: "flex",
    width: "25px",                                                                                       
    height: "25px",
    margin: '0 0 10px 0',
    cursor: "pointer",
}

export const STYLED_INPUT_WRAPPER = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    padding: "0 10px",
};