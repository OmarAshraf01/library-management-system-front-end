import React, {SetStateAction} from "react";

export enum DialogBoxMode {
    DELETE_MEMBER = "Delete Member"
}

export type DialogBoxData = {
    open: boolean;
    dialogTitle: string;
    dialogContext: string;
    txtId: string;
    txtLabel: string;
    txtType: string;
    actionBtnName: string;
    errorMessages: string[];
    id: string | null;
}

export type DialogBoxAction = {
    onClose: React.Dispatch<SetStateAction<boolean>>;
}

type Props = {
    mode: DialogBoxMode;
    data: DialogBoxData;
    action: DialogBoxAction;
}

const DialogBox = ({mode, data, action} : Props) => {


    return (
        <>

        </>
    );
}

export default DialogBox;