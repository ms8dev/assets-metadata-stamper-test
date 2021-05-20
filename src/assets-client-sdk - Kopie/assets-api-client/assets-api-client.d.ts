import { AssetsPluginContext1 } from '../assets-plugin-context/assets-plugin-context';
import { SearchParams, BrowseParams, CopyMoveParams, CreateRelationParams, RemoveRelationParams, RemoveParams, CreateFolderParams, LoginParams, UpdateInstructionParam } from './model/request-params';
import { RequestOptions } from '../model/request-options';
import { SearchResponse, BrowseResponse, CreateFolderResponse, BulkResponse, ProfileResponse, FieldinfoResponse, LoginResponse } from './model/responses';
import { Asset } from '../model/asset';
import { Folder } from '../model/folder';
export declare type RequestHandler = <T>(resource: string, options: RequestOptions) => Promise<T>;
declare class Messages {
    private _messages;
    constructor(_messages: {
        [key: string]: string;
    });
    /**
     * Gets the value of a specified message as a string, after substituting {n} placeholders with corresponding parameters.
     *
     * @param key
     * @param parameters
     */
    getString(key: string, ...parameters: string[]): string;
    /**
     * Helper function for substituting {n} placeholders in a string with their corresponding string values at the n index in the variables array.
     *
     * @param value
     * @param variables
     */
    substitute(value: string, variables: string[]): string;
}
export declare class AssetsApiClient {
    private _serverUrl;
    private _csrfToken;
    private _requestStrategy;
    private _loginStrategy;
    private _loginAttemptPromise;
    private _messages;
    /**
     * Make sure to call the loadMessages function before using the messages object.
     */
    get messages(): Messages;
    private constructor();
    /**
     * Use this function to initialize the API client as a standalone interface with the Assets server. This means a new
     * userSession must be instantiated in order to start querying the server. For plugin developers looking to reuse the existing
     * userSession from the Assets client, refer to the 'fromPluginContext' function.
     *
     * @param serverUrl
     * @param username
     * @param password
     * @param clientType
     */
    static standalone(serverUrl: string, username: string, password: string, clientType: string): AssetsApiClient;
    /**
     * Use this function to initialize the API client using an established connection with the Assets client using the AssetsPluginContext class.
     * This ensures requests and login prompts are automatically routed through to the Assets client and thus reuses the existing user session
     * from the Assets client window.
     *
     * @param pluginContext
     */
    static fromPluginContext(pluginContext: AssetsPluginContext): AssetsApiClient;
    /**
     * Configure the client to start a session within the current window with the given credentials when authenticating.
     *
     * @param username
     * @param password
     * @param clientType
     */
    useAutoLogin(username: string, password: string, clientType: string): void;
    /**
     * Configure the client to use a custom handler for logging in.
     *
     * @param loginHandler
     */
    useLoginHandler(loginHandler: (params?: LoginParams) => Promise<any>): void;
    /**
     * Performs a login using the configured login method.
     *
     * @remark Note that the passed parameters will be disregarded when using the AssetsPluginContext. A LoginResponse will only be returned when running in standalone mode.
     *
     * @param params
     */
    login(params?: LoginParams): Promise<void | LoginResponse>;
    /**
     * Returns the profile for the currently logged in user
     */
    getProfile(): Promise<ProfileResponse>;
    /**
     * Performs a logout request on the server.
     *
     * @remark Note that for plugin usage (since the client window is used as proxy for requests) this will result in the client being logged out.
     */
    logout(): Promise<void>;
    /**
     * Performs the specified search query on the server.
     *
     * @param params
     */
    search(params: SearchParams): Promise<SearchResponse>;
    /**
     * Returns the browse result at a given path.
     *
     * @remark Note that the entire tree structure will be returned when specifying the fromRoot parameter.
     *
     * @param params
     */
    browse(params: BrowseParams): Promise<BrowseResponse>;
    /**
     * Updates an asset with the specified metadata.
     *
     * @param id
     * @param metadata
     */
    update(id: string, metadata: {
        [key: string]: any;
    }): Promise<Asset>;
    /**
     * Updates assets found by the given query with the specified metadata.
     *
     * @remark Sets the same metadata for all assets. If you want to set different metadata for multiple assets, use updatebulkMulti instead.
     *
     * @param query
     * @param metadata
     */
    updatebulk(query: string, metadata: {
        [key: string]: any;
    }): Promise<BulkResponse>;
    /**
     * Updates specified assets with respectively specified metadata. Allows for setting different metadata per asset.
     *
     * @param instructions
     */
    updatebulkMulti(instructions: UpdateInstructionParam[]): Promise<Asset[]>;
    /**
     * Creates an asset with the given metadata.
     *
     * @param metadata
     */
    create(metadata: {
        [key: string]: any;
    }): Promise<Asset>;
    /**
     * Creates a folder at the specified path.
     *
     * @param params
     */
    createFolder(params: CreateFolderParams): Promise<CreateFolderResponse>;
    /**
     * Copies an entity from a given source destination to the specified target destination.
     *
     * @param params
     */
    copy(params: CopyMoveParams): Promise<BulkResponse>;
    /**
     * Moves an entity from a given source destination to the specified target destination.
     *
     * @param params
     */
    move(params: CopyMoveParams): Promise<BulkResponse>;
    /**
     * Creates a relation between two entities.
     *
     * @param metadata
     */
    createRelation(metadata: CreateRelationParams): Promise<{}>;
    /**
     * Permanently removes a relation between two entities from the Assets server.
     *
     * @param metadata
     */
    removeRelation(metadata: RemoveRelationParams): Promise<BulkResponse>;
    /**
     * Permanently removes an entity from the Assets server.
     *
     * @param params
     */
    remove(params: RemoveParams): Promise<BulkResponse>;
    /**
     * Returns the configuration of fieldinfo of the current Assets server.
     */
    fieldinfo(): Promise<FieldinfoResponse>;
    /**
     * Requests a new csrf token.
     *
     * @remark For the calls in this client, the token will be refreshed automatically should the token expire.
     *
     * @param force
     */
    csrf(force?: boolean): Promise<string>;
    /**
     * Requests the configured messages for the given locale and initializes the messages object on the API client.
     *
     * @param locale
     */
    loadMessages(locale?: string): Promise<{
        [key: string]: string;
    }>;
    private onSuccess;
    private handleRequest;
}
/**
 * @deprecated Do not use this class for new integrations/plugins!
 * @description This wrapper can be used to imitate the old ElvisAPI object and is intended to ease the transition to the new AssetsApiClient object.
 */
export declare class LegacyElvisApiWrapper {
    private apiClient;
    constructor(apiClient: AssetsApiClient);
    get messages(): Messages;
    loadMessages(_progressHandler?: any, successHandler?: any, locale?: string): void;
    useAutoLogin: any;
    useLoginHandler: any;
    useLoginPage(url: string): void;
    usePluginContextAuthentication(): void;
    login(_username?: string, _password?: string, successHandler?: any, data?: any): void;
    getProfile(successHandler?: any): void;
    logout(successHandler?: any): void;
    search(params: SearchParams, callbackHandler?: any): void;
    browse(params: BrowseParams, callbackHandler?: any): void;
    update(id: string, metadata: {
        [key: string]: any;
    }, successHandler?: any): void;
    updatebulk(query: string, metadata: {
        [key: string]: any;
    }, successHandler?: any): void;
    create(metadata: {
        [key: string]: any;
    }, successHandler?: any): void;
    createFolder(params: CreateFolderParams, successHandler?: any): void;
    copy(params: CopyMoveParams, successHandler?: any): void;
    move(params: CopyMoveParams, successHandler?: any): void;
    createRelation(params: CreateRelationParams, successHandler?: any): void;
    removeRelation(params: RemoveRelationParams, successHandler?: any): void;
    remove(params: RemoveParams, successHandler?: any): void;
    fieldinfo(successHandler?: any): void;
    csrf(successHandler?: any): void;
}
export declare const queryForSelection: (selectedHits: Asset[]) => string;
export declare const queryForFolderSelection: (selectedFolders: Folder[]) => string;
export declare class LegacyElvisPlugin {
    static resolveElvisContext(): void;
    static queryForSelection: (selectedHits: Asset[]) => string;
    static queryForFolderSelection: (selectedFolders: Folder[]) => string;
    static resolveQueryString(): void;
}
/**
 * Utility to check permissions 'mask' for available permissions.
 * The permissions mask consists of a string with one character for
 * every permission available in Assets: VPUMERXCD
 *
 * V = VIEW
 * P = VIEW_PREVIEW
 * U = USE_ORIGINAL
 * M = EDIT_METADATA
 * E = EDIT
 * R = RENAME
 * X = MOVE
 * C = CREATE
 * D = DELETE
 */
export declare class AssetPermissions {
    static hasViewPreview(permission: string): boolean;
    static hasUseOriginal(permission: string): boolean;
}
export {};
