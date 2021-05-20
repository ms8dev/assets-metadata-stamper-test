import { Asset } from '../../model/asset';
import { Folder } from '../../model/folder';
export interface ProfileResponse {
    authorities: string[];
    email: string;
    fullName: string;
    groups: string[];
    userZone: string;
    username: string;
}
export interface SearchResponse {
    facets: {
        [key: string]: any;
    };
    firstResult: number;
    hits: Asset[];
    maxResultHits: number;
    totalHits: number;
}
export declare type BrowseResponse = Folder[];
export interface BulkResponse {
    processedCount: number;
    errorCount: number;
}
export declare type CreateFolderResponse = {
    [key: string]: any;
};
interface Taxonomy {
    ancestorsSearchable: boolean;
    ancestorsSelectable: boolean;
    lastModified: string;
    onlyFromList: boolean;
    sort: boolean;
    source: string;
    useUriAsValue?: string;
}
interface Field {
    datatype: string;
    description: string;
    editable: boolean;
    filterUI: string;
    flagIconWhenNotEmpty: string;
    flagPosition: number;
    multivalue: boolean;
    name: string;
    predefinedValues: {
        [key: string]: string;
    }[];
    predefinedValuesOnlyFromList: boolean;
    supportedAssetDomains: string[];
    taxonomy?: Taxonomy;
    technical: boolean;
}
interface RequiredField {
    alwaysRequired: boolean;
    assetTypes: {
        [key: string]: string;
    };
    assetDomains: {
        [key: string]: string;
    };
}
export interface FieldinfoResponse {
    fieldInfoByName: {
        [key: string]: Field;
    };
    fieldGroups: {
        name: string;
        fields: Field[];
    }[];
    containerAssetTypes: string[];
    hiddenFromUIFields: string[];
    possibleRuleFields: string[];
    possibleSearchFields: string[];
    possibleSortFields: string[];
    requiredFieldCache: {
        [key: string]: RequiredField;
    };
}
export interface LoginResponse {
    csrfToken: string;
    loginFaultMessage: string;
    loginSuccess: boolean;
    serverVersion: string;
    userPreferences: {
        [key: string]: any;
    };
    userProfile: {
        [key: string]: any;
    };
}
export {};
