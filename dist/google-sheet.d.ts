declare class GoogleSheet {
    url: string;
    /**
     * @param url Google App Script Url
     */
    constructor({ url }: {
        url: string;
    });
    /**
     * Select
     */
    GET({ sheet }: {
        sheet: string;
    }): Promise<any>;
    /**
     * Insert
     */
    POST<T extends Record<string, string>>({ sheet, ...body }: T & {
        sheet: string;
    }): Promise<any>;
    /**
     * Update fully
     */
    PUT<T extends Record<string, string>>({ sheet, id, ...body }: T & {
        sheet: string;
        id: string;
    }): Promise<any>;
    /**
     * Update partially
     */
    PATCH<T extends Record<string, string>>({ sheet, id, ...body }: T & {
        sheet: string;
        id: string;
    }): Promise<any>;
}
export default GoogleSheet;
