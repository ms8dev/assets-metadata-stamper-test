export interface Folder {
    assetPath: string;
    browsable: boolean;
    collection: boolean;
    directory: boolean;
    name: string;
    permissionMask: string;
    removing: boolean;
    children?: Folder[];
}
