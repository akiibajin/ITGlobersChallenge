import { ActionType } from "../redux/actionsTypes/actionTypes"

interface IWelcomeText{
    type:ActionType.UPDATETEXT,
    payload:string
}

export type IAction = IWelcomeText

export interface IState{
    welcomeText:string
}