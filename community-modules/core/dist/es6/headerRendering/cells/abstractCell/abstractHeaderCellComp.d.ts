// Type definitions for @ag-grid-community/core v26.1.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Component } from "../../../widgets/component";
import { FocusService } from "../../../focusService";
import { AbstractHeaderCellCtrl } from "./abstractHeaderCellCtrl";
export declare abstract class AbstractHeaderCellComp<T extends AbstractHeaderCellCtrl> extends Component {
    protected focusService: FocusService;
    protected ctrl: T;
    constructor(template: string, ctrl: T);
    protected shouldStopEventPropagation(e: KeyboardEvent): boolean;
    getCtrl(): T;
}