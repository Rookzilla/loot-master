import { MIDGROUND_COLOR, MENU_COLOR } from "../consts/staticConsts";

export const ICON = {
    alignItems: "center",
    display: "flex",
    padding: "10px",
    width: "39px",                                                                                       
    height: "39px",
    margin: 0,
    cursor: "pointer",
}
// Styled component for the form container
export const MENU_SUBCONTAINER_STYLES = {
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    margin: "10px",
  };

  export const LEFT_SUBCONTAINER_STYLES = {
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    margin: "10px 0px 10px 10px",
  };

// Styled component for the form container
export const MENU_CONTAINER_STYLES = {
    backgroundColor: MIDGROUND_COLOR,
    borderRadius: "10px",
    display: "flex",
    flexDirection: "row",
    marginBottom: '10px',
    alignItems: "flex-start",
    alignContent: "center",
  };

  export const NPC_TITLE = {
    display: "flex",
    fontWeight: "500",
    FontFace: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
    fontSize: "16px",
    margin: "0 0 4px 10px",
  }

  export const BASIC_SUB_CONTAINER = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }

  export const OPTIONS_MENU = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }