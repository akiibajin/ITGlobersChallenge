import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../redux/actions/action";
import { IAgencies, IAgency } from "../Interfaces/NavBar";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { IconButton } from "@mui/material";
import "../syles/navBar.scss";

const NavBar: Function = ({ agencies }: IAgencies): JSX.Element => {
  const dispatch = useDispatch();
  const { updateWelcomeText } = bindActionCreators(ActionCreators, dispatch);

  const [isHidden, setIsHidden] = React.useState<boolean>(false);
  let show = isHidden ? "show" : "no-show";
  const showBar = () => {
    setIsHidden(!isHidden);
  };

  const updateText = (event: any) => {
    event.preventDefault();
    updateWelcomeText(event.target.text);
  };

  return (
    <div className={`nav-bar-content-${show}`}>
      <IconButton onClick={showBar}>
        <MenuOpenIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>
      <img
        className="logo"
        src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/619fcca3f9ab7c000193c731/picture"
        alt="ItGlober's Logo not found"
      />
      <ul className="header">
        {agencies.map((agency: IAgency) => (
          <li className="agencyItem" key={agency.id}>
            <a href="#" className="a" onClick={updateText}>
              {agency.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;

// Este componente se encarga de estructurar la barra de navegación, mapeando las agencias de viaje usadas para
// cambiar el estado del reducer en este caso.