/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v25.2.0
 * @link http://www.ag-grid.com/
 * @license MIT
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("../utils/dom");
var TestHeadless = /** @class */ (function () {
    function TestHeadless() {
    }
    TestHeadless.prototype.doSomething = function (eDiv, gridOptions) {
        var headlessService = gridOptions.api.headlessService;
        var headerRows = headlessService.getHeaderRows();
        var rows = headlessService.getRows();
        dom_1.clearElement(eDiv);
        var eTable = document.createElement('table');
        headerRows.forEach(function (headerRow) {
            var eTr = document.createElement('tr');
            eTable.appendChild(eTr);
            headerRow.columns.forEach(function (col) {
                var eTh = document.createElement('th');
                eTr.appendChild(eTh);
                if (col.name != null) {
                    eTh.innerText = col.name;
                }
            });
        });
        rows.forEach(function (row) {
            var eTr = document.createElement('tr');
            eTable.appendChild(eTr);
            row.cells.forEach(function (cell) {
                var eTd = document.createElement('td');
                eTr.appendChild(eTd);
                if (cell.value != null) {
                    eTd.innerText = cell.value.toString();
                }
            });
        });
        eDiv.append(eTable);
        console.log('TestHeadless.doSomething');
    };
    return TestHeadless;
}());
exports.TestHeadless = TestHeadless;

//# sourceMappingURL=testHeadless.js.map