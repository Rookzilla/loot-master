// Styled component for the form container
import { BODY_COLOR, MIDGROUND_COLOR } from "../../consts/staticConsts";

export const FORM_CONTAINER_STYLES = {
    backgroundColor: BODY_COLOR,
    borderRadius: "10px", /* Rounded corners */
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", /* Shadow effect */
    display: "flex",
    flexDirection: "row",
    marginBottom: '10px',
    alignItems: "flex-end",
    padding: "6px 12px",
    width: "100%",

  };

  export const MOBILE_FORM_CONTAINER_STYLES = {
    backgroundColor: BODY_COLOR,
    borderRadius: "10px", /* Rounded corners */
    marginBottom: '10px',
    padding: "8px 16px",
    margin: "5px",

  };
// Styled component for the label
export const LABEL = {
    display: "flex",
    fontWeight: "500",
    FontFace: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontSize: "14px",
    margin: "6px 0 4px 0",
    width: "100%"
};

// Styled component for the select dropdown
export const INPUT = {
    display: "flex",
    padding: "3px",
    width: "100%",
    margin: 0,
}

const INPUT_PROPS = {
    display: "inline-block",
    padding: "8px",
    margin: 0,
    fontSize: "18px",
    border: `2px solid ${MIDGROUND_COLOR}`,
    borderRadius: "10px", /* Rounded corners */
}

const WIDTH = 250

export const MOBILE_INPUT = {
    ...INPUT_PROPS,
    minWidth: `${WIDTH}px`
}

export const MOBILE_SELECT_INPUT = {
    ...INPUT_PROPS,
    minWidth: `${WIDTH*1.08}px`
}

export const MOBILE_CHECKBOX = {
    display: "flex",
    padding: "10px",
    minWidth: "35px",                                                                                       
    minHeight: "35px",
    border: `2px solid ${MIDGROUND_COLOR}`,
    margin: 0,
}

// Styled component for the select dropdown
export const SELECT = {
    display: "flex",
    padding: "3px",
    width: "170%",
    margin: 0,
}

export const CHECKBOX = {
    display: "flex",
    padding: "10px",
    minWidth: "25px",                                                                                       
    minHeight: "25px",
    margin: 0,
}

export const ICON = {
    alignItems: "center",
    display: "flex",
    width: "25px",                                                                                       
    height: "25px",
    margin: '0 0 5px 0',
    cursor: "pointer",
}

export const ICON_MOBILE = {
    display: "flex",
    width: "25px",                                                                                       
    height: "25px",
    padding: "5px",
    cursor: "pointer",
}

export const STYLED_INPUT_WRAPPER = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    margin: "1%",
    padding: "0 3%",
};

export const MOBILE_STYLED_INPUT_WRAPPER = {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    width: "100%",
};

export const DELETE_AND_CIVILIAN = {
    display: "flex",
    flexDirection: "row",
}