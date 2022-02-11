import { ActionType } from "../actionsTypes/actionTypes";
import { Dispatch } from "redux";
import { IAction } from "../../Interfaces/IRedux";

export const updateWelcomeText = (welcomeText: string) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch({
      type: ActionType.UPDATETEXT,
      payload: `Hola, bienvenido, sabemos que quieres viajar en un ${welcomeText}, por favor 
        diligencia el siguiente formulario:`,
    });
  };
};

// creación de las funciones que llegan al reducer y hacen un cambio en el estado en base al tipo de despachamiento