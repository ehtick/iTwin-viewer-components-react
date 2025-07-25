## API Report File for "@itwin/property-grid-react"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import type { ActionButtonRendererProps } from '@itwin/components-react';
import { FavoritePropertiesScope } from '@itwin/presentation-frontend';
import type { Field } from '@itwin/presentation-common';
import type { IModelConnection } from '@itwin/core-frontend';
import type { InstanceKey } from '@itwin/presentation-common';
import type { IPresentationPropertyDataProvider } from '@itwin/presentation-components';
import type { IPropertyDataFilterer } from '@itwin/components-react';
import { KeySet } from '@itwin/presentation-common';
import type { Localization } from '@itwin/core-common';
import type { PropertyCategory } from '@itwin/components-react';
import type { PropertyRecord } from '@itwin/appui-abstract';
import type { PropertyUpdatedArgs } from '@itwin/components-react';
import type { PropsWithChildren } from 'react';
import type { ReactNode } from 'react';
import { Ref } from 'react';
import { Selectables } from '@itwin/unified-selection';
import type { SelectionStorage } from '@itwin/unified-selection';
import { StagePanelLocation } from '@itwin/appui-react';
import { StagePanelSection } from '@itwin/appui-react';
import type { TranslationOptions } from '@itwin/core-common';
import type { UiItemsProvider } from '@itwin/appui-react';
import { VirtualizedPropertyGridWithDataProvider } from '@itwin/components-react';
import type { Widget } from '@itwin/appui-react';

// @public
export function AddFavoritePropertyContextMenuItem({ field, imodel, scope, onSelect }: FavoritePropertiesContextMenuItemProps): JSX.Element | null;

// @public
export function AncestorsNavigationControls({ navigateUp, navigateDown, canNavigateDown, canNavigateUp }: AncestorsNavigationControlsProps): JSX.Element | null;

// @public
export interface AncestorsNavigationControlsProps {
    canNavigateDown: boolean;
    canNavigateUp: boolean;
    navigateDown: () => void;
    navigateUp: () => void;
}

// @public
export interface ContextMenuItemProps {
    dataProvider: IPresentationPropertyDataProvider;
    field: Field | undefined;
    imodel: IModelConnection;
    record: PropertyRecord;
}

// @public
export interface ContextMenuProps {
    contextMenuItems?: Array<(props: ContextMenuItemProps) => ReactNode>;
}

// @public
export function CopyPropertyTextContextMenuItem({ record, onSelect, onCopy }: DefaultContextMenuItemProps & {
    onCopy?: (text: string) => void;
}): JSX.Element;

// @public
export function createPropertyGrid(propertyGridProps: PropertyGridWidgetProps): Widget;

// @public
export interface DataProviderProps {
    createDataProvider?: (imodel: IModelConnection) => IPresentationPropertyDataProvider;
}

// @public
export interface DefaultContextMenuItemProps extends ContextMenuItemProps {
    onSelect?: (defaultAction: () => Promise<void>) => Promise<void>;
}

// @public
export interface FavoritePropertiesContextMenuItemProps extends DefaultContextMenuItemProps {
    scope?: FavoritePropertiesScope;
}

// @public
export interface FilteringPropertyGridProps extends React.ComponentProps<typeof VirtualizedPropertyGridWithDataProvider> {
    autoExpandChildCategories?: boolean;
    filterer: IPropertyDataFilterer;
}

// @public
export class IModelAppUserPreferencesStorage implements PreferencesStorage {
    constructor(_nameSpace?: string);
    // (undocumented)
    get(key: string): Promise<string | undefined>;
    // (undocumented)
    set(key: string, value: string): Promise<void>;
}

// @public
export function MultiElementPropertyGrid({ ancestorsNavigationControls, getParentInstanceKey, ...props }: MultiElementPropertyGridProps): JSX.Element;

// @public
export interface MultiElementPropertyGridProps extends Omit<PropertyGridProps, "headerControls" | "onBackButton"> {
    ancestorsNavigationControls?: (props: AncestorsNavigationControlsProps) => ReactNode;
    getParentInstanceKey?: (key: InstanceKey) => Promise<InstanceKey | undefined>;
}

// @public
export function NullValueSettingContext({ children }: PropsWithChildren<{}>): JSX.Element;

// @public
export type PerformanceTrackedFeatures = "properties-load" | "elements-list-load";

// @public
export interface PreferencesStorage {
    // (undocumented)
    get(key: string): Promise<string | undefined>;
    // (undocumented)
    set(key: string, value: string): Promise<void>;
}

// @public
export function PropertyGrid({ createDataProvider, ...props }: PropertyGridProps): JSX.Element | null;

// @public
type PropertyGridActionButtonRenderer = (props: PropertyGridActionButtonRendererProps) => ReactNode;

// @public (undocumented)
interface PropertyGridActionButtonRendererProps extends ActionButtonRendererProps {
    dataProvider: IPresentationPropertyDataProvider;
}

// @public
export function PropertyGridComponent({ preferencesStorage, onPerformanceMeasured, onFeatureUsed, ...props }: PropertyGridComponentProps): JSX.Element | null;

// @public
export interface PropertyGridComponentProps extends Omit<MultiElementPropertyGridProps, "imodel">, TelemetryContextProviderProps {
    preferencesStorage?: PreferencesStorage;
}

// @public
export interface PropertyGridContentBaseProps extends Omit<FilteringPropertyGridProps, "dataProvider" | "filterer" | "isPropertyHoverEnabled" | "isPropertySelectionEnabled" | "onPropertyContextMenu" | "width" | "height" | "onPropertyUpdated" | "actionButtonRenderers"> {
    // (undocumented)
    actionButtonRenderers?: PropertyGridActionButtonRenderer[];
    // (undocumented)
    className?: string;
    // (undocumented)
    dataProvider: IPresentationPropertyDataProvider;
    // (undocumented)
    dataRenderer?: (props: FilteringPropertyGridProps) => ReactNode;
    // (undocumented)
    headerControls?: ReactNode;
    // (undocumented)
    imodel: IModelConnection;
    // (undocumented)
    onBackButton?: () => void;
    // (undocumented)
    onPropertyUpdated?: (args: PropertyGridPropertyUpdatedArgs, category: PropertyCategory) => Promise<boolean>;
}

// @public
export type PropertyGridContentProps = PropertyGridContentBaseProps & ContextMenuProps & SettingsMenuProps;

// @public
export function PropertyGridContextMenuItem({ id, children, title, onSelect }: PropsWithChildren<PropertyGridContextMenuItemProps>): JSX.Element;

// @public
export interface PropertyGridContextMenuItemProps {
    id: string;
    onSelect: () => void;
    title?: string;
}

// @public
export class PropertyGridManager {
    static get i18n(): Localization;
    static get i18nNamespace(): string;
    static initialize(i18n?: Localization): Promise<void>;
    static terminate(): void;
    static translate(key: string, options?: TranslationOptions): string;
}

// @public
export interface PropertyGridPropertyUpdatedArgs extends PropertyUpdatedArgs {
    dataProvider: IPresentationPropertyDataProvider;
}

// @public
export type PropertyGridProps = Omit<PropertyGridContentProps, "dataProvider" | "dataRenderer"> & DataProviderProps & {
    selectionStorage?: SelectionStorage;
};

// @public
export function PropertyGridSettingsMenuItem({ id, onClick, title, children }: PropsWithChildren<PropertyGridSettingsMenuItemProps>): JSX.Element;

// @public
export interface PropertyGridSettingsMenuItemProps {
    id: string;
    onClick: () => void;
    title?: string;
}

// @public @deprecated
export class PropertyGridUiItemsProvider implements UiItemsProvider {
    constructor(_props?: PropertyGridUiItemsProviderProps);
    // (undocumented)
    readonly id = "PropertyGridUiItemsProvider";
    // (undocumented)
    provideWidgets(_stageId: string, stageUsage: string, location: StagePanelLocation, section?: StagePanelSection): ReadonlyArray<Widget>;
}

// @public @deprecated
export interface PropertyGridUiItemsProviderProps {
    defaultPanelLocation?: StagePanelLocation;
    defaultPanelSection?: StagePanelSection;
    defaultPanelWidgetPriority?: number;
    propertyGridProps?: PropertyGridWidgetProps;
}

// @public
export const PropertyGridWidgetId = "vcr:PropertyGridComponent";

// @public (undocumented)
type PropertyGridWidgetOwnProps = {
    widgetId?: string;
} & ({
    shouldShow?: (selection: Readonly<KeySet>) => boolean;
    selectionStorage?: never;
} | {
    shouldShow?: (selection: Selectables) => Promise<boolean>;
    selectionStorage: SelectionStorage_2;
});

// @public
export type PropertyGridWidgetProps = PropertyGridComponentProps & PropertyGridWidgetOwnProps;

// @public
export function RemoveFavoritePropertyContextMenuItem({ field, imodel, scope, onSelect }: FavoritePropertiesContextMenuItemProps): JSX.Element | null;

// @public (undocumented)
type SelectionStorage_2 = Pick<SelectionStorage, "getSelection" | "replaceSelection" | "selectionChangeEvent">;

// @public
export interface SettingsMenuItemProps {
    close: () => void;
    dataProvider: IPresentationPropertyDataProvider;
}

// @public
export interface SettingsMenuProps {
    settingsMenuItems?: Array<(props: SettingsMenuItemProps) => ReactNode>;
}

// @public
export function ShowHideNullValuesSettingsMenuItem({ close, persist }: ShowHideNullValuesSettingsMenuItemProps): JSX.Element;

// @public
export interface ShowHideNullValuesSettingsMenuItemProps extends SettingsMenuItemProps {
    persist?: boolean;
}

// @public
export interface SingleElementDataProviderProps extends DataProviderProps {
    instanceKey: InstanceKey;
}

// @public
export function SingleElementPropertyGrid({ instanceKey, createDataProvider, ...props }: SingleElementPropertyGridProps): JSX.Element | null;

// @public
export type SingleElementPropertyGridProps = Omit<PropertyGridContentProps, "dataProvider" | "dataRenderer"> & SingleElementDataProviderProps;

// @public
export function TelemetryContextProvider({ onPerformanceMeasured, onFeatureUsed, children }: PropsWithChildren<TelemetryContextProviderProps>): JSX.Element;

// @public (undocumented)
interface TelemetryContextProviderProps {
    onFeatureUsed?: (featureId: UsageTrackedFeatures) => void;
    onPerformanceMeasured?: (featureId: PerformanceTrackedFeatures, elapsedTime: number) => void;
}

// @public
type UsageTrackedFeatures = "single-element" | "multiple-elements" | "elements-list" | "single-element-from-list" | "ancestor-navigation" | "context-menu" | "hide-empty-values-enabled" | "hide-empty-values-disabled" | "filter-properties";

// @public
export function usePropertyGridTransientState<T extends Element>(): Ref<T>;

// (No @packageDocumentation comment for this package)

```
