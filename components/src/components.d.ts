/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ItemsPropValue, JustifyPropValue } from "./types/propTypes";
export namespace Components {
    interface JscAnchor {
        "css": string;
        "events": string;
        "href": string;
        "label": string;
        "name": string;
        "operations": string;
        "target": string;
    }
    interface JscApp {
        "markup": JaseciComponent[];
        "setGlobalConfig": (config: Record<string, any> & { css: Record<string, string>; }) => Promise<void>;
        "setMarkup": (value: any) => Promise<void>;
    }
    interface JscButton {
        "color": string;
        "css": string;
        "events": string;
        "label": string;
        "name": string;
        "operations": string;
    }
    interface JscCard {
        "css": string;
        "events": string;
        "name": string;
        "operations": any;
        "outlineColor": 'red';
        "radius": 'sm' | 'md' | 'lg' | 'full';
        "shadow": 'sm' | 'md' | 'lg';
        "variant": 'shadow' | 'outline';
    }
    interface JscChip {
        "css": string;
        "events": string;
        "label": string;
        "name": string;
        "operations": any;
    }
    interface JscColumn {
        "css": string;
        "events": string;
        "items": ItemsPropValue;
        "justify": JustifyPropValue;
        "name": string;
        "operations": string;
    }
    interface JscContainer {
        "css": string;
        "events": string;
        "name": string;
        "operations": any;
    }
    interface JscDatagrid {
        "css": string;
        "currentPage": number;
        "events": string;
        "headings": string;
        "itemsPerPage": number;
        "maxPages": number;
        "name": string;
        "operations": any;
        "refetchData": () => Promise<void>;
        "rowData": [][];
        "rows": { context: any }[];
        "server": string;
        "snt": string;
        "sortOrder": {};
        "token": string;
        "variant": 'striped' | 'default';
        "walker": string;
    }
    interface JscDatalist {
        "body": string;
        "css": string;
        "data": [];
        "events": string;
        "getters": string;
        "items": ItemsPropValue;
        "justify": JustifyPropValue;
        "layout": 'Column' | 'Row' | 'None';
        "layoutProps": string;
        "name": string;
        "operations": string;
        "server": string;
        "snt": string;
        "template": string;
        "token": string;
        "walker": string;
    }
    interface JscDatePicker {
        "css": string;
        "events": string;
        "label": string;
        "name": string;
        "operations": any;
        "type": 'date' | 'datetime';
        "value": string;
    }
    interface JscDivider {
        "css": string;
        "events": string;
        "name": string;
        "operations": any;
    }
    interface JscInputbox {
        "css": string;
        "events": string;
        "fullwidth": string;
        "label": string;
        "name": string;
        "operations": string;
        "placeholder": string;
        "type": string;
        "value": string;
    }
    interface JscLabel {
        "htmlFor": string;
        "label": string;
        "name": string;
        "operations": string;
    }
    interface JscNavBar {
        "css": string;
        "events": string;
        /**
          * The title of the app bar.
         */
        "label": string;
        "name": string;
        "operations": string;
    }
    interface JscNavLink {
        "css": string;
        "events": string;
        "href": string;
        "label": string;
        "name": string;
        "operations": string;
        "target": string;
    }
    interface JscRow {
        "css": string;
        "events": string;
        "gap": string;
        "items": ItemsPropValue;
        "justify": JustifyPropValue;
        "name": string;
        "operations": string;
    }
    interface JscText {
        "css": string;
        "events": string;
        "name": string;
        "operations": string;
        "state": string;
        "value": string;
        "variant": 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    }
    interface JscTextbox {
        "css": string;
        "events": string;
        "fullwidth": string;
        "label": string;
        "name": string;
        "operations": string;
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
    interface HTMLJscAnchorElement extends Components.JscAnchor, HTMLStencilElement {
    }
    var HTMLJscAnchorElement: {
        prototype: HTMLJscAnchorElement;
        new (): HTMLJscAnchorElement;
    };
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
    interface HTMLJscCardElement extends Components.JscCard, HTMLStencilElement {
    }
    var HTMLJscCardElement: {
        prototype: HTMLJscCardElement;
        new (): HTMLJscCardElement;
    };
    interface HTMLJscChipElement extends Components.JscChip, HTMLStencilElement {
    }
    var HTMLJscChipElement: {
        prototype: HTMLJscChipElement;
        new (): HTMLJscChipElement;
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
    interface HTMLJscDatagridElement extends Components.JscDatagrid, HTMLStencilElement {
    }
    var HTMLJscDatagridElement: {
        prototype: HTMLJscDatagridElement;
        new (): HTMLJscDatagridElement;
    };
    interface HTMLJscDatalistElement extends Components.JscDatalist, HTMLStencilElement {
    }
    var HTMLJscDatalistElement: {
        prototype: HTMLJscDatalistElement;
        new (): HTMLJscDatalistElement;
    };
    interface HTMLJscDatePickerElement extends Components.JscDatePicker, HTMLStencilElement {
    }
    var HTMLJscDatePickerElement: {
        prototype: HTMLJscDatePickerElement;
        new (): HTMLJscDatePickerElement;
    };
    interface HTMLJscDividerElement extends Components.JscDivider, HTMLStencilElement {
    }
    var HTMLJscDividerElement: {
        prototype: HTMLJscDividerElement;
        new (): HTMLJscDividerElement;
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
        "jsc-anchor": HTMLJscAnchorElement;
        "jsc-app": HTMLJscAppElement;
        "jsc-button": HTMLJscButtonElement;
        "jsc-card": HTMLJscCardElement;
        "jsc-chip": HTMLJscChipElement;
        "jsc-column": HTMLJscColumnElement;
        "jsc-container": HTMLJscContainerElement;
        "jsc-datagrid": HTMLJscDatagridElement;
        "jsc-datalist": HTMLJscDatalistElement;
        "jsc-date-picker": HTMLJscDatePickerElement;
        "jsc-divider": HTMLJscDividerElement;
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
    interface JscAnchor {
        "css"?: string;
        "events"?: string;
        "href"?: string;
        "label"?: string;
        "name"?: string;
        "operations"?: string;
        "target"?: string;
    }
    interface JscApp {
        "markup"?: JaseciComponent[];
        "onOnRender"?: (event: CustomEvent<string>) => void;
    }
    interface JscButton {
        "color"?: string;
        "css"?: string;
        "events"?: string;
        "label"?: string;
        "name"?: string;
        "operations"?: string;
    }
    interface JscCard {
        "css"?: string;
        "events"?: string;
        "name"?: string;
        "operations"?: any;
        "outlineColor"?: 'red';
        "radius"?: 'sm' | 'md' | 'lg' | 'full';
        "shadow"?: 'sm' | 'md' | 'lg';
        "variant"?: 'shadow' | 'outline';
    }
    interface JscChip {
        "css"?: string;
        "events"?: string;
        "label"?: string;
        "name"?: string;
        "operations"?: any;
    }
    interface JscColumn {
        "css"?: string;
        "events"?: string;
        "items"?: ItemsPropValue;
        "justify"?: JustifyPropValue;
        "name"?: string;
        "operations"?: string;
    }
    interface JscContainer {
        "css"?: string;
        "events"?: string;
        "name"?: string;
        "operations"?: any;
    }
    interface JscDatagrid {
        "css"?: string;
        "currentPage"?: number;
        "events"?: string;
        "headings"?: string;
        "itemsPerPage"?: number;
        "maxPages"?: number;
        "name"?: string;
        "operations"?: any;
        "rowData"?: [][];
        "rows"?: { context: any }[];
        "server"?: string;
        "snt"?: string;
        "sortOrder"?: {};
        "token"?: string;
        "variant"?: 'striped' | 'default';
        "walker"?: string;
    }
    interface JscDatalist {
        "body"?: string;
        "css"?: string;
        "data"?: [];
        "events"?: string;
        "getters"?: string;
        "items"?: ItemsPropValue;
        "justify"?: JustifyPropValue;
        "layout"?: 'Column' | 'Row' | 'None';
        "layoutProps"?: string;
        "name"?: string;
        "operations"?: string;
        "server"?: string;
        "snt"?: string;
        "template"?: string;
        "token"?: string;
        "walker"?: string;
    }
    interface JscDatePicker {
        "css"?: string;
        "events"?: string;
        "label"?: string;
        "name"?: string;
        "operations"?: any;
        "type"?: 'date' | 'datetime';
        "value"?: string;
    }
    interface JscDivider {
        "css"?: string;
        "events"?: string;
        "name"?: string;
        "operations"?: any;
    }
    interface JscInputbox {
        "css"?: string;
        "events"?: string;
        "fullwidth"?: string;
        "label"?: string;
        "name"?: string;
        "onValueChanged"?: (event: CustomEvent<string>) => void;
        "operations"?: string;
        "placeholder"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface JscLabel {
        "htmlFor"?: string;
        "label"?: string;
        "name"?: string;
        "operations"?: string;
    }
    interface JscNavBar {
        "css"?: string;
        "events"?: string;
        /**
          * The title of the app bar.
         */
        "label"?: string;
        "name"?: string;
        "operations"?: string;
    }
    interface JscNavLink {
        "css"?: string;
        "events"?: string;
        "href"?: string;
        "label"?: string;
        "name"?: string;
        "operations"?: string;
        "target"?: string;
    }
    interface JscRow {
        "css"?: string;
        "events"?: string;
        "gap"?: string;
        "items"?: ItemsPropValue;
        "justify"?: JustifyPropValue;
        "name"?: string;
        "operations"?: string;
    }
    interface JscText {
        "css"?: string;
        "events"?: string;
        "name"?: string;
        "operations"?: string;
        "state"?: string;
        "value"?: string;
        "variant"?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    }
    interface JscTextbox {
        "css"?: string;
        "events"?: string;
        "fullwidth"?: string;
        "label"?: string;
        "name"?: string;
        "onValueChanged"?: (event: CustomEvent<string>) => void;
        "operations"?: string;
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
        "jsc-anchor": JscAnchor;
        "jsc-app": JscApp;
        "jsc-button": JscButton;
        "jsc-card": JscCard;
        "jsc-chip": JscChip;
        "jsc-column": JscColumn;
        "jsc-container": JscContainer;
        "jsc-datagrid": JscDatagrid;
        "jsc-datalist": JscDatalist;
        "jsc-date-picker": JscDatePicker;
        "jsc-divider": JscDivider;
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
            "jsc-anchor": LocalJSX.JscAnchor & JSXBase.HTMLAttributes<HTMLJscAnchorElement>;
            "jsc-app": LocalJSX.JscApp & JSXBase.HTMLAttributes<HTMLJscAppElement>;
            "jsc-button": LocalJSX.JscButton & JSXBase.HTMLAttributes<HTMLJscButtonElement>;
            "jsc-card": LocalJSX.JscCard & JSXBase.HTMLAttributes<HTMLJscCardElement>;
            "jsc-chip": LocalJSX.JscChip & JSXBase.HTMLAttributes<HTMLJscChipElement>;
            "jsc-column": LocalJSX.JscColumn & JSXBase.HTMLAttributes<HTMLJscColumnElement>;
            "jsc-container": LocalJSX.JscContainer & JSXBase.HTMLAttributes<HTMLJscContainerElement>;
            "jsc-datagrid": LocalJSX.JscDatagrid & JSXBase.HTMLAttributes<HTMLJscDatagridElement>;
            "jsc-datalist": LocalJSX.JscDatalist & JSXBase.HTMLAttributes<HTMLJscDatalistElement>;
            "jsc-date-picker": LocalJSX.JscDatePicker & JSXBase.HTMLAttributes<HTMLJscDatePickerElement>;
            "jsc-divider": LocalJSX.JscDivider & JSXBase.HTMLAttributes<HTMLJscDividerElement>;
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
