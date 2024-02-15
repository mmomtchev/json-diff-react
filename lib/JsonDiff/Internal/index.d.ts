/// <reference types="react" />
import * as JsonDiffTypes from 'json-diff';
import CSS from 'csstype';
export type StyleCustomization = {
    additionLineStyle: CSS.Properties | null;
    additionClassName: string | null | undefined;
    deletionLineStyle: CSS.Properties | null;
    deletionClassName: string | null | undefined;
    unchangedLineStyle: CSS.Properties | null;
    unchangedClassName: string | null | undefined;
    frameStyle: CSS.Properties | null;
    frameClassName: string | null | undefined;
};
export type DiffOptions = JsonDiffTypes.DiffOptions & {
    excludeKeys?: string[];
    showElisionsForObjects?: boolean;
    renderElision?: (elisionCount: number, maxElisions: number) => string | string[];
    format?: (color: string, indent: string, key: string, value: string | number | boolean | ArrayConstructor | ObjectConstructor) => JSX.Element | false;
};
export type JsonValue = {
    [x: string]: JsonValue;
} | Array<JsonValue> | string | number | boolean | null;
export declare function diff(jsonA: unknown, jsonB: unknown, options?: DiffOptions): unknown;
export declare function diffRender(jsonA: JsonValue, jsonB: JsonValue, options: DiffOptions | undefined, customization: StyleCustomization): JSX.Element;
