import { ContextData } from './model/context-data';
import { RequestOptions } from '../model/request-options';
declare type ContextDataSubscriber = (data: ContextData) => void;
export declare class AssetsPluginContext {
    private _clientUrlWhitelist;
    private static _instance;
    private _listeners;
    private _subscribers;
    private _context;
    private _connectedClientUrl;
    private constructor();
    get context(): ContextData;
    /**
     * Retrieves the singleton instance of the AssetsPluginContext class.
     * This promise resolves once the window has received the initialization message from the parent frame.
     * If it never resolves, make sure your plugin is configured correctly.
     *
     * @param clientUrlWhitelist
     * @returns Returns initialized singleton instance of AssetsPluginContext.
     */
    static get(clientUrlWhitelist?: string[]): Promise<AssetsPluginContext>;
    /**
     * Register a callback that will be called when the context data updates.
     *
     * @param subscriber
     * @returns Returns unsubscriber to make sure reference to stale subscriber is removed.
     */
    subscribe(subscriber: ContextDataSubscriber): Function;
    hasSelection(): boolean;
    hasFilteredSelection(): boolean;
    isSingleItem(): boolean;
    openSearch(query?: string, sort?: string): void;
    openBrowse(folderPath: string, includeSubFolders?: boolean, q?: string, sort?: string): void;
    openAssets(assetIds: string[]): void;
    checkout(assetIds: string[]): void;
    checkin(assetIds: string[]): void;
    cancelCheckout(assetIds: string[]): void;
    openCollections(collectionIds: string[]): void;
    pinCollections(collectionIds: string[]): void;
    /**
     * Closes all dialogs.
     */
    close(): void;
    /**
     * Opens the login prompt and resolves once the user has succesfully logged in.
     */
    login: () => Promise<void>;
    /**
     * Proxies requests to the Assets server through the client window to make sure existing user authentication is used.
     *
     * @remark Timeouts are not available yet since the AbortController (used to implement timeouts in combination with the fetch API) is still experimental at the time of writing.
     *
     * @param resource
     * @param options
     * @returns Returns response from Assets server.
     * @throws Throws error from Assets server.
     */
    fetch: <T>(resource: string, options: RequestOptions) => Promise<T>;
    private wrapCommand;
    private addListener;
    private removeListener;
    private processMessage;
    private postMessage;
    private onUpdateContext;
    private initialize;
    private log;
}
/**
 * @deprecated Do not use this class for new plugins!
 * @description This wrapper can be used to imitate the old elvisContext object and is intended to ease the transition to the new plugin context object.
 */
export declare class LegacyElvisContextWrapper {
    private pluginContext;
    app: ContextData['app'];
    activeTab: ContextData['activeTab'];
    plugin: ContextData['plugin'];
    basketSelection: ContextData['basketSelection'];
    updateCallback: (context: ContextData) => void;
    loginCompleteCallback: () => void;
    constructor(pluginContext: AssetsPluginContext);
    hasSelection: any;
    hasFilteredSelection: any;
    isSingleItem: any;
    openSearch: any;
    openBrowse: any;
    close: any;
    openAssets(assetIds: string): void;
    openContainers(containerIds: string): void;
    checkout(assetIds: string): void;
    checkin(assetIds: string): void;
    cancelCheckout(assetIds: string): void;
    activateContainers(containerIds: string): void;
    login(): void;
}
export {};
