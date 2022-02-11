import { Button } from "@mui/material";
import { IITGlobersButton } from "../Interfaces/IComponents";

const ITGlobersButton = ({ type, content, color, className }: IITGlobersButton): JSX.Element => {
  return (
    <Button type={type??"button"} color={color??"success"} variant="contained" className={className}>
      {content}
    </Button>
  );
};

export default ITGlobersButton;

// Este componente es usado como metodo que ayuda a la creación de botones segun el tipo y colores