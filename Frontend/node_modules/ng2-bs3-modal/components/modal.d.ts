import { OnDestroy, EventEmitter, ElementRef } from '@angular/core';
import { ModalInstance } from './modal-instance';
export declare class ModalComponent implements OnDestroy {
    private element;
    private overrideSize;
    instance: ModalInstance;
    visible: boolean;
    animation: boolean;
    backdrop: string | boolean;
    keyboard: boolean;
    size: string;
    onClose: EventEmitter<any>;
    onDismiss: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    fadeClass: boolean;
    dataKeyboardAttr: boolean;
    dataBackdropAttr: string | boolean;
    constructor(element: ElementRef);
    ngOnDestroy(): Promise<any>;
    routerCanDeactivate(): any;
    open(size?: string): Promise<void>;
    close(): Promise<void>;
    dismiss(): Promise<void>;
    private isSmall();
    private isLarge();
}
export declare class ModalSize {
    static Small: string;
    static Large: string;
    static validSize(size: string): boolean;
}
