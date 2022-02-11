import {Control,FieldValues,UseControllerProps} from 'react-hook-form'

export interface IITGlobersTextEditorFor{
    name:string,
    control:Control<FieldValues, object>,
    defaultValue:string,
    rules:UseControllerProps,
    label:string,
    type?:string,
    errors:any
}

export interface IITGlobersButton{
    color:'success' | 'primary' | 'secondary' | 'error',
    type?: 'submit',
    content:string,
    className:string
}

export interface IITGlobersModal{
    closeDialog:Function;
    isOpen:boolean,
    dialogTitle:string,
    dialogContent:string
}

