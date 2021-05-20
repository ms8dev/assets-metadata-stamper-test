export interface Asset {
    readonly id: string;
    readonly metadata: {
        [key: string]: any;
    };
    readonly thumbnailUrl: string;
    readonly previewUrl?: string;
    readonly originalUrl?: string;
    readonly highlightedText?: string;
    readonly thumbnailHits?: any;
    readonly originalStoragePath?: string;
    readonly relation?: any;
    readonly permissions?: string;
}
