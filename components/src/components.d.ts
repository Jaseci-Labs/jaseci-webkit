/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ItemsPropValue, JustifyPropValue } from "./types/propTypes";
export namespace Components {
    interface JscApp {
        "markup": JaseciComponent[];
        "setMarkup": (value: any) => Promise<void>;
    }
    interface JscButton {
        "css": string;
        "events": string;
        "label": string;
        "name": string;
    }
    interface JscColumn {
        "css": string;
        "events": string;
        "items": ItemsPropValue;
        "justify": JustifyPropValue;
        "name": string;
    }
    interface JscContainer {
        "css": string;
        "events": string;
        "name": string;
    }
    interface JscInputbox {
        "css": string;
        "events": string;
        "fullwidth": string;
        "label": string;
        "name": string;
        "placeholder": string;
        "value": string;
    }
    interface JscLabel {
        "htmlFor": string;
        "label": string;
    }
    interface JscNavBar {
        "css": string;
        "events": string;
        /**
          * The title of the app bar.
         */
        "label": string;
        "name": string;
    }
    interface JscNavLink {
        "css": string;
        "events": string;
        "href": string;
        "label": string;
        "target": string;
    }
    interface JscRow {
        "css": string;
        "events": string;
        "items": ItemsPropValue;
        "justify": JustifyPropValue;
    }
    interface JscText {
        "css": string;
        "events": string;
        "state": string;
        "value": string;
        "variant": 'simple' | 'title';
    }
    interface JscTextbox {
        "css": string;
        "events": string;
        "fullwidth": string;
        "label": string;
        "name": string;
        "placeholder": string;
        "value": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLJscAppElement extends Components.JscApp, HTMLStencilElement {
    }
    var HTMLJscAppElement: {
        prototype: HTMLJscAppElement;
        new (): HTMLJscAppElement;
    };
    interface HTMLJscButtonElement extends Components.JscButton, HTMLStencilElement {
    }
    var HTMLJscButtonElement: {
        prototype: HTMLJscButtonElement;
        new (): HTMLJscButtonElement;
    };
    interface HTMLJscColumnElement extends Components.JscColumn, HTMLStencilElement {
    }
    var HTMLJscColumnElement: {
        prototype: HTMLJscColumnElement;
        new (): HTMLJscColumnElement;
    };
    interface HTMLJscContainerElement extends Components.JscContainer, HTMLStencilElement {
    }
    var HTMLJscContainerElement: {
        prototype: HTMLJscContainerElement;
        new (): HTMLJscContainerElement;
    };
    interface HTMLJscInputboxElement extends Components.JscInputbox, HTMLStencilElement {
    }
    var HTMLJscInputboxElement: {
        prototype: HTMLJscInputboxElement;
        new (): HTMLJscInputboxElement;
    };
    interface HTMLJscLabelElement extends Components.JscLabel, HTMLStencilElement {
    }
    var HTMLJscLabelElement: {
        prototype: HTMLJscLabelElement;
        new (): HTMLJscLabelElement;
    };
    interface HTMLJscNavBarElement extends Components.JscNavBar, HTMLStencilElement {
    }
    var HTMLJscNavBarElement: {
        prototype: HTMLJscNavBarElement;
        new (): HTMLJscNavBarElement;
    };
    interface HTMLJscNavLinkElement extends Components.JscNavLink, HTMLStencilElement {
    }
    var HTMLJscNavLinkElement: {
        prototype: HTMLJscNavLinkElement;
        new (): HTMLJscNavLinkElement;
    };
    interface HTMLJscRowElement extends Components.JscRow, HTMLStencilElement {
    }
    var HTMLJscRowElement: {
        prototype: HTMLJscRowElement;
        new (): HTMLJscRowElement;
    };
    interface HTMLJscTextElement extends Components.JscText, HTMLStencilElement {
    }
    var HTMLJscTextElement: {
        prototype: HTMLJscTextElement;
        new (): HTMLJscTextElement;
    };
    interface HTMLJscTextboxElement extends Components.JscTextbox, HTMLStencilElement {
    }
    var HTMLJscTextboxElement: {
        prototype: HTMLJscTextboxElement;
        new (): HTMLJscTextboxElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "jsc-app": HTMLJscAppElement;
        "jsc-button": HTMLJscButtonElement;
        "jsc-column": HTMLJscColumnElement;
        "jsc-container": HTMLJscContainerElement;
        "jsc-inputbox": HTMLJscInputboxElement;
        "jsc-label": HTMLJscLabelElement;
        "jsc-nav-bar": HTMLJscNavBarElement;
        "jsc-nav-link": HTMLJscNavLinkElement;
        "jsc-row": HTMLJscRowElement;
        "jsc-text": HTMLJscTextElement;
        "jsc-textbox": HTMLJscTextboxElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface JscApp {
        "markup"?: JaseciComponent[];
    }
    interface JscButton {
        "css"?: string;
        "events"?: string;
        "label"?: string;
        "name"?: string;
    }
    interface JscColumn {
        "css"?: string;
        "events"?: string;
        "items"?: ItemsPropValue;
        "justify"?: JustifyPropValue;
        "name"?: string;
    }
    interface JscContainer {
        "css"?: string;
        "events"?: string;
        "name"?: string;
    }
    interface JscInputbox {
        "css"?: string;
        "events"?: string;
        "fullwidth"?: string;
        "label"?: string;
        "name"?: string;
        "onValueChanged"?: (event: CustomEvent<string>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface JscLabel {
        "htmlFor"?: string;
        "label"?: string;
    }
    interface JscNavBar {
        "css"?: string;
        "events"?: string;
        /**
          * The title of the app bar.
         */
        "label"?: string;
        "name"?: string;
    }
    interface JscNavLink {
        "css"?: string;
        "events"?: string;
        "href"?: string;
        "label"?: string;
        "target"?: string;
    }
    interface JscRow {
        "css"?: string;
        "events"?: string;
        "items"?: ItemsPropValue;
        "justify"?: JustifyPropValue;
    }
    interface JscText {
        "css"?: string;
        "events"?: string;
        "state"?: string;
        "value"?: string;
        "variant"?: 'simple' | 'title';
    }
    interface JscTextbox {
        "css"?: string;
        "events"?: string;
        "fullwidth"?: string;
        "label"?: string;
        "name"?: string;
        "onValueChanged"?: (event: CustomEvent<string>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "jsc-app": JscApp;
        "jsc-button": JscButton;
        "jsc-column": JscColumn;
        "jsc-container": JscContainer;
        "jsc-inputbox": JscInputbox;
        "jsc-label": JscLabel;
        "jsc-nav-bar": JscNavBar;
        "jsc-nav-link": JscNavLink;
        "jsc-row": JscRow;
        "jsc-text": JscText;
        "jsc-textbox": JscTextbox;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "jsc-app": LocalJSX.JscApp & JSXBase.HTMLAttributes<HTMLJscAppElement>;
            "jsc-button": LocalJSX.JscButton & JSXBase.HTMLAttributes<HTMLJscButtonElement>;
            "jsc-column": LocalJSX.JscColumn & JSXBase.HTMLAttributes<HTMLJscColumnElement>;
            "jsc-container": LocalJSX.JscContainer & JSXBase.HTMLAttributes<HTMLJscContainerElement>;
            "jsc-inputbox": LocalJSX.JscInputbox & JSXBase.HTMLAttributes<HTMLJscInputboxElement>;
            "jsc-label": LocalJSX.JscLabel & JSXBase.HTMLAttributes<HTMLJscLabelElement>;
            "jsc-nav-bar": LocalJSX.JscNavBar & JSXBase.HTMLAttributes<HTMLJscNavBarElement>;
            "jsc-nav-link": LocalJSX.JscNavLink & JSXBase.HTMLAttributes<HTMLJscNavLinkElement>;
            "jsc-row": LocalJSX.JscRow & JSXBase.HTMLAttributes<HTMLJscRowElement>;
            "jsc-text": LocalJSX.JscText & JSXBase.HTMLAttributes<HTMLJscTextElement>;
            "jsc-textbox": LocalJSX.JscTextbox & JSXBase.HTMLAttributes<HTMLJscTextboxElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
