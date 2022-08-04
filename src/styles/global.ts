
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    
    body{
        font-size: 14px;
        font-family: sans-serif;
}
`;
    
export enum FontFamily {
    Primary = 'Montserrat, sans-serif',
    Secondary = '"Kdam Thmor Pro", sans-serif',
}
    
export enum FontWeight {
    Bold = 'bold',
    SemiBold = 600,
    Normal = 'normal',
}

export enum FontSize {
    XXXSmall = '12px',
    XXSmall = '14px',
    XSmall = '16px',
    Small = '18px',
    Medium = '22px',
    Large = '26px',
    XLarge = '32px',
    XXLarge = '56px',
}

export enum Spacing {
    XSmall = '4px',
    Small = '8px',
    Medium = '16px',
    Large = '24px',
    XLarge = '32px',
    XXLarge = '40px',
    XXXLarge = '60px',
}

export enum Color {
    Black = 'black',
    White = '#FFF'
}
    
export const Border = {
    Color: Color.Black,
    Width: '1px',
    Radius: '8px',
    RadiusLarge: '24px',
};
    
export const TransitionDuration = '.3s';

    