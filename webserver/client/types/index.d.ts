/* Initial data render */

export interface WindowInitData extends Window {
    data: {
        INITIAL_DATA: any;
    };
}


export interface IHelloWorldProps<Object> {
    data: Object;
}