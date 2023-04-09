import { createTheme } from "@mui/material"

export const ColorOptions = {
purple:{
0:"#9370DB"
}
}

export const theme = createTheme({
    palette:{
        primary:{
            main:ColorOptions.purple[0]
        },
        secondary:{
            main: ColorOptions.purple[0]
        }
    }
})