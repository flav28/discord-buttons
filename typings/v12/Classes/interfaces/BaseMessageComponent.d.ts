export = BaseMessageComponent;
declare class BaseMessageComponent {
    static create(data: object): import("../MessageActionRow") | import("../MessageButton");
    constructor(data: object);
    type: any;
}
