import { Asset } from '../../model/asset';
interface PartialFolder {
    readonly name: string;
    readonly assetPath: string;
}
interface KeyBinding {
    readonly os: 'Windows' | 'MacOSX';
    readonly key: string;
    readonly modifiers: string;
}
interface ConfigProperty {
    readonly description: string;
    readonly name: string;
    readonly value: string;
}
interface Plugin {
    readonly id: string;
    readonly messages: {
        [key: string]: string;
    };
    readonly config: ActionPluginConfig | PanelPluginConfig;
}
interface BasePluginConfig {
    readonly url: string;
    readonly name: string;
    readonly configProperties: {
        [key: string]: ConfigProperty;
    };
    readonly requiredRoles: string[];
    readonly keyBindings: KeyBinding[];
}
interface UserInterface {
    type: 'tab' | 'dialog' | 'externalBrowser';
    width: number;
    height: number;
    loadInIframe: boolean;
}
interface ActionPluginConfig extends BasePluginConfig {
    readonly enabledExpression: string;
    readonly filterExpression: string;
    readonly flattenContainersInSelection: boolean;
    readonly menuAssignments: {
        id: string;
        order: number;
    }[];
    readonly removeContainersFromSelection: boolean;
    readonly applySearchQuery: boolean;
    readonly requiredPermissionMask: string;
    readonly userInterface: UserInterface;
}
interface PanelPluginConfig extends BasePluginConfig {
    readonly iconUrl: string;
    readonly panelLocations: {
        readonly id: string;
        order: number;
    }[];
}
interface UserProfile {
    readonly username: string;
    readonly fullName: string;
    readonly email: string;
    readonly authorities: string[];
    readonly groups: string;
    readonly isAdmin: boolean;
    readonly userZone: string;
    readonly license: string;
}
export interface ContextData {
    readonly app: {
        readonly serverUrl: string;
        readonly queryString: string;
        readonly userProfile: UserProfile;
        readonly pluginsRootUrl: string;
        readonly pluginBaseRootUrl: string;
    };
    readonly activeTab: {
        readonly assetSelection: Asset[];
        readonly folderSelection: PartialFolder[];
        readonly originalAssetSelection: Asset[];
        readonly originalFolderSelection: PartialFolder[];
        readonly queryString: string;
    };
    readonly basketSelection: string[];
    readonly plugin: Plugin;
}
export {};
