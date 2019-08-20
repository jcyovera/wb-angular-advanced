
    export interface IOptionElement{
        text:string,
        value:string
    }
    /* Interface for filter parameters send to API */
    export interface IArticleFilterParam{
        sortBy:string;
        pageSize:string;
        pageNumber:number;
        searchText:string;
    }