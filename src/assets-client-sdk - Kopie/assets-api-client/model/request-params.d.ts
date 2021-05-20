export interface LoginParams {
    username?: string;
    password?: string;
    cred?: string;
    clientId?: string;
    returnProfile?: boolean;
    returnPreferences?: boolean;
}
export interface SearchParams {
    q: string;
    start?: number;
    num?: number;
    sort?: string;
    metadataToReturn?: string;
    expand?: string;
    facets?: string;
    returnFacets?: boolean;
    format?: string;
    appendRequestSecret?: boolean;
    returnHighlightedText?: boolean;
}
export interface BrowseParams {
    path: string;
    fromRoot?: boolean;
    includeFolders?: boolean;
    includeAssets?: boolean;
    includeExtensions?: string[];
}
export interface CreateFolderParams {
    path: string | string[];
}
export interface CopyMoveParams {
    source: string;
    target: string;
    folderReplacePolicy?: string;
    fileReplacePolicy?: string;
    filterQuery?: string;
    flattenFolders?: boolean;
}
export interface CreateRelationParams {
    relationType: string;
    target1Id: string;
    target2Id: string;
}
export interface RemoveRelationParams {
    relationIds?: string;
    q?: string;
}
export interface RemoveParams {
    ids?: string;
    q?: string;
    folderPath?: string;
}
export interface UpdateInstructionParam {
    id: string;
    metadata: {
        [key: string]: any;
    };
}
