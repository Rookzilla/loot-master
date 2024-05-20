import { MIDGROUND_COLOR } from "../consts/staticConsts";
import styled from "styled-components";

// remake icon as a styled component
const Icon = styled.img({
  alignItems: "center",
  display: "flex",
  padding: "10px",
  width: "39px",
  height: "39px",
  margin: 0,
  cursor: "pointer",
});

// Styled component for the form container
const MENU_SUBCONTAINER_STYLES = {
  borderRadius: "10px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  alignItems: "center",
  alignContent: "center",
  margin: "10px",
};

const MOBILE_MENU_SUBCONTAINER_STYLES = {
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  margin: "10px",
};

const MOBILE_MENU_STYLES = {
  backgroundColor: MIDGROUND_COLOR,
  borderRadius: "10px",
  display: "column",
  flexDirection: "row",
  flexWrap: "wrap",
  marginBottom: "20px",
  alignItems: "flex-start",
  alignContent: "center",
  width: "100%",
};

const LeftSubcontainer = styled.div`
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 10px;
`;

// Styled component for the form container
const MENU_CONTAINER_STYLES = {
  backgroundColor: MIDGROUND_COLOR,
  borderRadius: "10px",
  display: "flex",
  flexDirection: "row",
  marginBottom: "10px",
  alignItems: "flex-start",
  alignContent: "center",
};

const NPC_TITLE = {
  display: "flex",
  fontWeight: "500",
  FontFace: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
  fontSize: "16px",
  margin: "0 0 4px 10px",
};

const BasicSubContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const OptionsMenu = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export {
  Icon,
  MENU_SUBCONTAINER_STYLES,
  MENU_CONTAINER_STYLES,
  NPC_TITLE,
  BasicSubContainer,
  OptionsMenu,
  LeftSubcontainer,
  MOBILE_MENU_SUBCONTAINER_STYLES,
  MOBILE_MENU_STYLES,
};
