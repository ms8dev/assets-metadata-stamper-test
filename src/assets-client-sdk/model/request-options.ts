export interface RequestOptions {
    method?: string;
    body?: {
        [key: string]: any;
    };
    skipCsrf?: boolean;
    asJson?: boolean;
}
