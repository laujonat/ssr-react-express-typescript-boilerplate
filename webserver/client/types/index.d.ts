/* Initial data render */
declare namespace JSX {
    interface IntrinsicElements {
        div: React.HTMLAttributes<HTMLElement>;
    }
}
export interface WindowInitData extends Window {
    data: {
        INITIAL_DATA: any;
    };
}


export interface IHelloWorldProps<Object> {
    data: Object;
}