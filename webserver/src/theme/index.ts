import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

const {
    default: styled,
    css,
    keyframes,
    createGlobalStyle,
    ThemeProvider,
    ServerStyleSheet
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
    IThemeInterface
>;

export interface IThemeInterface {
    primaryColor: string;
}

export const theme = {
    primaryColor: "#e9e9eb"
};

export { css, createGlobalStyle, keyframes, ThemeProvider, ServerStyleSheet };
export default styled;