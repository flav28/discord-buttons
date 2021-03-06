/// <reference types="discord.js" />
export = Message;
declare const Message_base: typeof import("discord.js").Message;
declare class Message extends Message_base {
    _patch(data: any): Message;
    components: any;
    createButtonCollector(filter: any, options?: {}): ButtonCollector;
    awaitButtons(filter: any, options?: {}): Promise<any>;
}
import ButtonCollector = require("./ButtonCollector");
