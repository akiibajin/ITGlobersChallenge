import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ITGlobersButton from "../Components/ITGlobersButton";
import ITGlobersModal from "../Components/ITGlobersModal";
import ITGlobersTextEditorFor from "../Components/ITGlobersTextEditorFor";
import { useSelector } from "react-redux";
import "../syles/form.scss";
import { States } from "../redux/reducer";


const Form: Function = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const welcomeText = useSelector((state:States) => state.bank.welcomeText)

  const {
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>();

  const handleOnSubmit = handleSubmit((data) => {
    console.log("here the data: ", data);
    setIsOpen(true)
    reset();
  });

  const closeDialog=()=>{
    setIsOpen(false)
  }

  return (
    <div className="content-form">
      <form onSubmit={handleOnSubmit} className="travel-form">
      <p style={{fontFamily:"arial, helvetica, roboto, 'new times roman', lato"}}>{welcomeText}</p>

        <ITGlobersTextEditorFor
          name="FullName"
          control={control}
          errors={errors}
          defaultValue=""
          rules={{
            required: { value: true, message: "The Full Name is Required" },
            pattern: {
              value: /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/,
              message: "Only letters and each name and surname start with capital letters",
            },
          }}
          label="Full Name"
        />

        <ITGlobersTextEditorFor
          name="email"
          type="email"
          control={control}
          errors={errors}
          defaultValue=""
          rules={{
            required: { value: true, message: "The Email is Required" },
          }}
          label="Email"
        />

        <ITGlobersTextEditorFor
          name="cellphone"
          type="number"
          defaultValue=""
          control={control}
          errors={errors}
          rules={{
            required: { value: true, message: "The Cellphone is required" },
            pattern: { value: /^3(\d{9})$/, message: "Incorrect number - this must start with '3' followed by 9 numbers" },
          }}
          label="CellPhone"
        />

        <ITGlobersTextEditorFor
          name="age"
          type="number"
          defaultValue=""
          control={control}
          errors={errors}
          rules={{
            required: { value: true, message: "The age is required" },
            min: { value: 18, message: "You are too young" },
            max: { value: 100, message: "Your are too Old" },
          }}
          label="Age"
        />

        <div className="section-buttons">
          <Link to="/">
            <ITGlobersButton
              content="←"
              color="error"
              className="back-button"
            />
          </Link>
          <ITGlobersButton
            type="submit"
            className="submit-button"
            content="→"
            color="secondary"
          />
        </div>
      </form>

      <ITGlobersModal
        isOpen={isOpen}
        closeDialog = {closeDialog}
        dialogTitle="Felicidades"
        dialogContent="Tu información fue enviada con éxito, estaremos en contacto 
        contigo"
      />
    </div>
  );
};

export default Form;


//pagina donde al acceder, renderiza el formulario con los 4 campos mas dos botones, uno para regresar al indice
//y el otro para enviar el formulario a la consola, recibe del store la variable de bienvenida que cambia en base
//a lo que el usuario de click en la barra de navegación