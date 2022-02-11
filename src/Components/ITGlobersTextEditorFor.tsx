import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { IITGlobersTextEditorFor } from "../Interfaces/IComponents";

const ITGlobersTextEditorFor: Function = ({
  name,
  control,
  defaultValue,
  rules,
  errors,
  label,
  type,
}: IITGlobersTextEditorFor): JSX.Element => {
  let color: "error" | "secondary" = errors[name]?.type ? "error" : "secondary";
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          helperText={
            errors[name]?.type === "required" ||
            errors[name]?.type === "pattern" ||
            errors[name]?.type === "min" ||
            errors[name]?.type === "max"
              ? errors[name].message
              : ""
          }
          variant="standard"
          color={color}
          label={label}
          type={type ?? "text"}
        />
      )}
    />
  );
};

export default ITGlobersTextEditorFor;


// Este componente se encarga de la creación de editores de texto con el controlador, para poder insertar tanto las reglas
// nombre y controles. 