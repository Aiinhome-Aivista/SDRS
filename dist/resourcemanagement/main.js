(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Subhadip-ganguly\smart-repository-ui-v2\src\main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** os (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3f1f":
/*!*********************************************!*\
  !*** ./src/app/pipe/documentfilter.pipe.ts ***!
  \*********************************************/
/*! exports provided: DocumentfilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentfilterPipe", function() { return DocumentfilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DocumentfilterPipe {
    transform(items, searchText, fieldName) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        let flag = false;
        searchText = searchText.toLocaleLowerCase();
        return items.filter(item => {
            flag = false;
            for (let i = 0; i < fieldName.length; i++) {
                if (item && item[fieldName[i]] && item[fieldName[i]].toLowerCase().includes(searchText)) {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                return true;
            }
            else {
                return false;
            }
        });
    }
}
DocumentfilterPipe.ɵfac = function DocumentfilterPipe_Factory(t) { return new (t || DocumentfilterPipe)(); };
DocumentfilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "documentfilter", type: DocumentfilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentfilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'documentfilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    accountName: "hrmaiinhome",
    containerName: "uploadedresume",
    key: "eA6ZRbeJ+YNhFVubI3b+FXGxtqwTkUExnOLoQ5hcbYipfhchsSyxVGqJuV3kvK4qfw//61TuEmYgK7VHkyhRoQ==",
    BlobURL: "https://hrmaiinhome.blob.core.windows.net/uploadedresume/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JhsE":
/*!***************************************************************!*\
  !*** ./src/app/common/leftsidemenu/leftsidemenu.component.ts ***!
  \***************************************************************/
/*! exports provided: LeftsidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftsidemenuComponent", function() { return LeftsidemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");




const _c0 = function () { return ["/filemanager"]; };
const _c1 = function () { return ["/setting"]; };
class LeftsidemenuComponent {
    constructor(route, toastr) {
        this.route = route;
        this.toastr = toastr;
        this.mainheading = localStorage.getItem('mainheading');
        this.John = sessionStorage.getItem('Firstname');
        this.Doe = sessionStorage.getItem('LastName');
    }
    ngOnInit() {
    }
    userlogout() {
        sessionStorage.clear();
        this.route.navigate(['']);
        this.toastr.info("Successfully logout");
    }
    navigate() {
        //this.route.navigate(['filemanager'])
        localStorage.setItem('mainheading', 'Resource manager section');
    }
    navigate1() {
        // this.route.navigate(['Uploadfile'])
        localStorage.setItem('mainheading', 'Resource manager section');
    }
    navigate2() {
        this.route.navigate(['editpage']);
        localStorage.setItem('mainheading', 'Resource manager section');
    }
    userdash() {
        this.route.navigate(['userdashboard']);
        localStorage.setItem('mainheading', 'User Section');
    }
}
LeftsidemenuComponent.ɵfac = function LeftsidemenuComponent_Factory(t) { return new (t || LeftsidemenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
LeftsidemenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftsidemenuComponent, selectors: [["app-leftsidemenu"]], decls: 24, vars: 4, consts: [[1, "leftmidlesection"], [1, "sub_side_menu"], ["id", "upload_document", "routerLinkActive", "active", 3, "routerLink", "click"], ["aria-hidden", "true", 1, "fa", "fa-upload", 2, "margin-right", "10px", "font-size", "20px"], ["id", "setting", "routerLinkActive", "active", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-cog", "fa-spin", 2, "margin-right", "10px", "font-size", "20px"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", 2, "margin-left", "99%", "margin-top", "50%"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary", "btnmsg", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", "btnmsg"]], template: function LeftsidemenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftsidemenuComponent_Template_button_click_2_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Upload Document ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Confirmation Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Are You sure to Logout? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftsidemenuComponent_Template_button_click_20_listener() { return ctx.userlogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".leftupperdiv[_ngcontent-%COMP%], .leftmidlesection[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n}\r\n.rightupperdiv[_ngcontent-%COMP%]{\r\n    float: right;\r\n    margin-top: 1em;\r\n    color: #002e62;\r\n}\r\n.leftmidlesection[_ngcontent-%COMP%]{\r\n    padding-top: 5%;\r\n    display: flex;\r\n    font-size: 1.45vw;\r\n    background-color: #002e62;\r\n    z-index: 5;\r\n    text-align: center;\r\n    height: 100vh;\r\n}\r\n.sub_side_menu[_ngcontent-%COMP%]{\r\ndisplay: flex;\r\npadding: 5px;\r\nflex-direction: column;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    border: none;\r\n    margin: 5px;\r\n    height: 45px;\r\n    width: 200px;\r\n    color: white;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    font-size: 15px;\r\n    background-color: #002e62;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    box-shadow: 0 4px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 4px 0 rgba(0, 0, 0, 0.19);\r\n    transition: .5s;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover{\r\n    color: #002e62;\r\n    background-color: #e6e6e6;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    outline: none;\r\n    padding: 0.2em 1em;\r\n    border-radius: 2px;\r\n    border: none;\r\n    font-size: 1.2vw;\r\n    font-weight: 700;\r\n}\r\n#logout[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(255, 250, 250);\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    color: #00384d;\r\n    background-color: white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnRzaWRlbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWTtBQUNaLHNCQUFzQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMkVBQTJFO0lBQzNFLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsNEVBQTRFO0FBQ2hGO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6ImxlZnRzaWRlbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sZWZ0dXBwZXJkaXYsIC5sZWZ0bWlkbGVzZWN0aW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5yaWdodHVwcGVyZGl2e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgY29sb3I6ICMwMDJlNjI7XHJcbn1cclxuLmxlZnRtaWRsZXNlY3Rpb257XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAxLjQ1dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZTYyO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLnN1Yl9zaWRlX21lbnV7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbnBhZGRpbmc6IDVweDtcclxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5idXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmU2MjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuYnV0dG9uOmhvdmVye1xyXG4gICAgY29sb3I6ICMwMDJlNjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG51bCBsaSBidXR0b257XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuI2xvZ291dDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1MCwgMjUwKTtcclxufVxyXG5cclxuLmFjdGl2ZXtcclxuICAgIGNvbG9yOiAjMDAzODRkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftsidemenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-leftsidemenu',
                templateUrl: './leftsidemenu.component.html',
                styleUrls: ['./leftsidemenu.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "JmMC":
/*!****************************************!*\
  !*** ./src/app/service/authservice.ts ***!
  \****************************************/
/*! exports provided: Service_authorization */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service_authorization", function() { return Service_authorization; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../url.service */ "i3B0");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class Service_authorization {
    constructor(http) {
        this.http = http;
    }
    logindetail(user_details) {
        console.log("user_details", user_details);
        //return this.http.post(urllink.Login,user_details)
        return this.http.post("http://127.0.0.1:5000/login", user_details);
    }
    saveResumeDetails(body) {
        console.log("body", body);
        return this.http.post(_url_service__WEBPACK_IMPORTED_MODULE_1__["urllink"].saveResumeDetails, body);
    }
    getResumeList() {
        return this.http.get(_url_service__WEBPACK_IMPORTED_MODULE_1__["urllink"].getResumeList, { responseType: 'text' });
    }
    posteditedResume(body) {
        // alert()
        return this.http.post(_url_service__WEBPACK_IMPORTED_MODULE_1__["urllink"].getEditresumedetails, body);
    }
    saveCandidateDetails(body) {
        return this.http.post(_url_service__WEBPACK_IMPORTED_MODULE_1__["urllink"].saveCandidateDetails, body, { responseType: 'text' });
    }
    search2(body) {
        return this.http.post(_url_service__WEBPACK_IMPORTED_MODULE_1__["urllink"].search2, body, { responseType: 'text' });
    }
    upload(file) {
        return this.http.post("http://127.0.0.1:5000/upload", file);
    }
    searchableDropdown() {
        return this.http.get("http://127.0.0.1:5000/searchableDropdown"); //http://127.0.0.1:5000/searchableDropdown 
    }
    getDashboardData() {
        return this.http.get("http://127.0.0.1:5000/getAllData"); //http://127.0.0.1:5000/searchableDropdown 
    }
    getAllUploadedFile() {
        return this.http.get("http://127.0.0.1:5000/getAllUploadedFile"); //http://127.0.0.1:5000/searchableDropdown 
    }
    getDocumentCont() {
        return this.http.get("http://127.0.0.1:5000/document_count");
    }
}
Service_authorization.ɵfac = function Service_authorization_Factory(t) { return new (t || Service_authorization)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
Service_authorization.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Service_authorization, factory: Service_authorization.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Service_authorization, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Lz9g":
/*!************************************************************!*\
  !*** ./src/app/managersection/managersection.component.ts ***!
  \************************************************************/
/*! exports provided: ManagersectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagersectionComponent", function() { return ManagersectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _azure_storage_blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/storage-blob */ "MC4u");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "NFKh");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/header/header.component */ "uU1w");
/* harmony import */ var _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/leftsidemenu/leftsidemenu.component */ "JhsE");











//import { getSymbolIterator } from '@angular/core/src/util';
class ManagersectionComponent {
    constructor(DATE, route, toast) {
        this.route = route;
        this.toast = toast;
        this.mainheading = localStorage.getItem('mainheading');
        this.title = 'web1';
        this.currentFile = null;
        this.fileData = [];
        this.dte = new Date();
        this.dty = this.dte.getFullYear();
        this.db0 = this.dte.getMonth();
        this.dt1 = this.dte.getDate();
        this.dB = this.dte.getDay();
        this.dt3 = this.dte.getHours();
        this.dt4 = this.dte.getMinutes();
        this.day_arr = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
        this.month_arr = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');
        this.dt2 = this.day_arr[this.dB];
        this.dt0 = this.month_arr[this.db0];
        this.APM = this.dt3 >= 12 ? 'PM' : 'AM';
    }
    ngOnInit() {
    }
    navigate() {
        this.route.navigate(['filemanager']);
        localStorage.setItem('mainheading', 'Resource manager section');
    }
    userlogout() {
        sessionStorage.clear();
        this.route.navigate(['']);
        this.toast.error("Successfully logout");
    }
    selectonfile(event) {
        this.currentFile = event.target.files[0];
        console.log("date", new Date(new Date().getMonth()));
        // console.log("showfile",event)
        // this.filename=event.target.files[0].name;
        // this.filetype=this.filename.split('.').pop();
        // console.log("showfilename0",this.filename)
    }
    uploadfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var date = this.dt1 + '-' + this.db0 + '-' + this.dty + '_' + this.dt3 + '-' + this.dt4;
            console.log("DATE", date);
            var BeforeKey = this.currentFile['name'].indexOf(".");
            var FileName = this.currentFile['name'].slice(0, BeforeKey);
            var FileKey = this.currentFile['name'].split('.').pop();
            console.log("showfilename0", FileKey, FileName);
            console.log(this.currentFile['name']);
            console.log(this.currentFile['type']);
            if (this.currentFile['type'] == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || this.currentFile['type'] == "application/pdf" || this.currentFile['type'] == "application/msword") {
                // generate account sas token
                const accountName = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].accountName;
                const key = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].key;
                const start = new Date(new Date().getTime() - (15 * 60 * 1000));
                const end = new Date(new Date().getTime() + (30 * 60 * 1000));
                const signedpermissions = 'rwdlac';
                const signedservice = 'b';
                const signedresourcetype = 'sco';
                const signedexpiry = end.toISOString().substring(0, end.toISOString().lastIndexOf('.')) + 'Z';
                const signedProtocol = 'https';
                const signedversion = '2018-03-28';
                const StringToSign = accountName + '\n' +
                    signedpermissions + '\n' +
                    signedservice + '\n' +
                    signedresourcetype + '\n' +
                    '\n' +
                    signedexpiry + '\n' +
                    '\n' +
                    signedProtocol + '\n' +
                    signedversion + '\n';
                var str = crypto_js__WEBPACK_IMPORTED_MODULE_4__["HmacSHA256"](StringToSign, crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Base64.parse(key));
                var sig = crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Base64.stringify(str);
                const sasToken = `sv=${(signedversion)}&ss=${(signedservice)}&srt=${(signedresourcetype)}&sp=${(signedpermissions)}&se=${encodeURIComponent(signedexpiry)}&spr=${(signedProtocol)}&sig=${encodeURIComponent(sig)}`;
                const containerName = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].containerName;
                const pipeline = Object(_azure_storage_blob__WEBPACK_IMPORTED_MODULE_2__["newPipeline"])(new _azure_storage_blob__WEBPACK_IMPORTED_MODULE_2__["AnonymousCredential"](), {
                    retryOptions: { maxTries: 4 },
                    userAgentOptions: { userAgentPrefix: "AdvancedSample V1.0.0" },
                    keepAliveOptions: {
                        // Keep alive is enabled by default, disable keep alive by setting false
                        enable: false
                    }
                });
                const blobServiceClient = new _azure_storage_blob__WEBPACK_IMPORTED_MODULE_2__["BlobServiceClient"](`https://${accountName}.blob.core.windows.net?${sasToken}`, pipeline);
                const containerClient = blobServiceClient.getContainerClient(containerName);
                if (!containerClient.exists()) {
                    console.log("the container does not exit");
                    yield containerClient.create();
                }
                const client = containerClient.getBlockBlobClient(FileName + '_' + date + '.' + FileKey);
                const response = yield client.uploadBrowserData(this.currentFile, {
                    blockSize: 4 * 1024 * 1024,
                    concurrency: 20,
                    onProgress: (ev) => console.log(ev),
                    blobHTTPHeaders: { blobContentType: this.currentFile.type }
                });
                console.log(response._response.status);
                this.toast.success("File upload successfully", 'Success');
            }
            else {
                this.toast.error("Upload only .pdf or .docx or .doc file only", 'Error');
            }
        });
    }
}
ManagersectionComponent.ɵfac = function ManagersectionComponent_Factory(t) { return new (t || ManagersectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
ManagersectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManagersectionComponent, selectors: [["app-managersection"]], decls: 11, vars: 0, consts: [[1, "col-sm-9", "rightmiddlesection"], [1, "col-sm-2"], [1, "col-sm-8"], [2, "width", "70%"], ["type", "file", "accept", "application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document", "id", "fileupload", 3, "change"], ["id", "uploadbtn", 3, "click"]], template: function ManagersectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-leftsidemenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ManagersectionComponent_Template_input_change_7_listener($event) { return ctx.selectonfile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManagersectionComponent_Template_button_click_8_listener() { return ctx.uploadfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Upload resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_9__["LeftsidemenuComponent"]], styles: ["*[_ngcontent-%COMP%]{\r\n    text-transform: capitalize;\r\n    margin:0px;\r\n    text-transform: capitalize;\r\n   \r\n}\r\n#header[_ngcontent-%COMP%]{\r\n    background-color: rgb(185, 181, 181);\r\n    height: 9vw;\r\n    width: 99%;\r\n    position: absolute;\r\n    margin-top: -0.5vw;\r\n    padding-top: 2.2vw;\r\n    display: block;\r\n    \r\n}\r\n.leftupperdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size:2.35vw;\r\n}\r\n.rightupperdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size:2.35vw;\r\n}\r\n.rightupperdiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size:1.75vw;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    font-size: 1.2vw;\r\n}\r\n.leftupperdiv[_ngcontent-%COMP%], .leftmidlesection[_ngcontent-%COMP%]{\r\n    \r\n    position: absolute;\r\n    z-index: 10;\r\n    margin-top: 1em;\r\n    margin-left: 1em;\r\n}\r\n.rightupperdiv[_ngcontent-%COMP%]{\r\n    float: right;\r\n    margin-top: 1em;\r\n    color: #002e62;\r\n    margin-right: 2em;\r\n    \r\n}\r\n.leftmidlesection[_ngcontent-%COMP%]{\r\n    padding-top: 1vw;\r\n    padding-bottom: 5vw;\r\n    margin-top: 10.7vw;\r\n    font-size: 1.45vw;\r\n    background-color: #002e62;\r\n    z-index: 5;\r\n    margin-left: 4px;\r\n    text-align: center;\r\n\r\n}\r\n.rightmiddlesection[_ngcontent-%COMP%]{\r\n    float: right;\r\n    height:10vw;\r\n \r\n    width: 80%;\r\n    margin-top: 10.7vw;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    box-shadow: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n.rightmiddlesection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 8%;\r\n    margin-left: 21%;\r\n    padding:0.7vw 1.7vw;\r\n    border-radius: 10px;\r\n    border: none;\r\n    font-size: 2vw;\r\n    background-color: rgb(185, 181, 181);\r\n}\r\n#fileupload[_ngcontent-%COMP%] {\r\n    margin-left: 35%;\r\n}\r\n#uploadbtn[_ngcontent-%COMP%]{\r\n    margin-left: 0px;\r\n    height: 2vw;\r\n    font-weight: 700;\r\n    width: 9vw;\r\n    font-size: 63%;\r\n    display: inline-block;\r\n    line-height: 0.2vw;\r\n}\r\n#uploadslot\r\n#fileupload[_ngcontent-%COMP%]{\r\n    font-size: 1.2vw;\r\n    outline: none;\r\n    border: none;\r\n}\r\n.rightmiddlesection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    color: white;\r\n    background-color: #002e62;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color:black;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    list-style: none;\r\n    line-height: 5vw;\r\n    margin-left: -10px;\r\n    color: white;\r\n    margin-right: 23px;\r\n    cursor: pointer;\r\n\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    padding: 0.8em 2em;\r\n    border-radius: 10px;\r\n    border: none;\r\n    font-size: 1.2vw;\r\n    font-weight: 700;\r\n    background-color: rgb(185, 181, 181);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZXJzZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLDBCQUEwQjs7QUFFOUI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVzs7SUFFWCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4QyIsImZpbGUiOiJtYW5hZ2Vyc2VjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICBcclxufVxyXG4jaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTgxLCAxODEpO1xyXG4gICAgaGVpZ2h0OiA5dnc7XHJcbiAgICB3aWR0aDogOTklO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogLTAuNXZ3O1xyXG4gICAgcGFkZGluZy10b3A6IDIuMnZ3O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxufVxyXG4ubGVmdHVwcGVyZGl2IGgxe1xyXG4gICAgZm9udC1zaXplOjIuMzV2dztcclxufVxyXG4ucmlnaHR1cHBlcmRpdiBoMXtcclxuICAgIGZvbnQtc2l6ZToyLjM1dnc7XHJcbn1cclxuLnJpZ2h0dXBwZXJkaXYgaDJ7XHJcbiAgICBmb250LXNpemU6MS43NXZ3O1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IDEuMnZ3O1xyXG59XHJcblxyXG4ubGVmdHVwcGVyZGl2LCAubGVmdG1pZGxlc2VjdGlvbntcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuLnJpZ2h0dXBwZXJkaXZ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBjb2xvcjogIzAwMmU2MjtcclxuICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cclxufVxyXG4ubGVmdG1pZGxlc2VjdGlvbntcclxuICAgIHBhZGRpbmctdG9wOiAxdnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZ3O1xyXG4gICAgbWFyZ2luLXRvcDogMTAuN3Z3O1xyXG4gICAgZm9udC1zaXplOiAxLjQ1dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZTYyO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5yaWdodG1pZGRsZXNlY3Rpb257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6MTB2dztcclxuIFxyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwLjd2dztcclxufVxyXG5idXR0b257XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmlnaHRtaWRkbGVzZWN0aW9uIGJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxJTtcclxuICAgIHBhZGRpbmc6MC43dncgMS43dnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAxODEsIDE4MSk7XHJcbn1cclxuI2ZpbGV1cGxvYWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxufVxyXG4jdXBsb2FkYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGhlaWdodDogMnZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHdpZHRoOiA5dnc7XHJcbiAgICBmb250LXNpemU6IDYzJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjJ2dztcclxufVxyXG4jdXBsb2Fkc2xvdFxyXG4jZmlsZXVwbG9hZHtcclxuICAgIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5yaWdodG1pZGRsZXNlY3Rpb24gYnV0dG9uOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmU2MjtcclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnVsIGxpe1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogNXZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG51bCBsaSBidXR0b257XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAxODEsIDE4MSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManagersectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-managersection',
                templateUrl: './managersection.component.html',
                styleUrls: ['./managersection.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "QCYB":
/*!**********************************************************!*\
  !*** ./src/app/userdashboard/userdashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: UserdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdashboardComponent", function() { return UserdashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/header/header.component */ "uU1w");
/* harmony import */ var _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/leftsidemenu/leftsidemenu.component */ "JhsE");





class UserdashboardComponent {
    constructor(route) {
        this.route = route;
        this.dte = new Date();
        this.db0 = this.dte.getMonth();
        this.dt1 = this.dte.getDate();
        this.dB = this.dte.getDay();
        this.dt3 = this.dte.getHours();
        this.dt4 = this.dte.getMinutes();
        this.day_arr = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
        this.month_arr = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');
        this.dt2 = this.day_arr[this.dB];
        this.dt0 = this.month_arr[this.db0];
        this.APM = this.dt3 >= 12 ? 'PM' : 'AM';
    }
    ngOnInit() {
    }
    navigate() {
        this.route.navigate(['filemanager']);
        localStorage.setItem('mainheading', 'Resource manager section');
    }
}
UserdashboardComponent.ɵfac = function UserdashboardComponent_Factory(t) { return new (t || UserdashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
UserdashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserdashboardComponent, selectors: [["app-userdashboard"]], decls: 49, vars: 4, consts: [[1, "col-sm-11", "rightmiddlesection"], [1, "col-sm-12", "firstsegment"], [1, "row"], [1, "col-md-2"], [1, "col-md-2-ml-1", "smallsegment"], [1, "segment_header"], [1, "col-md-2-ml-0.5", "smallsegment"], [1, "col-sm-12", "secondsegment"], ["type", "text"], ["id", "gobtn", "type", "button", "value", "Go"], [1, "col-sm-12", "thirdsegment", 2, "padding-top", "1vw", "overflow", "auto"], [2, "width", "90%", "text-align", "center", "border", "1x solid black"], ["colspan", "3"], ["colspan", "2"], ["colspan", "1"], [2, "border", "1x solid black"], ["id", "btn"]], template: function UserdashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-leftsidemenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "project uploaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "citation matched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Search citation: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "resource name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "date uploaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "citation matched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "current project allocation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "client location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ABC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ".doc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "invite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", ctx.dt2, " ", ctx.dt3, ":", ctx.dt4, " ", ctx.APM, "");
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_3__["LeftsidemenuComponent"]], styles: ["*[_ngcontent-%COMP%]{\r\n    text-transform: capitalize;\r\n    margin:0px;\r\n    text-transform: capitalize;\r\n  \r\n}\r\n#header[_ngcontent-%COMP%]{\r\n    background-color: rgb(185, 181, 181);\r\n    height: 9vw;\r\n    width: 99%;\r\n    position: absolute;\r\n    margin-top: -0.5vw;\r\n    padding-top: 2.2vw;\r\n    display: block;\r\n    \r\n}\r\n.leftupperdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size:2.35vw;\r\n}\r\n.midsegment[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size:2.35vw;\r\n}\r\n.rightupperdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size:2.35vw;\r\n}\r\n.rightupperdiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size:1.75vw;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    font-size: 1.2vw;\r\n}\r\n.leftupperdiv[_ngcontent-%COMP%], .leftmidlesection[_ngcontent-%COMP%]{\r\n    \r\n    position: absolute;\r\n    z-index: 10;\r\n    margin-top: 1em;\r\n    margin-left: 1em;\r\n}\r\n.rightupperdiv[_ngcontent-%COMP%]{\r\n    float: right;\r\n    margin-top: 1em;\r\n    color: #002e62;\r\n    margin-right: 2em;\r\n    \r\n}\r\n.leftmidlesection[_ngcontent-%COMP%]{\r\n    padding-top: 1vw;\r\n    padding-bottom: 5vw;\r\n    margin-top: 10.7vw;\r\n    font-size: 1.45vw;\r\n    background-color: #002e62;\r\n    z-index: 5;\r\n    margin-left: 4px;\r\n    text-align: center;\r\n\r\n}\r\n.rightmiddlesection[_ngcontent-%COMP%]{\r\n    float: right;\r\n    height:10vw;\r\n \r\n    width: 80%;\r\n    margin-top: 5vw;\r\n}\r\n.firstsegment[_ngcontent-%COMP%]{\r\n    height:90%;\r\n    margin-top: 5%;\r\n    width:95%;\r\n    border-radius: 2px;\r\n    display: inline-block;\r\n\r\n}\r\n.secondsegment[_ngcontent-%COMP%]{\r\n    height:60%; width:95%;margin-top: 0%;font-weight: 600;\r\n}\r\n.secondsegment[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    margin-left: 15%;\r\n    font-size: 1.3vw;\r\n}\r\n.secondsegment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 27%;\r\n    height: 25%;\r\n}\r\n#gobtn[_ngcontent-%COMP%]{\r\n    width: 4vw;\r\n    height: 2vw;\r\n    margin-left: 1vw;\r\n}\r\n.thirdsegment[_ngcontent-%COMP%]{\r\n    width:95%; \r\n    background-color: rgb(241, 237, 237);\r\n    margin-top: 0%;\r\n    height: 15vw;\r\n    font-size: 1.1vw;\r\n}\r\n.thirdsegment[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    line-height: 3em;\r\n}\r\n#btn[_ngcontent-%COMP%]{\r\n    padding:6px 18px;\r\n    font-size: 15px;\r\n    margin-bottom:20px ;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    box-shadow: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n.smallsegment[_ngcontent-%COMP%]{\r\n    background-color: rgb(217, 221, 221);\r\n    font-size: 1.1vw;\r\n    text-align: center;\r\n    height: 6em;\r\n    margin-left: 1em;\r\n    min-width: 12vw;\r\n    }\r\n.segment_header[_ngcontent-%COMP%]{\r\n        font-weight: 600;\r\n    }\r\n.rightmiddlesection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 15%;\r\n    margin-left: 35%;\r\n    padding:0.7vw 1.7vw;\r\n    border-radius: 10px;\r\n    border: none;\r\n    font-size: 2vw;\r\n    background-color: rgb(185, 181, 181);\r\n}\r\n.rightmiddlesection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    color: white;\r\n    background-color: #002e62;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color:black;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    list-style: none;\r\n    line-height: 5vw;\r\n    margin-left: -10px;\r\n    color: white;\r\n    margin-right: 23px;\r\n    cursor: pointer;\r\n\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    padding: 0.8em 2em;\r\n    border-radius: 10px;\r\n    border: none;\r\n    font-size: 1.2vw;\r\n    font-weight: 700;\r\n    background-color: rgb(185, 181, 181);\r\n}\r\n@media only screen and (max-width: 700px){\r\n    #btn[_ngcontent-%COMP%]{\r\n        padding: 1px 8px;\r\n        font-size: 1vw;\r\n        margin-bottom: 8px;\r\n        cursor: pointer;\r\n        outline: none; \r\n    }\r\n    .thirdsegment[_ngcontent-%COMP%]{\r\n        margin-left: 4vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsMEJBQTBCOztBQUU5QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYzs7QUFFbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7O0lBRVgsVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQjtJQUNsQixxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxVQUFVLEVBQUUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0I7QUFDekQ7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmO0FBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osY0FBYztJQUNkLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJ1c2VyZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgXHJcbn1cclxuI2hlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDE4MSwgMTgxKTtcclxuICAgIGhlaWdodDogOXZ3O1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC0wLjV2dztcclxuICAgIHBhZGRpbmctdG9wOiAyLjJ2dztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbn1cclxuLmxlZnR1cHBlcmRpdiBoMXtcclxuICAgIGZvbnQtc2l6ZToyLjM1dnc7XHJcbn1cclxuLm1pZHNlZ21lbnQgaDF7XHJcbiAgICBmb250LXNpemU6Mi4zNXZ3O1xyXG59XHJcbi5yaWdodHVwcGVyZGl2IGgxe1xyXG4gICAgZm9udC1zaXplOjIuMzV2dztcclxufVxyXG4ucmlnaHR1cHBlcmRpdiBoMntcclxuICAgIGZvbnQtc2l6ZToxLjc1dnc7XHJcbn1cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMS4ydnc7XHJcbn1cclxuXHJcbi5sZWZ0dXBwZXJkaXYsIC5sZWZ0bWlkbGVzZWN0aW9ue1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG4ucmlnaHR1cHBlcmRpdntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGNvbG9yOiAjMDAyZTYyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAqL1xyXG59XHJcbi5sZWZ0bWlkbGVzZWN0aW9ue1xyXG4gICAgcGFkZGluZy10b3A6IDF2dztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1dnc7XHJcbiAgICBtYXJnaW4tdG9wOiAxMC43dnc7XHJcbiAgICBmb250LXNpemU6IDEuNDV2dztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJlNjI7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuLnJpZ2h0bWlkZGxlc2VjdGlvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGhlaWdodDoxMHZ3O1xyXG4gXHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLXRvcDogNXZ3O1xyXG59XHJcbi5maXJzdHNlZ21lbnR7XHJcbiAgICBoZWlnaHQ6OTAlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICB3aWR0aDo5NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG59XHJcbi5zZWNvbmRzZWdtZW50e1xyXG4gICAgaGVpZ2h0OjYwJTsgd2lkdGg6OTUlO21hcmdpbi10b3A6IDAlO2ZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnNlY29uZHNlZ21lbnQgbGFiZWx7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgZm9udC1zaXplOiAxLjN2dztcclxufVxyXG4uc2Vjb25kc2VnbWVudCBpbnB1dHtcclxuICAgIHdpZHRoOiAyNyU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxufVxyXG4jZ29idG57XHJcbiAgICB3aWR0aDogNHZ3O1xyXG4gICAgaGVpZ2h0OiAydnc7XHJcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xyXG59XHJcbi50aGlyZHNlZ21lbnR7XHJcbiAgICB3aWR0aDo5NSU7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjM3LCAyMzcpO1xyXG4gICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICBoZWlnaHQ6IDE1dnc7XHJcbiAgICBmb250LXNpemU6IDEuMXZ3O1xyXG59XHJcbi50aGlyZHNlZ21lbnQgdGFibGUgdHIgdGR7XHJcbiAgICBsaW5lLWhlaWdodDogM2VtO1xyXG59XHJcbiNidG57XHJcbiAgICBwYWRkaW5nOjZweCAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4IDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zbWFsbHNlZ21lbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAyMjEsIDIyMSk7XHJcbiAgICBmb250LXNpemU6IDEuMXZ3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA2ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gICAgbWluLXdpZHRoOiAxMnZ3O1xyXG4gICAgfVxyXG4gICAgLnNlZ21lbnRfaGVhZGVye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbi5yaWdodG1pZGRsZXNlY3Rpb24gYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxuICAgIHBhZGRpbmc6MC43dncgMS43dnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAxODEsIDE4MSk7XHJcbn1cclxuLnJpZ2h0bWlkZGxlc2VjdGlvbiBidXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZTYyO1xyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG51bCBsaXtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDV2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMjNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxudWwgbGkgYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMC44ZW0gMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTgxLCAxODEpO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xyXG4gICAgI2J0bntcclxuICAgICAgICBwYWRkaW5nOiAxcHggOHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTsgXHJcbiAgICB9XHJcbiAgICAudGhpcmRzZWdtZW50e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0dnc7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserdashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-userdashboard',
                templateUrl: './userdashboard.component.html',
                styleUrls: ['./userdashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _service_authservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authservice */ "JmMC");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/header/header.component */ "uU1w");
/* harmony import */ var _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/leftsidemenu/leftsidemenu.component */ "JhsE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _pipe_documentfilter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipe/documentfilter.pipe */ "3f1f");













const _c0 = ["dt"];
function DashboardComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_36_ng_template_4_col_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "col");
} if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", col_r12.width);
} }
function DashboardComponent_div_36_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_36_ng_template_4_col_1_Template, 1, 2, "col", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r10);
} }
function DashboardComponent_div_36_ng_template_5_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r15.header, " ");
} }
function DashboardComponent_div_36_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_36_ng_template_5_th_1_Template, 2, 1, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r13);
} }
function DashboardComponent_div_36_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No records found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", columns_r16.length);
} }
function DashboardComponent_div_36_ng_template_7_td_1_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not Edited ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_36_ng_template_7_td_1_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Edited ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_36_ng_template_7_td_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_36_ng_template_7_td_1_span_1_span_1_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_36_ng_template_7_td_1_span_1_span_2_Template, 2, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rowData_r17.isRead == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", rowData_r17.isRead == 1);
} }
function DashboardComponent_div_36_ng_template_7_td_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const rowData_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rowData_r17[col_r22.field]);
} }
function DashboardComponent_div_36_ng_template_7_td_1_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_36_ng_template_7_td_1_span_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const rowData_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.showDialog(rowData_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_36_ng_template_7_td_1_span_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const rowData_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.showDocuments(rowData_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_36_ng_template_7_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_36_ng_template_7_td_1_span_1_Template, 3, 2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_36_ng_template_7_td_1_span_2_Template, 2, 1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_36_ng_template_7_td_1_span_3_Template, 5, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", col_r22.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "isRead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "action");
} }
function DashboardComponent_div_36_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_36_ng_template_7_td_1_Template, 4, 3, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowData_r17 = ctx.$implicit;
    const columns_r18 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pEditableRow", rowData_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r18);
} }
const _c1 = function () { return { "min-width": "50rem" }; };
function DashboardComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-table", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "documentfilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_36_ng_template_4_Template, 2, 1, "ng-template", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_36_ng_template_5_Template, 2, 1, "ng-template", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_36_ng_template_6_Template, 3, 1, "ng-template", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardComponent_div_36_ng_template_7_Template, 2, 2, "ng-template", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollable", true)("columns", ctx_r2.FileManagementCols)("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 9, ctx_r2.ResumeTableData, ctx_r2.searchValue, ctx_r2.columnField))("responsive", true)("paginator", true)("rows", 5)("showCurrentPageReport", true)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1))("resizableColumns", true);
} }
function DashboardComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const head_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](head_r36.includes("Name") ? "text" : head_r36.includes("Address") ? "Description" : head_r36.includes("DOB") ? "Date" : head_r36);
} }
function DashboardComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r37.includes("GMT") ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, item_r37, "dd/MM/yyyy") : item_r37);
} }
class DashboardComponent {
    constructor(route, toast, _authorizationApi, document) {
        this.route = route;
        this.toast = toast;
        this._authorizationApi = _authorizationApi;
        this.document = document;
        this.mainheading = localStorage.getItem('mainheading');
        this.viewDetails = {
            "name1": "",
            "name2": "",
            "name3": "",
            "address1": "",
            "address2": "",
            "address3": "",
            "dob": "",
            "document_type": "",
            "identity_no": "",
            "id": "",
            "image_link": "",
            "created_date": ""
        };
        this.display = false;
        this.columnField = [];
        this.FileManagementColsFilter = [];
        this.FilterArray = [];
        this.TableHeaderArray = [];
        this.searchValue = '';
        this.TextArray = [
            { label: "Text" },
            { label: "Text" },
            { label: "Text" },
        ];
        this.showLebel = true;
        this.showLebel1 = true;
        this.showLebel2 = true;
        this.showLebel3 = true;
        this.showLebel4 = true;
        this.showLebel5 = true;
        this.spinner = false;
        this.ResumeTableDataFilter = [];
        this.funDocumentCount = () => {
            this._authorizationApi.getDocumentCont().subscribe(data => {
                console.log("documentgetCount", data);
                this.counter = data;
            });
        };
        this.ResumeTableData = [];
        this.dte = new Date();
        this.db0 = this.dte.getMonth();
        this.dt1 = this.dte.getDate();
        this.dB = this.dte.getDay();
        this.dt3 = this.dte.getHours();
        this.dt4 = this.dte.getMinutes();
        this.day_arr = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
        this.month_arr = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');
        this.dt2 = this.day_arr[this.dB];
        this.dt0 = this.month_arr[this.db0];
        this.APM = this.dt3 >= 12 ? 'PM' : 'AM';
        this.auth_key = sessionStorage.getItem("Firstname");
        this.documentCounter = 0;
        this.documentSucess = 0;
        this.documentMatched = 0;
        this.conterStop = setInterval(() => {
            this.documentCounter++;
            if (this.counter) {
                if (this.documentCounter == this.counter.Document_uploaded) {
                    clearInterval(this.conterStop);
                }
            }
        }, 15);
        this.successStop = setInterval(() => {
            this.documentSucess++;
            if (this.counter) {
                if (this.documentSucess == this.counter.Document_read_success) {
                    clearInterval(this.successStop);
                }
            }
        }, 15);
        this.matchedStop = setInterval(() => {
            if (this.counter && this.counter.Unextrable != 0) {
                this.documentMatched++;
                if (this.documentMatched == this.counter.Unextrable) {
                    clearInterval(this.matchedStop);
                }
            }
        }, 15);
    }
    clean(obj) {
        for (var propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
                delete obj[propName];
            }
        }
        return obj;
    }
    showDialog(data) {
        console.log("eyeclick", data);
        //  let filterobj = Object.keys(data).forEach(key => {
        //     if (data[key] == null) {
        //       delete data[key];
        //     }
        //   });
        console.log("obj.......", this.clean(data));
        let OBJkeys = Object.keys(this.clean(data));
        let OBJValues = Object.values(this.clean(data));
        this.TableHeaderArray = OBJkeys;
        this.FilterArray = OBJValues;
        console.log(" OBJkeys ", OBJkeys);
        console.log(" OBJValues ", this.TableHeaderArray);
        // var filtered = result.filter(function (el) {
        //   return el != null && el != "";
        // });
        // console.log("out of condition",this.FilterArray.length)
        // this.TableHeaderArray=[];
        // for (let i = 0; i < this.FilterArray.length; i++) {
        //   // console.log("out of condition")
        //    if(i==0)
        //   {
        //     this.TableHeaderArray.push("Description");
        //   }
        //   else if(i==2)
        //   {
        //     this.TableHeaderArray.push("File Type");
        //   }else if(i==3)
        //   {
        //     this.TableHeaderArray.push("Mixed data");
        //   }
        //   else if (typeof  this.FilterArray[i] == "string" && this.FilterArray[i].indexOf('GMT') > -1) {
        //       console.log("looped...",this.FilterArray[i])
        //       this.TableHeaderArray.push("Date");
        //   }else if(typeof  this.FilterArray[i] == "string" && this.FilterArray[i].indexOf('/') > -1)
        //   {
        //     this.TableHeaderArray.push("Date");
        //   }else if(typeof  this.FilterArray[i] == "string" && this.FilterArray[i].indexOf('.') > -1)
        //   {
        //     this.TableHeaderArray.push("File Name");
        //   }
        //  else{
        //   this.TableHeaderArray.push("Text");
        //  }
        // }
        console.log("array Headder", this.TableHeaderArray);
        // here all null value filltered
        if (data.Name1 == "") {
            this.showLebel = false;
        }
        if (data.Name2 == "") {
            this.showLebel1 = false;
        }
        if (data.Name3 == "") {
            this.showLebel2 = false;
        }
        if (data.Address1 == "") {
            this.showLebel3 = false;
        }
        if (data.Address2 == "") {
            this.showLebel4 = false;
        }
        if (data.Address3 == "") {
            this.showLebel5 = false;
        }
        this.viewDetails.id = data.id;
        this.viewDetails.name1 = data.Name1;
        this.viewDetails.name2 = data.Name2;
        this.viewDetails.name3 = data.Name3;
        this.viewDetails.address1 = data.Address1;
        this.viewDetails.address2 = data.Address2;
        this.viewDetails.address3 = data.Address3;
        this.viewDetails.dob = data.DOB;
        this.viewDetails.document_type = data.Document_Type;
        this.viewDetails.identity_no = data.Identity_No;
        this.viewDetails.image_link = data.image_link;
        this.viewDetails.created_date = data.created_date;
        console.log("filtered data", data);
    }
    closeDialog() {
        this.display = false;
    }
    searchField() {
        console.log("search..............", this.searchValue);
        var body = {
            "blobname": this.searchValue
        };
        this._authorizationApi.search2(body).subscribe(data => {
            console.log('columndate........', data);
            console.log('search', JSON.parse(data));
            this.ResumeTableData = JSON.parse(data);
        });
    }
    getAlldata() {
        this.spinner = true;
        setTimeout(() => this.spinner = false, 3000);
        this._authorizationApi.getDashboardData().subscribe(data => {
            console.log("dashboard data tohohoh ----------------------->", data);
            if (data.status) {
                this.ResumeTableData = data.data;
                this.ResumeTableDataFilter = data.data;
                this.columnField = Object.keys(data.data[0]);
            }
            else {
                this.toast.error("Record not found", 'Error');
            }
        });
    }
    // intervalId = setInterval(()=>this.getAlldata(), 10000);
    // ngOnDestroy() {
    //   clearInterval(this.intervalId);
    // }
    ngOnInit() {
        this.funDocumentCount();
        this.columnField = [];
        this.FileManagementCols = [
            { header: 'Uploaded Name', field: 'Name', width: '40px', sort: true },
            { header: 'Document', field: 'Document_Type', width: '40px', sort: true },
            { header: 'Date', field: 'DOB', width: '60px', sort: true },
            { header: 'Address', field: 'Address1', width: '60px', sort: true },
            { header: 'Action', field: 'action', width: '20px' }
        ];
        // this.FileManagementColsFilter = [
        //   { header: 'Name', field: 'Name', width: '40px', sort: true },
        //   { header: 'Document', field: 'Document_Type', width: '40px', sort: true },
        //   { header: 'Date', field: 'DOB', width: '60px', sort: true },
        //   { header: 'Address', field: 'Address1', width: '60px', sort: true },
        //   { header: 'Action', field: 'action', width: '20px' },
        //   { header: 'Address2', field: 'Address2', width: '20px' },
        //   // { header: 'DOB', field: 'DOB', width: '20px' },
        //   { header: 'Document_Type', field: 'Document_Type', width: '20px' },
        //   // { header: 'Identity_No', field: 'Identity_No', width: '20px' },
        //   { header: 'Name', field: 'Name', width: '20px' },
        //   { header: 'Name2', field: 'Name2', width: '20px' },
        //   { header: 'Name3', field: 'Name3', width: '20px' },
        //   { header: 'blood_group', field: 'blood_group', width: '20px' },
        //   // { header: 'college_id', field: 'college_id', width: '20px' },
        //   { header: 'column1', field: 'column1', width: '20px' },
        //   { header: 'column2', field: 'column2', width: '20px' },
        //   { header: 'column3', field: 'column3', width: '20px' },
        //   { header: 'column4', field: 'column4', width: '20px' },
        //   { header: 'column5', field: 'column5', width: '20px' },
        //   { header: 'column6', field: 'column6', width: '20px' },
        //   { header: 'column7', field: 'column7', width: '20px' },
        //   { header: 'column8', field: 'column8', width: '20px' },
        //   { header: 'column9', field: 'column9', width: '20px' },
        //   { header: 'column10', field: 'column10', width: '20px' },
        //   { header: 'course', field: 'course', width: '20px' },
        //   // { header: 'created_date', field: 'created_date', width: '20px' },
        //   { header: 'file_name', field: 'file_name', width: '20px' },
        //   // { header: 'image_count', field: 'image_count', width: '20px' },
        //   { header: 'image_link', field: 'image_link', width: '20px' },
        //   // { header: 'modified_date', field: 'modified_date', width: '20px' },
        //   { header: 'roll_no', field: 'roll_no', width: '20px' },
        //   { header: 'section', field: 'section', width: '20px' },
        //   { header: 'stream', field: 'stream', width: '20px' },
        //   { header: 'subject', field: 'subject', width: '20px' },
        //   // { header: 'valid_upto', field: 'valid_upto', width: '20px' }
        // ];
        // this.FileManagementColsFilter.forEach(el => {
        //   this.columnField.push(el.field)
        //   // console.log("dfdfdfdf",el)
        // });
        console.log('thojhhxidgns', this.columnField);
        this.getAlldata();
    }
    somethingChanged(data) {
        console.log("ccccccccccccccccccccccccccccccccccccc", data, this.searchValue);
    }
    modelChanged(newObj) {
        // console.log("asdasdasdasdasdasdsad", newObj)
        // this.ResumeTableData = this.ResumeTableDataFilter.filter((val: any) => val.toLowerCase().includes(newObj.toLowerCase()) == true)
        // this.ResumeTableData=this.ResumeTableDataFilter.filter(el=>{
        // console.log("asdasdasdasdasdasdsad", this.ResumeTableData)
        // })
        // do something with new value
    }
    userlogout() {
        sessionStorage.clear();
        this.route.navigate(['']);
        this.toast.error("Successfully logout");
    }
    navigate() {
        this.route.navigate(['filemanager']);
        localStorage.setItem('mainheading', 'Resource manager section');
    }
    showDocuments(data) {
        console.log("link..........", data);
        window.open("http://127.0.0.1:5000/viewDocument/" + data.image_link, '_blank');
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_authservice__WEBPACK_IMPORTED_MODULE_4__["Service_authorization"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rd = _t.first);
    } }, decls: 57, vars: 10, consts: [[1, "rightmiddlesection"], [1, "topContainer"], [1, "smallsegment", 2, "background-color", "#ffcc0060"], [1, "background_positon"], ["aria-hidden", "true", 1, "fa", "fa-upload", 2, "font-size", "60px", "padding", "5px", "color", "#b38f0070"], [1, "background_data"], [2, "font-weight", "800", "font-size", "50px", "color", "#002e62"], [1, "segment_header"], [1, "smallsegment", 2, "background-color", "#00cc6660"], ["aria-hidden", "true", 1, "fa", "fa-check-square-o", 2, "font-size", "60px", "color", "#00994d70"], [1, "smallsegment", 2, "background-color", "#ff330060"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle", 2, "font-size", "55px", "padding", "5px", "color", "#cc290070"], [1, "secondsegment", 2, "margin-top", "50px"], [1, "searchButton"], ["aria-hidden", "true", 1, "fa", "fa-search", 2, "font-size", "20px"], ["type", "text", "placeholder", "Search item", 1, "searchInput", 3, "value", "ngModel", "ngModelChange"], ["id", "btn", "type", "button", 1, "spinner-btn", 3, "click"], [4, "ngIf"], ["class", " thirdsegment", 4, "ngIf"], ["id", "exampleModalCenter", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myLargeModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-xl"], [1, "modal-content", 2, "border-radius", "15px"], [1, "modal-header", "modalheader", 2, "border-top-left-radius", "15px", "border-top-right-radius", "15px"], ["id", "myLargeModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 2, "background-color", "#e0e6ed"], ["aria-hidden", "true"], [1, "modal-body"], [1, "container", 2, "overflow-x", "auto"], [1, "row"], [1, "col-md-12", 2, "max-height", "500px", "overflow-y", "auto"], [1, "table"], [1, "thead-blue"], [4, "ngFor", "ngForOf"], [2, "height", "10px"], [2, "text-align", "center"], [1, "fa-solid", "fa-sync", "fa-spin"], [1, "fa-solid", "fa-sync"], [1, "thirdsegment"], ["id", "printTable", "scrollHeight", "200px", "columnResizeMode", "expand", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} entries", 3, "scrollable", "columns", "value", "responsive", "paginator", "rows", "showCurrentPageReport", "tableStyle", "resizableColumns"], ["rd", ""], ["pTemplate", "colgroup"], ["pTemplate", "header"], ["pTemplate", "emptymessage"], ["pTemplate", "body"], [3, "width", 4, "ngFor", "ngForOf"], [2, "height", "40px"], ["pResizableColumn", "", "class", "dasboardheader", 4, "ngFor", "ngForOf"], ["pResizableColumn", "", 1, "dasboardheader"], [1, "prime_row", 3, "pEditableRow"], ["class", "ui-resizable-column prim_Width ", 3, "ngSwitch", 4, "ngFor", "ngForOf"], [1, "ui-resizable-column", "prim_Width", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "hideTricks", "style", "text-align: center !important;", 4, "ngSwitchDefault"], ["style", "text-align: center;", 4, "ngSwitchCase"], ["style", "color: red; text-align: center;", 4, "ngIf"], ["style", "color: green; text-align: center;", 4, "ngIf"], [2, "color", "red", "text-align", "center"], [2, "color", "green", "text-align", "center"], [1, "hideTricks", 2, "text-align", "center !important"], ["id", "btn", "type", "button", "data-toggle", "modal", "data-target", "#exampleModalCenter", "label", "Show", 1, "btnn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["id", "btn", "type", "button", 1, "btnn", 3, "click"], [1, "fa-solid", "fa-file"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-leftsidemenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Document Uploaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Document read success");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Document Unextracted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_32_listener($event) { return ctx.modelChanged($event); })("ngModelChange", function DashboardComponent_Template_input_ngModelChange_32_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_33_listener() { return ctx.getAlldata(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DashboardComponent_span_34_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DashboardComponent_span_35_Template, 2, 0, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DashboardComponent_div_36_Template, 8, 14, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Extracted Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "thead", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, DashboardComponent_th_53_Template, 2, 1, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tbody", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, DashboardComponent_td_56_Template, 3, 4, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.documentCounter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.documentSucess);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.documentMatched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.searchValue)("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.TableHeaderArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.FilterArray);
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_6__["LeftsidemenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["Table"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["PrimeTemplate"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["ResizableColumn"], primeng_table__WEBPACK_IMPORTED_MODULE_8__["EditableRow"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"]], pipes: [_pipe_documentfilter_pipe__WEBPACK_IMPORTED_MODULE_10__["DocumentfilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["*[_ngcontent-%COMP%]{\r\n    text-transform: capitalize;\r\n    margin:0px;\r\n    text-transform: capitalize;\r\n  \r\n}\r\n\r\n.rightupperdiv[_ngcontent-%COMP%]{\r\n    float: right;\r\n    margin-top: 1em;\r\n    color: #002e62;\r\n    margin-right: 2em;\r\n    \r\n}\r\n\r\n.leftmidlesection[_ngcontent-%COMP%]{\r\n    padding-top: 1vw;\r\n    padding-bottom: 5vw;\r\n    margin-top: 10.7vw;\r\n    font-size: 1.45vw;\r\n    background-color: #002e62;\r\n    z-index: 5;\r\n    margin-left: 4px;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.segment_header[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    color: #002e62;\r\n}\r\n\r\n#exampleModalCenter[_ngcontent-%COMP%]{\r\n    margin-left: 5.5%\r\n}\r\n\r\n.rightmiddlesection[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-right: 50px;\r\n    flex-direction: column;\r\n    float: right;\r\n    height:10vw;\r\n    width: 80%;\r\n    margin-top: 9vw;\r\n}\r\n\r\n.firstsegment[_ngcontent-%COMP%]{\r\n    height:90%;\r\n    margin-top: 5%;\r\n    width:95%;\r\n    border-radius: 2px;\r\n    display: inline-block;\r\n\r\n}\r\n\r\n.secondsegment[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n    margin-right: 15%;\r\n    margin-left: 15%;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    \r\n}\r\n\r\n.searchInput[_ngcontent-%COMP%]{\r\n    border-left: none;\r\n    border-right: solid 2px;\r\n    border-top: solid 2px;\r\n    border-bottom: solid 2px;\r\n    border-color: #002e62;\r\n    border-top-right-radius: 50px;\r\n    border-bottom-right-radius: 50px;\r\n    width: 100%;\r\n    height: 50px;\r\n    color: #002e62;\r\n}\r\n\r\n.searchButton[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-right: none;\r\n    border-top-left-radius: 50px;\r\n    border-bottom-left-radius: 50px;\r\n    border-left: solid 2px;\r\n    border-top: solid 2px;\r\n    border-bottom: solid 2px;\r\n    border-color: #002e62;\r\n    width: 50px;\r\n    height: 50px;\r\n    color: rgb(0, 46, 98,.7);\r\n}\r\n\r\n.thirdsegment[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    \r\n    margin-top: 0%;\r\n    height: 22vw;\r\n    font-size: 1.1vw;\r\n    margin: 5px;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n.thirdsegment[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    line-height: 3em;\r\n}\r\n\r\n.btnn[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    cursor: pointer;\r\n    outline: none;\r\n    border-radius: 100px;\r\n    border: none;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    color: #002e62;\r\n    min-width: 10vw;\r\n}\r\n\r\n.topContainer[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    margin-right: 15%;\r\n    margin-left: 15%;\r\n\r\n}\r\n\r\n.smallsegment[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    background-color: rgb(217, 221, 221);\r\n    font-size: 1.1vw;\r\n    text-align: center;\r\n    height: 8em;\r\n    width: 100%;\r\n   border-radius: 10px;\r\n   margin: 5px;\r\n    }\r\n\r\nelement.style[_ngcontent-%COMP%] {\r\n    z-index: 1002;\r\n}\r\n\r\n.ui-widget-overlay[_ngcontent-%COMP%] {\r\n    background: rgba(0, 0, 0, .25)!important;\r\n    opacity: 1!important;\r\n    filter: alpha(opacity=100)!important;\r\n    z-index: 1049!important\r\n}\r\n\r\n.ui-dialog-titlebar-close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    display:none!important;\r\n}\r\n\r\n.ui-dialog-titlebar[_ngcontent-%COMP%]{\r\n    display:none;\r\n    }\r\n\r\n.pi-times[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n    margin-top: 8px;\r\n}\r\n\r\n.pi-times[_ngcontent-%COMP%]:hover{\r\n    color: rgb(201, 23, 23);\r\n}\r\n\r\n.description[_ngcontent-%COMP%]{\r\n    width:25%;\r\n    height:30px;\r\n    overflow: auto;\r\n}\r\n\r\n.qlrow[_ngcontent-%COMP%]{\r\n    height: 30px;\r\n}\r\n\r\n#mod[_ngcontent-%COMP%]{\r\n    background-color: rgb(206, 201, 201);\r\n    width: 85vw;\r\n    height:464px;\r\n    margin-left: 15vw;\r\n    margin-top:80px;\r\n    border:  ridge;\r\n    overflow-y: auto;\r\n}\r\n\r\n#mod[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    color: #002e62;\r\n}\r\n\r\np-dialog[_ngcontent-%COMP%]   .ui-dialog-content[_ngcontent-%COMP%] {\r\n     overflow-y:hidden!important;\r\n}\r\n\r\nbody[_ngcontent-%COMP%]   .ui-table[_ngcontent-%COMP%]   .ui-table-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]  {\r\n    text-align: center;\r\n    border: 1px solid black;\r\n    background: #002e62;\r\n    color: white;\r\n}\r\n\r\n.dasboardheader[_ngcontent-%COMP%]:nth-child(5){\r\n    border-right: none;\r\n    width: 45px;\r\n\r\n}\r\n\r\n.p-dialog[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-height: 90%;\r\n    position: relative;\r\n    transform: scale(1);\r\n    width: 800px;\r\n    background-color: aliceblue;\r\n    color: green;\r\n}\r\n\r\n.popupheading[_ngcontent-%COMP%], .popupcontain[_ngcontent-%COMP%]{\r\n    width: 98%;\r\n    margin-left: 1vw;\r\n    border-color: #002e62;\r\n}\r\n\r\n.rightmiddlesection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    color: white;\r\n    background-color: #002e62;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color:black;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    list-style: none;\r\n    line-height: 5vw;\r\n    margin-left: -10px;\r\n    color: white;\r\n    margin-right: 23px;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    padding: 0.8em 2em;\r\n    border-radius: 10px;\r\n    border: none;\r\n    font-size: 1.2vw;\r\n    font-weight: 700;\r\n    background-color: rgb(185, 181, 181);\r\n}\r\n\r\n@media only screen and (max-width: 700px){\r\n    #btn[_ngcontent-%COMP%]{\r\n        padding: 1px 8px;\r\n        font-size: 1vw;\r\n        margin-bottom: 8px;\r\n        cursor: pointer;\r\n        outline: none; \r\n    }\r\n    .thirdsegment[_ngcontent-%COMP%]{\r\n        margin-left: 4vw;\r\n    }\r\n}\r\n\r\n.prim_Width[_ngcontent-%COMP%]{\r\n   height: 40px;\r\n   \r\n}\r\n\r\n.prime_row[_ngcontent-%COMP%]:hover{\r\n    transition: .5s;\r\n    background-color: #b3d6ff;\r\n    color: #002e62;\r\n}\r\n\r\n.prime_row[_ngcontent-%COMP%]   .btnn[_ngcontent-%COMP%]:hover{\r\n    background-color: #002e62;\r\n}\r\n\r\ntr[_ngcontent-%COMP%]:nth-child(even) {\r\n    background-color: #ffffff;\r\n}\r\n\r\n.element.style[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n    border-radius: 100%;\r\n    padding: 5px;\r\n    height: 25px;\r\n    width: 25px;\r\n}\r\n\r\n.p-paginator-page[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n    border-radius: 100%;\r\n    padding: 5px;\r\n    height: 25px;\r\n    width: 25px;\r\n}\r\n\r\n.p-paginator-element.style[_ngcontent-%COMP%]{\r\n    background-color: green;\r\n    border-radius: 100%;\r\n    padding: 5px;\r\n    height: 25px;\r\n    width: 25px;\r\n}\r\n\r\n.modalheader[_ngcontent-%COMP%]{\r\n    background-color: #002e62;\r\n    color: #e6e6e6;\r\n}\r\n\r\n.background_positon[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    position: absolute;\r\n    margin-left: 5px;\r\n    margin-right: 10px;\r\n    height: 50px;\r\n    width: 50px;\r\n    font-size: 60px;\r\n}\r\n\r\n.background_data[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: center;\r\n    align-self: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    z-index: 2;\r\n}\r\n\r\n.prime_row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    padding-left: 20px;\r\n}\r\n\r\n\r\n\r\n.thead-blue[_ngcontent-%COMP%]{\r\n    background-color: #e9ecef;\r\n    text-align: center;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    min-width: 10rem;\r\n}\r\n\r\n.modalheader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    background-color: #e0e6ed;\r\n    border-radius: 20px;\r\n    width: 25px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n@media screen and (min-width: 768px) { \r\n    .modal[_ngcontent-%COMP%]:before {\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      content: \" \";\r\n      height: 100%;\r\n    }\r\n  }\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n  }\r\n\r\n.spinner-btn[_ngcontent-%COMP%]{\r\n    \r\n    font-size: 15px;\r\n    cursor: pointer;\r\n    outline: none !important;\r\n    border: none !important;\r\n    background-color: #fff !important;\r\n    color: #000 !important;\r\n  }\r\n\r\n.spinner-btn[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{\r\n     color: #000 !important;\r\n     background-color:#ffffff !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFVBQVU7SUFDViwwQkFBMEI7O0FBRTlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztJQUNULGtCQUFrQjtJQUNsQixxQkFBcUI7O0FBRXpCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZ0JBQWdCOztBQUVwQjs7QUFDQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztHQUNaLG1CQUFtQjtHQUNuQixXQUFXO0lBQ1Y7O0FBR0o7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEM7QUFDSjs7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLFlBQVk7SUFDWjs7QUFDSjtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBQ0E7S0FDSywyQkFBMkI7QUFDaEM7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7O0FBRWY7O0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBQ0E7R0FDRyxZQUFZOztBQUVmOztBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBLHdEQUF3RDs7QUFDeEQ7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFO01BQ0UscUJBQXFCO01BQ3JCLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osWUFBWTtJQUNkO0VBQ0Y7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7QUFDQTtJQUNFLCtEQUErRDtJQUMvRCxlQUFlO0lBQ2YsZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLHNCQUFzQjtFQUN4Qjs7QUFDQTtLQUNHLHNCQUFzQjtLQUN0QixtQ0FBbUM7RUFDdEMiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgXHJcbn1cclxuXHJcbi5yaWdodHVwcGVyZGl2e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgY29sb3I6ICMwMDJlNjI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXHJcbn1cclxuLmxlZnRtaWRsZXNlY3Rpb257XHJcbiAgICBwYWRkaW5nLXRvcDogMXZ3O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDV2dztcclxuICAgIG1hcmdpbi10b3A6IDEwLjd2dztcclxuICAgIGZvbnQtc2l6ZTogMS40NXZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmU2MjtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnNlZ21lbnRfaGVhZGVye1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAyZTYyO1xyXG59XHJcbiNleGFtcGxlTW9kYWxDZW50ZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNS41JVxyXG59XHJcbi5yaWdodG1pZGRsZXNlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGhlaWdodDoxMHZ3O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDl2dztcclxufVxyXG4uZmlyc3RzZWdtZW50e1xyXG4gICAgaGVpZ2h0OjkwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgd2lkdGg6OTUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxufVxyXG4uc2Vjb25kc2VnbWVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgXHJcbn1cclxuLnNlYXJjaElucHV0e1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweDtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDJweDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMmU2MjtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjMDAyZTYyO1xyXG59XHJcbi5zZWFyY2hCdXR0b257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgMnB4O1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAyZTYyO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDQ2LCA5OCwuNyk7XHJcbn1cclxuLnRoaXJkc2VnbWVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMjksIDIyOSk7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAwJTtcclxuICAgIGhlaWdodDogMjJ2dztcclxuICAgIGZvbnQtc2l6ZTogMS4xdnc7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi50aGlyZHNlZ21lbnQgdGFibGUgdHIgdGR7XHJcbiAgICBsaW5lLWhlaWdodDogM2VtO1xyXG59XHJcbi5idG5ue1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDJlNjI7XHJcbiAgICBtaW4td2lkdGg6IDEwdnc7XHJcbn1cclxuXHJcbi50b3BDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuXHJcbn1cclxuLnNtYWxsc2VnbWVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAyMjEsIDIyMSk7XHJcbiAgICBmb250LXNpemU6IDEuMXZ3O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA4ZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgbWFyZ2luOiA1cHg7XHJcbiAgICB9XHJcblxyXG5cclxuZWxlbWVudC5zdHlsZSB7XHJcbiAgICB6LWluZGV4OiAxMDAyO1xyXG59XHJcbi51aS13aWRnZXQtb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4yNSkhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSFpbXBvcnRhbnQ7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKSFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDQ5IWltcG9ydGFudFxyXG59XHJcbi51aS1kaWFsb2ctdGl0bGViYXItY2xvc2Ugc3BhbiB7XHJcbiAgICBkaXNwbGF5Om5vbmUhaW1wb3J0YW50O1xyXG59XHJcbi51aS1kaWFsb2ctdGl0bGViYXJ7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbi5waS10aW1lc3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4ucGktdGltZXM6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDIwMSwgMjMsIDIzKTtcclxufVxyXG4uZGVzY3JpcHRpb257XHJcbiAgICB3aWR0aDoyNSU7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5xbHJvd3tcclxuICAgIGhlaWdodDogMzBweDtcclxufVxyXG4jbW9ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjAxLCAyMDEpO1xyXG4gICAgd2lkdGg6IDg1dnc7XHJcbiAgICBoZWlnaHQ6NDY0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTV2dztcclxuICAgIG1hcmdpbi10b3A6ODBweDtcclxuICAgIGJvcmRlcjogIHJpZGdlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuI21vZCBsZWdlbmR7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMwMDJlNjI7XHJcbn1cclxucC1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgICBvdmVyZmxvdy15OmhpZGRlbiFpbXBvcnRhbnQ7XHJcbn1cclxuYm9keSAudWktdGFibGUgLnVpLXRhYmxlLXRoZWFkPnRyPnRoICB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQ6ICMwMDJlNjI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmRhc2JvYXJkaGVhZGVyOm50aC1jaGlsZCg1KXtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG5cclxufVxyXG4ucC1kaWFsb2cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG59XHJcbi5wb3B1cGhlYWRpbmcsIC5wb3B1cGNvbnRhaW57XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcclxuICAgIGJvcmRlci1jb2xvcjogIzAwMmU2MjtcclxufVxyXG4ucmlnaHRtaWRkbGVzZWN0aW9uIGJ1dHRvbjpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDJlNjI7XHJcbn1cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbnVsIGxpe1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogNXZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG51bCBsaSBidXR0b257XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxLjJ2dztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAxODEsIDE4MSk7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XHJcbiAgICAjYnRue1xyXG4gICAgICAgIHBhZGRpbmc6IDFweCA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxdnc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBvdXRsaW5lOiBub25lOyBcclxuICAgIH1cclxuICAgIC50aGlyZHNlZ21lbnR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDR2dztcclxuICAgIH1cclxufVxyXG4ucHJpbV9XaWR0aHtcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gICBcclxufVxyXG4ucHJpbWVfcm93OmhvdmVye1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IzZDZmZjtcclxuICAgIGNvbG9yOiAjMDAyZTYyO1xyXG59XHJcbi5wcmltZV9yb3cgLmJ0bm46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZTYyO1xyXG59XHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmVsZW1lbnQuc3R5bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLnAtcGFnaW5hdG9yLXBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLnAtcGFnaW5hdG9yLWVsZW1lbnQuc3R5bGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxufVxyXG5cclxuLm1vZGFsaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmU2MjtcclxuICAgIGNvbG9yOiAjZTZlNmU2O1xyXG59XHJcblxyXG4uYmFja2dyb3VuZF9wb3NpdG9ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG4uYmFja2dyb3VuZF9kYXRhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLnByaW1lX3JvdyB0ZHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi50aGVhZC1ibHVle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGFibGUgdGh7XHJcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xyXG59XHJcblxyXG4ubW9kYWxoZWFkZXIgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTZlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7IFxyXG4gICAgLm1vZGFsOmJlZm9yZSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcbiAgLnNwaW5uZXItYnRue1xyXG4gICAgLyogc3R5bGU9XCJiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7Ym9yZGVyOiBub25lO1wiICovXHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5zcGlubmVyLWJ0biA6aG92ZXJ7XHJcbiAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYgIWltcG9ydGFudDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _service_authservice__WEBPACK_IMPORTED_MODULE_4__["Service_authorization"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { rd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dt']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'resourcemanagement';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _managersection_managersection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./managersection/managersection.component */ "Lz9g");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _filemanagement_filemanagement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filemanagement/filemanagement.component */ "bfCW");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _editpage_editpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editpage/editpage.component */ "e813");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/header/header.component */ "uU1w");
/* harmony import */ var _app_common_additional_auth_guard_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app/common/additional/auth-guard.guard */ "x3DB");
/* harmony import */ var _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/leftsidemenu/leftsidemenu.component */ "JhsE");
/* harmony import */ var _userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./userdashboard/userdashboard.component */ "QCYB");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dialog */ "/RsI");
/* harmony import */ var _pipe_documentfilter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipe/documentfilter.pipe */ "3f1f");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "icRW");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./setting/setting.component */ "l7Ag");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/autocomplete */ "V5BG");



























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _app_common_additional_auth_guard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuardGuard"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"],
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_18__["TableModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_19__["DialogModule"],
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_23__["AutoCompleteModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                timeOut: 2500,
                preventDuplicates: true
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _managersection_managersection_component__WEBPACK_IMPORTED_MODULE_5__["ManagersectionComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        _filemanagement_filemanagement_component__WEBPACK_IMPORTED_MODULE_7__["FilemanagementComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        _editpage_editpage_component__WEBPACK_IMPORTED_MODULE_9__["EditpageComponent"],
        _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
        _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_16__["LeftsidemenuComponent"],
        _userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_17__["UserdashboardComponent"],
        _pipe_documentfilter_pipe__WEBPACK_IMPORTED_MODULE_20__["DocumentfilterPipe"],
        _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_21__["AutocompleteComponent"],
        _setting_setting_component__WEBPACK_IMPORTED_MODULE_22__["SettingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        primeng_table__WEBPACK_IMPORTED_MODULE_18__["TableModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_19__["DialogModule"],
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_23__["AutoCompleteModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _managersection_managersection_component__WEBPACK_IMPORTED_MODULE_5__["ManagersectionComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                    _filemanagement_filemanagement_component__WEBPACK_IMPORTED_MODULE_7__["FilemanagementComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                    _editpage_editpage_component__WEBPACK_IMPORTED_MODULE_9__["EditpageComponent"],
                    _common_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                    _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_16__["LeftsidemenuComponent"],
                    _userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_17__["UserdashboardComponent"],
                    _pipe_documentfilter_pipe__WEBPACK_IMPORTED_MODULE_20__["DocumentfilterPipe"],
                    _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_21__["AutocompleteComponent"],
                    _setting_setting_component__WEBPACK_IMPORTED_MODULE_22__["SettingComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    primeng_table__WEBPACK_IMPORTED_MODULE_18__["TableModule"],
                    primeng_dialog__WEBPACK_IMPORTED_MODULE_19__["DialogModule"],
                    primeng_autocomplete__WEBPACK_IMPORTED_MODULE_23__["AutoCompleteModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                        timeOut: 2500,
                        preventDuplicates: true
                    }),
                ],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _app_common_additional_auth_guard_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuardGuard"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"],
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bfCW":
/*!************************************************************!*\
  !*** ./src/app/filemanagement/filemanagement.component.ts ***!
  \************************************************************/
/*! exports provided: FilemanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilemanagementComponent", function() { return FilemanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _service_authservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/authservice */ "JmMC");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/header/header.component */ "uU1w");
/* harmony import */ var _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/leftsidemenu/leftsidemenu.component */ "JhsE");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/autocomplete */ "V5BG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












const _c0 = ["inputFile"];
const _c1 = ["autocomplete"];
const _c2 = ["fileNameSearch"];
function FilemanagementComponent_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 16);
} }
function FilemanagementComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.selectedFilesNo, " files");
} }
class FilemanagementComponent {
    constructor(DATE, route, toast, _authorizationApi, document, renderer) {
        this.route = route;
        this.toast = toast;
        this._authorizationApi = _authorizationApi;
        this.document = document;
        this.renderer = renderer;
        this.mainheading = localStorage.getItem('mainheading');
        this.searchText = '';
        this.columnField = [];
        this.title = 'web1';
        this.allFiles = [];
        this.filearray = [];
        this.showsSearchesPanel = false;
        this.isSearching = false;
        this.ArrayData = [];
        this.apiArrayData = [];
        this.dte = new Date();
        this.dty = this.dte.getFullYear();
        this.db0 = this.dte.getMonth();
        this.dt1 = this.dte.getDate();
        this.dB = this.dte.getDay();
        this.dt3 = this.dte.getHours();
        this.dt4 = this.dte.getMinutes();
        this.day_arr = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
        this.month_arr = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');
        this.dt2 = this.day_arr[this.dB];
        this.dt0 = this.month_arr[this.db0];
        this.APM = this.dt3 >= 12 ? 'PM' : 'AM';
        this.fileData = [];
        this.FileManagementCols = new Array();
        this.fileName = "";
        this.fileId = 0;
        this.FileNameShow = false;
        // this.ArrayData = [
        //   'tohid_30-1-2005',
        //   'tohid-2-05-2023-murshidabad',
        //   'tohid',
        //   'tohid',
        //   'tohid',
        //   'tohid',
        //   'tohid',
        //   'tohid',
        //   'tohid',
        //   'tohid'
        // ]
    }
    ngOnInit() {
        this.FileManagementCols = [
            { header: 'Name', field: 'Name', width: '60px', sort: true },
            { header: 'Upload Date', field: 'created_date', width: '100px', sort: true },
            { header: 'Number of Images', field: 'image_count', width: '60px', sort: true },
        ];
        this.FileManagementCols.forEach(el => el.field != 'image_count' ? this.columnField.push(el.field) : '');
        // this._authorizationApi.getResumeList().subscribe(data => {
        //   this.ResumeTableData = JSON.parse(data)
        //   console.log('dd', this.ResumeTableData)
        //   this.ResumeTableData.forEach(element => {
        //     if (element.isRead == 1) {
        //       element.status = "Edited";
        //     }
        //     else {
        //       element.status = "Not Edited";
        //     }
        //   });
        // })
        this._authorizationApi.searchableDropdown().subscribe(data => {
            //this.ArrayData = data.data
            this.searchDATA = data.data;
            console.log("Searchable drop down------>", this.searchDATA);
            for (let index = 0; index < data.data.length; index++) {
                if (data.data[index].Name) {
                    this.ArrayData.push(data.data[index].Name);
                    //this.ArrayData.push(data.data[index].id)
                }
            }
            // console.log("arr data------>", this.ArrayData);
        });
        // this._authorizationApi.getAllUploadedFile().subscribe(data => {
        //   console.log('fileall data --------------------->', data)
        //   if (data.status) {
        //     this.ResumeTableData = data.data
        //   }
        //   else {
        //     //this.ResumeTableData = "";
        //   }
        // })
        // this.renderer.addClass(
        //   this.document.getElementById('upload_document'),
        //   'active'
        // );
    }
    goToLink(rowdata) {
        this.allImageArray = rowdata.file_name.split(',');
        console.log("file names arr==========================>", this.allImageArray);
    }
    navigate() {
        this.route.navigate(['Managersection']);
        localStorage.setItem('mainheading', 'Resource manager section');
    }
    navigate1(val) {
        this.route.navigate(['/editpage']);
        sessionStorage.setItem('filename', val.blobName);
        sessionStorage.setItem('blobid', val.blobId);
        sessionStorage.setItem('isRead', val.isRead);
    }
    userlogout() {
        sessionStorage.clear();
        this.route.navigate(['']);
        this.toast.error("Successfully logout");
    }
    selectonfile(event) {
        console.log("files name", event.target.files.length);
        if (event.target.files.length !== 0) {
            this.FileNameShow = true;
            this.selectedFilesNo = event.target.files.length;
        }
        for (let i = 0; i < event.target.files.length; i++) {
            this.allFiles.push(event.target.files[i]);
        }
    }
    uploadResume() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.UserID = sessionStorage.getItem("userid");
            console.log("UserData......", this.UserID);
            const formData = new FormData();
            console.log("upload name,,,,,,,", this.fileName);
            if (this.fileName != "" && this.allFiles.length > 0) {
                // if(this.fileId !=""){
                //   formData.append("id", this.fileId);
                // }
                // else{
                //   formData.append("id", "0");       
                // } 
                formData.append("name", this.fileName);
                formData.append("uploaded_by", this.UserID);
                formData.append("id", this.fileId);
                for (var i = 0; i < this.allFiles.length; i++) {
                    formData.append("file", this.allFiles[i]);
                }
                // console.log(formData);
                // console.log("file name",this.fileName);
                // console.log("field name",this.fileId);
                // console.log("all files",this.allFiles);
                this._authorizationApi.upload(formData).subscribe(data => {
                    console.log("Uploadedrespp", data);
                    if (data.status) {
                        this.fileId = "";
                        this.toast.success("File upload successfully", 'Success');
                        setTimeout(() => {
                            window.location.reload();
                        }, 1500);
                    }
                    else {
                        this.toast.error("File not uploaded", 'Error');
                    }
                });
            }
            else {
                this.toast.error("Please fill the required fields ", 'Error');
            }
        });
    }
    // filterFileName(data: any) {
    //   return this.ArrayData.filter((val: any) => val.toLowerCase().includes(data.toLowerCase()) == true)
    // }
    // setFileName(data: any) {
    //   // console.log("keyup ",data);
    //   this.fileId = 0;
    //   console.log('data id key', data.target.value)
    //   if (data.target.value != '') {
    //     // this.apiArrayData = this.filterFileName(data.target.value);
    //     this.apiArrayData = this.ArrayData.filter((val: any) => val.toLowerCase().includes(data.target.value.toLowerCase()) == true)
    //     console.log("keyup ", data);
    //   }
    //   else {
    //     this.apiArrayData = [];
    //   }
    // }
    selectFileName(data) {
        console.log('select file name', data);
        this.fileId = data.id;
        console.log("after select", this.fileId);
        // this.fileName = data
        // this.showsSearchesPanel = false
        // for (let index = 0; index < this.searchDATA.length; index++) {
        //   if (data == this.searchDATA[index].Name) {
        //     this.fileId = this.searchDATA[index].id
        //     console.log("update file id",this.fileId);
        //   }
        // }
    }
    // searchoutevent() {
    //   this.showsSearchesPanel = !this.showsSearchesPanel
    // }
    // searchInput: any
    // clearSearch() {
    //   this.searchInput = this.document.getElementById('search_input');
    //   this.fileName = "";
    //   this.apiArrayData = [];
    //   // this.ArrayData=[]
    //   this.searchInput.focus();
    //   console.log(this.searchInput);
    // }
    //-------------------------Rabi--------------------------
    filterSearchData(event) {
        let filtered = [];
        let query = event.query;
        //console.log(query);
        for (let i = 0; i < this.searchDATA.length; i++) {
            let dataSearch = this.searchDATA[i];
            //console.log("datasearchname::",dataSearch.Name);
            //let ds = "BurdwanRohan09-03-23";
            //console.log(dataSearch.Name.toLowerCase().indexOf(query.toLowerCase()));
            if (dataSearch.Name.toLowerCase().indexOf(query.toLowerCase()) != -1) {
                filtered.push(dataSearch);
            }
        }
        this.filteredSearchData = filtered;
    }
    onClear() {
        this.fileName = '';
    }
}
FilemanagementComponent.ɵfac = function FilemanagementComponent_Factory(t) { return new (t || FilemanagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_authservice__WEBPACK_IMPORTED_MODULE_5__["Service_authorization"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
FilemanagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilemanagementComponent, selectors: [["app-filemanagement"]], viewQuery: function FilemanagementComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myInputVariable = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.autocomplete = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileInputSearch = _t.first);
    } }, decls: 21, vars: 6, consts: [[1, "container-fluid", "rightmiddlesection"], [1, "container", "rightmiddlesection", 2, "margin", "auto", "width", "65%", "align-items", "center", "align-content", "center"], [1, "serachBox"], [1, ""], [1, "p-mr-2"], [1, "p-inputgroup"], ["styleClass", "p-autocomplete-list-item ", "field", "Name", "placeholder", "Search or input Name", "emptyMessage", "No Filename Found", 3, "ngModel", "suggestions", "minLength", "showClear", "ngModelChange", "completeMethod", "onSelect"], [1, "p-inputgroup-addon", 2, "cursor", "pointer", 3, "click"], ["class", "pi pi-times", 4, "ngIf"], [1, "middleitem"], [3, "click"], ["src", "assets/upload-icon.png", "width", "50", "height", "50", "alt", "", "data-toggle", "tooltip", "data-placement", "top", "title", "Choose files", 2, "border", "none", "cursor", "pointer"], ["multiple", "", "accept", "image/png,image/jpeg,image/jpg,application/pdf", "type", "file", "id", "fileupload", 2, "display", "none", 3, "change"], ["uploadFile", ""], ["class", "file-names", 4, "ngIf"], ["id", "btn-uploads", 1, "btn-upload", 3, "click"], [1, "pi", "pi-times"], [1, "file-names"]], template: function FilemanagementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-leftsidemenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-autoComplete", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function FilemanagementComponent_Template_p_autoComplete_ngModelChange_9_listener($event) { return ctx.fileName = $event; })("completeMethod", function FilemanagementComponent_Template_p_autoComplete_completeMethod_9_listener($event) { return ctx.filterSearchData($event); })("onSelect", function FilemanagementComponent_Template_p_autoComplete_onSelect_9_listener($event) { return ctx.selectFileName($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilemanagementComponent_Template_span_click_10_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FilemanagementComponent_i_11_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilemanagementComponent_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function FilemanagementComponent_Template_input_change_15_listener($event) { return ctx.selectonfile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, FilemanagementComponent_span_17_Template, 2, 1, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilemanagementComponent_Template_button_click_19_listener() { return ctx.uploadResume(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.fileName)("suggestions", ctx.filteredSearchData)("minLength", 1)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fileName == null ? null : ctx.fileName.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.FileNameShow);
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_7__["LeftsidemenuComponent"], primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutoComplete"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n  margin: 0px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n#header[_ngcontent-%COMP%] {\r\n  background-color: rgb(185, 181, 181);\r\n  height: 9vw;\r\n  width: 99%;\r\n  position: absolute;\r\n  margin-top: -0.5vw;\r\n  padding-top: 2.2vw;\r\n  display: block;\r\n}\r\n\r\n.leftupperdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 2.35vw;\r\n}\r\n\r\n.rightupperdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 2.35vw;\r\n}\r\n\r\n.rightupperdiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.75vw;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 1.2vw;\r\n}\r\n\r\n.leftupperdiv[_ngcontent-%COMP%], .leftmidlesection[_ngcontent-%COMP%] {\r\n  \r\n  position: absolute;\r\n  z-index: 10;\r\n  margin-top: 1em;\r\n  margin-left: 1em;\r\n}\r\n\r\n.rightupperdiv[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-top: 1em;\r\n  color: #002e62;\r\n  margin-right: 2em;\r\n  \r\n}\r\n\r\n.leftmidlesection[_ngcontent-%COMP%] {\r\n  padding-top: 1vw;\r\n  padding-bottom: 5vw;\r\n  margin-top: 10.7vw;\r\n  font-size: 1.45vw;\r\n  background-color: #002e62;\r\n  z-index: 5;\r\n  margin-left: 4px;\r\n  text-align: center;\r\n}\r\n\r\n#upload[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  padding: 4px;\r\n  position: absolute;\r\n  font-size: 12px;\r\n  display: inline-block;\r\n  margin-top: 8px;\r\n  margin-left: 8vw;\r\n}\r\n\r\nprogress[value][_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 40%;\r\n  margin-left: 14em;\r\n}\r\n\r\n#tag[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-top: 1em;\r\n  font-size: 12px;\r\n  margin-left: 10em;\r\n  font-weight: 600;\r\n}\r\n\r\n#btn[_ngcontent-%COMP%] {\r\n  padding: 5px 9px;\r\n  font-size: 15px;\r\n  margin-bottom: 20px;\r\n  cursor: pointer;\r\n  outline: none;\r\n  border-radius: 4px;\r\n}\r\n\r\n.firstsegment[_ngcontent-%COMP%] {\r\n  background-color: rgb(241, 237, 237);\r\n  height: 30%;\r\n  margin-top: 3%;\r\n  width: 100%;\r\n  border-radius: 2px;\r\n}\r\n\r\n.topsegment[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  background-color: aqua;\r\n  height: 50px;\r\n}\r\n\r\n.secondsegment[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: rgb(241, 237, 237);\r\n  margin-top: 1%;\r\n}\r\n\r\n.thirdsegment[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: rgb(241, 237, 237);\r\n  margin-top: 1%;\r\n  height: 23vw;\r\n}\r\n\r\n.thirdsegment[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  line-height: 3em;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  list-style: none;\r\n  line-height: 5vw;\r\n  margin-left: -10px;\r\n  color: white;\r\n  margin-right: 23px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.leftupperdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 2.35vw;\r\n}\r\n\r\n.rightupperdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 2.35vw;\r\n}\r\n\r\n.rightupperdiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.75vw;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 1.2vw;\r\n}\r\n\r\n.leftupperdiv[_ngcontent-%COMP%], .leftmidlesection[_ngcontent-%COMP%] {\r\n  \r\n  position: absolute;\r\n  z-index: 10;\r\n  margin-top: 1em;\r\n  margin-left: 1em;\r\n}\r\n\r\n.rightupperdiv[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-top: 1em;\r\n  color: #002e62;\r\n  margin-right: 2em;\r\n  \r\n}\r\n\r\n.leftmidlesection[_ngcontent-%COMP%] {\r\n  padding-top: 1vw;\r\n  padding-bottom: 5vw;\r\n  margin-top: 10.7vw;\r\n  font-size: 1.45vw;\r\n  background-color: #002e62;\r\n  z-index: 5;\r\n  margin-left: 4px;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  list-style: none;\r\n  line-height: 5vw;\r\n  margin-left: -10px;\r\n  color: white;\r\n  margin-right: 23px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.logo[_ngcontent-%COMP%]{    \r\n    margin-top: 4%;\r\n    margin-bottom: 15px;\r\n    margin-left: 43%;\r\n  }\r\n\r\n.rightmiddlesection[_ngcontent-%COMP%] {\r\n    float: right;\r\n    height: 10vw;\r\n    width: 100%;\r\n    \r\n    margin-top: 22%;\r\n    margin-right: 3vw;\r\n  }\r\n\r\n.search-bar[_ngcontent-%COMP%]{    \r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 1%;\r\n    margin-bottom: 0px;\r\n    margin-left: 20%;\r\n  }\r\n\r\n.search-input[_ngcontent-%COMP%]{\r\n    \r\n    border-color: #002e62;\r\n    border: solid 2px;    \r\n    border-radius: 50px;\r\n    height: 50px;\r\n    color: #002e62;\r\n  }\r\n\r\n#fileupload[_ngcontent-%COMP%]{\r\n    \r\n    border-color: #002e62;\r\n    border: solid 2px;    \r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    color: #002e62;\r\n    margin-top: 5px;\r\n  }\r\n\r\n.col-2-custom[_ngcontent-%COMP%] {\r\n    flex: 0 0 7%;\r\n    max-width: 16.666667%;\r\n    margin-left: 1%;\r\n}\r\n\r\n.btn-upload[_ngcontent-%COMP%]{\r\n    height: 2.3vw;\r\n    border: none;\r\n    border-radius: 6px;\r\n    width: 5vw;    \r\n    color: #FFFFFF;\r\n    background-color: #002e62;\r\n    margin-top: 5px;\r\n  }\r\n\r\n.file-names[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    align-self: center;\r\n    border: none;\r\n    border-radius: 6px;\r\n    width: 5vw;    \r\n    color: black;\r\n    margin-top: 5px;\r\n    \r\n  }\r\n\r\n#fileupload[_ngcontent-%COMP%]::file-selector-button{\r\n    background: #002e62;\r\n    color: #FFFFFF;\r\n    margin-top: -3vw;\r\n  }\r\n\r\n.search-list[_ngcontent-%COMP%]{    \r\n    margin-left: 29.5%;\r\n    width: 44.5vw;\r\n  }\r\n\r\n.cross[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    background-color: #e0e6ed;   \r\n    float: right;\r\n    margin-bottom: -40px;\r\n  }\r\n\r\n[_nghost-%COMP%]     .p-inputtext {\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";\r\n    font-size: 1rem;\r\n    \r\n    background: #fff;\r\n    \r\n    color: #002e62;\r\n    width: 400px;\r\n    padding: 0.75rem 1.75rem;\r\n    \r\n    border-top: solid 2px;\r\n    border-bottom: solid 2px;\r\n    border-left: solid 2px;\r\n    border-right: unset;\r\n    border-color: #002e62;\r\n    transition: background-color .2s,color .2s,border-color .2s,box-shadow .2s;\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    border-radius: unset !important;\r\n    border-top-left-radius: 50px !important;\r\n    border-bottom-left-radius: 50px !important;\r\n}\r\n\r\n[_nghost-%COMP%]     .p-inputgroup button:last-child, .p-inputgroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:last-child, .p-inputgroup-addon[_ngcontent-%COMP%]:last-child, .p-inputgroup[_ngcontent-%COMP%] > .p-inputwrapper[_ngcontent-%COMP%]:last-child > .p-component[_ngcontent-%COMP%], .p-inputgroup[_ngcontent-%COMP%] > .p-inputwrapper[_ngcontent-%COMP%]:last-child > .p-component[_ngcontent-%COMP%] > .p-inputtext[_ngcontent-%COMP%] {\r\n  border-top-right-radius: 50px;\r\n  border-bottom-right-radius: 50px;\r\n  \r\n  background: #fff;\r\n  border-top: solid 2px;\r\n  border-bottom: solid 2px;\r\n  border-right: solid 2px;\r\n  border-color: #002e62;\r\n  border-left: unset;\r\n  \r\n}\r\n\r\n[_nghost-%COMP%]     .p-inputtext:enabled:focus{\r\n  border-color: unset !important;\r\n  box-shadow: unset ;\r\n}\r\n\r\n[_nghost-%COMP%]     .p-inputtext:enabled:hover{\r\n  border-color: unset !important;\r\n}\r\n\r\n.serachBox[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  \r\n\r\n}\r\n\r\n.middleitem[_ngcontent-%COMP%]{\r\n  margin-left: 80px;\r\n  margin-right: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGVtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFHQSxzQ0FBc0M7O0FBRXRDO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTs7Ozs7O0dBTUc7O0FBR0g7Ozs7Ozs7O0dBUUc7O0FBRUg7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFRSxxRkFBcUY7O0FBQ3JGO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRTs7dUJBRW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztBQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7QUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFDRTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7RUFDakI7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsK0JBQStCO0VBQ2pDOztBQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztBQUVBO0lBQ0U7O2lCQUVhO0lBQ2I7Ozs7MkJBSXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osb0JBQW9CO0VBQ3RCOztBQUNBO0lBQ0UsaUpBQWlKO0lBQ2pKLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiwwRUFBMEU7SUFDMUUsd0JBQWdCO09BQWhCLHFCQUFnQjtZQUFoQixnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLHVDQUF1QztJQUN2QywwQ0FBMEM7QUFDOUM7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGtCQUFrQjs7QUFFcEI7O0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjt3QkFDc0I7O0FBRXhCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJmaWxlbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDE4MSwgMTgxKTtcclxuICBoZWlnaHQ6IDl2dztcclxuICB3aWR0aDogOTklO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAtMC41dnc7XHJcbiAgcGFkZGluZy10b3A6IDIuMnZ3O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5sZWZ0dXBwZXJkaXYgaDEge1xyXG4gIGZvbnQtc2l6ZTogMi4zNXZ3O1xyXG59XHJcbi5yaWdodHVwcGVyZGl2IGgxIHtcclxuICBmb250LXNpemU6IDIuMzV2dztcclxufVxyXG4ucmlnaHR1cHBlcmRpdiBoMiB7XHJcbiAgZm9udC1zaXplOiAxLjc1dnc7XHJcbn1cclxucCB7XHJcbiAgZm9udC1zaXplOiAxLjJ2dztcclxufVxyXG5cclxuLmxlZnR1cHBlcmRpdixcclxuLmxlZnRtaWRsZXNlY3Rpb24ge1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG59XHJcbi5yaWdodHVwcGVyZGl2IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIGNvbG9yOiAjMDAyZTYyO1xyXG4gIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICovXHJcbn1cclxuLmxlZnRtaWRsZXNlY3Rpb24ge1xyXG4gIHBhZGRpbmctdG9wOiAxdnc7XHJcbiAgcGFkZGluZy1ib3R0b206IDV2dztcclxuICBtYXJnaW4tdG9wOiAxMC43dnc7XHJcbiAgZm9udC1zaXplOiAxLjQ1dnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmU2MjtcclxuICB6LWluZGV4OiA1O1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuI3VwbG9hZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4dnc7XHJcbn1cclxuXHJcbnByb2dyZXNzW3ZhbHVlXSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE0ZW07XHJcbn1cclxuI3RhZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuI2J0biB7XHJcbiAgcGFkZGluZzogNXB4IDlweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLmZpcnN0c2VnbWVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjM3LCAyMzcpO1xyXG4gIGhlaWdodDogMzAlO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4udG9wc2VnbWVudHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zZWNvbmRzZWdtZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMzcsIDIzNyk7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuLnRoaXJkc2VnbWVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjM3LCAyMzcpO1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIGhlaWdodDogMjN2dztcclxufVxyXG4udGhpcmRzZWdtZW50IHRhYmxlIHRyIHRkIHtcclxuICBsaW5lLWhlaWdodDogM2VtO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxudWwgbGkge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBsaW5lLWhlaWdodDogNXZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIGZpbGVtYW5hZ2VtZW50IGNzcyBtZXJnZSBmcm9tIGhlcmUqL1xyXG5cclxuLmxlZnR1cHBlcmRpdiBoMSB7XHJcbiAgZm9udC1zaXplOiAyLjM1dnc7XHJcbn1cclxuLnJpZ2h0dXBwZXJkaXYgaDEge1xyXG4gIGZvbnQtc2l6ZTogMi4zNXZ3O1xyXG59XHJcbi5yaWdodHVwcGVyZGl2IGgyIHtcclxuICBmb250LXNpemU6IDEuNzV2dztcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDEuMnZ3O1xyXG59XHJcblxyXG4ubGVmdHVwcGVyZGl2LFxyXG4ubGVmdG1pZGxlc2VjdGlvbiB7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuLnJpZ2h0dXBwZXJkaXYge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgY29sb3I6ICMwMDJlNjI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cclxufVxyXG4ubGVmdG1pZGxlc2VjdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDF2dztcclxuICBwYWRkaW5nLWJvdHRvbTogNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDEwLjd2dztcclxuICBmb250LXNpemU6IDEuNDV2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZTYyO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLyogLnJpZ2h0bWlkZGxlc2VjdGlvbntcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGhlaWdodDoxMHZ3O1xyXG4gXHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAuN3Z3O1xyXG59ICovXHJcblxyXG5cclxuLyogI2ZpbGV1cGxvYWQge1xyXG4gIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbn1cclxuXHJcbiN1cGxvYWRzbG90ICNmaWxldXBsb2FkIHtcclxuICBmb250LXNpemU6IDEuMnZ3O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59ICovXHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiA1dnc7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDIzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlNlYXJjaCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbiAgLmxvZ297ICAgIFxyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQzJTtcclxuICB9XHJcblxyXG4gIC5yaWdodG1pZGRsZXNlY3Rpb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgaGVpZ2h0OiAxMHZ3O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiA0Ljd2dzsgKi9cclxuICAgIG1hcmdpbi10b3A6IDIyJTtcclxuICAgIG1hcmdpbi1yaWdodDogM3Z3O1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC1iYXJ7ICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtaW5wdXR7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjMwdnc7XHJcbiAgICBtYXJnaW4tbGVmdDogMTIlOyAqL1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDAyZTYyO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHg7ICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjMDAyZTYyO1xyXG4gIH1cclxuXHJcbiAgI2ZpbGV1cGxvYWR7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXHJcbiAgICBib3JkZXItY29sb3I6ICMwMDJlNjI7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweDsgICAgXHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiAjMDAyZTYyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICAuY29sLTItY3VzdG9tIHtcclxuICAgIGZsZXg6IDAgMCA3JTtcclxuICAgIG1heC13aWR0aDogMTYuNjY2NjY3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG4gIC5idG4tdXBsb2Fke1xyXG4gICAgaGVpZ2h0OiAyLjN2dztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHdpZHRoOiA1dnc7ICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZTYyO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICAuZmlsZS1uYW1lc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHdpZHRoOiA1dnc7ICAgIFxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMmU2MjsgKi9cclxuICB9XHJcbiAgI2ZpbGV1cGxvYWQ6OmZpbGUtc2VsZWN0b3ItYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogIzAwMmU2MjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luLXRvcDogLTN2dztcclxuICB9XHJcbiAgLnNlYXJjaC1saXN0eyAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAyOS41JTtcclxuICAgIHdpZHRoOiA0NC41dnc7XHJcbiAgfVxyXG5cclxuICAuY3Jvc3N7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAzN3Z3O1xyXG4gICAgdG9wOiAwLjR2dzsgKi9cclxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC02cHg7XHJcbiAgICB0b3A6IC00M3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTByZW07ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlNmVkOyAgIFxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XHJcbiAgfVxyXG4gIDpob3N0IDo6bmctZGVlcCAucC1pbnB1dHRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsXCJBcHBsZSBDb2xvciBFbW9qaVwiLFwiU2Vnb2UgVUkgRW1vamlcIixcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgLyogY29sb3I6ICM0OTUwNTc7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLyogaGVpZ2h0OiA1MHB4OyAqL1xyXG4gICAgY29sb3I6ICMwMDJlNjI7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNzVyZW07XHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCAjMDAyZTYyOyAqL1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweDtcclxuICAgIGJvcmRlci1yaWdodDogdW5zZXQ7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDJlNjI7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyxjb2xvciAuMnMsYm9yZGVyLWNvbG9yIC4ycyxib3gtc2hhZG93IC4ycztcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAucC1pbnB1dGdyb3VwIGJ1dHRvbjpsYXN0LWNoaWxkLCAucC1pbnB1dGdyb3VwIGlucHV0Omxhc3QtY2hpbGQsIC5wLWlucHV0Z3JvdXAtYWRkb246bGFzdC1jaGlsZCwgLnAtaW5wdXRncm91cD4ucC1pbnB1dHdyYXBwZXI6bGFzdC1jaGlsZD4ucC1jb21wb25lbnQsIC5wLWlucHV0Z3JvdXA+LnAtaW5wdXR3cmFwcGVyOmxhc3QtY2hpbGQ+LnAtY29tcG9uZW50Pi5wLWlucHV0dGV4dCB7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgLyogYm9yZGVyOiAycHggMHB4IDJweCAycHggc29saWQgIzAwMmU2MjsgKi9cclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDJweDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAycHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAyZTYyO1xyXG4gIGJvcmRlci1sZWZ0OiB1bnNldDtcclxuICBcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnAtaW5wdXR0ZXh0OmVuYWJsZWQ6Zm9jdXN7XHJcbiAgYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IHVuc2V0IDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnAtaW5wdXR0ZXh0OmVuYWJsZWQ6aG92ZXJ7XHJcbiAgYm9yZGVyLWNvbG9yOiB1bnNldCAhaW1wb3J0YW50O1xyXG59XHJcbi5zZXJhY2hCb3h7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcblxyXG59XHJcbi5taWRkbGVpdGVte1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilemanagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-filemanagement',
                templateUrl: './filemanagement.component.html',
                styleUrls: ['./filemanagement.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _service_authservice__WEBPACK_IMPORTED_MODULE_5__["Service_authorization"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { myInputVariable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['inputFile', { static: false }]
        }], autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['autocomplete']
        }], fileInputSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['fileNameSearch']
        }] }); })();


/***/ }),

/***/ "e813":
/*!************************************************!*\
  !*** ./src/app/editpage/editpage.component.ts ***!
  \************************************************/
/*! exports provided: EditpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpageComponent", function() { return EditpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_authservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authservice */ "JmMC");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/header/header.component */ "uU1w");
/* harmony import */ var _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/leftsidemenu/leftsidemenu.component */ "JhsE");








class EditpageComponent {
    constructor(route, toast, form, _authorizationApi) {
        this.route = route;
        this.toast = toast;
        this.form = form;
        this._authorizationApi = _authorizationApi;
        this.college = '';
        this.contact = '';
        this.degree = '';
        this.dsgn2 = '';
        this.comp2 = '';
        this.dsgn3 = '';
        this.compn3 = '';
        this.inst4 = '';
        this.yop1 = '';
        this.yop2 = '';
        this.yop3 = '';
        this.yop4 = '';
        this.deg4 = '';
        this.compn4 = '';
        this.comp5 = '';
        this.comp6 = '';
        this.dsgn4 = '';
        this.dsgn5 = '';
        this.dsgn6 = '';
        this.skl1 = '';
        this.skl2 = '';
        this.skl3 = '';
        this.skl4 = '';
        this.skl5 = '';
        this.skl6 = '';
        this.inst1 = '';
        this.deg2 = '';
        this.inst2 = '';
        this.deg3 = '';
        this.inst3 = '';
        this.name = '';
        this.deg1 = '';
        this.location = '';
        this.dsgn1 = '';
        this.comp1 = '';
        this.dte = new Date();
        this.db0 = this.dte.getMonth();
        this.dt1 = this.dte.getDate();
        this.dB = this.dte.getDay();
        this.dt3 = this.dte.getHours();
        this.dt4 = this.dte.getMinutes();
        this.day_arr = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
        this.month_arr = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');
        this.dt2 = this.day_arr[this.dB];
        this.dt0 = this.month_arr[this.db0];
        this.APM = this.dt3 >= 12 ? 'PM' : 'AM';
        this.mainheading = "Resource manager section";
        this.array_name = [];
        this.array_designation = [];
        this.array_skill = [];
        this.array_company = [];
        this.array_degree = [];
        this.array_gradyear = [];
        this.array_unnamed = [];
        this.array_college = [];
        this.array_location = [];
    }
    ngOnInit() {
        this.uploadedfilename = sessionStorage.getItem("filename");
        this.blobID = sessionStorage.getItem('blobid');
        this.isRead = sessionStorage.getItem('isRead');
        //   this._authorizationApi.getResumeList().subscribe(data=>{
        //     this.ResumeTableData=JSON.parse(data)
        //     console.log('dd',this.ResumeTableData)
        // })
        // this.setvalue()
        this.getuserdetails();
    }
    //to get user biodata
    getuserdetails() {
        var fileName = {
            "blobName": this.uploadedfilename
        };
        this._authorizationApi.posteditedResume(fileName).subscribe(data => {
            // this.sendEditeddata=JSON.parse(data)
            console.log('findediteddata', data);
            this.array_name = data.name;
            this.array_location = data.location;
            this.array_company = data.company;
            this.array_degree = data.degree;
            this.array_designation = data.designation;
            this.array_gradyear = data.graduationYear;
            this.array_college = data.collegeName;
            this.array_skill = data.skills;
            if (this.array_location[0] != undefined) {
                this.location = this.array_location[0];
            }
            if (this.array_name[0] != undefined) {
                this.name = this.array_name[0];
            }
            Object.keys(this.array_company).forEach((element, index) => {
                if (index == 0) {
                    this.comp1 = this.array_company[0];
                }
                else if (index == 1) {
                    this.comp2 = this.array_company[1];
                }
                else if (index == 2) {
                    this.compn3 = this.array_company[2];
                }
                else if (index == 3) {
                    this.compn4 = this.array_company[3];
                }
                else if (index == 4) {
                    this.comp5 = this.array_company[4];
                }
                else if (index == 5) {
                    this.comp6 = this.array_company[5];
                }
            });
            Object.keys(this.array_skill).forEach((element, index) => {
                if (index == 0) {
                    this.skl1 = this.array_skill[0];
                }
                else if (index == 1) {
                    this.skl2 = this.array_skill[1];
                }
                else if (index == 2) {
                    this.skl3 = this.array_skill[2];
                }
                else if (index == 3) {
                    this.skl4 = this.array_skill[3];
                }
                else if (index == 4) {
                    this.skl5 = this.array_skill[4];
                }
                else if (index == 5) {
                    this.skl6 = this.array_skill[5];
                }
            });
            Object.keys(this.array_designation).forEach((element, index) => {
                if (index == 0) {
                    this.dsgn1 = this.array_designation[0];
                }
                else if (index == 1) {
                    this.dsgn2 = this.array_designation[1];
                }
                else if (index == 2) {
                    this.dsgn3 = this.array_designation[2];
                }
                else if (index == 3) {
                    this.dsgn4 = this.array_designation[3];
                }
                else if (index == 4) {
                    this.dsgn5 = this.array_designation[4];
                }
                else if (index == 5) {
                    this.dsgn6 = this.array_designation[5];
                }
            });
            Object.keys(this.array_gradyear).forEach((element, index) => {
                if (index == 0) {
                    this.yop1 = this.array_gradyear[0];
                }
                else if (index == 1) {
                    this.yop2 = this.array_gradyear[1];
                }
                else if (index == 2) {
                    this.yop3 = this.array_gradyear[2];
                }
                else if (index == 3) {
                    this.yop4 = this.array_gradyear[3];
                }
            });
            Object.keys(this.array_designation).forEach((element, index) => {
                if (index == 0) {
                    this.dsgn1 = this.array_designation[0];
                }
                else if (index == 1) {
                    this.dsgn2 = this.array_designation[1];
                }
                else if (index == 2) {
                    this.dsgn3 = this.array_designation[2];
                }
                else if (index == 3) {
                    this.dsgn4 = this.array_designation[3];
                }
                else if (index == 4) {
                    this.dsgn5 = this.array_designation[4];
                }
                else if (index == 5) {
                    this.dsgn6 = this.array_designation[5];
                }
            });
            Object.keys(this.array_degree).forEach((element, index) => {
                if (index == 0) {
                    this.deg1 = this.array_degree[0];
                }
                else if (index == 1) {
                    this.deg2 = this.array_degree[1];
                }
                else if (index == 2) {
                    this.deg3 = this.array_degree[2];
                }
                else if (index == 3) {
                    this.deg4 = this.array_degree[3];
                }
            });
            Object.keys(this.array_college).forEach((element, index) => {
                if (index == 0) {
                    this.inst1 = this.array_college[0];
                }
                else if (index == 1) {
                    this.inst2 = this.array_college[1];
                }
                else if (index == 2) {
                    this.inst3 = this.array_college[2];
                }
                else if (index == 3) {
                    this.inst4 = this.array_college[3];
                }
            });
        });
    }
    //start of swap values of the fields  
    swapvalue1(n, a) {
        this.name = a;
        this.location = n;
    }
    swap_pdetail1(name, contact) {
        this.name = contact;
        this.contact = name;
    }
    swapdes_comp1(d1, c1) {
        this.dsgn1 = c1;
        this.comp1 = d1;
    }
    swapdes_comp2(d2, c2) {
        this.dsgn2 = c2;
        this.comp2 = d2;
    }
    swapdes_comp3(d3, c3) {
        this.dsgn3 = c3;
        this.compn3 = d3;
    }
    swapdes_comp4(d4, c4) {
        this.dsgn4 = c4;
        this.compn4 = d4;
    }
    swapdes_comp5(d5, c5) {
        this.dsgn5 = c5;
        this.comp5 = d5;
    }
    swapdeg4a(inst4, yop4) {
        this.inst4 = yop4;
        this.yop4 = inst4;
    }
    swapdeg3a(inst3, yop3) {
        this.inst3 = yop3;
        this.yop3 = inst3;
    }
    swapupinst3(inst3, inst4) {
        this.inst3 = inst4;
        this.inst4 = inst3;
    }
    swapdes_comp6(d6, c6) {
        this.dsgn6 = c6;
        this.comp6 = d6;
    }
    swapup1(d1, d2) {
        this.dsgn1 = d2;
        this.dsgn2 = d1;
    }
    swapup2(c1, c2) {
        this.comp1 = c2;
        this.comp2 = c1;
    }
    swapup3(d2, d3) {
        this.dsgn3 = d2;
        this.dsgn2 = d3;
    }
    swapup5(dsgn3, dsgn4) {
        this.dsgn3 = dsgn4;
        this.dsgn4 = dsgn3;
    }
    swapup7(dsgn4, dsgn5) {
        this.dsgn4 = dsgn5;
        this.dsgn5 = dsgn4;
    }
    swapup9(dsgn5, dsgn6) {
        this.dsgn5 = dsgn6;
        this.dsgn6 = dsgn5;
    }
    swapup4(c2, c3) {
        this.compn3 = c2;
        this.comp2 = c3;
    }
    swapup6(comp3, comp4) {
        this.compn3 = comp4;
        this.compn4 = comp3;
    }
    swapup8(comp4, comp5) {
        this.compn4 = comp5;
        this.comp5 = comp4;
    }
    swapup10(comp5, comp6) {
        this.comp5 = comp6;
        this.comp6 = comp5;
    }
    swapskill1(s1, s2) {
        this.skl2 = s1;
        this.skl1 = s2;
    }
    swapskill2(s3, s4) {
        this.skl3 = s4;
        this.skl4 = s3;
    }
    swapskill3(s5, s6) {
        this.skl5 = s6;
        this.skl6 = s5;
    }
    swapupskill1(s1, s3) {
        this.skl1 = s3;
        this.skl3 = s1;
    }
    swapupskill2(s2, s4) {
        this.skl2 = s4;
        this.skl4 = s2;
    }
    swapupskill3(s3, s5) {
        this.skl3 = s5;
        this.skl5 = s3;
    }
    swapupskill4(s4, s6) {
        this.skl4 = s6;
        this.skl6 = s4;
    }
    swapdeg1(d1, i1) {
        this.deg1 = i1;
        this.inst1 = d1;
    }
    swapdeg1a(inst1, yop1) {
        this.inst1 = yop1;
        this.yop1 = inst1;
    }
    swapdeg2(d2, i2) {
        this.deg2 = i2;
        this.inst2 = d2;
    }
    swapdeg2a(inst2, yop2) {
        this.inst2 = yop2;
        this.yop2 = inst2;
    }
    swapdeg3(d3, i3) {
        this.deg3 = i3;
        this.inst3 = d3;
    }
    swapupdeg1(d1, d2) {
        this.deg1 = d2;
        this.deg2 = d1;
    }
    swapupdeg2(d2, d3) {
        this.deg3 = d2;
        this.deg2 = d3;
    }
    swapupdeg3(deg3, deg4) {
        this.deg3 = deg4;
        this.deg4 = deg3;
    }
    swapdeg4(deg4, inst4) {
        this.deg4 = inst4;
        this.inst4 = deg4;
    }
    swapupinst1(i1, i2) {
        this.inst1 = i2;
        this.inst2 = i1;
    }
    swapupinst2(i2, i3) {
        this.inst3 = i2;
        this.inst2 = i3;
    }
    swapupyop1(yop1, yop2) {
        this.yop1 = yop2;
        this.yop2 = yop1;
    }
    swapupyop2(yop2, yop3) {
        this.yop2 = yop3;
        this.yop3 = yop2;
    }
    swapupyop3(yop3, yop4) {
        this.yop3 = yop4;
        this.yop4 = yop3;
    }
    output() {
        console.log('yop', this.yop1, this.yop2, this.yop3);
        var sendediteddata = {
            "name": this.name,
            "PhNo": this.contact,
            "blobId": parseInt(this.blobID),
            "Designation1": this.dsgn1,
            "Designation2": this.dsgn2,
            "Designation3": this.dsgn3,
            "Designation4": this.dsgn4,
            "Designation5": this.dsgn5,
            "Designation6": this.dsgn6,
            "Company1": this.comp1,
            "Company2": this.comp2,
            "Company3": this.compn3,
            "Company4": this.compn4,
            "Company5": this.comp5,
            "Company6": this.comp6,
            "Skill1": this.skl1,
            "Skill2": this.skl2,
            "Skill3": this.skl3,
            "Skill4": this.skl4,
            "Skill5": this.skl5,
            "Skill6": this.skl6,
            "Qualification1": this.deg1,
            "Qualification2": this.deg2,
            "Qualification3": this.deg3,
            "Qualification4": this.deg4,
            "college1": this.inst1,
            "college2": this.inst2,
            "college3": this.inst3,
            "college4": this.inst4,
            "YearOfPassg1": (this.yop1).toString(),
            "YearOfPassg2": (this.yop2).toString(),
            "YearOfPassg3": (this.yop3).toString(),
            "YearOfPassg4": (this.yop4).toString(),
            "isUpdate": parseInt(this.isRead)
        };
        console.log("Sending data", sendediteddata);
        this._authorizationApi.saveCandidateDetails(sendediteddata).subscribe(data1 => {
            var dataParesed = JSON.parse(data1);
            console.log('dataParesed', dataParesed['StatusCode']);
            if (dataParesed['StatusCode'] == 1) {
                sessionStorage.setItem('isRead', "1");
                this.toast.success("Successfully Updated");
                this.route.navigate(['/admindashboard']);
            }
        });
    }
}
EditpageComponent.ɵfac = function EditpageComponent_Factory(t) { return new (t || EditpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_authservice__WEBPACK_IMPORTED_MODULE_4__["Service_authorization"])); };
EditpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditpageComponent, selectors: [["app-editpage"]], decls: 308, vars: 32, consts: [[1, "col-sm-12", "rightmiddlesection"], [1, "col-sm-12", "secondsegment", 2, "padding-top", "0vw"], [1, "row"], [1, "col-sm-12", "formsegment"], [1, "content", 2, "width", "100%", "margin-bottom", "16px"], ["type", "text", "name", "personname", 3, "ngModel", "ngModelChange"], ["aria-hidden", "true", 1, "fa", "fa-exchange", "rotate", 3, "click"], ["type", "number", "name", "colname", 3, "ngModel", "ngModelChange"], [2, "width", "100%", "margin-bottom", "16px"], ["type", "text", "name", "Designation_1", 3, "ngModel", "ngModelChange"], ["aria-hidden", "true", 1, "fa", "fa-exchange", "centeralign", 3, "click"], ["type", "text", "name", "Company_1", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Designation_2", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Company_2", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Designation_3", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Company_3", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Designation_4", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Company_4", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Designation_5", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Company_5", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Designation_6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Company_6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "S1", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "S2", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "S3", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "S4", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "S5", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "S6", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "d1", 3, "ngModel", "ngModelChange"], ["aria-hidden", "true", 1, "fa", "fa-exchange", "qlalign", 3, "click"], ["type", "text", "name", "in1", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "year1", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "d2", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "in2", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "year2", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "d3", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "in3", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "year3", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "d4", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "in4", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "year4", 3, "ngModel", "ngModelChange"], [2, "text-align", "right", "margin-right", "4%", "margin-bottom", "1%"], [3, "click"]], template: function EditpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-leftsidemenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_16_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_20_listener() { return ctx.swap_pdetail1(ctx.name, ctx.contact); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_26_listener($event) { return ctx.contact = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Designation 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_37_listener($event) { return ctx.dsgn1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_39_listener() { return ctx.swapdes_comp1(ctx.dsgn1, ctx.comp1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Company 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_43_listener($event) { return ctx.comp1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_47_listener() { return ctx.swapup1(ctx.dsgn1, ctx.dsgn2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_51_listener() { return ctx.swapup2(ctx.comp1, ctx.comp2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Designation 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_56_listener($event) { return ctx.dsgn2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_58_listener() { return ctx.swapdes_comp2(ctx.dsgn2, ctx.comp2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Company 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_62_listener($event) { return ctx.comp2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_66_listener() { return ctx.swapup3(ctx.dsgn2, ctx.dsgn3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_70_listener() { return ctx.swapup4(ctx.comp2, ctx.compn3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Designation 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_75_listener($event) { return ctx.dsgn3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_77_listener() { return ctx.swapdes_comp3(ctx.dsgn3, ctx.compn3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Company 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_81_listener($event) { return ctx.compn3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_85_listener() { return ctx.swapup5(ctx.dsgn3, ctx.dsgn4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_89_listener() { return ctx.swapup6(ctx.compn3, ctx.compn4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Designation 4:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_94_listener($event) { return ctx.dsgn4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_96_listener() { return ctx.swapdes_comp4(ctx.dsgn4, ctx.compn4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Company 4:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_100_listener($event) { return ctx.compn4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_104_listener() { return ctx.swapup7(ctx.dsgn4, ctx.dsgn5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_108_listener() { return ctx.swapup8(ctx.compn4, ctx.comp5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Designation 5:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_113_listener($event) { return ctx.dsgn5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_115_listener() { return ctx.swapdes_comp5(ctx.dsgn5, ctx.comp5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Company 5:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_119_listener($event) { return ctx.comp5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_123_listener() { return ctx.swapup9(ctx.dsgn5, ctx.dsgn6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_127_listener() { return ctx.swapup10(ctx.comp5, ctx.comp6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Designation 6:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_132_listener($event) { return ctx.dsgn6 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_134_listener() { return ctx.swapdes_comp6(ctx.dsgn6, ctx.comp6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Company 6:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_138_listener($event) { return ctx.comp6 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Skillset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Skill 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_149_listener($event) { return ctx.skl1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_151_listener() { return ctx.swapskill1(ctx.skl1, ctx.skl2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Skill 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_155_listener($event) { return ctx.skl2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_159_listener() { return ctx.swapupskill1(ctx.skl1, ctx.skl3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_163_listener() { return ctx.swapupskill2(ctx.skl2, ctx.skl4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Skill 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_168_listener($event) { return ctx.skl3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_170_listener() { return ctx.swapskill2(ctx.skl3, ctx.skl4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Skill 4:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_174_listener($event) { return ctx.skl4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_178_listener() { return ctx.swapupskill3(ctx.skl3, ctx.skl5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_182_listener() { return ctx.swapupskill4(ctx.skl4, ctx.skl6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Skill 5:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_187_listener($event) { return ctx.skl5 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_189_listener() { return ctx.swapskill3(ctx.skl5, ctx.skl6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Skill 6:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_193_listener($event) { return ctx.skl6 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Qualification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Qualification 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_204_listener($event) { return ctx.deg1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_206_listener() { return ctx.swapdeg1(ctx.deg1, ctx.inst1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Institute 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_210_listener($event) { return ctx.inst1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_212_listener() { return ctx.swapdeg1a(ctx.inst1, ctx.yop1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Year of Passing 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_216_listener($event) { return ctx.yop1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_220_listener() { return ctx.swapupdeg1(ctx.deg1, ctx.deg2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_224_listener() { return ctx.swapupinst1(ctx.inst1, ctx.inst2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_228_listener() { return ctx.swapupyop1(ctx.yop1, ctx.yop2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Qualification 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_233_listener($event) { return ctx.deg2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_235_listener() { return ctx.swapdeg2(ctx.deg2, ctx.inst2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Institute 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_239_listener($event) { return ctx.inst2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_241_listener() { return ctx.swapdeg2a(ctx.inst2, ctx.yop2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Year of Passing 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_245_listener($event) { return ctx.yop2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_249_listener() { return ctx.swapupdeg2(ctx.deg2, ctx.deg3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_253_listener() { return ctx.swapupinst2(ctx.inst2, ctx.inst3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_257_listener() { return ctx.swapupyop2(ctx.yop2, ctx.yop3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Qualification 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_262_listener($event) { return ctx.deg3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_264_listener() { return ctx.swapdeg3(ctx.deg3, ctx.inst3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Institute 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_268_listener($event) { return ctx.inst3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_270_listener() { return ctx.swapdeg3a(ctx.inst3, ctx.yop3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Year of Passing 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_274_listener($event) { return ctx.yop3 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_278_listener() { return ctx.swapupdeg3(ctx.deg3, ctx.deg4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_282_listener() { return ctx.swapupinst3(ctx.inst3, ctx.inst4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_286_listener() { return ctx.swapupyop3(ctx.yop3, ctx.yop4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Qualification 4:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_291_listener($event) { return ctx.deg4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_293_listener() { return ctx.swapdeg4(ctx.deg4, ctx.inst4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Institute 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_297_listener($event) { return ctx.inst4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_i_click_299_listener() { return ctx.swapdeg4a(ctx.inst4, ctx.yop4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Year of Passing 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditpageComponent_Template_input_ngModelChange_303_listener($event) { return ctx.yop4 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditpageComponent_Template_button_click_305_listener() { return ctx.output(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dsgn1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comp1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dsgn2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comp2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dsgn3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.compn3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dsgn4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.compn4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dsgn5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comp5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dsgn6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comp6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skl1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skl2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skl3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skl4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skl5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.skl6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.deg1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inst1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yop1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.deg2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inst2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yop2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.deg3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inst3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yop3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.deg4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inst4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.yop4);
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_6__["LeftsidemenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["*[_ngcontent-%COMP%] {\r\n  text-transform: capitalize;\r\n  margin: 0px;\r\n  text-transform: capitalize;\r\n}\r\n#header[_ngcontent-%COMP%] {\r\n  background-color: rgb(185, 181, 181);\r\n  height: 9vw;\r\n  width: 99%;\r\n  position: absolute;\r\n  margin-top: -0.5vw;\r\n  padding-top: 2.2vw;\r\n  display: block;\r\n}\r\n.leftupperdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 2.35vw;\r\n}\r\n.rightupperdiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 2.35vw;\r\n}\r\n.rightupperdiv[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.75vw;\r\n}\r\np[_ngcontent-%COMP%] {\r\n  font-size: 1.2vw;\r\n}\r\n.leftupperdiv[_ngcontent-%COMP%], .leftmidlesection[_ngcontent-%COMP%] {\r\n  \r\n  position: absolute;\r\n  z-index: 10;\r\n  margin-top: 1em;\r\n  margin-left: 1em;\r\n}\r\n.rightupperdiv[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-top: 1em;\r\n  color: #002e62;\r\n  margin-right: 2em;\r\n  \r\n}\r\n.leftmidlesection[_ngcontent-%COMP%] {\r\n  padding-top: 1vw;\r\n  padding-bottom: 5vw;\r\n  margin-top: 10.7vw;\r\n  font-size: 1.45vw;\r\n  background-color: #002e62;\r\n  z-index: 5;\r\n  margin-left: 4px;\r\n  text-align: center;\r\n}\r\n.secondlefttable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  line-height: 1.5vw;\r\n}\r\ntextarea[_ngcontent-%COMP%] {\r\n  width: 15.5vw;\r\n  height: 2vw;\r\n}\r\n.rightmiddlesection[_ngcontent-%COMP%] {\r\n  float: right;\r\n  height: 34vw;\r\n  width: 89%;\r\n  margin-top: 7vw;\r\n  font-size: 1.2vw;\r\n  overflow-y: auto;\r\n}\r\n@media screen and (max-width: 600px) {\r\n  .col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-top: 0;\r\n  }\r\n}\r\n.leftdivision[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n}\r\n.rightdivision[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  float: right;\r\n  margin-left: 40%;\r\n}\r\nbutton[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not() {\r\n  box-shadow: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n#upload[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  padding: 4px;\r\n  position: absolute;\r\n  font-size: 12px;\r\n  display: inline-block;\r\n  margin-top: 8px;\r\n  margin-left: 8vw;\r\n}\r\n.rightmiddlesection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  margin-top: 1%;\r\n  margin-left: 35%;\r\n  padding: 0vw 1.7vw;\r\n  border-radius: 3px;\r\n  border: none;\r\n  font-size: 1.5vw;\r\n  font-weight: 700;\r\n  background-color: rgb(185, 181, 181);\r\n}\r\nprogress[value][_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 40%;\r\n  margin-left: 105px;\r\n}\r\n#tag[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-top: 1em;\r\n  font-size: 12px;\r\n  margin-left: 1em;\r\n  font-weight: 600;\r\n}\r\n.rightmiddlesection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n  background-color: #002e62;\r\n}\r\n#btn[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n  font-size: 15px;\r\n  margin-bottom: 20px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\nfieldset[_ngcontent-%COMP%]{\r\n  border: 1px solid #002e62;\r\n}\r\nlegend[_ngcontent-%COMP%] {\r\n  font-size: 2vw;\r\n  font-weight: 500;\r\n  color: #002e62;\r\n  width: auto;\r\n  margin-left: 5px;\r\n}\r\n.justify[_ngcontent-%COMP%]{\r\n  margin-left: 102px;\r\n}\r\n.centeralign[_ngcontent-%COMP%] {\r\n  margin-right: 125px;\r\n  margin-left: 125px;\r\n  color: #002e62;\r\n}\r\n.secondsegment[_ngcontent-%COMP%] {\r\n  width: 95%;\r\n  margin-top: 1%;\r\n  margin-left: 4.5%;\r\n}\r\n.secondsegment[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  width: 15.3vw;\r\n  height: 2vw;\r\n}\r\n.secondsegment[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%] {\r\n  width: 15.3vw;\r\n  height: 2vw;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  list-style: none;\r\n  line-height: 5vw;\r\n  margin-left: -10px;\r\n  color: white;\r\n  margin-right: 23px;\r\n  cursor: pointer;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 0.8em 2em;\r\n  border-radius: 10px;\r\n  border: none;\r\n  font-size: 1.2vw;\r\n  font-weight: 700;\r\n  background-color: rgb(185, 181, 181);\r\n}\r\n.formsegment[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 1em;\r\n}\r\n.changeattr[_ngcontent-%COMP%] {\r\n  width: 62px;\r\n}\r\n.rotate[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n  color: #002e62;\r\n  margin-left: 98px;\r\n}\r\n\r\n.qlalign[_ngcontent-%COMP%]{\r\n  margin-right: 12px;\r\n    margin-left: 12px;\r\n    color: #002e62;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7O0VBRUUsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7OztJQUdFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7QUFDRjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBQ0E7O0dBRUc7QUFDSDtFQUNFLGtCQUFrQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJlZGl0cGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuI2hlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTgxLCAxODEpO1xyXG4gIGhlaWdodDogOXZ3O1xyXG4gIHdpZHRoOiA5OSU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IC0wLjV2dztcclxuICBwYWRkaW5nLXRvcDogMi4ydnc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmxlZnR1cHBlcmRpdiBoMSB7XHJcbiAgZm9udC1zaXplOiAyLjM1dnc7XHJcbn1cclxuLnJpZ2h0dXBwZXJkaXYgaDEge1xyXG4gIGZvbnQtc2l6ZTogMi4zNXZ3O1xyXG59XHJcbi5yaWdodHVwcGVyZGl2IGgyIHtcclxuICBmb250LXNpemU6IDEuNzV2dztcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDEuMnZ3O1xyXG59XHJcblxyXG4ubGVmdHVwcGVyZGl2LFxyXG4ubGVmdG1pZGxlc2VjdGlvbiB7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuLnJpZ2h0dXBwZXJkaXYge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgY29sb3I6ICMwMDJlNjI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgKi9cclxufVxyXG4ubGVmdG1pZGxlc2VjdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDF2dztcclxuICBwYWRkaW5nLWJvdHRvbTogNXZ3O1xyXG4gIG1hcmdpbi10b3A6IDEwLjd2dztcclxuICBmb250LXNpemU6IDEuNDV2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZTYyO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNlY29uZGxlZnR0YWJsZSB0Ym9keSB0ciB0ZCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNXZ3O1xyXG59XHJcbnRleHRhcmVhIHtcclxuICB3aWR0aDogMTUuNXZ3O1xyXG4gIGhlaWdodDogMnZ3O1xyXG59XHJcblxyXG4ucmlnaHRtaWRkbGVzZWN0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgaGVpZ2h0OiAzNHZ3O1xyXG4gIHdpZHRoOiA4OSU7XHJcbiAgbWFyZ2luLXRvcDogN3Z3O1xyXG4gIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jb2wtMjUsXHJcbiAgLmNvbC03NSxcclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG59XHJcbi5sZWZ0ZGl2aXNpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ucmlnaHRkaXZpc2lvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tbGVmdDogNDAlO1xyXG59XHJcbmJ1dHRvbiA6bm90KCkge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3VwbG9hZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4dnc7XHJcbn1cclxuLnJpZ2h0bWlkZGxlc2VjdGlvbiBidXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgcGFkZGluZzogMHZ3IDEuN3Z3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjV2dztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxODUsIDE4MSwgMTgxKTtcclxufVxyXG5wcm9ncmVzc1t2YWx1ZV0ge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDVweDtcclxufVxyXG4jdGFnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMWVtO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnJpZ2h0bWlkZGxlc2VjdGlvbiBidXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZTYyO1xyXG59XHJcbiNidG4ge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5maWVsZHNldHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAyZTYyO1xyXG59XHJcbmxlZ2VuZCB7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzAwMmU2MjtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5qdXN0aWZ5e1xyXG4gIG1hcmdpbi1sZWZ0OiAxMDJweDtcclxufVxyXG4uY2VudGVyYWxpZ24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTI1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyNXB4O1xyXG4gIGNvbG9yOiAjMDAyZTYyO1xyXG59XHJcbi5zZWNvbmRzZWdtZW50IHtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIG1hcmdpbi1sZWZ0OiA0LjUlO1xyXG59XHJcbi5zZWNvbmRzZWdtZW50IGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICB3aWR0aDogMTUuM3Z3O1xyXG4gIGhlaWdodDogMnZ3O1xyXG59XHJcbi5zZWNvbmRzZWdtZW50IGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gIHdpZHRoOiAxNS4zdnc7XHJcbiAgaGVpZ2h0OiAydnc7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG51bCBsaSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiA1dnc7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDIzcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnVsIGxpIGJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMC44ZW0gMmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAxODEsIDE4MSk7XHJcbn1cclxuLmZvcm1zZWdtZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5jaGFuZ2VhdHRyIHtcclxuICB3aWR0aDogNjJweDtcclxufVxyXG4ucm90YXRlIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgY29sb3I6ICMwMDJlNjI7XHJcbiAgbWFyZ2luLWxlZnQ6IDk4cHg7XHJcbn1cclxuLyogLmNvbnRlbnQgdHIgdGR7XHJcbiAgbWF4LXdpZHRoOiAxMzNweDtcclxufSAqL1xyXG4ucWxhbGlnbntcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIGNvbG9yOiAjMDAyZTYyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editpage',
                templateUrl: './editpage.component.html',
                styleUrls: ['./editpage.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _service_authservice__WEBPACK_IMPORTED_MODULE_4__["Service_authorization"] }]; }, null); })();


/***/ }),

/***/ "i3B0":
/*!********************************!*\
  !*** ./src/app/url.service.ts ***!
  \********************************/
/*! exports provided: urllink, linktoken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urllink", function() { return urllink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linktoken", function() { return linktoken; });
var baseURL = 'http://192.168.1.200:3060/';
const urllink = {
    Login: baseURL + "getLoginDetails",
    saveResumeDetails: baseURL + "saveResumeDetails",
    getResumeList: baseURL + "getResumeList",
    getEditresumedetails: baseURL + "res",
    saveCandidateDetails: baseURL + "saveCandidateDetails ",
    search2: baseURL + "search2"
};
const linktoken = {
    logintkn: "&clientId=key1"
};


/***/ }),

/***/ "icRW":
/*!********************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.component.ts ***!
  \********************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["fileNameSearch"];
function AutocompleteComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.setFileName(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3, " ");
} }
function AutocompleteComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Filename Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AutocompleteComponent {
    constructor() {
        this.showsSearchesPanel = false;
        this.isSearching = false;
        this.ArrayData = [];
        this.apiArrayData = [];
        this.ArrayData = [
            'tohid',
            'tohid',
            'tohid',
            'tohid',
            'tohid',
            'tohid',
            'tohid',
            'tohid',
            'tohid',
            'tohid'
        ];
        this.apiArrayData = this.ArrayData;
    }
    ngOnInit() {
        this.filesearch();
    }
    filesearch() {
        const search$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.fileInputSearch.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => event.target.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.isSearching = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((trem) => trem ? this.getFileName(trem) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.ArrayData)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.isSearching = false;
            this.showsSearchesPanel = true;
        }));
        search$.subscribe(data => {
            this.isSearching = false;
            this.apiArrayData = data;
        });
    }
    getFileName(data) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.filterFileName(data));
    }
    filterFileName(data) {
        return this.ArrayData.filter((val) => val.name.toLowerCase().includes(data.toLowerCase()) == true);
    }
    setFileName(data) {
        this.apiArrayData = this.filterFileName({ data });
        this.fileInputSearch.nativeElement.value = data;
        this.showsSearchesPanel = false;
    }
}
AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(); };
AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteComponent, selectors: [["app-autocomplete"]], viewQuery: function AutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInputSearch = _t.first);
    } }, decls: 13, vars: 4, consts: [[1, "lable"], ["for", "filename"], ["type", "text", "placeholder", "Search filename", 1, "form-control", 3, "click"], ["fileNameSearch", ""], [3, "hidden"], [1, "search"], ["tappable", "", 3, "click", 4, "ngFor", "ngForOf"], ["class", "search", 4, "ngIf"], [1, "search", 3, "hidden"], ["tappable", "", 3, "click"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_Template_input_click_5_listener() { return ctx.showsSearchesPanel = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AutocompleteComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AutocompleteComponent_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Searching Filename ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showsSearchesPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.apiArrayData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.apiArrayData && ctx.apiArrayData.length <= 0 && !ctx.isSearching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isSearching);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRvY29tcGxldGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-autocomplete',
                templateUrl: './autocomplete.component.html',
                styleUrls: ['./autocomplete.component.css']
            }]
    }], function () { return []; }, { fileInputSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['fileNameSearch']
        }] }); })();


/***/ }),

/***/ "l7Ag":
/*!**********************************************!*\
  !*** ./src/app/setting/setting.component.ts ***!
  \**********************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/header/header.component */ "uU1w");
/* harmony import */ var _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/leftsidemenu/leftsidemenu.component */ "JhsE");




class SettingComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingComponent.ɵfac = function SettingComponent_Factory(t) { return new (t || SettingComponent)(); };
SettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingComponent, selectors: [["app-setting"]], decls: 7, vars: 0, consts: [[1, "container-fluid", "rightmiddlesection"], [1, "logo"], [2, "color", "lightgray", "font-family", "fantasy", "font-size", "100px"]], template: function SettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-leftsidemenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Setting Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_common_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _common_leftsidemenu_leftsidemenu_component__WEBPACK_IMPORTED_MODULE_2__["LeftsidemenuComponent"]], styles: [".logo[_ngcontent-%COMP%]{ \r\n    margin-left: 43%;\r\n    position: absolute;\r\n    top: 270px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaIiwiZmlsZSI6InNldHRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dveyBcclxuICAgIG1hcmdpbi1sZWZ0OiA0MyU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI3MHB4O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-setting',
                templateUrl: './setting.component.html',
                styleUrls: ['./setting.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "uU1w":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");




class HeaderComponent {
    constructor(route, toastr) {
        this.route = route;
        this.toastr = toastr;
        this.dte = new Date();
        this.db0 = this.dte.getMonth();
        this.dt1 = this.dte.getDate();
        this.dB = this.dte.getDay();
        this.dt3 = this.dte.getHours();
        this.dt4 = (this.dte.getMinutes() < 10 ? '0' : '') + this.dte.getMinutes();
        this.day_arr = new Array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday');
        this.month_arr = new Array('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');
        this.dt2 = this.day_arr[this.dB];
        this.dt0 = this.month_arr[this.db0];
        this.APM = this.dt3 >= 12 ? 'PM' : 'AM';
    }
    ngOnInit() {
        console.log("router", this.route.url);
        this.userName = sessionStorage.getItem("Firstname");
        if (this.route.url == "/admindashboard") {
            this.mainheading = 'Admin Section';
        }
        else if (this.route.url == "/userdashboard") {
            this.mainheading = 'User Section';
        }
        else {
            this.mainheading = 'Resource manager Section';
        }
    }
    backtohome() {
        this.route.navigate(['admindashboard']);
        localStorage.setItem('mainheading', 'Admin Section');
    }
    logout() {
        let userid = sessionStorage.getItem("userid");
        console.log(userid);
        if (userid != "") {
            sessionStorage.clear();
            this.route.navigate(['/']);
            this.toastr.info("Successfully logout");
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 7, consts: [["id", "header"], [1, "leftupperdivsection"], ["id", "linkpath", 3, "click"], ["src", "../../../assets/home.png", 2, "width", "40px", "height", "40px"], [1, "varticalLine"], ["src", "../../../assets/img.png", 2, "width", "30%"], [1, "rightupperdivsection"], [1, "headerText"], ["id", "timeslot", 2, "color", "#f1eded"], [1, "headerLogout"], [1, "btn-logout", 3, "click"], ["src", "../../../assets/logout.png", 2, "width", "40px", "height", "40px"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_2_listener() { return ctx.backtohome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SMART Document Repository System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_17_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.userName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"]("", ctx.dt0, " ", ctx.dt1, ", ", ctx.dt2, " ", ctx.dt3, ":", ctx.dt4, " ", ctx.APM, "");
    } }, styles: ["*[_ngcontent-%COMP%]{\r\n    text-transform: capitalize;\r\n    margin:0px;\r\n    text-transform: capitalize;\r\n   \r\n}\r\n#header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    position: absolute;\r\n    z-index: 10;\r\n    width: 100vw;\r\n    background-color: #002e62;\r\n    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 4px 0 rgba(0, 0, 0, 0.19);\r\n    height: 4vw;\r\n}\r\n.leftupperdivsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 1.3em;\r\n    font-weight: 600;\r\n}\r\n.leftupperdivsection[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding: 10px;\r\n    color: #f1eded;\r\n    text-align: left;\r\n}\r\n.headerLogout[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left: 20px;\r\n}\r\n.rightupperdivsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 1.3em;\r\n    font-weight: 600;\r\n}\r\n.rightupperdivsection[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding: 10px;\r\n    color: #f1eded;\r\n    text-align: right;\r\n}\r\n.rightupperdivsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #f1eded;\r\n}\r\n.headerText[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 1.3em;\r\n    font-weight: 600;\r\n}\r\n.leftmidlesection[_ngcontent-%COMP%]{\r\n    padding-top: 1vw;\r\n    padding-bottom: 5vw;\r\n    margin-top: 10.7vw;\r\n    font-size: 1.45vw;\r\n    background-color: #002e62;\r\n    z-index: 5;\r\n    margin-left: 4px;\r\n    text-align: center;\r\n\r\n}\r\n.rightmiddlesection[_ngcontent-%COMP%]{\r\n    float: right;\r\n    height:10vw;\r\n \r\n    width: 80%;\r\n    margin-top: 10.7vw;\r\n}\r\n.firstsegment[_ngcontent-%COMP%]{\r\n    height:90%;\r\n    margin-top: 5%;\r\n    width:95%;\r\n    border-radius: 2px;\r\n    display: inline-block;\r\n\r\n}\r\n.secondsegment[_ngcontent-%COMP%]{\r\n    height:70%; width:95%;margin-top: 1%;font-weight: 600;\r\n}\r\n.secondsegment[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n    margin-left: 15%;\r\n}\r\n.secondsegment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    height: 25%;\r\n}\r\n.thirdsegment[_ngcontent-%COMP%]{\r\n    width:95%; \r\n    background-color: rgb(241, 237, 237);\r\n    margin-top: 1%;\r\n    height: 80%;\r\n}\r\n.thirdsegment[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    line-height: 3em;\r\n}\r\n#btn[_ngcontent-%COMP%]{\r\n    padding:6px 18px;\r\n    font-size: 15px;\r\n    margin-bottom:20px ;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    box-shadow: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n.smallsegment[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    height: 100px;\r\n    width: 100px; background-color: rgb(217, 221, 221); font-size: 15px;z-index: 50; text-align: center; font-weight: 600;line-height: 2em;\r\n}\r\n.rightmiddlesection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin-top: 15%;\r\n    margin-left: 35%;\r\n    padding:0.7vw 1.7vw;\r\n    border-radius: 10px;\r\n    border: none;\r\n    font-size: 2vw;\r\n    background-color: rgb(185, 181, 181);\r\n}\r\n.rightmiddlesection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    color: white;\r\n    background-color: #002e62;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color:black;\r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    list-style: none;\r\n    line-height: 5vw;\r\n    margin-left: -10px;\r\n    color: white;\r\n    margin-right: 23px;\r\n    cursor: pointer;\r\n\r\n}\r\n#linkpath[_ngcontent-%COMP%]{\r\n margin-left: 0vw;cursor: pointer;\r\n}\r\n#timeslot[_ngcontent-%COMP%]{\r\n    color:black;font-weight: 600;float: right; \r\n}\r\n@media only screen and (max-width: 700px){\r\n    #timeslot[_ngcontent-%COMP%]{\r\n        line-height: 4vw;\r\n    }\r\n    #linkpath[_ngcontent-%COMP%]{\r\n        margin-left: 0vw;\r\n        line-height: 2vw;\r\n    }\r\n  .leftupperdiv[_ngcontent-%COMP%]{\r\n    margin-top: 0.6em;\r\n    }\r\n    .rightupperdiv[_ngcontent-%COMP%]{\r\n        margin-top: 0.6em;\r\n    }\r\n \r\n    \r\n}\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    padding: 0.8em 2em;\r\n    border-radius: 10px;\r\n    border: none;\r\n    font-size: 1.2vw;\r\n    font-weight: 700;\r\n    background-color: rgb(185, 181, 181);\r\n}\r\n.varticalLine[_ngcontent-%COMP%]{\r\n    height: 95%;\r\n    width: 2px;\r\n    margin-left: 20px;\r\n    margin-right: 5px;\r\n    border-radius: 5px;\r\n    background-color: #f1eded;\r\n}\r\n.btn-logout[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    background-repeat: no-repeat;\r\n    border: none;\r\n}\r\n.headerLogout[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n    margin-left: -53px;\r\n}\r\n.leftupperdivsection[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 1.3em;\r\n    font-weight: 600;\r\n    margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFVBQVU7SUFDViwwQkFBMEI7O0FBRTlCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDJFQUEyRTtJQUMzRSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFJQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVzs7SUFFWCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIscUJBQXFCOztBQUV6QjtBQUNBO0lBQ0ksVUFBVSxFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCO0FBQ3pEO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVksRUFBRSxvQ0FBb0MsRUFBRSxlQUFlLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLGdCQUFnQjtBQUMxSTtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlOztBQUVuQjtBQUNBO0NBQ0MsZ0JBQWdCLENBQUMsZUFBZTtBQUNqQztBQUNBO0lBQ0ksV0FBVyxDQUFDLGdCQUFnQixDQUFDLFlBQVk7QUFDN0M7QUFDQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0VBQ0Y7SUFDRSxpQkFBaUI7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7O0FBR0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgXHJcbn1cclxuI2hlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZTYyO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgaGVpZ2h0OiA0dnc7XHJcbn1cclxuLmxlZnR1cHBlcmRpdnNlY3Rpb24gaDN7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubGVmdHVwcGVyZGl2c2VjdGlvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI2YxZWRlZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmhlYWRlckxvZ291dHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG4ucmlnaHR1cHBlcmRpdnNlY3Rpb24gaDN7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ucmlnaHR1cHBlcmRpdnNlY3Rpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI2YxZWRlZDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5yaWdodHVwcGVyZGl2c2VjdGlvbiBwe1xyXG4gICAgY29sb3I6ICNmMWVkZWQ7XHJcbn1cclxuLmhlYWRlclRleHQgaDN7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubGVmdG1pZGxlc2VjdGlvbntcclxuICAgIHBhZGRpbmctdG9wOiAxdnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXZ3O1xyXG4gICAgbWFyZ2luLXRvcDogMTAuN3Z3O1xyXG4gICAgZm9udC1zaXplOiAxLjQ1dnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZTYyO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5yaWdodG1pZGRsZXNlY3Rpb257XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6MTB2dztcclxuIFxyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwLjd2dztcclxufVxyXG4uZmlyc3RzZWdtZW50e1xyXG4gICAgaGVpZ2h0OjkwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgd2lkdGg6OTUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxufVxyXG4uc2Vjb25kc2VnbWVudHtcclxuICAgIGhlaWdodDo3MCU7IHdpZHRoOjk1JTttYXJnaW4tdG9wOiAxJTtmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5zZWNvbmRzZWdtZW50IGxhYmVse1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxufVxyXG4uc2Vjb25kc2VnbWVudCBpbnB1dHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxufVxyXG4udGhpcmRzZWdtZW50e1xyXG4gICAgd2lkdGg6OTUlOyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIzNywgMjM3KTtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbn1cclxuLnRoaXJkc2VnbWVudCB0YWJsZSB0ciB0ZHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzZW07XHJcbn1cclxuI2J0bntcclxuICAgIHBhZGRpbmc6NnB4IDE4cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHggO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNtYWxsc2VnbWVudHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7IGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDIyMSwgMjIxKTsgZm9udC1zaXplOiAxNXB4O3otaW5kZXg6IDUwOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtd2VpZ2h0OiA2MDA7bGluZS1oZWlnaHQ6IDJlbTtcclxufVxyXG4ucmlnaHRtaWRkbGVzZWN0aW9uIGJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgICBwYWRkaW5nOjAuN3Z3IDEuN3Z3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMnZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTgxLCAxODEpO1xyXG59XHJcbi5yaWdodG1pZGRsZXNlY3Rpb24gYnV0dG9uOmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMmU2MjtcclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxudWwgbGl7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1dnc7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcbiNsaW5rcGF0aHtcclxuIG1hcmdpbi1sZWZ0OiAwdnc7Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiN0aW1lc2xvdHtcclxuICAgIGNvbG9yOmJsYWNrO2ZvbnQtd2VpZ2h0OiA2MDA7ZmxvYXQ6IHJpZ2h0OyBcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgICN0aW1lc2xvdHtcclxuICAgICAgICBsaW5lLWhlaWdodDogNHZ3O1xyXG4gICAgfVxyXG4gICAgI2xpbmtwYXRoe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwdnc7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJ2dztcclxuICAgIH1cclxuICAubGVmdHVwcGVyZGl2e1xyXG4gICAgbWFyZ2luLXRvcDogMC42ZW07XHJcbiAgICB9XHJcbiAgICAucmlnaHR1cHBlcmRpdntcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjZlbTtcclxuICAgIH1cclxuIFxyXG4gICAgXHJcbn1cclxudWwgbGkgYnV0dG9ue1xyXG4gICAgcGFkZGluZzogMC44ZW0gMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMTgxLCAxODEpO1xyXG59XHJcbi52YXJ0aWNhbExpbmV7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIHdpZHRoOiAycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZWRlZDtcclxufVxyXG5cclxuLmJ0bi1sb2dvdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmhlYWRlckxvZ291dCBzcGFue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTNweDtcclxufVxyXG4ubGVmdHVwcGVyZGl2c2VjdGlvbiBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _editpage_editpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editpage/editpage.component */ "e813");
/* harmony import */ var _filemanagement_filemanagement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filemanagement/filemanagement.component */ "bfCW");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userdashboard/userdashboard.component */ "QCYB");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./setting/setting.component */ "l7Ag");










const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    // {path:'Uploadfile', component:ManagersectionComponent,canActivate:[AuthGuardGuard]},
    { path: 'filemanager', component: _filemanagement_filemanagement_component__WEBPACK_IMPORTED_MODULE_4__["FilemanagementComponent"] },
    { path: 'admindashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'userdashboard', component: _userdashboard_userdashboard_component__WEBPACK_IMPORTED_MODULE_6__["UserdashboardComponent"] },
    { path: 'editpage', component: _editpage_editpage_component__WEBPACK_IMPORTED_MODULE_3__["EditpageComponent"] },
    { path: 'setting', component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_7__["SettingComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _service_authservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authservice */ "JmMC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");







class LoginComponent {
    constructor(form, _Autherize, route, toastr) {
        this.form = form;
        this._Autherize = _Autherize;
        this.route = route;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.userlogin = this.form.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnDestroy() {
        this.SUBS.unsubscribe();
    }
    onFormSubmit() { }
    Userlogin() {
        console.log("Formvalue", this.email, this.password);
        var user_details = {
            "username": this.email,
            "password": this.password
        };
        this.loaditem = true;
        this.toastr.info("Wait please...", '', { timeOut: 4000 });
        this.SUBS = this._Autherize.logindetail(user_details).subscribe(details => {
            console.log("API data", details.data.username);
            if (details.data.username == this.email) {
                sessionStorage.setItem('Email', details.data.username);
                sessionStorage.setItem('Firstname', details.data.fname);
                sessionStorage.setItem('Lastname', details.data.lname);
                sessionStorage.setItem('Status', details.status);
                sessionStorage.setItem('userid', details.data.id);
                this.toastr.success(details.Message, 'Welcome!!!');
                this.route.navigate(['/admindashboard']);
                this.mainheading = localStorage.setItem('mainheading', "Admin Section");
            }
            else {
                this.toastr.error("Invalid Credential", 'Error');
            }
            this.loaditem = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_authservice__WEBPACK_IMPORTED_MODULE_2__["Service_authorization"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 14, vars: 5, consts: [[1, "container_fluid"], [1, "container_cover"], [1, "login_text"], [1, "login_container"], [2, "font-weight", "700", "font-size", "30px", "color", "#002e62"], [3, "formGroup", "ngSubmit"], ["type", "email", "formControlName", "email", "placeholder", "Username", 3, "ngModel", "email", "ngModelChange"], ["type", "password", "formControlName", "password", "placeholder", "Password", 3, "ngModel", "ngModelChange"], [1, "button-15", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " SMART ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Document Repository System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() { return ctx.onFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_12_listener() { return ctx.Userlogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userlogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email)("email", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.userlogin.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"]], styles: ["html[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n}\r\n.container_fluid[_ngcontent-%COMP%]{ \r\n    display: flex;\r\n   position: fixed;\r\n    min-width: 100%;\r\n    background-image: url('HRMS02.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-size: 100% 100%;\r\n    background-color: #464646;\r\n    height: 100%;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n}\r\n.container_cover[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    position: fixed;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-color: rgb(0,0, 0,.5);\r\n}\r\n.login_text[_ngcontent-%COMP%]{\r\n    font-size: 7rem;\r\n    font-weight: 700;\r\n    color:white;\r\n    margin-right: 100px;\r\n}\r\n.login_container[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    margin-left: 10%;\r\n}\r\nform[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\ninput[_ngcontent-%COMP%]{\r\n    outline: none;\r\n    border: none;\r\n    border-bottom: 1px solid #002e62;\r\n    height: 45px;\r\n    font-size: 20px;\r\n    width: 400px;\r\n    \r\n    margin-top: 20px;\r\n    color: #002e62;\r\n    font-weight: 700;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::placeholder{\r\n    color:#295180b0 ;\r\n}\r\n\r\n.button-15[_ngcontent-%COMP%] {\r\n    background-image: linear-gradient(#42A1EC, #002e62);\r\n    border: 1px solid #0077CC;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    color: #FFFFFF;\r\n    \r\n    display: block;\r\n    \r\n    font-weight: 400;\r\n    letter-spacing: -.022em;\r\n    line-height: 1.47059;\r\n    width: 150px;\r\n    overflow: visible;\r\n    padding: 4px 15px;\r\n    text-align: center;\r\n    vertical-align: baseline;\r\n    align-self: center;\r\n    margin-top: 20px;\r\n  }\r\n.button-15[_ngcontent-%COMP%]:hover {\r\n    background-image: linear-gradient(#51A9EE, #147BCD);\r\n    border-color: #1482D0;\r\n    text-decoration: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7R0FDZCxlQUFlO0lBQ2QsZUFBZTtJQUNmLG1DQUFnRDtJQUNoRCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUdBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7Ozs7Ozs7Ozs7R0FVRztBQUNIO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0EsNENBQTRDO0FBQzVDO0lBQ0ksbURBQW1EO0lBQ25ELHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsY0FBYztJQUNkO3NCQUNrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLG1EQUFtRDtJQUNuRCxxQkFBcUI7SUFDckIscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1se1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY29udGFpbmVyX2ZsdWlkeyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9IUk1TMDIuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2NDY7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmNvbnRhaW5lcl9jb3ZlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwgMCwuNSk7XHJcbn1cclxuLmxvZ2luX3RleHR7XHJcbiAgICBmb250LXNpemU6IDdyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG59XHJcbi5sb2dpbl9jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcbmZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbmlucHV0e1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAyZTYyO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgLyogY3Vyc29yOiBwb2ludGVyOyAqL1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiAjMDAyZTYyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4vKiBidXR0b257XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyZTYyO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59ICovXHJcbmlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiMyOTUxODBiMCA7XHJcbn1cclxuLyoqKioqKioqKioqKioqKipidXR0b24qKioqKioqKioqKioqKioqKioqKiovXHJcbi5idXR0b24tMTUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCM0MkExRUMsICMwMDJlNjIpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwNzdDQztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIC8qIGRpcmVjdGlvbjogbHRyOyAqL1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvKiBmb250LWZhbWlseTogXCJTRiBQcm8gVGV4dFwiLFwiU0YgUHJvIEljb25zXCIsXCJBT1MgSWNvbnNcIixcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7ICovXHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0uMDIyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS40NzA1OTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgcGFkZGluZzogNHB4IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi0xNTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzUxQTlFRSwgIzE0N0JDRCk7XHJcbiAgICBib3JkZXItY29sb3I6ICMxNDgyRDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _service_authservice__WEBPACK_IMPORTED_MODULE_2__["Service_authorization"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "x3DB":
/*!*******************************************************!*\
  !*** ./src/app/common/additional/auth-guard.guard.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function() { return AuthGuardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuardGuard {
    constructor(route) {
        this.route = route;
    }
    canActivate(route, state) {
        if (sessionStorage.getItem('Status') == '1' && sessionStorage.getItem('Email')) {
            return true;
        }
        else {
            this.route.navigate(['']);
            return false;
        }
    }
    canActivateChild(route, state) {
        return this.canActivate(route, state);
    }
}
AuthGuardGuard.ɵfac = function AuthGuardGuard_Factory(t) { return new (t || AuthGuardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardGuard, factory: AuthGuardGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map