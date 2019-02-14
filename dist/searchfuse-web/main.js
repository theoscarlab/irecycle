(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\r\n  display: flex;\r\n}\r\n\r\n#wrapper #content-wrapper {\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  padding-top: 1rem;\r\n  padding-bottom: 80px;\r\n}\r\n\r\nbody.fixed-nav #content-wrapper {\r\n  margin-top: 56px;\r\n  padding-left: 90px;\r\n}\r\n\r\nbody.fixed-nav.sidebar-toggled #content-wrapper {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.fixed-nav #content-wrapper {\r\n    padding-left: 225px;\r\n  }\r\n  body.fixed-nav.sidebar-toggled #content-wrapper {\r\n    padding-left: 90px;\r\n  }\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 46px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.smaller {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n  z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav .form-inline .input-group {\r\n  width: 100%;\r\n}\r\n\r\n.navbar-nav .nav-item.active .nav-link {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown .dropdown-toggle::after {\r\n  width: 1rem;\r\n  text-align: center;\r\n  float: right;\r\n  vertical-align: 0;\r\n  border: 0;\r\n  font-weight: 900;\r\n  content: '\\f105';\r\n  font-family: 'Font Awesome 5 Free';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {\r\n  content: '\\f107';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link:focus {\r\n  outline: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link .badge {\r\n  position: absolute;\r\n  margin-left: 0.75rem;\r\n  top: 0.3rem;\r\n  font-weight: 400;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-nav .form-inline .input-group {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n.card-body-icon {\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: -1.25rem;\r\n  right: -1rem;\r\n  opacity: 0.4;\r\n  font-size: 5rem;\r\n  -webkit-transform: rotate(15deg);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n    column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n:root {\r\n  --input-padding-x: 0.75rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\n.card-login {\r\n  max-width: 25rem;\r\n}\r\n\r\n.card-register {\r\n  max-width: 40rem;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n  height: auto;\r\n}\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\nfooter.sticky-footer {\r\n  display: flex;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: calc(100% - 90px);\r\n  height: 80px;\r\n  background-color: #e9ecef;\r\n}\r\n\r\nfooter.sticky-footer .copyright {\r\n  line-height: 1;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  footer.sticky-footer {\r\n    width: calc(100% - 225px);\r\n  }\r\n}\r\n\r\nbody.sidebar-toggled footer.sticky-footer {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.sidebar-toggled footer.sticky-footer {\r\n    width: calc(100% - 90px);\r\n  }\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  padding: 20px 0 20px;\r\n  list-style: none;\r\n}\r\n\r\n.timeline:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 3px;\r\n  margin-left: -1.5px;\r\n  background-color: #eeeeee;\r\n}\r\n\r\n.timeline > li {\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li > .timeline-panel {\r\n  float: left;\r\n  position: relative;\r\n  width: 46%;\r\n  padding: 20px;\r\n  border: 1px solid #d4d4d4;\r\n  border-radius: 2px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n}\r\n\r\n.timeline > li > .timeline-panel:before {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 26px;\r\n  right: -15px;\r\n  border-top: 15px solid transparent;\r\n  border-right: 0 solid #ccc;\r\n  border-bottom: 15px solid transparent;\r\n  border-left: 15px solid #ccc;\r\n}\r\n\r\n.timeline > li > .timeline-panel:after {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 27px;\r\n  right: -14px;\r\n  border-top: 14px solid transparent;\r\n  border-right: 0 solid #fff;\r\n  border-bottom: 14px solid transparent;\r\n  border-left: 14px solid #fff;\r\n}\r\n\r\n.timeline > li > .timeline-badge {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 16px;\r\n  left: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: -25px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n  line-height: 50px;\r\n  color: #fff;\r\n  background-color: #999999;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline-badge.primary {\r\n  background-color: #2e6da4 !important;\r\n}\r\n\r\n.timeline-badge.success {\r\n  background-color: #3f903f !important;\r\n}\r\n\r\n.timeline-badge.warning {\r\n  background-color: #f0ad4e !important;\r\n}\r\n\r\n.timeline-badge.danger {\r\n  background-color: #d9534f !important;\r\n}\r\n\r\n.timeline-badge.info {\r\n  background-color: #5bc0de !important;\r\n}\r\n\r\n.timeline-title {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n\r\n.timeline-body > p,\r\n.timeline-body > ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.timeline-body > p + p {\r\n  margin-top: 5px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  ul.timeline:before {\r\n    left: 40px;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    width: calc(10%);\r\n    width: -webkit-calc(10%);\r\n  }\r\n  ul.timeline > li > .timeline-badge {\r\n    top: 16px;\r\n    left: 15px;\r\n    margin-left: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    float: right;\r\n  }\r\n  ul.timeline > li > .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-navbar></dashboard-navbar>\n\n<div id=\"wrapper\">\n\n  <dashboard-sidebar></dashboard-sidebar>\n\n  <div id=\"content-wrapper\">\n\n    <div class=\"container-fluid\">\n\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a>Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Overview</li>\n      </ol>\n\n      <!-- Icon Cards-->\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-primary o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-fw fa-comments\"></i>\n              </div>\n              <div class=\"mr-5\">{{totalUsers}} Users</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/adminUsers\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-warning o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-fw fa-list\"></i>\n              </div>\n              <div class=\"mr-5\">{{totalTransactions}} Transactions</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/transactions\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-success o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-fw fa-shopping-cart\"></i>\n              </div>\n              <div class=\"mr-5\">{{totalOrders}} Orders!</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/orders\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-danger o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-fw fa-life-ring\"></i>\n              </div>\n              <div class=\"mr-5\">{{totalBalance}} Balance!</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/transactions\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <!-- Area Chart Example-->\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-chart-area\"></i>\n          Transactions</div>\n        <div class=\"card-body\">\n          <canvas id=\"myChart\" width=\"100%\" height=\"30\"></canvas>\n        </div>\n        <div class=\"card-footer small text-muted\">Updated </div>\n      </div>\n\n      <!-- <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-clock-o fa-fw\"></i> Get started\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"timeline\">\n            <li>\n              <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Choose a plan</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>The process start creating an account, and selecting the right plan for you.</p>\n                </div>\n              </div>\n            </li>\n            <li class=\"timeline-inverted\">\n              <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Payment</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>Select method of payment</p>                  \n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Get an improvement on your area</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>Our team will make your dreams come true.</p>\n                </div>\n              </div>\n            </li>\n            <li class=\"timeline-inverted\">\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Explore your new opportunities</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>...</p>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est\n                    molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla\n                    qui! Laborum, atque.</p>\n                  <hr>\n                  <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                      <i class=\"fa fa-gear\"></i> <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\" role=\"menu\">\n                      <li><a href=\"#\">Action</a>\n                      </li>\n                      <li><a href=\"#\">Another action</a>\n                      </li>\n                      <li><a href=\"#\">Something else here</a>\n                      </li>\n                      <li class=\"divider\"></li>\n                      <li><a href=\"#\">Separated link</a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure\n                    expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur\n                    nostrum sequi. Consequuntur, commodi.</p>\n                </div>\n              </div>\n            </li>\n            <li class=\"timeline-inverted\">\n              <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore\n                    officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam,\n                    enim incidunt quisquam maxime neque eaque.</p>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div> -->\n\n    </div>\n    <!-- /.container-fluid -->\n\n\n\n\n  </div>\n  <!-- /.content-wrapper -->\n\n</div>\n<!-- /#wrapper -->\n\n<footer id=\"footer\" style=\"width: auto !important\">\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; 2018 <strong>Searchfuse Marketing Management</strong>.\n    </div>\n    <div class=\"credits\">\n      Built with <i class=\"fas fa-heart\"></i> in Dubai.\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/admin-dashboard/admin-dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-dashboard/admin-dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(usrServ, admServ) {
        this.usrServ = usrServ;
        this.admServ = admServ;
        this.user = {};
        this.totalUsers = 0;
        this.totalTransactions = 0;
        this.totalOrders = 0;
        this.totalBalance = 0;
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.usrServ.ifInvalidUserToLogin();
        if (!this.usrServ.isUserManage()) {
            this.usrServ.goTo("/dashboard");
        }
        this.admServ.allUser().subscribe(function (res) {
            _this.totalUsers = res.length;
        });
        this.admServ.allTransactions().subscribe(function (res) {
            _this.totalTransactions = res.length;
            var active = res.filter(function (e) { return e.plan !== "balance" && e.status === "Active"; }).length;
            var cancelled = res.filter(function (e) { return e.plan !== "balance" && e.status === "Declined"; }).length;
            var completed = res.filter(function (e) { return e.plan !== "balance" && e.status === "Completed"; }).length;
            _this.totalBalance = res.filter(function (e) { return e.plan === "balance"; }).length;
            _this.totalOrders = res.filter(function (e) { return e.plan !== "balance" && e.status !== "Declined"; }).length;
            chart({
                type: 'bar',
                data: {
                    labels: ["Active", "Declined", "Completed", "Balance"],
                    datasets: [{
                            label: 'transactions',
                            data: [active, cancelled, completed, _this.totalBalance],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                            ],
                            borderWidth: 1
                        }]
                },
                options: {
                    scales: {
                        yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                    }
                }
            });
        });
    };
    AdminDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin-plans/admin-plans.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-plans/admin-plans.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\r\n  display: flex;\r\n}\r\n\r\n#wrapper #content-wrapper {\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  padding-top: 1rem;\r\n  padding-bottom: 80px;\r\n}\r\n\r\nbody.fixed-nav #content-wrapper {\r\n  margin-top: 56px;\r\n  padding-left: 90px;\r\n}\r\n\r\nbody.fixed-nav.sidebar-toggled #content-wrapper {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.fixed-nav #content-wrapper {\r\n    padding-left: 225px;\r\n  }\r\n  body.fixed-nav.sidebar-toggled #content-wrapper {\r\n    padding-left: 90px;\r\n  }\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 46px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.smaller {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n  z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav .form-inline .input-group {\r\n  width: 100%;\r\n}\r\n\r\n.navbar-nav .nav-item.active .nav-link {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown .dropdown-toggle::after {\r\n  width: 1rem;\r\n  text-align: center;\r\n  float: right;\r\n  vertical-align: 0;\r\n  border: 0;\r\n  font-weight: 900;\r\n  content: '\\f105';\r\n  font-family: 'Font Awesome 5 Free';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {\r\n  content: '\\f107';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link:focus {\r\n  outline: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link .badge {\r\n  position: absolute;\r\n  margin-left: 0.75rem;\r\n  top: 0.3rem;\r\n  font-weight: 400;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-nav .form-inline .input-group {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n.card-body-icon {\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: -1.25rem;\r\n  right: -1rem;\r\n  opacity: 0.4;\r\n  font-size: 5rem;\r\n  -webkit-transform: rotate(15deg);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n    column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n:root {\r\n  --input-padding-x: 0.75rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\n.card-login {\r\n  max-width: 25rem;\r\n}\r\n\r\n.card-register {\r\n  max-width: 40rem;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n  height: auto;\r\n}\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\nfooter.sticky-footer {\r\n  display: flex;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: calc(100% - 90px);\r\n  height: 80px;\r\n  background-color: #e9ecef;\r\n}\r\n\r\nfooter.sticky-footer .copyright {\r\n  line-height: 1;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  footer.sticky-footer {\r\n    width: calc(100% - 225px);\r\n  }\r\n}\r\n\r\nbody.sidebar-toggled footer.sticky-footer {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.sidebar-toggled footer.sticky-footer {\r\n    width: calc(100% - 90px);\r\n  }\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  padding: 20px 0 20px;\r\n  list-style: none;\r\n}\r\n\r\n.timeline:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 3px;\r\n  margin-left: -1.5px;\r\n  background-color: #eeeeee;\r\n}\r\n\r\n.timeline > li {\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li > .timeline-panel {\r\n  float: left;\r\n  position: relative;\r\n  width: 46%;\r\n  padding: 20px;\r\n  border: 1px solid #d4d4d4;\r\n  border-radius: 2px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n}\r\n\r\n.timeline > li > .timeline-panel:before {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 26px;\r\n  right: -15px;\r\n  border-top: 15px solid transparent;\r\n  border-right: 0 solid #ccc;\r\n  border-bottom: 15px solid transparent;\r\n  border-left: 15px solid #ccc;\r\n}\r\n\r\n.timeline > li > .timeline-panel:after {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 27px;\r\n  right: -14px;\r\n  border-top: 14px solid transparent;\r\n  border-right: 0 solid #fff;\r\n  border-bottom: 14px solid transparent;\r\n  border-left: 14px solid #fff;\r\n}\r\n\r\n.timeline > li > .timeline-badge {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 16px;\r\n  left: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: -25px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n  line-height: 50px;\r\n  color: #fff;\r\n  background-color: #999999;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline-badge.primary {\r\n  background-color: #2e6da4 !important;\r\n}\r\n\r\n.timeline-badge.success {\r\n  background-color: #3f903f !important;\r\n}\r\n\r\n.timeline-badge.warning {\r\n  background-color: #f0ad4e !important;\r\n}\r\n\r\n.timeline-badge.danger {\r\n  background-color: #d9534f !important;\r\n}\r\n\r\n.timeline-badge.info {\r\n  background-color: #5bc0de !important;\r\n}\r\n\r\n.timeline-title {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n\r\n.timeline-body > p,\r\n.timeline-body > ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.timeline-body > p + p {\r\n  margin-top: 5px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  ul.timeline:before {\r\n    left: 40px;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    width: calc(10%);\r\n    width: -webkit-calc(10%);\r\n  }\r\n  ul.timeline > li > .timeline-badge {\r\n    top: 16px;\r\n    left: 15px;\r\n    margin-left: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    float: right;\r\n  }\r\n  ul.timeline > li > .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-plans/admin-plans.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-plans/admin-plans.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger fixed-top\" role=\"alert\" style=\"z-index: 1031;\" *ngIf=\"showMessage\">\n  {{showMessage}}\n</div>\n<dashboard-navbar></dashboard-navbar>\n\n<div id=\"wrapper\">\n\n  <dashboard-sidebar></dashboard-sidebar>\n\n  <div id=\"content-wrapper\">\n\n    <div class=\"container-fluid\">\n      <h2>Plans</h2>\n      <hr>\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/dashboard\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Plans</li>\n      </ol>\n\n      <!-- Icon Cards-->\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-primary o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-fw fa-shopping-cart\"></i>\n              </div>\n              <div class=\"mr-5\"># Plans <br> {{plans.length}}</div>\n            </div>\n            <!-- <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </a> -->\n          </div>\n        </div>\n\n      </div>\n\n      <!--   Area Chart Example-->\n      <!--  <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-chart-area\"></i>\n          Area Chart Example</div>\n        <div class=\"card-body\">\n          <canvas id=\"myChart\" width=\"100%\" height=\"30\"></canvas>\n        </div>\n        <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div>\n      </div> -->\n\n      <!-- DataTables Example -->\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-table\"></i>\n          Plans</div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table \" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n              <thead>\n                <tr>\n                  <th>ID</th>\n                  <th>TITLE</th>\n                  <th>PRICE</th>\n                  <th>VIEWS</th>\n                  <th>ACTIONS</th>\n                </tr>\n              </thead>\n              <!-- <tfoot>\n                <tr>\n                  <th>Name</th>\n                  <th>Position</th>\n                  <th>Office</th>\n                  <th>Age</th>\n                  <th>Start date</th>\n                  <th>Salary</th>\n                </tr>\n              </tfoot> -->\n              <tbody *ngFor=\"let item of plans; index as i; first as isFirst\">\n                <tr>\n                  <td>{{item.id}}</td>\n                  <td>{{item.title}}</td>\n                  <td>AED {{item.price}}</td>\n                  <td>{{item.views?item.views:0}}</td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-primary\" title=\"Edit\" (click)=\"edit(item)\" data-toggle=\"modal\"\n                      data-target=\"#editModal\">\n                      <i class=\"fas fa-edit\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"card-footer small text-muted\">Updated</div>\n      </div>\n\n\n\n    </div>\n    <!-- /.container-fluid -->\n\n\n\n\n  </div>\n  <!-- /.content-wrapper -->\n\n</div>\n<!-- /#wrapper -->\n\n<footer id=\"footer\" style=\"width: auto !important\">\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; 2018 <strong>Searchfuse Marketing Management</strong>.\n    </div>\n    <div class=\"credits\">\n      Built with <i class=\"fas fa-heart\"></i> in Dubai.\n    </div>\n  </div>\n</footer>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Plan</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <label for=\"\">Plan :</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"itemToEdit\"\n          aria-describedby=\"basic-addon2\"></textarea>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"migrateFaq()\">Migrate FAQ</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"save(itemToEdit)\" data-dismiss=\"modal\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-plans/admin-plans.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-plans/admin-plans.component.ts ***!
  \******************************************************/
/*! exports provided: AdminPlansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPlansComponent", function() { return AdminPlansComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminPlansComponent = /** @class */ (function () {
    function AdminPlansComponent(usrServ, admServ) {
        this.usrServ = usrServ;
        this.admServ = admServ;
        this.user = {};
        this.itemToEdit = {};
        this.plans = [];
        this.showMessage = false;
    }
    AdminPlansComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.usrServ.ifInvalidUserToLogin();
        if (!this.usrServ.isUserManage()) {
            this.usrServ.goTo("/dashboard");
        }
        this.usrServ.plans().subscribe(function (res) {
            _this.plans = res;
        });
    };
    AdminPlansComponent.prototype.edit = function (item) {
        delete item._id;
        delete item.__v;
        this.itemToEdit = JSON.stringify(item, undefined, 4);
    };
    AdminPlansComponent.prototype.save = function (item) {
        var _this = this;
        this.admServ.savePlan(JSON.parse(item)).subscribe(function (res) {
            _this.usrServ.plans().subscribe(function (res) {
                _this.plans = res;
            });
        });
    };
    AdminPlansComponent.prototype.migrateFaq = function () {
        var element = JSON.parse(this.itemToEdit);
        for (var index2 = 0; index2 < element.faq.length; index2 += 2) {
            if (!element.faqObj)
                element.faqObj = [];
            if (element.faq[index2]) {
                element.faqObj.push({
                    ask: element.faq[index2],
                    response: element.faq[index2 + 1]
                });
            }
            this.itemToEdit = JSON.stringify(element, undefined, 4);
        }
    };
    AdminPlansComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-plans',
            template: __webpack_require__(/*! ./admin-plans.component.html */ "./src/app/admin-plans/admin-plans.component.html"),
            styles: [__webpack_require__(/*! ./admin-plans.component.css */ "./src/app/admin-plans/admin-plans.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], AdminPlansComponent);
    return AdminPlansComponent;
}());



/***/ }),

/***/ "./src/app/admin-users/admin-users.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\r\n  display: flex;\r\n}\r\n\r\n#wrapper #content-wrapper {\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  padding-top: 1rem;\r\n  padding-bottom: 80px;\r\n}\r\n\r\nbody.fixed-nav #content-wrapper {\r\n  margin-top: 56px;\r\n  padding-left: 90px;\r\n}\r\n\r\nbody.fixed-nav.sidebar-toggled #content-wrapper {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.fixed-nav #content-wrapper {\r\n    padding-left: 225px;\r\n  }\r\n  body.fixed-nav.sidebar-toggled #content-wrapper {\r\n    padding-left: 90px;\r\n  }\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 46px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.smaller {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n  z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav .form-inline .input-group {\r\n  width: 100%;\r\n}\r\n\r\n.navbar-nav .nav-item.active .nav-link {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown .dropdown-toggle::after {\r\n  width: 1rem;\r\n  text-align: center;\r\n  float: right;\r\n  vertical-align: 0;\r\n  border: 0;\r\n  font-weight: 900;\r\n  content: '\\f105';\r\n  font-family: 'Font Awesome 5 Free';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {\r\n  content: '\\f107';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link:focus {\r\n  outline: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link .badge {\r\n  position: absolute;\r\n  margin-left: 0.75rem;\r\n  top: 0.3rem;\r\n  font-weight: 400;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-nav .form-inline .input-group {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n.card-body-icon {\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: -1.25rem;\r\n  right: -1rem;\r\n  opacity: 0.4;\r\n  font-size: 5rem;\r\n  -webkit-transform: rotate(15deg);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n    column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n:root {\r\n  --input-padding-x: 0.75rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\n.card-login {\r\n  max-width: 25rem;\r\n}\r\n\r\n.card-register {\r\n  max-width: 40rem;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n  height: auto;\r\n}\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\nfooter.sticky-footer {\r\n  display: flex;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: calc(100% - 90px);\r\n  height: 80px;\r\n  background-color: #e9ecef;\r\n}\r\n\r\nfooter.sticky-footer .copyright {\r\n  line-height: 1;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  footer.sticky-footer {\r\n    width: calc(100% - 225px);\r\n  }\r\n}\r\n\r\nbody.sidebar-toggled footer.sticky-footer {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.sidebar-toggled footer.sticky-footer {\r\n    width: calc(100% - 90px);\r\n  }\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  padding: 20px 0 20px;\r\n  list-style: none;\r\n}\r\n\r\n.timeline:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 3px;\r\n  margin-left: -1.5px;\r\n  background-color: #eeeeee;\r\n}\r\n\r\n.timeline > li {\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li > .timeline-panel {\r\n  float: left;\r\n  position: relative;\r\n  width: 46%;\r\n  padding: 20px;\r\n  border: 1px solid #d4d4d4;\r\n  border-radius: 2px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n}\r\n\r\n.timeline > li > .timeline-panel:before {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 26px;\r\n  right: -15px;\r\n  border-top: 15px solid transparent;\r\n  border-right: 0 solid #ccc;\r\n  border-bottom: 15px solid transparent;\r\n  border-left: 15px solid #ccc;\r\n}\r\n\r\n.timeline > li > .timeline-panel:after {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 27px;\r\n  right: -14px;\r\n  border-top: 14px solid transparent;\r\n  border-right: 0 solid #fff;\r\n  border-bottom: 14px solid transparent;\r\n  border-left: 14px solid #fff;\r\n}\r\n\r\n.timeline > li > .timeline-badge {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 16px;\r\n  left: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: -25px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n  line-height: 50px;\r\n  color: #fff;\r\n  background-color: #999999;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline-badge.primary {\r\n  background-color: #2e6da4 !important;\r\n}\r\n\r\n.timeline-badge.success {\r\n  background-color: #3f903f !important;\r\n}\r\n\r\n.timeline-badge.warning {\r\n  background-color: #f0ad4e !important;\r\n}\r\n\r\n.timeline-badge.danger {\r\n  background-color: #d9534f !important;\r\n}\r\n\r\n.timeline-badge.info {\r\n  background-color: #5bc0de !important;\r\n}\r\n\r\n.timeline-title {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n\r\n.timeline-body > p,\r\n.timeline-body > ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.timeline-body > p + p {\r\n  margin-top: 5px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  ul.timeline:before {\r\n    left: 40px;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    width: calc(10%);\r\n    width: -webkit-calc(10%);\r\n  }\r\n  ul.timeline > li > .timeline-badge {\r\n    top: 16px;\r\n    left: 15px;\r\n    margin-left: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    float: right;\r\n  }\r\n  ul.timeline > li > .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-users/admin-users.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger fixed-top\" role=\"alert\" style=\"z-index: 1031;\" *ngIf=\"showMessage\">\n  {{showMessage}}\n</div>\n<dashboard-navbar></dashboard-navbar>\n\n<div id=\"wrapper\">\n\n  <dashboard-sidebar></dashboard-sidebar>\n\n  <div id=\"content-wrapper\">\n\n    <div class=\"container-fluid\">\n      <h2>Users</h2>\n      <hr>\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/dashboard\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Users</li>\n      </ol>\n\n      <!-- Icon Cards-->\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-primary o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-users\"></i>\n              </div>\n              <div class=\"mr-5\"># Users <br> {{users.length}}</div>\n            </div>\n            <!-- <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </a> -->\n          </div>\n        </div>\n\n      </div>\n\n      <!--   Area Chart Example-->\n      <!--  <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-chart-area\"></i>\n          Area Chart Example</div>\n        <div class=\"card-body\">\n          <canvas id=\"myChart\" width=\"100%\" height=\"30\"></canvas>\n        </div>\n        <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div>\n      </div> -->\n\n      <!-- DataTables Example -->\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-table\"></i>\n          Users</div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table \" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n              <thead>\n                <tr>\n                  <th>NAME</th>\n                  <th>LAST NAME</th>\n                  <th>PRICE</th>\n                  <th>CONFIRMATION</th>\n                  <th>MANAGER</th>\n                  <th>ACTIONS</th>\n                </tr>\n              </thead>\n              <!-- <tfoot>\n                <tr>\n                  <th>Name</th>\n                  <th>Position</th>\n                  <th>Office</th>\n                  <th>Age</th>\n                  <th>Start date</th>\n                  <th>Salary</th>\n                </tr>\n              </tfoot> -->\n              <tbody *ngFor=\"let item of users; index as i; first as isFirst\">\n                <tr>\n                  <td>{{item.firstName}}</td>\n                  <td>{{item.lastName}}</td>\n                  <td>{{item.email}}</td>\n                  <td>{{item.emailConfirmation}}</td>\n                  <td>{{item.userType&&item.userType.length > 0?'Yes':'No'}}</td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-primary\" title=\"Set as admin\" (click)=\"toAdmin(item)\">\n                      <i class=\"fas fa-user-astronaut\" ></i>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-primary ml-1\" title=\"Email verification\" (click)=\"toAceptEmailVerification(item)\">\n                      <i class=\"fas fa-user-check\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"card-footer small text-muted\">Updated</div>\n      </div>\n\n\n\n    </div>\n    <!-- /.container-fluid -->\n\n\n\n\n  </div>\n  <!-- /.content-wrapper -->\n\n</div>\n<!-- /#wrapper -->\n\n<footer id=\"footer\" style=\"width: auto !important\">\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; 2018 <strong>Searchfuse Marketing Management</strong>.\n    </div>\n    <div class=\"credits\">\n      Built with <i class=\"fas fa-heart\"></i> in Dubai.\n    </div>\n  </div>\n</footer>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"balanceModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Get more balance</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <label for=\"\">Amount:</label>\n        <input type=\"number\" class=\"form-control\" aria-label=\"Search\" [value]=\"amountToPut\" (input)=\"amountToPut = $event.target.value\"\n          aria-describedby=\"basic-addon2\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" >Buy</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-users/admin-users.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.ts ***!
  \******************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(usrServ, admServ) {
        this.usrServ = usrServ;
        this.admServ = admServ;
        this.user = {};
        this.amountToPut = 0;
        this.showMessage = false;
        this.users = [];
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.usrServ.ifInvalidUserToLogin();
        if (!this.usrServ.isUserManage()) {
            this.usrServ.goTo("/dashboard");
        }
        this.admServ.allUser().subscribe(function (res) {
            _this.users = res;
        });
    };
    AdminUsersComponent.prototype.toAdmin = function (item) {
        var _this = this;
        this.admServ.toAdmin(item).subscribe(function (res) {
            _this.admServ.allUser().subscribe(function (res) {
                _this.users = res;
            });
        });
    };
    AdminUsersComponent.prototype.toAceptEmailVerification = function (item) {
        var _this = this;
        this.admServ.toAceptEmailVerification(item).subscribe(function (res) {
            _this.admServ.allUser().subscribe(function (res) {
                _this.users = res;
            });
        });
    };
    AdminUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-users',
            template: __webpack_require__(/*! ./admin-users.component.html */ "./src/app/admin-users/admin-users.component.html"),
            styles: [__webpack_require__(/*! ./admin-users.component.css */ "./src/app/admin-users/admin-users.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _plans_plans_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./plans/plans.component */ "./src/app/plans/plans.component.ts");
/* harmony import */ var _plan_plan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plan/plan.component */ "./src/app/plan/plan.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard-navbar/dashboard-navbar.component */ "./src/app/dashboard-navbar/dashboard-navbar.component.ts");
/* harmony import */ var _dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard-sidebar/dashboard-sidebar.component */ "./src/app/dashboard-sidebar/dashboard-sidebar.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./transactions/transactions.component */ "./src/app/transactions/transactions.component.ts");
/* harmony import */ var _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./confirm/confirm.component */ "./src/app/confirm/confirm.component.ts");
/* harmony import */ var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./thank-you/thank-you.component */ "./src/app/thank-you/thank-you.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _admin_plans_admin_plans_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./admin-plans/admin-plans.component */ "./src/app/admin-plans/admin-plans.component.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/admin-users/admin-users.component.ts");
/* harmony import */ var _order_management_order_management_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./order-management/order-management.component */ "./src/app/order-management/order-management.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var ROUTES = [
    {
        path: 'plans',
        component: _plans_plans_component__WEBPACK_IMPORTED_MODULE_11__["PlansComponent"]
    },
    {
        path: 'plan/:id',
        component: _plan_plan_component__WEBPACK_IMPORTED_MODULE_12__["PlanComponent"]
    },
    {
        path: 'plan/:id/thank-you',
        component: _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_22__["ThankYouComponent"]
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
    },
    {
        path: 'forgot-password',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_27__["ResetPasswordComponent"]
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"]
    },
    {
        path: 'adminDashboard',
        component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["AdminDashboardComponent"]
    },
    {
        path: 'adminPlans',
        component: _admin_plans_admin_plans_component__WEBPACK_IMPORTED_MODULE_28__["AdminPlansComponent"]
    },
    {
        path: 'adminUsers',
        component: _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_29__["AdminUsersComponent"]
    },
    {
        path: 'orders',
        component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_19__["OrdersComponent"]
    },
    {
        path: 'orderManagement/:id',
        component: _order_management_order_management_component__WEBPACK_IMPORTED_MODULE_30__["OrderManagementComponent"]
    },
    {
        path: 'transactions',
        component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_20__["TransactionsComponent"]
    },
    {
        path: 'notifications',
        component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_23__["NotificationComponent"]
    },
    {
        path: 'messages',
        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_24__["MessagesComponent"]
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_25__["SettingsComponent"]
    },
    {
        path: 'confirm',
        component: _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"]
    },
];
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _plans_plans_component__WEBPACK_IMPORTED_MODULE_11__["PlansComponent"],
                _plan_plan_component__WEBPACK_IMPORTED_MODULE_12__["PlanComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                _dashboard_navbar_dashboard_navbar_component__WEBPACK_IMPORTED_MODULE_17__["DashboardNavbarComponent"],
                _dashboard_sidebar_dashboard_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["DashboardSidebarComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_19__["OrdersComponent"],
                _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_20__["TransactionsComponent"],
                _confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"],
                _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_22__["ThankYouComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_23__["NotificationComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_24__["MessagesComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_25__["SettingsComponent"],
                _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_26__["AdminDashboardComponent"],
                _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_27__["ResetPasswordComponent"],
                _admin_plans_admin_plans_component__WEBPACK_IMPORTED_MODULE_28__["AdminPlansComponent"],
                _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_29__["AdminUsersComponent"],
                _order_management_order_management_component__WEBPACK_IMPORTED_MODULE_30__["OrderManagementComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(ROUTES),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                    }
                }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_31__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_32__["environment"].production }),
            ],
            providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"], _services_admin_service__WEBPACK_IMPORTED_MODULE_9__["AdminService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/confirm/confirm.component.css":
/*!***********************************************!*\
  !*** ./src/app/confirm/confirm.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mobile */\r\n@media (max-width: 768px) {\r\n  header, main {\r\n    width: 99%;\r\n    margin: 0px auto;\r\n  }\r\n  \r\n}\r\n@media (min-width: 768px){\r\n  header, main {\r\n    width: 40%;\r\n    margin: 0px auto;\r\n  }  \r\n}\r\n.wall{\r\n  margin-top: 100px\r\n}\r\nheader {\r\n  /* text-align: center; */\r\n  margin-top: 100px;\r\n}\r\nmain {\r\n  background-color: white;\r\n  /* border-radius: 10px; */\r\n  box-shadow: 2px 2px 2px 2px  rgba(29, 22, 15, 0.7);\r\n  padding: 20px;\r\n}\r\n.pointer{\r\n  cursor: pointer;\r\n}\r\nimg{\r\n  width: 150px;\r\n}"

/***/ }),

/***/ "./src/app/confirm/confirm.component.html":
/*!************************************************!*\
  !*** ./src/app/confirm/confirm.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <header><img src=\"assets/logo.png\" alt=\"Logo\" class=\"mb-3\"></header> -->\n<main class=\"wall\" *ngIf=\"!error\">\n  <div class=\"container text-center\" id=\"success\">    \n      <i class=\"far fa-envelope-open fa-3x\"></i>\n      <p>Awesome, your account has been activated successfully.</p>\n      <p>Redirecting now to Dashboard...</p>\n      <!-- <a href=\"/login\">Back to Login</a> -->      \n  </div>\n</main>\n\n<main class=\"wall\" *ngIf=\"error\">\n  <div class=\"container text-center\" id=\"success\">    \n      <i class=\"far fa-envelope-open fa-3x\"></i>\n      <p>Sorry you code is not valid check again the link.</p>\n      <a href=\"/login\">Back to Login</a>      \n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/confirm/confirm.component.ts":
/*!**********************************************!*\
  !*** ./src/app/confirm/confirm.component.ts ***!
  \**********************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(usrServ) {
        this.usrServ = usrServ;
        this.error = false;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*  $("html").attr("style", "background-color: #fedb00;")
         $("body").attr("style", "background-color: #fedb00!important;") */
        this.url = new URL(location.href);
        this.code = this.url.searchParams.get("code") ? this.url.searchParams.get("code") : false;
        if (this.code) {
            this.usrServ.checkCode({ code: this.code }).subscribe(function (res) {
                //console.log(res)
                setTimeout(function () {
                    _this.usrServ.goTo("/dashboard");
                }, 4000);
            }, function (error) {
                //console.log(error)
                _this.error = true;
                console.log(error);
            });
        }
    };
    ConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rules',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.css */ "./src/app/confirm/confirm.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-navbar/dashboard-navbar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-navbar/dashboard-navbar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard-navbar/dashboard-navbar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-navbar/dashboard-navbar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark static-top\">\n\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <!-- <img width=\"120\" src=\"assets/img/SEARCHFUSELogo.png\" alt=\"\" title=\"\"> -->\n    <h2 style=\"color:white\"> IRecycle</h2>\n  </a>\n\n  <!-- <button class=\"btn btn-link btn-sm text-white order-1 order-sm-0\" id=\"sidebarToggle\" href=\"#\">\n      <i class=\"fas fa-bars\"></i>\n    </button> -->\n\n  <!-- Navbar Search -->\n  <!-- <form class=\"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-primary\" type=\"button\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form> -->\n  <form class=\"d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0\"></form>\n  <!-- Navbar -->\n  <ul class=\"navbar-nav ml-auto ml-md-0\">\n    <li class=\"nav-item dropdown no-arrow mx-1\">\n      <a class=\"nav-link dropdown-toggle\" id=\"alertsDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\">\n        <i class=\"fas fa-bell fa-fw\"></i>\n        <span class=\"badge badge-danger\" *ngIf=\"notifications.length!==0\">{{notifications.length}}</span>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"alertsDropdown\">\n        <a class=\"dropdown-item\" routerLink=\"/notifications\">Notifications</a>\n        <!-- <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->\n      </div>\n    </li>\n    <li class=\"nav-item dropdown no-arrow mx-1\">\n      <a class=\"nav-link dropdown-toggle\" id=\"messagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\">\n        <i class=\"fas fa-envelope fa-fw\"></i>\n        <span class=\"badge badge-danger\" *ngIf=\"messages.length!==0\">{{messages.length}}</span>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"messagesDropdown\">\n        <a class=\"dropdown-item\" routerLink=\"/messages\">Messages</a>\n        <!-- <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a> -->\n      </div>\n    </li>\n    <li class=\"nav-item dropdown no-arrow\">\n      <a class=\"nav-link dropdown-toggle\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n        aria-expanded=\"false\">\n        <i class=\"fas fa-user-circle fa-fw\"></i>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdown\">\n        <a class=\"dropdown-item\" routerLink=\"/settings\">Settings</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n      </div>\n    </li>\n  </ul>\n\n</nav>"

/***/ }),

/***/ "./src/app/dashboard-navbar/dashboard-navbar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard-navbar/dashboard-navbar.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardNavbarComponent", function() { return DashboardNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardNavbarComponent = /** @class */ (function () {
    function DashboardNavbarComponent(usrServ, admServ) {
        this.usrServ = usrServ;
        this.admServ = admServ;
        this.messages = [];
        this.notifications = [];
        this.user = {};
    }
    DashboardNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.usrServ.ifInvalidUserToLogin();
        this.getMessagesAndNotifications();
        this.usrServ.onMessage().subscribe(function (to) {
            //console.log("message", to)
            _this.getMessagesAndNotifications();
        });
    };
    DashboardNavbarComponent.prototype.logout = function () {
        //event.preventDefault();
        this.usrServ.removeSession('user');
        //this.router.navigate(['/login']);
        location.href = '/login';
    };
    DashboardNavbarComponent.prototype.getMessagesAndNotifications = function () {
        var _this = this;
        if (this.usrServ.isUserManage()) {
            this.admServ.messageByIDNoAdmin().subscribe(function (res) {
                _this.messages = res.filter(function (e) { return !e.read; });
            });
            this.admServ.notificationByIDNoAdmin().subscribe(function (res) {
                _this.notifications = res.filter(function (e) { return !e.read; });
            });
        }
        else {
            this.usrServ.messageByIDAdmin().subscribe(function (res) {
                _this.messages = res.filter(function (e) { return !e.read; });
            });
            this.usrServ.notificationByIDAdmin().subscribe(function (res) {
                _this.notifications = res.filter(function (e) { return !e.read; });
            });
        }
    };
    DashboardNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard-navbar',
            template: __webpack_require__(/*! ./dashboard-navbar.component.html */ "./src/app/dashboard-navbar/dashboard-navbar.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-navbar.component.css */ "./src/app/dashboard-navbar/dashboard-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], DashboardNavbarComponent);
    return DashboardNavbarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-sidebar/dashboard-sidebar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-sidebar/dashboard-sidebar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\r\n  height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/dashboard-sidebar/dashboard-sidebar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard-sidebar/dashboard-sidebar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar -->\n<ul class=\"sidebar navbar-nav\">\n    <li class=\"nav-item active\" *ngIf=\"!serv.isUserManage()\">\n      <a class=\"nav-link click\" routerLink=\"/dashboard\">\n        <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n        <span class=\"ml-1\"> Dashboard</span>\n      </a>\n    </li>\n    <li class=\"nav-item active\" *ngIf=\"serv.isUserManage()\">\n      <a class=\"nav-link click\" routerLink=\"/adminDashboard\">\n        <i class=\"fas fa-fw fa-tachometer-alt\"></i>\n        <span class=\"ml-1\">Admin Dashboard</span>\n      </a>\n    </li>\n    <li class=\"nav-item active\" *ngIf=\"serv.isUserManage()\">\n      <a class=\"nav-link click\" routerLink=\"/adminPlans\">\n        <i class=\"fas fa-scroll\"></i>\n        <span class=\"ml-1\" >Plans</span>\n      </a>\n    </li>\n    <li class=\"nav-item active\" *ngIf=\"serv.isUserManage()\">\n      <a class=\"nav-link click\" routerLink=\"/adminUsers\">\n        <i class=\"fas fa-users\"></i>\n        <span class=\"ml-1\" >Users</span>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link click\" routerLink=\"/orders\">\n        <i class=\"fas fa-clipboard-check\"></i>\n        <span> Manage Orders</span></a>\n    </li>\n    <!-- <li class=\"nav-item\">\n      <a class=\"nav-link click\" routerLink=\"/transactions\">\n        <i class=\"fas fa-money-check-alt\"></i>\n        <span> Transactions</span></a>\n    </li> -->\n    <li class=\"nav-item\">\n      <a class=\"nav-link click\" routerLink=\"/settings\">\n        <i class=\"fas fa-cog\"></i>\n        <span> Settings</span></a>\n    </li>    \n  </ul>\n"

/***/ }),

/***/ "./src/app/dashboard-sidebar/dashboard-sidebar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard-sidebar/dashboard-sidebar.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSidebarComponent", function() { return DashboardSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardSidebarComponent = /** @class */ (function () {
    function DashboardSidebarComponent(usrServ) {
        this.usrServ = usrServ;
        this.serv = {};
        this.serv = usrServ;
    }
    DashboardSidebarComponent.prototype.ngOnInit = function () {
    };
    DashboardSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard-sidebar',
            template: __webpack_require__(/*! ./dashboard-sidebar.component.html */ "./src/app/dashboard-sidebar/dashboard-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-sidebar.component.css */ "./src/app/dashboard-sidebar/dashboard-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], DashboardSidebarComponent);
    return DashboardSidebarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\r\n  display: flex;\r\n}\r\n\r\n#wrapper #content-wrapper {\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  padding-top: 1rem;\r\n  padding-bottom: 80px;\r\n}\r\n\r\nbody.fixed-nav #content-wrapper {\r\n  margin-top: 56px;\r\n  padding-left: 90px;\r\n}\r\n\r\nbody.fixed-nav.sidebar-toggled #content-wrapper {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.fixed-nav #content-wrapper {\r\n    padding-left: 225px;\r\n  }\r\n  body.fixed-nav.sidebar-toggled #content-wrapper {\r\n    padding-left: 90px;\r\n  }\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 46px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.smaller {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n  z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav .form-inline .input-group {\r\n  width: 100%;\r\n}\r\n\r\n.navbar-nav .nav-item.active .nav-link {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown .dropdown-toggle::after {\r\n  width: 1rem;\r\n  text-align: center;\r\n  float: right;\r\n  vertical-align: 0;\r\n  border: 0;\r\n  font-weight: 900;\r\n  content: '\\f105';\r\n  font-family: 'Font Awesome 5 Free';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {\r\n  content: '\\f107';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link:focus {\r\n  outline: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link .badge {\r\n  position: absolute;\r\n  margin-left: 0.75rem;\r\n  top: 0.3rem;\r\n  font-weight: 400;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-nav .form-inline .input-group {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n.card-body-icon {\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: -1.25rem;\r\n  right: -1rem;\r\n  opacity: 0.4;\r\n  font-size: 5rem;\r\n  -webkit-transform: rotate(15deg);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n    column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n:root {\r\n  --input-padding-x: 0.75rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\n.card-login {\r\n  max-width: 25rem;\r\n}\r\n\r\n.card-register {\r\n  max-width: 40rem;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n  height: auto;\r\n}\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\nfooter.sticky-footer {\r\n  display: flex;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: calc(100% - 90px);\r\n  height: 80px;\r\n  background-color: #e9ecef;\r\n}\r\n\r\nfooter.sticky-footer .copyright {\r\n  line-height: 1;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  footer.sticky-footer {\r\n    width: calc(100% - 225px);\r\n  }\r\n}\r\n\r\nbody.sidebar-toggled footer.sticky-footer {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.sidebar-toggled footer.sticky-footer {\r\n    width: calc(100% - 90px);\r\n  }\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  padding: 20px 0 20px;\r\n  list-style: none;\r\n}\r\n\r\n.timeline:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 3px;\r\n  margin-left: -1.5px;\r\n  background-color: #eeeeee;\r\n}\r\n\r\n.timeline > li {\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li > .timeline-panel {\r\n  float: left;\r\n  position: relative;\r\n  width: 46%;\r\n  padding: 20px;\r\n  border: 1px solid #d4d4d4;\r\n  border-radius: 2px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n}\r\n\r\n.timeline > li > .timeline-panel:before {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 26px;\r\n  right: -15px;\r\n  border-top: 15px solid transparent;\r\n  border-right: 0 solid #ccc;\r\n  border-bottom: 15px solid transparent;\r\n  border-left: 15px solid #ccc;\r\n}\r\n\r\n.timeline > li > .timeline-panel:after {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 27px;\r\n  right: -14px;\r\n  border-top: 14px solid transparent;\r\n  border-right: 0 solid #fff;\r\n  border-bottom: 14px solid transparent;\r\n  border-left: 14px solid #fff;\r\n}\r\n\r\n.timeline > li > .timeline-badge {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 16px;\r\n  left: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: -25px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n  line-height: 50px;\r\n  color: #fff;\r\n  background-color: #999999;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline-badge.primary {\r\n  background-color: #2e6da4 !important;\r\n}\r\n\r\n.timeline-badge.success {\r\n  background-color: #3f903f !important;\r\n}\r\n\r\n.timeline-badge.warning {\r\n  background-color: #f0ad4e !important;\r\n}\r\n\r\n.timeline-badge.danger {\r\n  background-color: #d9534f !important;\r\n}\r\n\r\n.timeline-badge.info {\r\n  background-color: #5bc0de !important;\r\n}\r\n\r\n.timeline-title {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n\r\n.timeline-body > p,\r\n.timeline-body > ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.timeline-body > p + p {\r\n  margin-top: 5px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  ul.timeline:before {\r\n    left: 40px;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    width: calc(10%);\r\n    width: -webkit-calc(10%);\r\n  }\r\n  ul.timeline > li > .timeline-badge {\r\n    top: 16px;\r\n    left: 15px;\r\n    margin-left: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    float: right;\r\n  }\r\n  ul.timeline > li > .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-navbar></dashboard-navbar>\n\n<div id=\"wrapper\">\n\n  <dashboard-sidebar></dashboard-sidebar>\n\n  <div id=\"content-wrapper\">\n\n    <div class=\"container-fluid\">\n\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a>Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Overview</li>\n      </ol>\n\n      <!-- Icon Cards-->\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-primary o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-fw fa-comments\"></i>\n              </div>\n              <div class=\"mr-5\">0 Messages</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/messages\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-warning o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-fw fa-list\"></i>\n              </div>\n              <div class=\"mr-5\">{{transactions}} Transactions</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/transactions\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-success o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-fw fa-shopping-cart\"></i>\n              </div>\n              <div class=\"mr-5\">{{orders}} Orders</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/orders\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-danger o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-fw fa-life-ring\"></i>\n              </div>\n              <div class=\"mr-5\">{{user.points}} Points</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1\" routerLink=\"/transactions\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card mb-3\" style=\"border-color: #337ab7;\">\n        <div class=\"card-header\" style=\"color: #fff;background-color: #337ab7;border-color: #337ab7;\">          \n          <h5><i class=\"fas fa-chart-area\"></i> TO-DOS </h5>\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"list-group click\">\n            <li class=\"list-group-item list-group-item-action\" routerLink=\"/settings\"><i class=\"fas fa-cog\"></i> Your user profile is incomplete. Please edit it.</li>\n            <!-- <li class=\"list-group-item list-group-item-action\" routerLink=\"/plans\"><i class=\"fas fa-store\"></i> You can start selling in 5 minutes. You'd be crazy  not to try!</li> -->\n            <!-- <li class=\"list-group-item list-group-item-action\" routerLink=\"/settings\"><i class=\"fas fa-cog\"></i> You haven't set a security question. Please do so</li> -->\n            <!-- <li class=\"list-group-item list-group-item-action\"><i class=\"fas fa-thumbtack\"></i> Set your Billing Informations</li> -->\n            <!-- <li class=\"list-group-item list-group-item-action\"><i class=\"fas fa-gift\"></i> Invite friends & Get up to AED 100</li> -->\n          </ul>\n        </div>\n        <!-- <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div> -->\n      </div>\n\n      <!-- Area Chart Example-->\n      <!-- <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-chart-area\"></i>\n          Area Chart Example</div>\n        <div class=\"card-body\">\n          <canvas id=\"myChart\" width=\"100%\" height=\"30\"></canvas>\n        </div>\n        <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div>\n      </div> -->\n\n      <!-- DataTables Example -->\n      <!--   <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-table\"></i>\n          Data Table Example</div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Position</th>\n                  <th>Office</th>\n                  <th>Age</th>\n                  <th>Start date</th>\n                  <th>Salary</th>\n                </tr>\n              </thead>\n              <tfoot>\n                <tr>\n                  <th>Name</th>\n                  <th>Position</th>\n                  <th>Office</th>\n                  <th>Age</th>\n                  <th>Start date</th>\n                  <th>Salary</th>\n                </tr>\n              </tfoot>\n              <tbody>\n                <tr>\n                  <td>Tiger Nixon</td>\n                  <td>System Architect</td>\n                  <td>Edinburgh</td>\n                  <td>61</td>\n                  <td>2011/04/25</td>\n                  <td>$320,800</td>\n                </tr>\n                              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div>\n      </div>\n -->\n\n      <!-- <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-clock-o fa-fw\"></i> Get started\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"timeline\">\n            <li>\n              <div class=\"timeline-badge\"><i class=\"fa fa-check\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Choose a plan</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>The process start creating an account, and selecting the right plan for you.</p>\n                </div>\n              </div>\n            </li>\n            <li class=\"timeline-inverted\">\n              <div class=\"timeline-badge warning\"><i class=\"fa fa-credit-card\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Payment</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>Select method of payment</p>                  \n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"timeline-badge danger\"><i class=\"fa fa-bomb\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Get an improvement on your area</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>Our team will make your dreams come true.</p>\n                </div>\n              </div>\n            </li>\n            <li class=\"timeline-inverted\">\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Explore your new opportunities</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>...</p>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"timeline-badge info\"><i class=\"fa fa-save\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est\n                    molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla\n                    qui! Laborum, atque.</p>\n                  <hr>\n                  <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                      <i class=\"fa fa-gear\"></i> <span class=\"caret\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\" role=\"menu\">\n                      <li><a href=\"#\">Action</a>\n                      </li>\n                      <li><a href=\"#\">Another action</a>\n                      </li>\n                      <li><a href=\"#\">Something else here</a>\n                      </li>\n                      <li class=\"divider\"></li>\n                      <li><a href=\"#\">Separated link</a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <li>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure\n                    expedita, incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur\n                    nostrum sequi. Consequuntur, commodi.</p>\n                </div>\n              </div>\n            </li>\n            <li class=\"timeline-inverted\">\n              <div class=\"timeline-badge success\"><i class=\"fa fa-graduation-cap\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore\n                    officia voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam,\n                    enim incidunt quisquam maxime neque eaque.</p>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div> -->\n\n    </div>\n    <!-- /.container-fluid -->\n\n\n\n\n  </div>\n  <!-- /.content-wrapper -->\n\n</div>\n<!-- /#wrapper -->\n\n<footer id=\"footer\" style=\"width: auto !important\">\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; 2018 <strong>Searchfuse Marketing Management</strong>.\n    </div>\n    <div class=\"credits\">\n      Built with <i class=\"fas fa-heart\"></i> in Dubai.\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(usrServ) {
        this.usrServ = usrServ;
        this.user = {};
        this.orders = 0;
        this.transactions = 0;
        this.balance = 0;
        this.purchases = 0;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.usrServ.ifInvalidUserToLogin();
        if (this.usrServ.isUserManage()) {
            this.usrServ.goTo("/adminDashboard");
        }
        else {
            this.usrServ.transactions().subscribe(function (res) {
                _this.orders = res.filter(function (e) { return e.plan !== "balance" && e.status === "Active"; }).length;
                res.forEach(function (e) {
                    if (e.status !== "Declined" && e.plan !== "balance") {
                        _this.purchases += +e.price;
                    }
                    if (e.status !== "Declined" && e.plan === "balance") {
                        _this.balance += +e.price;
                    }
                });
                _this.transactions = res.length;
            });
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nbody {\r\n  background: #fff;\r\n  color: #2f3138;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\na {\r\n  color: #0143a3;\r\n  transition: 0.5s;\r\n}\r\n\r\na:hover,\r\na:active,\r\na:focus {\r\n  color: #f8234a;\r\n  outline: none;\r\n  text-decoration: none;\r\n}\r\n\r\np {\r\n  padding: 0;\r\n  margin: 0 0 30px 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-weight: 400;\r\n  margin: 0 0 20px 0;\r\n  padding: 0;\r\n  color: #0e1b4d;\r\n}\r\n\r\n.main-page {\r\n  margin-top: 70px;\r\n}\r\n\r\n.wow {\r\n  visibility: hidden;\r\n}\r\n\r\n/* Prelaoder */\r\n\r\n#preloader {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 999;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: visible;\r\n  background: #fff /* url(\"../assets/img/preloader.svg\") */ no-repeat center center;\r\n}\r\n\r\n/* Back to top button */\r\n\r\n.back-to-top {\r\n  position: fixed;\r\n  display: none;\r\n  background: #0143a3;\r\n  color: #fff;\r\n  width: 40px;\r\n  height: 40px;\r\n  text-align: center;\r\n  border-radius: 50px;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  transition: background 0.5s ease-in-out;\r\n}\r\n\r\n.back-to-top i {\r\n  font-size: 24px;\r\n  padding-top: 6px;\r\n}\r\n\r\n.back-to-top:focus {\r\n  background: #e0072f;\r\n  color: #fff;\r\n  outline: none;\r\n}\r\n\r\n.back-to-top:hover {\r\n  background: #e0072f;\r\n  color: #fff;\r\n}\r\n\r\n/* Sections Header\r\n--------------------------------*/\r\n\r\n.section-header {\r\n  margin-bottom: 60px;\r\n  position: relative;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.section-header::before {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  width: 60px;\r\n  height: 5px;\r\n  background: #0143a3;\r\n  bottom: 0;\r\n  left: calc(50% - 25px);\r\n}\r\n\r\n.section-header h2 {\r\n  font-size: 36px;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  font-weight: 700;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.section-header p {\r\n  text-align: center;\r\n  padding: 0;\r\n  margin: 0;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  color: #9195a2;\r\n}\r\n\r\n.section-with-bg {\r\n  background-color: #f6f7fd;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Header\r\n--------------------------------------------------------------*/\r\n\r\n#header {\r\n  height: 90px;\r\n  padding: 25px 0;\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  transition: all 0.5s;\r\n  z-index: 997;\r\n}\r\n\r\n#header.header-scrolled,\r\n#header.header-fixed {\r\n  background: rgba(6, 12, 34, 0.98);\r\n  height: 70px;\r\n  padding: 15px 0;\r\n  transition: all 0.5s;\r\n}\r\n\r\n#header #logo h1 {\r\n  font-size: 36px;\r\n  margin: 0;\r\n  padding: 6px 0;\r\n  line-height: 1;\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 3px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n#header #logo h1 span {\r\n  color: #0143a3;\r\n}\r\n\r\n#header #logo h1 a,\r\n#header #logo h1 a:hover {\r\n  color: #fff;\r\n}\r\n\r\n#header #logo img {\r\n  padding: 0;\r\n  margin: 0;\r\n  max-height: 40px;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Navigation Menu\r\n--------------------------------------------------------------*/\r\n\r\n/* Nav Menu Essentials */\r\n\r\n.nav-menu,\r\n.nav-menu * {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.nav-menu ul {\r\n  position: absolute;\r\n  display: none;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 99;\r\n}\r\n\r\n.nav-menu li {\r\n  position: relative;\r\n  white-space: nowrap;\r\n}\r\n\r\n.nav-menu > li {\r\n  float: left;\r\n}\r\n\r\n.nav-menu li:hover > ul,\r\n.nav-menu li.sfHover > ul {\r\n  display: block;\r\n}\r\n\r\n.nav-menu ul ul {\r\n  top: 0;\r\n  left: 100%;\r\n}\r\n\r\n.nav-menu ul li {\r\n  min-width: 180px;\r\n}\r\n\r\n/* Nav Menu Arrows */\r\n\r\n.sf-arrows .sf-with-ul {\r\n  padding-right: 30px;\r\n}\r\n\r\n.sf-arrows .sf-with-ul:after {\r\n  content: \"\\f107\";\r\n  position: absolute;\r\n  right: 15px;\r\n  font-family: FontAwesome;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n}\r\n\r\n.sf-arrows ul .sf-with-ul:after {\r\n  content: \"\\f105\";\r\n}\r\n\r\n/* Nav Meu Container */\r\n\r\n#nav-menu-container {\r\n  float: right;\r\n  margin: 0;\r\n}\r\n\r\n/* Nav Meu Styling */\r\n\r\n.nav-menu a {\r\n  padding: 8px;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  color: rgba(202, 206, 221, 0.8);\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 14px;\r\n  outline: none;\r\n}\r\n\r\n.nav-menu .menu-active a,\r\n.nav-menu a:hover {\r\n  color: #fff;\r\n}\r\n\r\n.nav-menu > li {\r\n  margin-left: 8px;\r\n}\r\n\r\n.nav-menu > li > a:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 0;\r\n  height: 2px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: #0143a3;\r\n  visibility: hidden;\r\n  transition: all 0.3s ease-in-out 0s;\r\n}\r\n\r\n.nav-menu a:hover:before,\r\n.nav-menu li:hover > a:before,\r\n.nav-menu .menu-active > a:before {\r\n  visibility: visible;\r\n  width: 100%;\r\n}\r\n\r\n.nav-menu li.buy-tickets a {\r\n  color: #fff;\r\n  background: #0143a3;\r\n  padding: 7px 22px;\r\n  border-radius: 50px;\r\n  border: 2px solid #0143a3;\r\n  transition: all ease-in-out 0.3s;\r\n  font-weight: 500;\r\n  margin-left: 8px;\r\n  margin-top: 2px;\r\n  line-height: 1;\r\n  font-size: 13px;\r\n}\r\n\r\n.nav-menu li.buy-tickets a:hover {\r\n  background: none;\r\n}\r\n\r\n.nav-menu li.buy-tickets:hover a:before,\r\n.nav-menu li.buy-tickets.menu-active a:before {\r\n  visibility: hidden;\r\n}\r\n\r\n.nav-menu ul {\r\n  margin: 4px 0 0 0;\r\n  padding: 10px;\r\n  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\r\n  background: #fff;\r\n  border-radius: 3px;\r\n}\r\n\r\n.nav-menu ul li {\r\n  transition: 0.3s;\r\n}\r\n\r\n.nav-menu ul li a {\r\n  padding: 10px;\r\n  color: #060c22;\r\n  transition: 0.3s;\r\n  display: block;\r\n  font-size: 13px;\r\n  text-transform: none;\r\n  border-radius: 3px;\r\n}\r\n\r\n.nav-menu ul li:hover > a {\r\n  background: #0143a3;\r\n  color: #fff;\r\n}\r\n\r\n.nav-menu ul ul {\r\n  margin: 0;\r\n}\r\n\r\n/* Mobile Nav Toggle */\r\n\r\n#mobile-nav-toggle {\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: 999;\r\n  margin: 15px 15px 0 0;\r\n  border: 0;\r\n  background: none;\r\n  font-size: 24px;\r\n  display: none;\r\n  transition: all 0.4s;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#mobile-nav-toggle i {\r\n  color: #fff;\r\n}\r\n\r\n/* Mobile Nav Styling */\r\n\r\n#mobile-nav {\r\n  position: fixed;\r\n  top: 0;\r\n  padding-top: 18px;\r\n  bottom: 0;\r\n  z-index: 998;\r\n  background: rgba(6, 12, 34, 0.9);\r\n  left: -260px;\r\n  width: 260px;\r\n  overflow-y: auto;\r\n  transition: 0.4s;\r\n}\r\n\r\n#mobile-nav ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n}\r\n\r\n#mobile-nav ul li {\r\n  position: relative;\r\n}\r\n\r\n#mobile-nav ul li a {\r\n  color: #fff;\r\n  font-size: 17px;\r\n  overflow: hidden;\r\n  padding: 10px 22px 10px 15px;\r\n  position: relative;\r\n  text-decoration: none;\r\n  width: 100%;\r\n  display: block;\r\n  outline: none;\r\n}\r\n\r\n#mobile-nav ul li a:hover {\r\n  color: #0143a3;\r\n}\r\n\r\n#mobile-nav ul li li {\r\n  padding-left: 30px;\r\n}\r\n\r\n#mobile-nav ul .menu-has-children i {\r\n  position: absolute;\r\n  right: 0;\r\n  z-index: 99;\r\n  padding: 15px;\r\n  cursor: pointer;\r\n  color: #fff;\r\n}\r\n\r\n#mobile-nav ul .menu-has-children i.fa-chevron-up {\r\n  color: #0143a3;\r\n}\r\n\r\n#mobile-nav ul .menu-item-active {\r\n  color: #0143a3;\r\n}\r\n\r\n#mobile-body-overly {\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 997;\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  background: rgba(6, 12, 34, 0.8);\r\n  display: none;\r\n}\r\n\r\n/* Mobile Nav body classes */\r\n\r\nbody.mobile-nav-active {\r\n  overflow: hidden;\r\n}\r\n\r\nbody.mobile-nav-active #mobile-nav {\r\n  left: 0;\r\n}\r\n\r\nbody.mobile-nav-active #mobile-nav-toggle {\r\n  color: #fff;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Intro Section\r\n--------------------------------------------------------------*/\r\n\r\n#intro {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: url('bg2.png') top center;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n#intro:before {\r\n  content: \"\";\r\n  background: rgba(6, 12, 34, 0.8);\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n#intro .intro-container {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  top: 90px;\r\n  right: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  padding: 0 15px;\r\n}\r\n\r\n#intro h1 {\r\n  color: #fff;\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-size: 56px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n}\r\n\r\n#intro h1 span {\r\n  color: #0143a3;\r\n}\r\n\r\n#intro p {\r\n  color: #ebebeb;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n}\r\n\r\n#intro .play-btn {\r\n  width: 94px;\r\n  height: 94px;\r\n  background: radial-gradient(#0143a3 50%, rgba(101, 111, 150, 0.15) 52%);\r\n  border-radius: 50%;\r\n  display: block;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n#intro .play-btn::after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-40%) translateY(-50%);\r\n  transform: translateX(-40%) translateY(-50%);\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 10px solid transparent;\r\n  border-bottom: 10px solid transparent;\r\n  border-left: 15px solid #fff;\r\n  z-index: 100;\r\n  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n}\r\n\r\n#intro .play-btn:before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation-delay: 0s;\r\n  animation-delay: 0s;\r\n  -webkit-animation: pulsate-btn 2s;\r\n  animation: pulsate-btn 2s;\r\n  -webkit-animation-direction: forwards;\r\n  animation-direction: forwards;\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n  -webkit-animation-timing-function: steps;\r\n  animation-timing-function: steps;\r\n  opacity: 1;\r\n  border-radius: 50%;\r\n  border: 2px solid rgba(163, 163, 163, 0.4);\r\n  top: -15%;\r\n  left: -15%;\r\n  background: rgba(198, 16, 0, 0);\r\n}\r\n\r\n#intro .play-btn:hover::after {\r\n  border-left: 15px solid #0143a3;\r\n  -webkit-transform: scale(20);\r\n  transform: scale(20);\r\n}\r\n\r\n#intro .play-btn:hover::before {\r\n  content: '';\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: translateX(-40%) translateY(-50%);\r\n  transform: translateX(-40%) translateY(-50%);\r\n  width: 0;\r\n  height: 0;\r\n  border: none;\r\n  border-top: 10px solid transparent;\r\n  border-bottom: 10px solid transparent;\r\n  border-left: 15px solid #fff;\r\n  z-index: 200;\r\n  -webkit-animation: none;\r\n  animation: none;\r\n  border-radius: 0;\r\n}\r\n\r\n#intro .about-btn {\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  display: inline-block;\r\n  padding: 12px 32px;\r\n  border-radius: 50px;\r\n  transition: 0.5s;\r\n  line-height: 1;\r\n  margin: 10px;\r\n  color: #fff;\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n  border: 2px solid #0143a3;\r\n}\r\n\r\n#intro .about-btn:hover {\r\n  background: #0143a3;\r\n  color: #fff;\r\n}\r\n\r\n@-webkit-keyframes pulsate-btn {\r\n  0% {\r\n    -webkit-transform: scale(0.6, 0.6);\r\n    transform: scale(0.6, 0.6);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes pulsate-btn {\r\n  0% {\r\n    -webkit-transform: scale(0.6, 0.6);\r\n    transform: scale(0.6, 0.6);\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1, 1);\r\n    transform: scale(1, 1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# About Section\r\n--------------------------------------------------------------*/\r\n\r\n#about {\r\n  background: url('about-bg.jpg');\r\n  background-size: cover;\r\n  overflow: hidden;\r\n  position: relative;\r\n  color: #fff;\r\n  padding: 60px 0 40px 0;\r\n}\r\n\r\n#about:before {\r\n  content: \"\";\r\n  background: rgba(13, 20, 41, 0.8);\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n#about h2 {\r\n  font-size: 36px;\r\n  font-weight: bold;\r\n  margin-bottom: 10px;\r\n  color: #fff;\r\n}\r\n\r\n#about h3 {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  margin-bottom: 10px;\r\n  color: #fff;\r\n}\r\n\r\n#about p {\r\n  font-size: 14px;\r\n  margin-bottom: 20px;\r\n  color: #fff;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Speakers Section\r\n--------------------------------------------------------------*/\r\n\r\n#featured-plans {\r\n  padding: 60px 0 30px 0;\r\n}\r\n\r\n#featured-plans .featured-plan {\r\n  position: relative;\r\n  overflow: hidden;\r\n  /* margin-bottom: 30px; */\r\n}\r\n\r\n#featured-plans .featured-plan .details {\r\n  background: rgba(6, 12, 34, 0.76);\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -200px;\r\n  right: 0;\r\n  /* text-align: center; */\r\n  padding-top: 10px;\r\n  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\r\n}\r\n\r\n#featured-plans .featured-plan .details h3 {\r\n  color: #fff;\r\n  font-size: 22px;\r\n  font-weight: 600;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#featured-plans .featured-plan .details p {\r\n  color: #fff;\r\n  font-size: 15px;\r\n  margin-bottom: 10px;\r\n  font-style: italic;\r\n}\r\n\r\n#featured-plans .featured-plan .details .social {\r\n  height: 30px;\r\n}\r\n\r\n#featured-plans .featured-plan .details a {\r\n  color: #fff;\r\n}\r\n\r\n#featured-plans .featured-plan .details a:hover {\r\n  color: #0143a3;\r\n}\r\n\r\n#featured-plans .featured-plan:hover .details {\r\n  bottom: 0;\r\n}\r\n\r\n#featured-plans-details {\r\n  padding: 60px 0;\r\n}\r\n\r\n#featured-plans-details .details h2 {\r\n  color: #112363;\r\n  font-size: 28px;\r\n  font-weight: 700;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#featured-plans-details .details .social {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n#featured-plans-details .details .social a {\r\n  background: #e9edfb;\r\n  color: #112363;\r\n  line-height: 1;\r\n  display: inline-block;\r\n  text-align: center;\r\n  border-radius: 50%;\r\n  width: 36px;\r\n  height: 36px;\r\n  padding-top: 9px;\r\n}\r\n\r\n#featured-plans-details .details .social a:hover {\r\n  background: #0143a3;\r\n  color: #fff;\r\n}\r\n\r\n#featured-plans-details .details .social a i {\r\n  font-size: 18px;\r\n}\r\n\r\n#featured-plans-details .details p {\r\n  color: #112363;\r\n  font-size: 15px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Schedule Section\r\n--------------------------------------------------------------*/\r\n\r\n#schedule {\r\n  padding: 60px 0 60px 0;\r\n}\r\n\r\n#schedule .nav-tabs {\r\n  text-align: center;\r\n  margin: auto;\r\n  display: block;\r\n  border-bottom: 0;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#schedule .nav-tabs li {\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#schedule .nav-tabs a {\r\n  border: none;\r\n  border-radius: 50px;\r\n  font-weight: 600;\r\n  background-color: #0e1b4d;\r\n  color: #fff;\r\n  padding: 10px 100px;\r\n}\r\n\r\n#schedule .nav-tabs a.active {\r\n  background-color: #0143a3;\r\n  color: #fff;\r\n}\r\n\r\n#schedule .sub-heading {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  font-style: italic;\r\n  margin: 0 auto 30px auto;\r\n}\r\n\r\n#schedule .tab-pane {\r\n  transition: ease-in-out .2s;\r\n}\r\n\r\n#schedule .schedule-item {\r\n  border-bottom: 1px solid #cad4f6;\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n  transition: background-color ease-in-out 0.3s;\r\n}\r\n\r\n#schedule .schedule-item:hover {\r\n  background-color: #fff;\r\n}\r\n\r\n#schedule .schedule-item time {\r\n  padding-bottom: 5px;\r\n  display: inline-block;\r\n}\r\n\r\n#schedule .schedule-item .featured-plan {\r\n  width: 60px;\r\n  height: 60px;\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin: 0 10px 10px 0;\r\n}\r\n\r\n#schedule .schedule-item .featured-plan img {\r\n  height: 100%;\r\n  -webkit-transform: translateX(-50%);\r\n  transform: translateX(-50%);\r\n  margin-left: 50%;\r\n  transition: all ease-in-out 0.3s;\r\n}\r\n\r\n#schedule .schedule-item h4 {\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#schedule .schedule-item h4 span {\r\n  font-style: italic;\r\n  color: #19328e;\r\n  font-weight: normal;\r\n  font-size: 16px;\r\n}\r\n\r\n#schedule .schedule-item p {\r\n  font-style: italic;\r\n  color: #152b79;\r\n  margin-bottom: 0;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Venue Section\r\n--------------------------------------------------------------*/\r\n\r\n#venue {\r\n  padding: 60px 0;\r\n}\r\n\r\n#venue .container-fluid {\r\n  margin-bottom: 3px;\r\n}\r\n\r\n#venue .venue-map iframe {\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: 300px;\r\n}\r\n\r\n#venue .venue-info {\r\n  background: url('venue-info-bg.jpg') top center no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  padding-top: 60px;\r\n  padding-bottom: 60px;\r\n}\r\n\r\n#venue .venue-info:before {\r\n  content: \"\";\r\n  background: rgba(13, 20, 41, 0.8);\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n#venue .venue-info h3 {\r\n  font-size: 36px;\r\n  font-weight: 700;\r\n  color: #fff;\r\n}\r\n\r\n#venue .venue-info p {\r\n  color: #fff;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#venue .venue-gallery-container {\r\n  padding-right: 12px;\r\n}\r\n\r\n#venue .venue-gallery {\r\n  overflow: hidden;\r\n  border-right: 3px solid #fff;\r\n  border-bottom: 3px solid #fff;\r\n}\r\n\r\n#venue .venue-gallery img {\r\n  transition: all ease-in-out 0.4s;\r\n}\r\n\r\n#venue .venue-gallery:hover img {\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Hotels Section\r\n--------------------------------------------------------------*/\r\n\r\n#categories {\r\n  padding: 60px 0;\r\n}\r\n\r\n#categories .hotel {\r\n  border: 1px solid #e0e5fa;\r\n  background: #fff;\r\n  margin-bottom: 30px;\r\n  height: 100%;\r\n}\r\n\r\n#categories .hotel:hover .hotel-img img {\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\r\n}\r\n\r\n#categories .hotel-img {\r\n  overflow: hidden;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#categories .hotel-img img {\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n#categories h3 {\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n  margin-bottom: 5px;\r\n  padding: 0 20px;\r\n}\r\n\r\n#categories a {\r\n  color: #152b79;\r\n}\r\n\r\n#categories a:hover {\r\n  color: #0143a3;\r\n}\r\n\r\n#categories .stars {\r\n  padding: 0 20px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#categories .stars i {\r\n  color: #ffc31d;\r\n}\r\n\r\n#categories p {\r\n  padding: 0 20px;\r\n  margin-bottom: 20px;\r\n  color: #060c22;\r\n  font-size: 14px;\r\n  /* font-style: italic;\r\n  font-size: 15px; */\r\n}\r\n\r\n.img-fluid{\r\n  width: 280px;\r\n  height: 272px;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Gallery Section\r\n--------------------------------------------------------------*/\r\n\r\n#gallery {\r\n  padding: 60px;\r\n  overflow: hidden;\r\n}\r\n\r\n#gallery .owl-nav,\r\n#gallery .owl-dots {\r\n  margin-top: 25px;\r\n  text-align: center;\r\n}\r\n\r\n#gallery .owl-item {\r\n  border-left: 2px solid #fff;\r\n  border-right: 2px solid #fff;\r\n}\r\n\r\n#gallery .owl-dot {\r\n  display: inline-block;\r\n  margin: 0 5px;\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 50%;\r\n  background-color: #ddd;\r\n}\r\n\r\n#gallery .owl-dot.active {\r\n  background-color: #0143a3;\r\n}\r\n\r\n#gallery .gallery-carousel .owl-stage-outer {\r\n  overflow: visible;\r\n}\r\n\r\n#gallery .gallery-carousel .center {\r\n  border: 6px solid #0143a3;\r\n  margin: -10px;\r\n  box-sizing: content-box;\r\n  padding: 4px;\r\n  background: #fff;\r\n  z-index: 1;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Sponsors Section\r\n--------------------------------------------------------------*/\r\n\r\n#sponsors {\r\n  padding: 60px 0;\r\n}\r\n\r\n#sponsors .sponsors-wrap {\r\n  border-top: 1px solid #e0e5fa;\r\n  border-left: 1px solid #e0e5fa;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n#sponsors .sponsor-logo {\r\n  padding: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border-right: 1px solid #e0e5fa;\r\n  border-bottom: 1px solid #e0e5fa;\r\n  overflow: hidden;\r\n  background: rgba(255, 255, 255, 0.5);\r\n  height: 160px;\r\n}\r\n\r\n#sponsors .sponsor-logo:hover img {\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n}\r\n\r\n#sponsors img {\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# F.A.Q Section\r\n--------------------------------------------------------------*/\r\n\r\n#faq {\r\n  padding: 60px 0;\r\n}\r\n\r\n#faq #faq-list {\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n#faq #faq-list li {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n#faq #faq-list a {\r\n  padding: 18px 0;\r\n  display: block;\r\n  position: relative;\r\n  font-family: \"Raleway\", sans-serif;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  font-weight: 600;\r\n  padding-right: 20px;\r\n}\r\n\r\n#faq #faq-list i {\r\n  font-size: 24px;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 16px;\r\n}\r\n\r\n#faq #faq-list p {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#faq #faq-list a.collapse {\r\n  color: #0143a3;\r\n}\r\n\r\n#faq #faq-list a.collapsed {\r\n  color: #000;\r\n}\r\n\r\n#faq #faq-list a.collapsed i::before {\r\n  content: \"\\f055\" !important;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Subscribe Section\r\n--------------------------------------------------------------*/\r\n\r\n#subscribe {\r\n  padding: 60px;\r\n  background: url('subscribe-bg.jpg') center center no-repeat;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n#subscribe:before {\r\n  content: \"\";\r\n  background: rgba(6, 12, 34, 0.6);\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n#subscribe .section-header h2,\r\n#subscribe p {\r\n  color: #fff;\r\n}\r\n\r\n#subscribe input {\r\n  background: #fff;\r\n  color: #060c22;\r\n  border: 0;\r\n  outline: none;\r\n  margin: 0;\r\n  padding: 9px 20px;\r\n  border-radius: 50px;\r\n  font-size: 14px;\r\n}\r\n\r\n#subscribe button {\r\n  border: 0;\r\n  padding: 9px 25px;\r\n  cursor: pointer;\r\n  background: #0143a3;\r\n  color: #fff;\r\n  transition: all 0.3s ease;\r\n  outline: none;\r\n  font-size: 14px;\r\n  border-radius: 50px;\r\n}\r\n\r\n#subscribe button:hover {\r\n  background: #e0072f;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Buy Tickets Section\r\n--------------------------------------------------------------*/\r\n\r\n#buy-tickets {\r\n  padding: 60px 0;\r\n}\r\n\r\n#buy-tickets .card {\r\n  border: none;\r\n  border-radius: 5px;\r\n  transition: all  0.3s ease-in-out;\r\n  box-shadow: 0 10px 25px 0 rgba(6, 12, 34, 0.1);\r\n}\r\n\r\n#buy-tickets .card:hover {\r\n  box-shadow: 0 10px 35px 0 rgba(6, 12, 34, 0.2);\r\n}\r\n\r\n#buy-tickets .card hr {\r\n  margin: 25px 0;\r\n}\r\n\r\n#buy-tickets .card .card-title {\r\n  margin: 10px 0;\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  font-weight: bold;\r\n}\r\n\r\n#buy-tickets .card .card-price {\r\n  font-size: 48px;\r\n  margin: 0;\r\n}\r\n\r\n#buy-tickets .card ul li {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#buy-tickets .card .text-muted {\r\n  opacity: 0.7;\r\n}\r\n\r\n#buy-tickets .card .btn {\r\n  font-size: 15px;\r\n  border-radius: 50px;\r\n  padding: 10px 40px;\r\n  transition: all 0.2s;\r\n  background-color: #0143a3;\r\n  border: 0;\r\n  color: #fff;\r\n}\r\n\r\n#buy-tickets .card .btn:hover {\r\n  background-color: #e0072f;\r\n}\r\n\r\n#buy-tickets #buy-ticket-modal input,\r\n#buy-tickets #buy-ticket-modal select {\r\n  border-radius: 0;\r\n}\r\n\r\n#buy-tickets #buy-ticket-modal .btn {\r\n  font-size: 15px;\r\n  border-radius: 50px;\r\n  padding: 10px 40px;\r\n  transition: all 0.2s;\r\n  background-color: #0143a3;\r\n  border: 0;\r\n  color: #fff;\r\n}\r\n\r\n#buy-tickets #buy-ticket-modal .btn:hover {\r\n  background-color: #e0072f;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Contact Section\r\n--------------------------------------------------------------*/\r\n\r\n#contact {\r\n  padding: 60px 0;\r\n}\r\n\r\n#contact .contact-info {\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n\r\n#contact .contact-info i {\r\n  font-size: 48px;\r\n  display: inline-block;\r\n  margin-bottom: 10px;\r\n  color: #0143a3;\r\n}\r\n\r\n#contact .contact-info address,\r\n#contact .contact-info p {\r\n  margin-bottom: 0;\r\n  color: #112363;\r\n}\r\n\r\n#contact .contact-info h3 {\r\n  font-size: 18px;\r\n  margin-bottom: 15px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  color: #112363;\r\n}\r\n\r\n#contact .contact-info a {\r\n  color: #4869df;\r\n}\r\n\r\n#contact .contact-info a:hover {\r\n  color: #0143a3;\r\n}\r\n\r\n#contact .contact-address,\r\n#contact .contact-phone,\r\n#contact .contact-email {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#contact .form #sendmessage {\r\n  color: #0143a3;\r\n  border: 1px solid #0143a3;\r\n  display: none;\r\n  text-align: center;\r\n  padding: 15px;\r\n  font-weight: 600;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#contact .form #errormessage {\r\n  color: red;\r\n  display: none;\r\n  border: 1px solid red;\r\n  text-align: center;\r\n  padding: 15px;\r\n  font-weight: 600;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n#contact .form #sendmessage.show,\r\n#contact .form #errormessage.show,\r\n#contact .form .show {\r\n  display: block;\r\n}\r\n\r\n#contact .form .validation {\r\n  color: red;\r\n  display: none;\r\n  margin: 0 0 20px;\r\n  font-weight: 400;\r\n  font-size: 13px;\r\n}\r\n\r\n#contact .form input,\r\n#contact .form textarea {\r\n  padding: 10px 14px;\r\n  border-radius: 0;\r\n  box-shadow: none;\r\n  font-size: 15px;\r\n}\r\n\r\n#contact .form button[type=\"submit\"] {\r\n  background: #0143a3;\r\n  border: 0;\r\n  padding: 10px 40px;\r\n  color: #fff;\r\n  transition: 0.4s;\r\n  border-radius: 50px;\r\n  cursor: pointer;\r\n}\r\n\r\n#contact .form button[type=\"submit\"]:hover {\r\n  background: #e0072f;\r\n}\r\n\r\n/*--------------------------------------------------------------\r\n# Responsive Media Queries\r\n--------------------------------------------------------------*/\r\n\r\n@media (min-width: 768px){\r\n  #img-sect-1{\r\n    width:516px;\r\n     height:435px;\r\n  }\r\n  #img-sect-2{\r\n    width:600px;\r\n  }\r\n  #img-sect-3{\r\n    width:516px;\r\n    height:543px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px){\r\n  #clients{\r\n    display: none\r\n  }  \r\n\r\n  #img-sect-1{\r\n    width: 313px;\r\n    height:263px;\r\n    margin-right: -14px;\r\n  }\r\n  #img-sect-2{\r\n    width: 350px;\r\n    margin-left: -14px;\r\n  }\r\n  #img-sect-3{\r\n    width: 313px;\r\n    height:329px;\r\n    margin-right: -14px;\r\n  }\r\n  .sect{\r\n    margin-left: 0px !important;\r\n    margin-right: 0px !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 767px) {\r\n  #miniClients{\r\n    display: none\r\n  }\r\n  #subscribe input {\r\n    min-width: 400px;\r\n  } \r\n}\r\n\r\n@media (min-width: 768px) {\r\n  #contact .contact-address,\r\n  #contact .contact-phone,\r\n  #contact .contact-email {\r\n    padding: 20px 0;\r\n  }\r\n\r\n  #contact .contact-phone {\r\n    border-left: 1px solid #ddd;\r\n    border-right: 1px solid #ddd;\r\n  }\r\n}\r\n\r\n@media (min-width: 991px) {\r\n  #schedule .sub-heading {\r\n    width: 75%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n  #intro {\r\n    background-attachment: fixed;\r\n  }\r\n\r\n  #about {\r\n    background-attachment: fixed;\r\n  }\r\n\r\n  #subscribe {\r\n    background-attachment: fixed;\r\n  }\r\n}\r\n\r\n@media (max-width: 1199px) {\r\n  #header .container {\r\n    max-width: 100%;\r\n  }\r\n\r\n  .nav-menu a {\r\n    padding: 8px 4px;\r\n  }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  #header {\r\n    background: rgba(6, 12, 34, 0.98);\r\n    height: 70px;\r\n    padding: 15px 0;\r\n    transition: all 0.5s;\r\n  }\r\n\r\n  #nav-menu-container {\r\n    display: none;\r\n  }\r\n\r\n  #mobile-nav-toggle {\r\n    display: inline;\r\n  }\r\n\r\n  #intro .intro-container {\r\n    top: 70px;\r\n  }\r\n\r\n  #intro h1 {\r\n    font-size: 34px;\r\n  }\r\n\r\n  #intro p {\r\n    font-size: 16px;\r\n  }\r\n\r\n  #schedule .nav-tabs a {\r\n    padding: 8px 60px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .back-to-top {\r\n    bottom: 15px;\r\n  }\r\n\r\n  #faq #faq-list a {\r\n    font-size: 18px;\r\n  }\r\n\r\n  #faq #faq-list i {\r\n    top: 13px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  #schedule .nav-tabs a {\r\n    padding: 8px 50px;\r\n  }\r\n}\r\n\r\n@media (max-width: 574px) {\r\n  #venue .venue-info h3 {\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  #schedule .nav-tabs a {\r\n    padding: 8px 30px;\r\n  }\r\n}\r\n\r\n@media (max-width: 460px) {\r\n  #subscribe button {\r\n    margin-top: 10px;\r\n  }\r\n}\r\n\r\n/* scroll indicator */\r\n\r\n.scroll-indicator {\r\n  position: relative;\r\n  margin-left: -20px;\r\n  width: 20px;\r\n  height: 35px;\r\n  border-radius: 25px;\r\n  border: 2px solid #fff;\r\n  bottom: -33px;\r\n  left: 0;\r\n  opacity: 1;\r\n  -webkit-transform: translate(50%, 0);\r\n          transform: translate(50%, 0);\r\n  z-index: 2;\r\n}\r\n\r\n.scroll-indicator .dot {\r\n  position: absolute;\r\n    width: 5px;\r\n    height: 5px;\r\n    border-radius: 100%;\r\n    background-color: #fff;\r\n    left: 5px;\r\n    opacity: 0;\r\n    top: 5px;\r\n    -webkit-animation: scrollDown 1.5s ease-in-out infinite;\r\n    animation: scrollDown 1.5s ease-in-out infinite;\r\n}\r\n\r\n@-webkit-keyframes scrollDown {\r\n  0% {\r\n      opacity: 0;\r\n      top: 8px;\r\n  }\r\n  10% {\r\n      opacity: 1;\r\n      top: 8px;\r\n  }\r\n  90% {\r\n      opacity: 1;\r\n      top: 20px;\r\n  }\r\n  100% {\r\n      opacity: 0;\r\n      top: 20px;\r\n  }\r\n}\r\n\r\n@keyframes scrollDown {\r\n  0% {\r\n      opacity: 0;\r\n      top: 8px;\r\n  }\r\n  10% {\r\n      opacity: 1;\r\n      top: 8px;\r\n  }\r\n  90% {\r\n      opacity: 1;\r\n      top: 20px;\r\n  }\r\n  100% {\r\n      opacity: 0;\r\n      top: 20px;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"intro\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: #f8f9fa00; z-index: 100\">\n    <!-- <a class=\"navbar-brand\" routerLink=\"/\"><img width=\"200\" src=\"assets/img/recycling_1.jpg\" alt=\"\" title=\"\"></a> -->\n    <h2 style=\"color:white\">IRecycle</h2>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link click\"> <span style=\"font-weight: 600px !important\">Home</span> </a>\n        </li>\n        <li class=\"nav-item click ml-3\">\n          <a class=\"nav-link\" (click)=\"scroll('browse')\" style=\"font-weight: 600;\">How it Works</a>\n        </li>\n        <li class=\"nav-item click ml-3\">\n          <a class=\"nav-link\" (click)=\"scroll('footer')\" style=\"font-weight: 600;\">Support </a>\n        </li>\n        <li class=\"nav-item click ml-3\" *ngIf=\"!user\" routerLink=\"/login\">\n          <a class=\"nav-link\" style=\"font-weight: 600;\">Login </a>\n        </li>\n        <li class=\"nav-item click ml-3\" *ngIf=\"user\">\n          <a class=\"nav-link\" routerLink=\"/dashboard\" style=\"font-weight: 600\">Dashboard </a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0 ml-4\">\n        <button class=\"btn btn-outline-primary my-2 my-sm-0\" routerLink=\"/login\" style=\"border: 1px solid #ffffff;\n        border-radius: 3em;\n        font-size: 1em; color:#ffffff\">Get\n          Started</button>\n      </form>\n    </div>\n  </nav>\n\n  <div class=\"intro-container\">\n    <h1 class=\"mb-4 pb-0\">On-Demand <span>Recycle</span></h1>\n    <p class=\"mb-4 pb-0\">We are the team behind the most of the successful recycle companies in the MENA region</p>\n    <!-- <a href=\"https://www.youtube.com/watch?v=H74_4bZ6YBI\" class=\"venobox play-btn mb-4\" data-vbtype=\"video\"\n      data-autoplay=\"true\"></a> -->\n    <button class=\"btn btn-outline-primary my-2 my-sm-0\" routerLink=\"/login\">Get Started</button> <!-- routerLink=\"/plans\" -->\n    <div class=\"scroll-indicator\">\n      <span class=\"dot\"></span>\n    </div>\n  </div>\n</section>\n\n<main id=\"main\">\n  <!--Digital Section-->\n  <section id=\"categories\" class=\"section-with-bg\">\n\n    <div class=\"container\">\n\n      <div class=\"row\">\n\n        <div class=\"col-lg-4 col-md-6\">\n          <div class=\"hotel\">\n            <div class=\"hotel-img\">\n              <img src=\"assets/img/garbage/garbage1.jpg\" alt=\"Hotel 1\" class=\"img-fluid\" style=\"padding: 15px\">\n            </div>\n            <h3 class=\"text-center\"><a href=\"#\">Get</a></h3>\n            <p>\n            </p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6\">\n          <div class=\"hotel\">\n            <div class=\"hotel-img\">\n              <img src=\"assets/img/garbage/garbage2.jpg\" alt=\"Hotel 2\" class=\"img-fluid\" style=\"padding: 15px\">\n            </div>\n            <h3 class=\"text-center\"><a href=\"#\">Sort</a></h3>\n            <p></p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6\">\n          <div class=\"hotel\">\n            <div class=\"hotel-img\">\n              <img src=\"assets/img/garbage/garbage3.jpg\" alt=\"Hotel 3\" class=\"img-fluid\" style=\"padding: 15px\">\n            </div>\n            <h3 class=\"text-center\"><a href=\"#\">Fix</a></h3>\n            <p></p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </section>\n\n  <section id=\"clients\" style=\"background: #2B8BE3;\n  background-image: linear-gradient(-224deg, #2B8BE3 0%, #663FB5 100%);\n  opacity: 1;\"\n    class=\"row pt-5 pb-5 pr-2 pl-2\">\n    <!-- <div class=\"col-md-2 col-sm-12 text-center\">\n      <img src=\"assets/img/clients/almosafer.png\" alt=\"\">\n    </div>\n    <div class=\"col-md-2 col-sm-12 text-center\">\n      <img src=\"assets/img/clients/etihad.png\" alt=\"\">\n    </div>\n    <div class=\"col-md-3 col-sm-12 text-center\">\n      <img src=\"assets/img/clients/taaleem.png\" alt=\"\">\n    </div>\n    <div class=\"col-md-2 col-sm-12 text-center\">\n      <img src=\"assets/img/clients/tajawal.png\" alt=\"\">\n    </div>\n    <div class=\"col-md-2 col-sm-12 text-center\">\n      <img src=\"assets/img/clients/wojoooh.png\" alt=\"\">\n    </div> -->\n  </section>\n\n  <!-- <section id=\"miniClients\" style=\"background: #2B8BE3;\n  background-image: linear-gradient(-224deg, #2B8BE3 0%, #663FB5 100%);\n  opacity: 1;\"\n    class=\" pt-5 pb-5 pr-2 pl-2\">\n    <div id=\"carouselExampleControls\" class=\"carousel slide\" data-ride=\"carousel\">\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src=\"assets/img/clients/almosafer.png\" alt=\"First slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"assets/img/clients/etihad.png\" alt=\"Second slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"assets/img/clients/taaleem.png\" alt=\"Third slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"assets/img/clients/tajawal.png\" alt=\"4 slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"assets/img/clients/wojoooh.png\" alt=\"5 slide\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </section> -->\n\n  <section id=\"featured-plans\" class=\"mb-4\">\n    <div class=\"container\">\n      <!-- <div class=\"section-header\"> -->\n      <h2 class=\"text-center\">FEATURED PLANS</h2>\n      <p class=\"text-center\">Needle moving, up and to the right, hockey stick growth tactics.</p>\n      <!-- </div> -->\n\n      <div class=\"row\">\n        <div class=\"col-md-6 col-lg-4 mt-2 mb-2\" *ngFor=\"let item of featuredPlans; index as i; first as isFirst\">\n\n          <div class=\"card click\" (click)='details(item.id)'>\n            <div class=\"card__shadow featured-plan\">\n              <img class=\"card-img-top bg--gradient\" [src]=\"getImage(item.title)\" alt=\"\">\n              <div class=\"card-body details\" data-equalizer-watch=\"\" style=\"height: 251px;\">\n                <div class=\"card__header--gigs row\">\n                  <h6 class=\"card-title float-left col text-light\">{{item.title|translate}}</h6>\n                  <p class=\"text-right col\">AED {{item.price}}</p>\n                </div>\n                <div class=\"card__rating mt-4\">\n\n                  <!-- <ng-template #t let-fill=\"fill\">\n                    <span class=\"star\" [class.full]=\"fill === 100\">\n                      <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\n                    </span>\n                  </ng-template>\n                  <ngb-rating [(rate)]=\"currentRate\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating> -->\n\n                  <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                  <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                  <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                  <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                  <i class=\"fas fa-star-half-alt\" style=\"color: #FF3366;\"></i>\n                  <span class=\"card__reviews ml-1 text-light\">{{item.reviews}} </span><!-- 61 {{'Reviews'|translate}} -->\n                </div>\n\n                <p class=\"card-text social\">{{item.description}}</p>\n                <!-- {{'Instagram Growth Engine Desc'|translate}} -->\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </section>\n\n  <div id=\"browse\"></div>\n\n  <!-- <section id=\"\" class=\"section-with-bg pt-5 pb-5\">\n    <div class=\"row mt-5 mb-5 sect\">\n      <div class=\"col ml-5 mb-4\">\n        <div class=\"container\">\n          <h2 class=\"mb-4\">Browse the marketplace.</h2>\n          <h5 class=\"text-muted mb-4\">\n            Is your social game a mess? Don’t know why your website visitors aren’t converting? Fall behind on this\n            quarter’s KPIs? Don’t worry. In just a few clicks, you can get expert digital marketers to get you back on\n            track.\n          </h5>\n\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Quickly find the marketing resources you need:</h5>\n              <p><i class=\"fas fa-search mr-3\"></i> Use search to find exactly what you’re looking for.</p>\n              <p><i class=\"fas fa-sliders-h mr-3\"></i> Drill down into specific categories with filters.</p>\n              <p><i class=\"far fa-heart mr-3\"></i> Save your favorites to… well, favorites.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <img id=\"img-sect-1\" class=\"float-right\" src=\"assets/img/sections/image1.png\" alt=\"\">\n      </div>\n    </div>\n\n  </section> -->\n\n  <!-- <section id=\"\" class=\"pt-5 pb-5\">\n    <div class=\"row mt-5 mb-5 sect\">\n      <div class=\"col mb-4\">\n        <img id=\"img-sect-2\" src=\"assets/img/sections/image2.png\" alt=\"\">\n      </div>\n      <div class=\"col mr-5\">\n        <div class=\"container\">\n          <h2 class=\"mb-4\">Hire a Geek. (or three.).</h2>\n          <h5 class=\"text-muted mb-4\">\n            From Social Media to Data Science, our geeks have the skills you need to grow your business. The best part?\n            We already did all the heavy lifting. Every geek has been vetted, each service hand-curated, and price\n            pre-negotiated. You’re welcome. ;)\n          </h5>\n\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Growth Geeks are perfect for:</h5>\n              <p><i class=\"fas fa-rocket mr-3\"></i> Product launches, promotions, and daily marketing.</p>\n              <p><i class=\"fas fa-exchange-alt mr-3\"></i> Filling in the gaps on your marketing team.</p>\n              <p><i class=\"far fa-handshake mr-3\"></i> Freeing up internal resources.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section> -->\n\n  <!-- <section id=\"sit-back\" class=\"section-with-bg pt-5 pb-5\">\n    <div class=\"row mt-5 mb-5 sect\">\n      <div class=\"col ml-5 mb-4\">\n        <div class=\"container\">\n          <h2 class=\"mb-4\">Sit Back. Relax. And Enjoy the Raise.</h2>\n          <h5 class=\"text-muted mb-4\">\n            When you hire a Growth Geek, we want you to know you're in good hands. That's why we only accept the top 1%\n            of applicants. This allows us to provide you with exceptional service, peace-of-mind, and give you more\n            time\n            to focus on your business.\n          </h5>\n\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Get peace of mind with:</h5>\n              <p><i class=\"fas fa-dollar-sign mr-3\"></i> No contracts. No fine print. No nonsense.</p>\n              <p><i class=\"fas fa-file-signature mr-2\"></i> 30 Day Money Back Guarantee.</p>\n              <p><i class=\"fas fa-glasses mr-2\"></i> Dedicated support. Call, chat, email, or bat signal.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col\">\n        <img id=\"img-sect-3\" class=\"float-right\" src=\"assets/img/sections/imac.svg\" alt=\"\">\n      </div>\n    </div>\n  </section> -->\n\n</main>\n\n\n<!--Footer-->\n<footer id=\"footer\">\n  <div class=\"footer-top\">\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-lg-6 col-md-6 footer-info\">\n          <!-- <img src=\"assets/img/SEARCHFUSELogo.png\" alt=\"IRecycle\"> -->\n          <h2 style=\"color:white\">IRecycle</h2>\n          <p>We are here since 2000, bla bla bla.</p>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 footer-links\">\n          <h4>RESOURCES</h4>\n          <ul>\n            <li><i class=\"fa fa-angle-right\"></i> <a >Home</a></li>\n            <li><i class=\"fa fa-angle-right\"></i> <a (click)=\"scroll('browse')\">How it Works</a></li>\n            <li><i class=\"fa fa-angle-right\"></i> <a routerLink=\"/plans\">Plans</a></li>\n            <!-- <li><i class=\"fa fa-angle-right\"></i> <a href=\"#\">Terms of service</a></li>\n            <li><i class=\"fa fa-angle-right\"></i> <a href=\"#\">Privacy policy</a></li> -->\n          </ul>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 footer-contact\">\n          <h4>CONNECT</h4>\n          <p>\n           calle<br>\n            reparto,<br>\n            postal code, ... <br>\n            <strong>Phone:</strong> 000000000 <br>\n            <strong>Email:</strong> IRecycle@gmail.qt<br>\n          </p>\n\n          <div class=\"social-links\">\n            <a href=\"https://twitter.com/SearchFuse\"><i class=\"fab fa-twitter\"></i></a>\n            <a href=\"https://www.facebook.com/searchfuse/\"><i class=\"fab fa-facebook-f\"></i></a>\n            <!-- <a href=\"https://www.instagram.com/searchfuse/\"><i class=\"fab fa-instagram\"></i></a> -->\n            <a href=\"https://www.linkedin.com/company/searchfuse/\"><i class=\"fab fa-linkedin-in\"></i></a>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; 2019 <strong>IRecycle</strong>.\n    </div>\n    <div class=\"credits\">\n      Built with <i class=\"fas fa-heart\"></i> in Qatar.\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(usrServ) {
        this.usrServ = usrServ;
        this.featuredPlans = [];
        this.currentRate = 4;
        this.user = {};
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usrServ.plansMin().subscribe(function (res) {
            _this.featuredPlans = res.slice(0, 6);
        });
        this.user = JSON.parse(this.usrServ.getSession('user'));
        this.usrServ.initMeta();
    };
    HomeComponent.prototype.getImage = function (title) {
        var resources = [
            "assets/img/icons/get-more-instagram-followers.svg",
            "assets/img/icons/get-more-twitter-followers.svg",
            "assets/img/icons/linkedin-management.svg",
            "assets/img/icons/2813-social-media-management1.svg",
            "assets/img/icons/2868-advanced-facebook-ads-management.svg",
            "assets/img/icons/2847-animated-infographic-video.svg",
            "assets/img/icons/2870-cold-sales-email-campaigns.svg",
            "assets/img/icons/2871-managed-wordpress-website.svg",
        ];
        var pos = title.toLocaleLowerCase().indexOf("instagram") != -1 ? 0 :
            title.toLocaleLowerCase().indexOf("twitter") != -1 ? 1 :
                title.toLocaleLowerCase().indexOf("social") != -1 ? 3 :
                    title.toLocaleLowerCase().indexOf("facebook") != -1 ? 4 :
                        title.toLocaleLowerCase().indexOf("infographic") != -1 ? 5 :
                            title.toLocaleLowerCase().indexOf("sales") != -1 ? 6 :
                                title.toLocaleLowerCase().indexOf("word press") != -1 ? 7 :
                                    title.toLocaleLowerCase().indexOf("linkedin") != -1 ? 2
                                        : 6;
        var resource = resources[pos];
        return resource;
    };
    HomeComponent.prototype.details = function (id) {
        this.usrServ.setSession("plan-detail", id);
        this.usrServ.goToWithParam("/plan", id);
    };
    HomeComponent.prototype.scroll = function (id) {
        var el = document.getElementById(id);
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mobile */\n@media (max-width: 768px) {\n  header, main {\n    width: 99%;\n    margin: 0px auto;\n  }\n  #wall{\n    margin-top: 100px\n  }\n}\n@media (min-width: 768px){\n  header, main {\n    width: 40%;\n    margin: 0px auto;\n  }\n  #wall{\n    margin-top: 200px\n  }\n}\nheader {\n  /* text-align: center; */\n  margin-top: 100px;\n}\nmain {\n  background-color: white;\n  /* border-radius: 10px; */\n  box-shadow: 2px 2px 2px 2px  rgba(29, 22, 15, 0.7);\n  padding: 20px;\n}\n.pointer{\n  cursor: pointer;\n}\nimg{\n  width: 150px;\n}\n.input{\n  width: 100%;\n  height: 3em;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid #F0ECF4;\n  color: #2B8BE3;\n  outline: 0;\n  padding: 1em 0 0 0;\n  box-shadow: none;\n  font-size: 1.25em;\n  margin: 1px;\n  margin-top: .5em;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger fixed-top\" role=\"alert\" style=\"z-index: 1031;\" *ngIf=\"showMessage\">\n  {{showMessage}}\n</div>\n\n<nav class=\"navbar navbar-light bg-light fixed-top\">\n\n  <form class=\"form-inline\" style=\"width: 100%;\">\n    <a class=\"navbar-brand\" routerLink=\"/\"><i class=\"fas fa-arrow-left\"></i></a>\n    <h5 class=\"text-center\" style=\"margin-left: 45%\">Login</h5>\n  </form>\n</nav>\n<div id=\"wall\">\n  <!-- <header>\n    <a routerLink=\"/\"><img src=\"assets/img/SEARCHFUSELogo.png\" alt=\"Logo\" class=\"mb-3\"></a>\n  </header> -->\n  <main>\n    <!-- <h2>Member Area</h2> -->\n    <form>\n      <!-- #loginForm=\"ngForm\" (ngSubmit)=\"login()\" -->\n      <div class=\"form-group\">\n        <label for=\"email\" style=\"width: 100%\">Email address</label>\n        <input type=\"email\" class=\"input\" [ngClass]=\"{'is-invalid': emailBlur && !validEmail(credentials.email)}\" id=\"email\"\n          name=\"email\" [value]=\"credentials.email\" (input)=\"credentials.email = $event.target.value\" placeholder=\"Enter your email address\"\n          required (blur)=\"emailBlur=true\">\n        <div class=\"invalid-feedback\" *ngIf=\"emailBlur && !validEmail(credentials.email)\">\n          Please provide a valid email.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\" style=\"width: 100%\">Password</label>\n        <input type=\"password\" class=\"input\" id=\"password\" name=\"password\" [value]=\"credentials.password\" (input)=\"credentials.password = $event.target.value\"\n          placeholder=\"Enter your password\" required>\n      </div>\n      <!-- <div class=\"mt-2 mb-2\">\n        <div class=\"g-recaptcha\" data-sitekey=\"6LdEXXcUAAAAAEI85xIBheOiSZqeUHLXGCnxhMQX\" data-callback=\"recaptchaCallback\"></div>\n      </div> -->\n      <button type=\"submit\" (click)='login()' [disabled]=\"!validEmail(credentials.email)\" class=\"btn btn-primary btn-lg float-rigth mt-5 mb-5\"\n        style=\"width: 100%\">{{loginTextButton}}</button>\n      <!-- style=\"float: right;margin-left: 100%;margin-right: 10px;\" || !captcha-->\n      <div>\n        <a routerLink=\"/forgot-password\" class=\"form-text text-muted\">Forgot your password?</a>\n        <!--<a routerLink=\"/verification-email\" class=\"form-text text-muted\">\n          <span class=\"pointer\">Resend verification email?</span>\n        </a> -->\n        <a href=\"/signup\" class=\"form-text text-muted\">Don't have an account? Create one right now</a>\n      </div>\n\n    </form>\n  </main>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(usrServ, router) {
        this.usrServ = usrServ;
        this.router = router;
        this.user = {};
        this.credentials = {
            email: '',
            password: ''
        };
        this.loginTextButton = "Login";
        this.showMessage = "";
        this.confEmailNeeded = false;
        this.emailBlur = false;
        this.captcha = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        //background-color: #fedb00;    
        this.user = this.usrServ.ifValidUserToMain();
        recaptchaCallback = function () {
            _this.captcha = true;
            console.log("done", _this.captcha);
            jquery__WEBPACK_IMPORTED_MODULE_3__("#email").focus();
        };
        this.usrServ.initMeta();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loginTextButton = "Loading";
        this.usrServ.login(this.credentials).subscribe(function (res) {
            _this.loginTextButton = "Login";
            //$("html").attr("style", "")
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            console.log(error);
            _this.loginTextButton = "Login";
            _this.showMessage = error.error.message;
            setTimeout(function () {
                _this.showMessage = "";
            }, 4000);
            if (error.error.message === 'Confirmation email needed') {
                //this.confEmailNeeded = true
            }
        });
    };
    LoginComponent.prototype.sendVerificationEmail = function () {
        this.usrServ.sendVerificationEmail(this.credentials).subscribe(function (res) {
        }, function (error) {
            // console.log(error)      
        });
    };
    LoginComponent.prototype.validEmail = function (email) {
        return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,8}|[0-9]{1,8})(\]?)$/.test(email);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\r\n  display: flex;\r\n}\r\n\r\n#wrapper #content-wrapper {\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  padding-top: 1rem;\r\n  padding-bottom: 80px;\r\n}\r\n\r\nbody.fixed-nav #content-wrapper {\r\n  margin-top: 56px;\r\n  padding-left: 90px;\r\n}\r\n\r\nbody.fixed-nav.sidebar-toggled #content-wrapper {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.fixed-nav #content-wrapper {\r\n    padding-left: 225px;\r\n  }\r\n  body.fixed-nav.sidebar-toggled #content-wrapper {\r\n    padding-left: 90px;\r\n  }\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 46px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.smaller {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n  z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav .form-inline .input-group {\r\n  width: 100%;\r\n}\r\n\r\n.navbar-nav .nav-item.active .nav-link {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown .dropdown-toggle::after {\r\n  width: 1rem;\r\n  text-align: center;\r\n  float: right;\r\n  vertical-align: 0;\r\n  border: 0;\r\n  font-weight: 900;\r\n  content: '\\f105';\r\n  font-family: 'Font Awesome 5 Free';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {\r\n  content: '\\f107';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link:focus {\r\n  outline: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link .badge {\r\n  position: absolute;\r\n  margin-left: 0.75rem;\r\n  top: 0.3rem;\r\n  font-weight: 400;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-nav .form-inline .input-group {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n.card-body-icon {\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: -1.25rem;\r\n  right: -1rem;\r\n  opacity: 0.4;\r\n  font-size: 5rem;\r\n  -webkit-transform: rotate(15deg);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n    column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n:root {\r\n  --input-padding-x: 0.75rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\n.card-login {\r\n  max-width: 25rem;\r\n}\r\n\r\n.card-register {\r\n  max-width: 40rem;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n  height: auto;\r\n}\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\nfooter.sticky-footer {\r\n  display: flex;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: calc(100% - 90px);\r\n  height: 80px;\r\n  background-color: #e9ecef;\r\n}\r\n\r\nfooter.sticky-footer .copyright {\r\n  line-height: 1;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  footer.sticky-footer {\r\n    width: calc(100% - 225px);\r\n  }\r\n}\r\n\r\nbody.sidebar-toggled footer.sticky-footer {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.sidebar-toggled footer.sticky-footer {\r\n    width: calc(100% - 90px);\r\n  }\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  padding: 20px 0 20px;\r\n  list-style: none;\r\n}\r\n\r\n.timeline:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 3px;\r\n  margin-left: -1.5px;\r\n  background-color: #eeeeee;\r\n}\r\n\r\n.timeline > li {\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li > .timeline-panel {\r\n  float: left;\r\n  position: relative;\r\n  width: 46%;\r\n  padding: 20px;\r\n  border: 1px solid #d4d4d4;\r\n  border-radius: 2px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n}\r\n\r\n.timeline > li > .timeline-panel:before {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 26px;\r\n  right: -15px;\r\n  border-top: 15px solid transparent;\r\n  border-right: 0 solid #ccc;\r\n  border-bottom: 15px solid transparent;\r\n  border-left: 15px solid #ccc;\r\n}\r\n\r\n.timeline > li > .timeline-panel:after {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 27px;\r\n  right: -14px;\r\n  border-top: 14px solid transparent;\r\n  border-right: 0 solid #fff;\r\n  border-bottom: 14px solid transparent;\r\n  border-left: 14px solid #fff;\r\n}\r\n\r\n.timeline > li > .timeline-badge {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 16px;\r\n  left: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: -25px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n  line-height: 50px;\r\n  color: #fff;\r\n  background-color: #999999;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline-badge.primary {\r\n  background-color: #2e6da4 !important;\r\n}\r\n\r\n.timeline-badge.success {\r\n  background-color: #3f903f !important;\r\n}\r\n\r\n.timeline-badge.warning {\r\n  background-color: #f0ad4e !important;\r\n}\r\n\r\n.timeline-badge.danger {\r\n  background-color: #d9534f !important;\r\n}\r\n\r\n.timeline-badge.info {\r\n  background-color: #5bc0de !important;\r\n}\r\n\r\n.timeline-title {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n\r\n.timeline-body > p,\r\n.timeline-body > ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.timeline-body > p + p {\r\n  margin-top: 5px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  ul.timeline:before {\r\n    left: 40px;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    width: calc(10%);\r\n    width: -webkit-calc(10%);\r\n  }\r\n  ul.timeline > li > .timeline-badge {\r\n    top: 16px;\r\n    left: 15px;\r\n    margin-left: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    float: right;\r\n  }\r\n  ul.timeline > li > .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-navbar></dashboard-navbar>\n\n<div id=\"wrapper\">\n\n  <dashboard-sidebar></dashboard-sidebar>\n\n  <div id=\"content-wrapper\">\n\n    <div class=\"container-fluid\">\n      <h2>Messages</h2>\n      <hr>\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/dashboard\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Messages</li>\n      </ol>\n\n\n      <!-- DataTables Example -->\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-table\"></i>\n          Messages</div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table \" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n              <thead>\n                <tr>\n                  <th>DATE</th>\n                  <th>FROM</th>\n                  <th>CONTENT</th>\n                  <th>ACTIONS</th>\n                </tr>\n              </thead>\n              <tbody *ngFor=\"let item of messages; index as i; first as isFirst\" >\n                <tr [ngClass]=\"{'table-active': !item.read}\">\n                  <td (click)=\"goTo(item)\" class=\"click\" >{{item.date.substr(0,item.date.indexOf(\"T\"))}}</td><!--  -->\n                  <td (click)=\"goTo(item)\" class=\"click\">{{item.fromName}}</td>\n                  <td (click)=\"goTo(item)\" class=\"click\">{{item.text}}</td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"openMessage(item)\" *ngIf=\"!item.read\" title=\"Mark as read\"><i class=\"far fa-envelope-open\"></i></button>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"closeMessage(item)\" *ngIf=\"item.read\" title=\"Mark as unread\"><i class=\"fas fa-envelope\"></i></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <!-- <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div> -->\n      </div>\n\n\n\n    </div>\n    <!-- /.container-fluid -->\n\n\n\n\n  </div>\n  <!-- /.content-wrapper -->\n\n</div>\n<!-- /#wrapper -->\n\n<footer id=\"footer\" style=\"width: auto !important\">\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; 2018 <strong>Searchfuse Marketing Management</strong>.\n    </div>\n    <div class=\"credits\">\n      Built with <i class=\"fas fa-heart\"></i> in Dubai.\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(usrServ, admServ) {
        this.usrServ = usrServ;
        this.admServ = admServ;
        this.messages = [];
        this.user = {};
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.user = this.usrServ.ifInvalidUserToLogin();
        this.getMessages();
    };
    MessagesComponent.prototype.goTo = function (item) {
        if (item.transactionId)
            this.usrServ.goToWithParam("/orderManagement", item.transactionId);
    };
    MessagesComponent.prototype.openMessage = function (item) {
        var _this = this;
        this.usrServ.openMessage(item).subscribe(function (res) {
            _this.getMessages();
        });
    };
    MessagesComponent.prototype.closeMessage = function (item) {
        var _this = this;
        this.usrServ.closeMessage(item).subscribe(function (res) {
            _this.getMessages();
        });
    };
    MessagesComponent.prototype.getMessages = function () {
        var _this = this;
        if (this.usrServ.isUserManage()) {
            this.admServ.messageByIDNoAdmin().subscribe(function (res) {
                _this.messages = res;
            });
        }
        else {
            this.usrServ.messageByIDAdmin().subscribe(function (res) {
                _this.messages = res;
            });
        }
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/notification/notification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/notification/notification.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\r\n  display: flex;\r\n}\r\n\r\n#wrapper #content-wrapper {\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  padding-top: 1rem;\r\n  padding-bottom: 80px;\r\n}\r\n\r\nbody.fixed-nav #content-wrapper {\r\n  margin-top: 56px;\r\n  padding-left: 90px;\r\n}\r\n\r\nbody.fixed-nav.sidebar-toggled #content-wrapper {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.fixed-nav #content-wrapper {\r\n    padding-left: 225px;\r\n  }\r\n  body.fixed-nav.sidebar-toggled #content-wrapper {\r\n    padding-left: 90px;\r\n  }\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 46px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.smaller {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n  z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav .form-inline .input-group {\r\n  width: 100%;\r\n}\r\n\r\n.navbar-nav .nav-item.active .nav-link {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown .dropdown-toggle::after {\r\n  width: 1rem;\r\n  text-align: center;\r\n  float: right;\r\n  vertical-align: 0;\r\n  border: 0;\r\n  font-weight: 900;\r\n  content: '\\f105';\r\n  font-family: 'Font Awesome 5 Free';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {\r\n  content: '\\f107';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link:focus {\r\n  outline: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link .badge {\r\n  position: absolute;\r\n  margin-left: 0.75rem;\r\n  top: 0.3rem;\r\n  font-weight: 400;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-nav .form-inline .input-group {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n.card-body-icon {\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: -1.25rem;\r\n  right: -1rem;\r\n  opacity: 0.4;\r\n  font-size: 5rem;\r\n  -webkit-transform: rotate(15deg);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n    column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n:root {\r\n  --input-padding-x: 0.75rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\n.card-login {\r\n  max-width: 25rem;\r\n}\r\n\r\n.card-register {\r\n  max-width: 40rem;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n  height: auto;\r\n}\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\nfooter.sticky-footer {\r\n  display: flex;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: calc(100% - 90px);\r\n  height: 80px;\r\n  background-color: #e9ecef;\r\n}\r\n\r\nfooter.sticky-footer .copyright {\r\n  line-height: 1;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  footer.sticky-footer {\r\n    width: calc(100% - 225px);\r\n  }\r\n}\r\n\r\nbody.sidebar-toggled footer.sticky-footer {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.sidebar-toggled footer.sticky-footer {\r\n    width: calc(100% - 90px);\r\n  }\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  padding: 20px 0 20px;\r\n  list-style: none;\r\n}\r\n\r\n.timeline:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 3px;\r\n  margin-left: -1.5px;\r\n  background-color: #eeeeee;\r\n}\r\n\r\n.timeline > li {\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li > .timeline-panel {\r\n  float: left;\r\n  position: relative;\r\n  width: 46%;\r\n  padding: 20px;\r\n  border: 1px solid #d4d4d4;\r\n  border-radius: 2px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n}\r\n\r\n.timeline > li > .timeline-panel:before {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 26px;\r\n  right: -15px;\r\n  border-top: 15px solid transparent;\r\n  border-right: 0 solid #ccc;\r\n  border-bottom: 15px solid transparent;\r\n  border-left: 15px solid #ccc;\r\n}\r\n\r\n.timeline > li > .timeline-panel:after {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 27px;\r\n  right: -14px;\r\n  border-top: 14px solid transparent;\r\n  border-right: 0 solid #fff;\r\n  border-bottom: 14px solid transparent;\r\n  border-left: 14px solid #fff;\r\n}\r\n\r\n.timeline > li > .timeline-badge {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 16px;\r\n  left: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: -25px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n  line-height: 50px;\r\n  color: #fff;\r\n  background-color: #999999;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline-badge.primary {\r\n  background-color: #2e6da4 !important;\r\n}\r\n\r\n.timeline-badge.success {\r\n  background-color: #3f903f !important;\r\n}\r\n\r\n.timeline-badge.warning {\r\n  background-color: #f0ad4e !important;\r\n}\r\n\r\n.timeline-badge.danger {\r\n  background-color: #d9534f !important;\r\n}\r\n\r\n.timeline-badge.info {\r\n  background-color: #5bc0de !important;\r\n}\r\n\r\n.timeline-title {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n\r\n.timeline-body > p,\r\n.timeline-body > ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.timeline-body > p + p {\r\n  margin-top: 5px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  ul.timeline:before {\r\n    left: 40px;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    width: calc(10%);\r\n    width: -webkit-calc(10%);\r\n  }\r\n  ul.timeline > li > .timeline-badge {\r\n    top: 16px;\r\n    left: 15px;\r\n    margin-left: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    float: right;\r\n  }\r\n  ul.timeline > li > .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/notification/notification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-navbar></dashboard-navbar>\n\n<div id=\"wrapper\">\n\n  <dashboard-sidebar></dashboard-sidebar>\n\n  <div id=\"content-wrapper\">\n\n    <div class=\"container-fluid\">\n      <h2>Notifications</h2>\n      <hr>\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/dashboard\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Notifications</li>\n      </ol>\n\n      \n      <!-- DataTables Example -->\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-table\"></i>\n          Notifications</div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table \" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n              <thead>\n                <tr>\n                  <th>DATE</th>\n                  <th>FROM</th>\n                  <th>CONTENT</th>\n                  <th>ACTIONS</th>\n                </tr>\n              </thead>\n              <tbody *ngFor=\"let item of notifications; index as i; first as isFirst\">\n                <tr [ngClass]=\"{'table-active': !item.read}\">\n                  <td (click)=\"goTo(item)\" class=\"click\">{{item.date.substr(0,item.date.indexOf(\"T\"))}}</td>\n                  <td (click)=\"goTo(item)\" class=\"click\">{{item.fromName}}</td>\n                  <td (click)=\"goTo(item)\" class=\"click\">{{item.text}}</td>\n                  <td>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"openNotification(item)\" *ngIf=\"!item.read\" title=\"Mark as read\"><i class=\"far fa-bell\"></i></button>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"closeNotification(item)\" *ngIf=\"item.read\" title=\"Mark as unread\"><i class=\"fas fa-bell\"></i></button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        \n      </div>\n\n\n\n    </div>\n    <!-- /.container-fluid -->\n\n\n\n\n  </div>\n  <!-- /.content-wrapper -->\n\n</div>\n<!-- /#wrapper -->\n\n<footer id=\"footer\" style=\"width: auto !important\">\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; 2018 <strong>Searchfuse Marketing Management</strong>.\n    </div>\n    <div class=\"credits\">\n      Built with <i class=\"fas fa-heart\"></i> in Dubai.\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(usrServ, admServ) {
        this.usrServ = usrServ;
        this.admServ = admServ;
        this.user = {};
        this.notifications = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.user = this.usrServ.ifInvalidUserToLogin();
        this.getNotifications();
    };
    NotificationComponent.prototype.goTo = function (item) {
        if (item.transactionId)
            this.usrServ.goToWithParam("/orderManagement", item.transactionId);
    };
    NotificationComponent.prototype.openNotification = function (item) {
        var _this = this;
        this.usrServ.openNotification(item).subscribe(function (res) {
            _this.getNotifications();
        });
    };
    NotificationComponent.prototype.closeNotification = function (item) {
        var _this = this;
        this.usrServ.closeNotification(item).subscribe(function (res) {
            _this.getNotifications();
        });
    };
    NotificationComponent.prototype.getNotifications = function () {
        var _this = this;
        if (this.usrServ.isUserManage()) {
            this.admServ.notificationByIDNoAdmin().subscribe(function (res) {
                _this.notifications = res;
            });
        }
        else {
            this.usrServ.notificationByIDAdmin().subscribe(function (res) {
                _this.notifications = res;
            });
        }
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/order-management/order-management.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/order-management/order-management.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\r\n  display: flex;\r\n}\r\n\r\n#wrapper #content-wrapper {\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  padding-top: 1rem;\r\n  padding-bottom: 80px;\r\n}\r\n\r\nbody.fixed-nav #content-wrapper {\r\n  margin-top: 56px;\r\n  padding-left: 90px;\r\n}\r\n\r\nbody.fixed-nav.sidebar-toggled #content-wrapper {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.fixed-nav #content-wrapper {\r\n    padding-left: 225px;\r\n  }\r\n  body.fixed-nav.sidebar-toggled #content-wrapper {\r\n    padding-left: 90px;\r\n  }\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 46px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.smaller {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n  z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav .form-inline .input-group {\r\n  width: 100%;\r\n}\r\n\r\n.navbar-nav .nav-item.active .nav-link {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown .dropdown-toggle::after {\r\n  width: 1rem;\r\n  text-align: center;\r\n  float: right;\r\n  vertical-align: 0;\r\n  border: 0;\r\n  font-weight: 900;\r\n  content: '\\f105';\r\n  font-family: 'Font Awesome 5 Free';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {\r\n  content: '\\f107';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link:focus {\r\n  outline: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link .badge {\r\n  position: absolute;\r\n  margin-left: 0.75rem;\r\n  top: 0.3rem;\r\n  font-weight: 400;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-nav .form-inline .input-group {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n.card-body-icon {\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: -1.25rem;\r\n  right: -1rem;\r\n  opacity: 0.4;\r\n  font-size: 5rem;\r\n  -webkit-transform: rotate(15deg);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n    column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n:root {\r\n  --input-padding-x: 0.75rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\n.card-login {\r\n  max-width: 25rem;\r\n}\r\n\r\n.card-register {\r\n  max-width: 40rem;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n  height: auto;\r\n}\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\nfooter.sticky-footer {\r\n  display: flex;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: calc(100% - 90px);\r\n  height: 80px;\r\n  background-color: #e9ecef;\r\n}\r\n\r\nfooter.sticky-footer .copyright {\r\n  line-height: 1;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  footer.sticky-footer {\r\n    width: calc(100% - 225px);\r\n  }\r\n}\r\n\r\nbody.sidebar-toggled footer.sticky-footer {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.sidebar-toggled footer.sticky-footer {\r\n    width: calc(100% - 90px);\r\n  }\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  padding: 0px 0 20px;\r\n  list-style: none;\r\n}\r\n\r\n.timeline:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  /* left: 50%; */\r\n  width: 3px;\r\n  margin-left: -1.5px;\r\n  background-color: #eeeeee;\r\n}\r\n\r\n.timeline > li {\r\n  position: relative;\r\n  /* margin-bottom: 20px; */\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li > .timeline-panel {\r\n  margin-left: 40px;\r\n  float: left;\r\n  position: relative;\r\n  width: 85%;\r\n  padding: 20px;\r\n  /* border: 1px solid #d4d4d4;\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); */\r\n}\r\n\r\n.timeline > li > .timeline-panel:before {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 26px;\r\n  right: -15px;\r\n  /* border-top: 15px solid transparent;\r\n  border-right: 0 solid #ccc;\r\n  border-bottom: 15px solid transparent;\r\n  border-left: 15px solid #ccc; */\r\n}\r\n\r\n.timeline > li > .timeline-panel:after {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 27px;\r\n  right: -14px;\r\n /*  border-top: 14px solid transparent;\r\n  border-right: 0 solid #fff;\r\n  border-bottom: 14px solid transparent;\r\n  border-left: 14px solid #fff; */\r\n}\r\n\r\n.timeline > li > .timeline-badge {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 16px;\r\n  /* left: 50%; */\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-left: -20px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n  line-height: 50px;\r\n  color: #fff;\r\n  background-color: #999999;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline-badge.primary {\r\n  background-color: #2e6da4 !important;\r\n}\r\n\r\n.timeline-badge.success {\r\n  background-color: #3f903f !important;\r\n}\r\n\r\n.timeline-badge.warning {\r\n  background-color: #f0ad4e !important;\r\n}\r\n\r\n.timeline-badge.danger {\r\n  background-color: #d9534f !important;\r\n}\r\n\r\n.timeline-badge.info {\r\n  background-color: #5bc0de !important;\r\n}\r\n\r\n.timeline-title {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n\r\n.timeline-body > p,\r\n.timeline-body > ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.timeline-body > p + p {\r\n  margin-top: 5px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  ul.timeline:before {\r\n    left: 40px;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    /* width: calc(10%);\r\n    width: -moz-calc(10%);\r\n    width: -webkit-calc(10%); */\r\n    padding-left: 30px;\r\n  }\r\n  ul.timeline > li > .timeline-badge {\r\n    top: 16px;\r\n    left: 15px;\r\n    margin-left: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    float: right;\r\n  }\r\n  ul.timeline > li > .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n  }\r\n}\r\n\r\n/* chat */\r\n\r\n.chat {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.chat li {\r\n  margin-bottom: 10px;\r\n  padding-bottom: 5px;\r\n  border-bottom: 1px dotted #999999;\r\n}\r\n\r\n.chat li.left .chat-body {\r\n  margin-left: 60px;\r\n}\r\n\r\n.chat li.right .chat-body {\r\n  margin-right: 60px;\r\n}\r\n\r\n.chat li .chat-body p {\r\n  margin: 0;\r\n}\r\n\r\n.panel .slidedown .glyphicon,\r\n.chat .glyphicon {\r\n  margin-right: 5px;\r\n}\r\n\r\n.chat-panel .panel-body {\r\n  height: 350px;\r\n  overflow-y: scroll;\r\n}"

/***/ }),

/***/ "./src/app/order-management/order-management.component.html":
/*!******************************************************************!*\
  !*** ./src/app/order-management/order-management.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-navbar></dashboard-navbar>\n\n<div id=\"wrapper\">\n\n  <dashboard-sidebar></dashboard-sidebar>\n\n  <div id=\"content-wrapper\">\n\n    <div class=\"container-fluid\">\n      <h2>Order Management</h2>\n      <hr>\n\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/dashboard\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Order Management</li>\n      </ol>\n\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <!-- order -->\n          <div class=\"card mb-3\">\n            <div class=\"card-body\">\n              <div class=\"media\">\n                <img class=\"mr-3\" [src]=\"'assets/img/plans/'+ plan.id+'.jpg'\" width=\"100\" alt=\"Generic placeholder image\">\n                <div class=\"media-body\">\n                  <h4>{{plan.title}}</h4>\n                  <p>Order:{{order._id}} | {{order.date?order.date.substr(0,order.date.indexOf(\"T\")):\"\"}} | <span>View\n                      invoice</span></p>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"card-footer text-muted\" *ngIf=\"serv.isUserManage() && order.order && order.order.requirementsAcepted\">\n              <div *ngIf=\"order.order && order.order.rating !== 0\" class=\"float-left\" data-toggle=\"modal\" data-target=\"#reviewRateModal\" >\n                <i class=\"fas fa-star\" *ngFor=\"let item of starArray\"></i>\n                <i class=\"far fa-star\" *ngFor=\"let item of emptyStarArray\"></i>\n              </div>\n\n              <button type=\"button\" class=\"btn btn-success float-right\" (click)=\"orderCompleted()\" title=\"Complete Order\"\n                [disabled]=\"order.order&&order.order.orderComplete\">Complete</button>\n            </div>\n\n            <div class=\"card-footer text-muted\" *ngIf=\"!serv.isUserManage() && order.order && order.order.orderComplete\">\n              <div *ngIf=\"order.order && order.order.rating !== 0\" class=\"float-left\">\n                <i class=\"fas fa-star\" *ngFor=\"let item of starArray\"></i>\n                <i class=\"far fa-star\" *ngFor=\"let item of emptyStarArray\"></i>\n              </div>\n              <button type=\"button\" class=\"btn btn-success float-right\" title=\"Rate Order\" data-toggle=\"modal\"\n                data-target=\"#rateModal\">Rate</button>\n            </div>\n          </div>\n\n          <!-- requirements -->\n          <div class=\"card mb-3\">\n            <div class=\"card-body\">\n\n              <h4>Order requirements <small class=\"float-right\"><i class=\"fas fa-sort-up\" *ngIf=\"showRequirements\"\n                    (click)=\"setShowReq(false)\"></i><i class=\"fas fa-sort-down\" *ngIf=\"!showRequirements\" (click)=\"setShowReq(true)\"></i></small></h4>\n              <div *ngIf=\"showRequirements\">\n                <ul class=\"mb-5\">\n                  <li *ngFor=\"let item of plan.need; index as i; first as isFirst\">{{item}}</li>\n                </ul>\n\n                <label for=\"requirements\"> Please enter the requirements:</label>\n                <textarea name=\"\" id=\"requirements\" cols=\"30\" rows=\"10\" style=\"width: 100%\" [(ngModel)]=\"requirements\"\n                  class=\"mb-5\"></textarea>\n\n                <button type=\"button\" class=\"btn btn-success float-right ml-1\" (click)=\"saveRequirements()\">Save</button>\n                <button type=\"button\" class=\"btn btn-success float-right\" *ngIf=\"serv.isUserManage()\" (click)=\"requirementsAcepted()\"\n                  [disabled]=\"order.order&&order.order.requirementsAcepted\">Acept Requirements </button>\n              </div>\n\n              <p *ngIf=\"!showRequirements&&!requirements\"> Need Requirements </p>\n              <p *ngIf=\"!showRequirements && order.order && order.order.requirementsAcepted\"> Requirements completed</p>\n              <p *ngIf=\"!showRequirements && order.order && !order.order.requirementsAcepted\">  Waiting for Acceptance</p>\n\n            </div>\n          </div>\n\n          <p class=\"text-center\" *ngIf=\"order.order&&order.order.requirementsAcepted\">Order Started|Delivery due on:\n            {{order.order.delivery.substr(0,order.order.delivery.indexOf(\"T\"))}}</p>\n          <p class=\"text-center\" *ngIf=\"showRequirements&&!requirements\">Waiting for Requirements</p>\n          <p class=\"text-center\" *ngIf=\"showRequirements && order.order && !order.order.requirementsAcepted\"> Waiting for Acceptance</p>\n\n          <!-- messages -->\n          <div class=\"card mb-3\">\n            <!-- /.panel-heading -->\n            <div class=\"card-body\">\n              <h4 class=\"text-center\">Messages</h4>\n              <ul class=\"chat\">\n                <li class=\"left clearfix\" *ngFor=\"let item of messages; index as i; first as isFirst\">\n                  <div *ngIf=\"!item.isAdmin\">\n                    <span class=\"chat-img float-left\">\n                      <i class=\"fas fa-user fa-3x\"></i>\n                      <!-- <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\" /> -->\n                    </span>\n                    <div class=\"chat-body clearfix\">\n                      <div class=\"header\">\n                        <strong class=\"primary-font\">{{item.fromName}}</strong>\n                        <small class=\"float-right text-muted\"><i class=\"far fa-clock\"></i> {{item.date}}</small>\n                      </div>\n                      <p>\n                        {{item.text}}\n                      </p>\n                    </div>\n                  </div>\n                  <div *ngIf=\"item.isAdmin\">\n                    <span class=\"chat-img float-right\">\n                      <!-- <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\" /> -->\n                      <i class=\"fas fa-user-tie fa-3x\"></i>\n                    </span>\n                    <div class=\"chat-body clearfix\">\n                      <div class=\"header\">\n                        <small class=\" text-muted\"><i class=\"far fa-clock\"></i> {{item.date}}</small>\n                        <strong class=\"float-right primary-font\">{{item.fromName}}</strong>\n                      </div>\n                      <p>\n                        {{item.text}}\n                      </p>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <!-- message -->\n          <div class=\"card mt-3\">\n            <div class=\"card-body\">\n              <label for=\"requirements\"> Enter your message:</label>\n              <textarea name=\"\" id=\"requirements\" cols=\"30\" rows=\"5\" style=\"width: 100%\" [(ngModel)]=\"message\" class=\"mb-5\"></textarea>\n\n              <button type=\"button\" class=\"btn btn-success float-right ml-1\" (click)=\"sendMessage()\">Send</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n\n          <div class=\"card mb-3\">\n            <div class=\"card-body\">\n              <ul class=\"timeline\">\n                <li class=\"timeline-inverted\">\n                  <div class=\"timeline-badge success\"><i class=\"fa fa-check\"></i>\n                  </div>\n                  <div class=\"timeline-panel\">\n                    <div class=\"timeline-heading\">\n                      <h6 class=\"timeline-title\">Placed Order</h6>\n                    </div>\n                    <!-- <div class=\"timeline-body\">\n                      <p>The process start creating an account, and selecting the right plan for you.</p>\n                    </div> -->\n                  </div>\n                </li>\n                <li class=\"timeline-inverted\">\n                  <div class=\"timeline-badge success\"><i class=\"fa fa-check\" *ngIf=\"order.order&&order.order.requirementsAcepted\"></i>\n                  </div>\n                  <div class=\"timeline-panel\">\n                    <div class=\"timeline-heading\">\n                      <h6 class=\"timeline-title\">Provide Requirements</h6>\n                    </div>\n                    <!-- <div class=\"timeline-body\">\n                      <p>Select method of payment</p>\n                    </div> -->\n                  </div>\n                </li>\n                <li class=\"timeline-inverted\">\n                  <div class=\"timeline-badge success\"><i class=\"fa fa-check\" *ngIf=\"order.order&&order.order.orderComplete\"></i>\n                  </div>\n                  <div class=\"timeline-panel\">\n                    <div class=\"timeline-heading\">\n                      <h5 class=\"timeline-title\">Order in Progress</h5>\n                    </div>\n                    <div class=\"timeline-body\">\n                      <!-- <p *ngIf=\"order.order&&order.order.requirementsAcepted\">Exciting stuff! The team is working now\n                        on your order</p> -->\n                    </div>\n                  </div>\n                </li>\n                <li class=\"timeline-inverted\">\n                  <div class=\"timeline-badge success\"><i class=\"fa fa-check\" *ngIf=\"order.order&&order.order.rating\"></i>\n                  </div>\n                  <div class=\"timeline-panel\">\n                    <div class=\"timeline-heading\">\n                      <h6 class=\"timeline-title\">Review the Delivery</h6>\n                    </div>\n                    <div class=\"timeline-body\">\n\n                    </div>\n                  </div>\n                </li>\n                <li class=\"timeline-inverted\">\n                  <div class=\"timeline-badge success\"><i class=\"fa fa-check\" *ngIf=\"order.order&&order.order.rating\"></i>\n                  </div>\n                  <div class=\"timeline-panel\">\n                    <div class=\"timeline-heading\">\n                      <h6 class=\"timeline-title\">Order Complete</h6>\n                    </div>\n                    <div class=\"timeline-body\">\n\n                    </div>\n                  </div>\n                </li>\n              </ul>\n              <hr>\n              <p class=\"text-center\">Something unclear?</p>\n              <p class=\"text-center click\" (click)=\"goToPlanPage()\">Check out our FAQs</p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <!-- /.container-fluid -->\n\n  </div>\n  <!-- /.content-wrapper -->\n\n</div>\n<!-- /#wrapper -->\n\n<footer id=\"footer\" style=\"width: auto !important\">\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; 2018 <strong>Searchfuse Marketing Management</strong>.\n    </div>\n    <div class=\"credits\">\n      Built with <i class=\"fas fa-heart\"></i> in Dubai.\n    </div>\n  </div>\n</footer>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"rateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Rate Order</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <label for=\"\">Rate:</label>\n        <select name=\"\" id=\"\" [(ngModel)]=\"rating\" class=\"form-control\">\n          <option value=\"1\">Bad</option>\n          <option value=\"2\">Normal</option>\n          <option value=\"3\">Good</option>\n          <option value=\"4\">Very Good</option>\n          <option value=\"5\">Excellent</option>\n        </select>\n\n        <label for=\"\">Feedback:</label>\n        <textarea name=\"\" id=\"\" [(ngModel)]=\"feedback\" class=\"form-control\" cols=\"30\" rows=\"5\" style=\"width: 100%\">\n        </textarea>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"rateOrder()\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"reviewRateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Review Rate Order</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <label for=\"\">Rate:</label>\n        <p>{{rating}}</p>\n\n        <label for=\"\">Feedback:</label>\n        <p>{{feedback}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/order-management/order-management.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/order-management/order-management.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderManagementComponent", function() { return OrderManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderManagementComponent = /** @class */ (function () {
    function OrderManagementComponent(usrServ, route) {
        this.usrServ = usrServ;
        this.route = route;
        this.orderID = "";
        this.feedback = "";
        this.rating = 5;
        this.requirements = "";
        this.showRequirements = true;
        this.message = "";
        this.user = {};
        this.order = {};
        this.plan = { id: "" };
        this.messages = [];
        this.starArray = [];
        this.emptyStarArray = [];
        this.serv = {};
        this.serv = usrServ;
    }
    OrderManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.orderID = params['id'];
            _this.usrServ.transactionByID({ _id: _this.orderID }).subscribe(function (res) {
                _this.order = res;
                _this.updateOrder();
                _this.usrServ.planID({ id: res.plan }).subscribe(function (plan) {
                    _this.plan = plan[0];
                });
                _this.usrServ.messagesByTransaction({ id: _this.order._id }).subscribe(function (res) {
                    _this.messages = res;
                });
            });
        });
        this.user = JSON.parse(this.usrServ.getSession('user'));
        this.usrServ.onMessage().subscribe(function (to) {
            _this.usrServ.messagesByTransaction({ id: _this.order._id }).subscribe(function (res) {
                _this.messages = res;
            });
        });
    };
    OrderManagementComponent.prototype.goToPlanPage = function () {
        this.usrServ.goToWithParam("/plan", this.plan.id);
    };
    OrderManagementComponent.prototype.saveRequirements = function () {
        var _this = this;
        this.usrServ.orderRequirements({ _id: this.order._id, "requirements": this.requirements }).subscribe(function (res) {
            _this.order = res;
            _this.updateOrder();
        });
        this.sendNotification("Requirements saved");
    };
    OrderManagementComponent.prototype.requirementsAcepted = function () {
        var _this = this;
        this.usrServ.requirementsAcepted({ _id: this.order._id }).subscribe(function (res) {
            _this.order = res;
            _this.updateOrder();
        });
        this.sendNotification("Requirements Acepted");
    };
    OrderManagementComponent.prototype.orderCompleted = function () {
        var _this = this;
        this.usrServ.orderCompleted({ _id: this.order._id }).subscribe(function (res) {
            _this.order = res;
            _this.updateOrder();
        });
        this.sendNotification("Order Completed");
    };
    OrderManagementComponent.prototype.rateOrder = function () {
        var _this = this;
        this.usrServ.rateOrder({ _id: this.order._id, rating: this.rating, feedback: this.feedback }).subscribe(function (res) {
            _this.order = res;
            _this.updateOrder();
        });
        this.sendNotification("Rate Order Completed");
    };
    OrderManagementComponent.prototype.sendMessage = function () {
        var _this = this;
        var toUser = this.usrServ.isUserManage() ? this.order.userId : this.user._id;
        var data = {
            userId: toUser,
            fromName: this.user.firstName,
            transactionId: this.order._id,
            text: this.message,
            isAdmin: this.usrServ.isUserManage()
        };
        this.usrServ.sendMessage(data).subscribe(function (res) {
            _this.usrServ.send(toUser);
            _this.usrServ.messagesByTransaction({ id: _this.order._id }).subscribe(function (res) {
                _this.messages = res;
                _this.message = "";
            });
        });
    };
    OrderManagementComponent.prototype.sendNotification = function (message) {
        var toUser = this.usrServ.isUserManage() ? this.order.userId : this.user._id;
        var data = {
            userId: toUser,
            fromName: this.user.firstName,
            transactionId: this.order._id,
            text: message,
            isAdmin: this.usrServ.isUserManage()
        };
        this.usrServ.sendNotification(data).subscribe(console.log);
    };
    OrderManagementComponent.prototype.setShowReq = function (view) {
        this.showRequirements = view;
    };
    OrderManagementComponent.prototype.updateOrder = function () {
        if (this.order.order && this.order.order.requirements) {
            this.requirements = this.order.order.requirements;
        }
        if (this.order.order && this.order.order.requirementsAcepted) {
            this.showRequirements = false;
        }
        if (this.order.order && this.order.order.rating !== 0) {
            this.rating = this.order.order.rating;
            this.feedback = this.order.order.feedback;
            this.starArray = Array.from(Array(this.order.order.rating)).map(function (x, i) { return i; });
            this.emptyStarArray = Array.from(Array(5 - this.order.order.rating)).map(function (x, i) { return i; });
        }
    };
    OrderManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-management',
            template: __webpack_require__(/*! ./order-management.component.html */ "./src/app/order-management/order-management.component.html"),
            styles: [__webpack_require__(/*! ./order-management.component.css */ "./src/app/order-management/order-management.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OrderManagementComponent);
    return OrderManagementComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\r\n  display: flex;\r\n}\r\n\r\n#wrapper #content-wrapper {\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  padding-top: 1rem;\r\n  padding-bottom: 80px;\r\n}\r\n\r\nbody.fixed-nav #content-wrapper {\r\n  margin-top: 56px;\r\n  padding-left: 90px;\r\n}\r\n\r\nbody.fixed-nav.sidebar-toggled #content-wrapper {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.fixed-nav #content-wrapper {\r\n    padding-left: 225px;\r\n  }\r\n  body.fixed-nav.sidebar-toggled #content-wrapper {\r\n    padding-left: 90px;\r\n  }\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 46px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.smaller {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n  z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav .form-inline .input-group {\r\n  width: 100%;\r\n}\r\n\r\n.navbar-nav .nav-item.active .nav-link {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown .dropdown-toggle::after {\r\n  width: 1rem;\r\n  text-align: center;\r\n  float: right;\r\n  vertical-align: 0;\r\n  border: 0;\r\n  font-weight: 900;\r\n  content: '\\f105';\r\n  font-family: 'Font Awesome 5 Free';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {\r\n  content: '\\f107';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link:focus {\r\n  outline: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link .badge {\r\n  position: absolute;\r\n  margin-left: 0.75rem;\r\n  top: 0.3rem;\r\n  font-weight: 400;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-nav .form-inline .input-group {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n.card-body-icon {\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: -1.25rem;\r\n  right: -1rem;\r\n  opacity: 0.4;\r\n  font-size: 5rem;\r\n  -webkit-transform: rotate(15deg);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n    column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n:root {\r\n  --input-padding-x: 0.75rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\n.card-login {\r\n  max-width: 25rem;\r\n}\r\n\r\n.card-register {\r\n  max-width: 40rem;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n  height: auto;\r\n}\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\nfooter.sticky-footer {\r\n  display: flex;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: calc(100% - 90px);\r\n  height: 80px;\r\n  background-color: #e9ecef;\r\n}\r\n\r\nfooter.sticky-footer .copyright {\r\n  line-height: 1;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  footer.sticky-footer {\r\n    width: calc(100% - 225px);\r\n  }\r\n}\r\n\r\nbody.sidebar-toggled footer.sticky-footer {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.sidebar-toggled footer.sticky-footer {\r\n    width: calc(100% - 90px);\r\n  }\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  padding: 20px 0 20px;\r\n  list-style: none;\r\n}\r\n\r\n.timeline:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 3px;\r\n  margin-left: -1.5px;\r\n  background-color: #eeeeee;\r\n}\r\n\r\n.timeline > li {\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li > .timeline-panel {\r\n  float: left;\r\n  position: relative;\r\n  width: 46%;\r\n  padding: 20px;\r\n  border: 1px solid #d4d4d4;\r\n  border-radius: 2px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n}\r\n\r\n.timeline > li > .timeline-panel:before {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 26px;\r\n  right: -15px;\r\n  border-top: 15px solid transparent;\r\n  border-right: 0 solid #ccc;\r\n  border-bottom: 15px solid transparent;\r\n  border-left: 15px solid #ccc;\r\n}\r\n\r\n.timeline > li > .timeline-panel:after {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 27px;\r\n  right: -14px;\r\n  border-top: 14px solid transparent;\r\n  border-right: 0 solid #fff;\r\n  border-bottom: 14px solid transparent;\r\n  border-left: 14px solid #fff;\r\n}\r\n\r\n.timeline > li > .timeline-badge {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 16px;\r\n  left: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: -25px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n  line-height: 50px;\r\n  color: #fff;\r\n  background-color: #999999;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline-badge.primary {\r\n  background-color: #2e6da4 !important;\r\n}\r\n\r\n.timeline-badge.success {\r\n  background-color: #3f903f !important;\r\n}\r\n\r\n.timeline-badge.warning {\r\n  background-color: #f0ad4e !important;\r\n}\r\n\r\n.timeline-badge.danger {\r\n  background-color: #d9534f !important;\r\n}\r\n\r\n.timeline-badge.info {\r\n  background-color: #5bc0de !important;\r\n}\r\n\r\n.timeline-title {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n\r\n.timeline-body > p,\r\n.timeline-body > ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.timeline-body > p + p {\r\n  margin-top: 5px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  ul.timeline:before {\r\n    left: 40px;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    width: calc(10%);\r\n    width: -webkit-calc(10%);\r\n  }\r\n  ul.timeline > li > .timeline-badge {\r\n    top: 16px;\r\n    left: 15px;\r\n    margin-left: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    float: right;\r\n  }\r\n  ul.timeline > li > .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-navbar></dashboard-navbar>\n\n<div id=\"wrapper\">\n\n  <dashboard-sidebar></dashboard-sidebar>\n\n  <div id=\"content-wrapper\">\n\n    <div class=\"container-fluid\">\n      <h2>Manage Orders</h2>\n      <hr>\n\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/dashboard\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Orders</li>\n      </ol>\n\n      <!-- Icon Cards-->\n      <div class=\"row\">\n\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-success o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-fw fa-shopping-cart\"></i>\n              </div>\n              <div class=\"mr-5\">Completed Orders <br> {{completedOrders}}</div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"card mb-3\">\n        <div class=\"card-body\" *ngIf=\"!isDriver\">\n          <button class=\"btn btn-primary btn-lg float-rigth \" style=\"width: 100%\" title=\"Rate Order\" data-toggle=\"modal\"\n            data-target=\"#createOrderModal\">Add Order</button>\n\n          <div class=\"tab-content\" id=\"myTabContent\">\n            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n              <table class=\"table mt-5\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                <thead>\n                  <tr>\n                    <th>ORDER DATE</th>\n                    <th>METAL</th>\n                    <th>PLASTIC</th>\n                    <th>PAPER</th>\n                    <th>GLASS</th>\n                    <th>POSSIBLE POINTS</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr (click)=\"goToOrder(item)\" class=\"click\" *ngIf=\"user.order\">\n                    <!-- <tr *ngFor=\"let item of activeTable; index as i; first as isFirst\" (click)=\"goToOrder(item)\"\n                    class=\"click\"> -->\n                    <td>{{user.order.date.substr(0,user.order.date.indexOf(\"T\"))}}</td>\n                    <td>{{user.order.metal}}</td>\n                    <td>{{user.order.plastic}}</td>\n                    <td>{{user.order.paper}}</td>\n                    <td>{{user.order.glass}}</td>\n                    <td>{{user.order.possiblePoints}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"card-body\" *ngIf=\"isDriver\">\n          <!--  <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                aria-selected=\"true\" (click)=\"setActiveTo('active')\">ACTIVE</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"profile\"\n                aria-selected=\"false\" (click)=\"setActiveTo('missing')\">MISSING DETAILS</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"contact\"\n                aria-selected=\"false\" (click)=\"setActiveTo('awaiting')\">AWAITING MY REVIEW</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"contact\"\n                aria-selected=\"false\" (click)=\"setActiveTo('completed')\">COMPLETED</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"contact\"\n                aria-selected=\"false\" (click)=\"setActiveTo('cancelled')\">CANCELLED</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\"\n                aria-controls=\"contact\" aria-selected=\"false\" (click)=\"setActiveTo('all')\">ALL</a>\n            </li>\n          </ul> -->\n\n          <!-- <button class=\"btn btn-primary btn-lg float-rigth \" style=\"width: 100%\" title=\"Rate Order\" data-toggle=\"modal\"\n            data-target=\"#createOrderModal\">Add Order</button> -->\n\n          <div class=\"tab-content\" id=\"myTabContent\">\n            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n              <table class=\"table mt-5\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n                <thead>\n                  <tr>\n                    <th>ORDER DATE</th>\n                    <th>METAL</th>\n                    <th>PLASTIC</th>\n                    <th>PAPER</th>\n                    <th>GLASS</th>\n                    <th>POSSIBLE POINTS</th>\n                    <th>ACTIONS</th>\n                  </tr>\n                </thead>\n                <tbody>\n\n                  <tr *ngFor=\"let item of users; index as i; first as isFirst\" (click)=\"goToOrder(item)\" class=\"click\">\n                    <td>{{item.order.date.substr(0,item.order.date.indexOf(\"T\"))}}</td>\n                    <td>{{item.order.metal}}</td>\n                    <td>{{item.order.plastic}}</td>\n                    <td>{{item.order.paper}}</td>\n                    <td>{{item.order.glass}}</td>\n                    <td>{{item.order.possiblePoints}}</td>\n                    <td><button title=\"COMPLETED\" type=\"button\" class=\"btn btn-success\"\n                        (click)=\"completedOrder(item)\"><i class=\"fas fa-check\"></i></button></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"card-footer small text-muted\">Updated</div>\n      </div>\n\n    </div>\n    <!-- /.container-fluid -->\n\n  </div>\n  <!-- /.content-wrapper -->\n\n</div>\n<!-- /#wrapper -->\n\n<footer id=\"footer\" style=\"width: auto !important\">\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; 2018 <strong>IRecycle</strong>.\n    </div>\n    <div class=\"credits\">\n      Built with <i class=\"fas fa-heart\"></i> in Qatar.\n    </div>\n  </div>\n</footer>\n\n\n<!-- Modals -->\n\n<div class=\"modal fade\" id=\"createOrderModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create Order</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <label for=\"pass2\" style=\"width: 100%\">\n            <img width=\"120\" src=\"assets/img/RecycleTypes/metal.jpeg\" alt=\"metal\" title=\"metal\" class=\"circle\"\n              style=\"width: 50px;\">\n            Metal (kg)\n          </label>\n          <input type=\"number\" class=\"input form-control\" id=\"metal\" name=\"metal\" [(ngModel)]=\"metal\">\n\n        </div>\n\n\n        <div class=\"form-group\">\n          <label for=\"pass2\" style=\"width: 100%\">\n            <img width=\"120\" src=\"assets/img/RecycleTypes/plastic.jpeg\" alt=\"plastic\" title=\"plastic\" class=\"circle\"\n              style=\"width: 50px;\">\n            Plastic (kg)\n          </label>\n          <input type=\"number\" class=\"input form-control\" id=\"plastic\" name=\"plastic\" [(ngModel)]=\"plastic\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"pass2\" style=\"width: 100%\">\n            <img width=\"120\" src=\"assets/img/RecycleTypes/paper.jpeg\" alt=\"paper\" title=\"paper\" class=\"circle\"\n              style=\"width: 50px;\">\n            Paper (kg)\n          </label>\n          <input type=\"number\" class=\"input form-control\" id=\"paper\" name=\"paper\" [(ngModel)]=\"paper\">\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"pass2\" style=\"width: 100%\">\n            <img width=\"120\" src=\"assets/img/RecycleTypes/glass.jpeg\" alt=\"glass\" title=\"glass\" class=\"circle\"\n              style=\"width: 50px;\">\n            Glass (kg)\n          </label>\n          <input type=\"number\" class=\"input form-control\" id=\"glass\" name=\"glass\" [(ngModel)]=\"glass\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pass2\" style=\"width: 100%\">Building No</label>\n          <input type=\"number\" class=\"input form-control\" id=\"BuildingNo\" name=\"BuildingNo\" [(ngModel)]=\"BuildingNo\">\n          <label for=\"pass2\" style=\"width: 100%\">Zone</label>\n          <input type=\"number\" class=\"input form-control\" id=\"Zone\" name=\"Zone\" [(ngModel)]=\"Zone\">\n          <label for=\"pass2\" style=\"width: 100%\">Street</label>\n          <input type=\"number\" class=\"input form-control\" id=\"Street\" name=\"Street\" [(ngModel)]=\"Street\">\n\n          <!-- <button type=\"submit\" class=\"btn btn-primary btn-lg float-rigth mt-5 mb-5\" style=\"width: 100%\"\n              (click)=\"findMap()\">Find</button>\n\n            <div id='map' style='width: 400px; height: 300px;'></div> -->\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"createOrder()\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(usrServ, admServ) {
        this.usrServ = usrServ;
        this.admServ = admServ;
        this.user = {};
        this.cancelled = [];
        this.completed = [];
        this.active = [];
        this.all = [];
        this.users = [];
        this.activeTable = [];
        this.completedOrders = 0;
        this.activeOrders = 0;
        this.plastic = 0;
        this.metal = 0;
        this.paper = 0;
        this.glass = 0;
        this.BuildingNo = 0;
        this.Zone = 0;
        this.Street = 0;
        this.isDriver = false;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.usrServ.ifInvalidUserToLogin();
        if (!this.usrServ.isUserManage()) {
            if (this.user.order) {
                this.plastic = this.user.order.plastic;
                this.metal = this.user.order.metal;
                this.glass = this.user.order.glass;
                this.paper = this.user.order.paper;
                this.BuildingNo = this.user.order.BuildingNo;
                this.Zone = this.user.order.Zone;
                this.Street = this.user.order.Street;
            }
        }
        else {
        }
        if (this.usrServ.isUserDriver()) {
            this.isDriver = true;
            this.admServ.allUser().subscribe(function (res) {
                _this.users = res.filter(function (e) { return e.order; });
            });
        }
    };
    OrdersComponent.prototype.setActiveTo = function (value) {
        this.activeTable = value === "all" ? this.all :
            value === "cancelled" ? this.cancelled :
                value === "active" ? this.active :
                    value === "completed" ? this.completed : [];
    };
    OrdersComponent.prototype.goToOrder = function (item) {
        if (item.status === "Active")
            this.usrServ.goToWithParam("/orderManagement", item._id);
    };
    OrdersComponent.prototype.findMap = function () {
        this.usrServ.map({}).subscribe(function (res) {
            res = JSON.parse(res);
            map(res.features[0].geometry.x, res.features[0].geometry.y);
        });
    };
    OrdersComponent.prototype.createOrder = function () {
        var _this = this;
        this.usrServ.createOrder({
            plastic: this.plastic,
            metal: this.metal,
            paper: this.paper,
            glass: this.glass,
            BuildingNo: this.BuildingNo,
            Zone: this.Zone,
            Street: this.Street,
            date: new Date(),
            possiblePoints: (this.metal * 10) + (this.plastic * 8) + (this.paper * 6) + (this.glass * 4)
        }).subscribe(function (res) {
            _this.usrServ.status().subscribe(function (res) {
                _this.user = _this.usrServ.ifInvalidUserToLogin();
            });
        });
    };
    OrdersComponent.prototype.completedOrder = function (item) {
        var _this = this;
        this.usrServ.completedOrder(item).subscribe(function (res) {
            _this.admServ.allUser().subscribe(function (res) {
                _this.users = res.filter(function (e) { return e.order; });
            });
        });
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/plan/plan.component.css":
/*!*****************************************!*\
  !*** ./src/app/plan/plan.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@media (min-width: 768px){\r\n  .hide-on-md{\r\n    display: none\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/plan/plan.component.html":
/*!******************************************!*\
  !*** ./src/app/plan/plan.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger fixed-top\" role=\"alert\" style=\"z-index: 1031;\" *ngIf=\"showMessage\">\n  {{showMessage}}\n</div>\n\n<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #ffffff1c\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img width=\"120\" src=\"assets/img/SEARCHFUSELogo.png\" alt=\"\" title=\"\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/plans\"><i class=\"fas fa-arrow-left fa-lg\"></i></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <div class=\"row mt-5 pt-4\">\n\n    <!-- main section -->\n    <div class=\"col-md-8 col-lg-8\">\n      <!-- style=\"width: auto\" -->\n      <h2 class=\"mb-2\">{{plan.title}}</h2>\n\n      <ng-template #t let-fill=\"fill\"> <span class=\"star\" [class.full]=\"fill === 100\"> <span class=\"half\"\n            [style.width.%]=\"fill\">&hearts;</span>&hearts; </span> </ng-template>\n\n      <h6>\n        <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n        <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n        <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n        <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n        <i class=\"fas fa-star-half-alt\" style=\"color: #FF3366;\"></i>\n        {{plan&&plan.reviews?plan.reviews.substring(0,plan.reviews.indexOf('ws')+2):\"\"}} <i class=\"fas fa-shopping-cart\"></i>\n        {{plan&&plan.reviews?plan.reviews.substring(plan.reviews.indexOf('ws')+2,plan.reviews.lenght):\"\"}}\n        \n      </h6>\n\n      <br>\n\n      <br>\n      <img [src]=\"'assets/img/plans/'+ section+'.jpg'\" class=\"img-fluid mt-3 img-thumbnail\" alt=\"\" class=\"\" style=\"max-width: 100%\">\n\n      <!-- <div  class=\"mt-2 mb-2 \" > -->\n      <!-- style=\"position: -webkit-sticky; /* Safari */ position: sticky;top: 70px;\" -->\n      <!-- <a type=\"button\" class=\"btn btn-primary btn-lg mb-2 text-center\" *ngIf=\"!user\" href=\"/login\">Login to Subscribe</a> -->\n      <!-- style=\"width: 100%;text-align: left;\" -->\n      <button type=\"button\" class=\"btn btn-primary btn-lg hide-on-md fixed-bottom\" (click)=\"creditCard(plan.price)\"\n        style=\"width: 100%\" *ngIf=\"user\">\n        Buy AED {{plan.price}}</button>\n      <button type=\"button\" class=\"btn btn-primary btn-lg hide-on-md fixed-bottom\"\n        style=\"width: 100%\" *ngIf=\"!user\" data-toggle=\"modal\" data-target=\"#balanceModal\">\n        Buy AED {{plan.price}}</button>\n      <!-- </div> -->\n\n      <!-- <h5 class=\"mt-3\">Profolio</h5>\n      ... -->\n      <hr>\n      <h5 class=\"mt-3\">Description</h5>\n      <p>{{plan.description}}</p>\n\n      <hr>\n\n      <h5 class=\"mt-3\">What you can expect:</h5>\n      <ul>\n        <li *ngFor=\"let item of plan.expect; index as i; first as isFirst\">{{item}}</li>\n      </ul>\n\n      <hr>\n\n      <h5 class=\"mt-3\">What we need from you:</h5>\n      <ul>\n        <li *ngFor=\"let item of plan.need; index as i; first as isFirst\">{{item}}</li>\n      </ul>\n\n\n\n\n      <div *ngIf=\"plan.comment&& plan.comment.lenght > 0\">\n        <hr>\n\n        <h5 class=\"mt-3\">Reviews (61) <ngb-rating [(rate)]=\"currentRate\" [readonly]=\"true\"></ngb-rating>\n        </h5>\n\n        <div class=\"media\" *ngFor=\"let item of plan.comment; index as i; first as isFirst\">\n          <!-- <img class=\"mr-3\" src=\".../64x64\" alt=\"avatar\"> -->\n          <div class=\"media-body\">\n            <h5 class=\"mt-0\">{{item.name}}</h5>\n            {{item.comment}}\n          </div>\n        </div>\n\n        <a>Read more <i class=\"fas fa-angle-down\"></i></a><!-- (click)=\"showAllComment = !showAllComment\" -->\n      </div>\n\n      <hr>\n\n      <h5 class=\"mt-3 mb-2\">FAQs:</h5>\n\n      <div class=\"\">\n        <div class=\"media mb-3\" *ngFor=\"let item of plan.faqObj; index as i; first as isFirst\">\n          <!-- <img class=\"mr-3\" src=\".../64x64\" alt=\"image\"> -->\n          <div class=\"media-body\">\n            <h5 class=\"mt-0\">{{item.ask}}</h5>\n            {{item.response}}\n          </div>\n        </div>\n\n      </div>\n\n\n    </div>\n\n\n    <!-- secondary section -->\n    <div class=\"col-md-4 col-lg-4 col-sm-12 d-none d-sm-block\" style=\"position: fixed; right: 0;\">\n      <button type=\"button\" class=\"btn btn-primary btn-lg mb-2 text-center\" style=\"width: 100%\" *ngIf=\"!user\" data-toggle=\"modal\" data-target=\"#balanceModal\">Subscribe\n        for AED {{plan.price}}</button>\n      <button type=\"button\" class=\"btn btn-primary btn-lg mb-2 text-center\" style=\"width: 100%\" (click)=\"creditCard(plan.price)\" *ngIf=\"user\">Subscribe\n        for AED {{plan.price}}</button>\n\n      <div class=\"card\" style=\"width: 100%;\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">100% Satisfaction Guaranteed</h5>\n          <hr>\n          <!-- <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6> -->\n          <p class=\"card-text text-center\"><i class=\"fas fa-dollar-sign\"></i> 30 Day Money Back Guarantee</p>\n          <p class=\"card-text text-center\"><i class=\"fas fa-file-signature\"></i> No Contracts. Cancel Anytime.</p>\n          <p class=\"card-text text-center\"><i class=\"fas fa-glasses\"></i> Hand-picked Growth Experts.</p>\n        </div>\n      </div>\n\n      <div class=\"card mt-3\" style=\"width: 100%;\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title text-center\">Have a Question?</h5>\n          <hr>\n          <!-- <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6> -->\n          <p class=\"card-text\"> <i class=\"fas fa-comments\"></i> Or live chat with ...</p>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<footer id=\"footer\" class=\"mt-4\" style=\"width: auto !important\">\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; 2018 <strong>Searchfuse Marketing Management</strong>.\n    </div>\n    <div class=\"credits\">\n      Built with <i class=\"fas fa-heart\"></i> in Dubai.\n    </div>\n  </div>\n</footer>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"balanceModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Email</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <label for=\"\">Please provide your email:</label>\n        <input type=\"text\" class=\"form-control\" aria-label=\"Search\" [value]=\"email\" (input)=\"email = $event.target.value\"\n          aria-describedby=\"basic-addon2\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" [disabled]=\"!validEmail(email)\" (click)=\"creditCard(plan.price)\">Buy</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/plan/plan.component.ts":
/*!****************************************!*\
  !*** ./src/app/plan/plan.component.ts ***!
  \****************************************/
/*! exports provided: PlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanComponent", function() { return PlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlanComponent = /** @class */ (function () {
    function PlanComponent(usrServ, route, meta) {
        this.usrServ = usrServ;
        this.route = route;
        this.meta = meta;
        this.section = "";
        this.email = "";
        this.currentRate = 4;
        this.plan = {};
        this.user = {};
        this.showMessage = "";
    }
    PlanComponent.prototype.ngOnInit = function () {
        /*  this.section = this.usrServ.getSession("plan-detail")
         console.log(this.section) */
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.section = params['id'];
            _this.usrServ.planID({ id: _this.section }).subscribe(function (res) {
                _this.plan = res[0];
                _this.initMeta();
            });
            _this.usrServ.planIDView({ id: _this.section }).subscribe(console.log);
        });
        this.user = JSON.parse(this.usrServ.getSession('user'));
        authorizingPayment = function (responseData) {
            var data = {
                "id": _this.user && _this.user._id ? _this.user._id : "none",
                "email": _this.user && _this.user.email ? _this.user.email : _this.email,
                "value": _this.plan.price,
                "plan": _this.plan.id,
                "currency": "AED",
                "cardToken": responseData.cardToken,
            };
            _this.usrServ.authorizingPayment(data).subscribe(function (response) {
                console.log(response);
                //if (response.status !== 'Declined') {
                //this.usrServ.goTo('plan/' + this.section + '/thank-you')
                location.href = 'https://searchfuse.com/plan/' + _this.section + '/thank-you';
                /*} else {
                  this.showMessageAction(response.responseMessage)
                }*/
            });
        };
    };
    PlanComponent.prototype.creditCard = function (invest) {
        if (this.user) {
            this.usrServ.creditCard(this.user.email, invest);
        }
        else {
            this.usrServ.creditCard(this.email, invest);
        }
    };
    PlanComponent.prototype.showMessageAction = function (message) {
        var _this = this;
        this.showMessage = message;
        setTimeout(function () {
            _this.showMessage = "";
        }, 4000);
    };
    PlanComponent.prototype.initMeta = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4___default()("[name*='description']").remove();
        this.meta.addTag({ name: 'description', content: this.plan.metaDescription });
        document.title = this.plan.metaTitle;
        /* this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
        this.meta.addTag({ name: 'keywords', content: 'Angular, Meta Service' }); */
    };
    PlanComponent.prototype.validEmail = function (email) {
        return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,8}|[0-9]{1,8})(\]?)$/.test(email);
    };
    PlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plan',
            template: __webpack_require__(/*! ./plan.component.html */ "./src/app/plan/plan.component.html"),
            styles: [__webpack_require__(/*! ./plan.component.css */ "./src/app/plan/plan.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], PlanComponent);
    return PlanComponent;
}());



/***/ }),

/***/ "./src/app/plans/plans.component.css":
/*!*******************************************!*\
  !*** ./src/app/plans/plans.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.card__header--gigs{\r\n  color: #040504;\r\n    font-size: 1em;\r\n    font-weight: 600;\r\n}\r\n\r\n.card-text {\r\n  color: #5e5266;\r\n  font-size: .875em;\r\n  margin: 0;\r\n  max-width: 100%;\r\n}\r\n\r\n.card__reviews {\r\n  font-size: 0.8125em;\r\n  font-weight: 400;\r\n}\r\n\r\n.navbar-fixed-left {\r\n  width: 140px;\r\n  position: fixed;\r\n  border-radius: 0;\r\n  /* height: 100%; */\r\n}\r\n\r\n.navbar-fixed-left .navbar-nav > li {\r\n  float: none;  /* Cancel default li float: left */\r\n  width: 139px;\r\n}\r\n\r\n.navbar-fixed-left + .container {\r\n  padding-left: 160px;\r\n}\r\n\r\n/* On using dropdown menu (To right shift popuped) */\r\n\r\n.navbar-fixed-left .navbar-nav > li > .dropdown-menu {\r\n  margin-top: -50px;\r\n  margin-left: 140px;\r\n}\r\n\r\n.sidebar h5{\r\n  font-size: 1rem;\r\n}\r\n\r\n@media (min-width: 768px){\r\n  .sidebar {\r\n    width: 200px !important;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/plans/plans.component.html":
/*!********************************************!*\
  !*** ./src/app/plans/plans.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark\" style=\"background-color: #ffffff1c\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><img width=\"120\" src=\"assets/img/SEARCHFUSELogo.png\" alt=\"\" title=\"\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item click active\">\n        <a class=\"nav-link\">Plans</a>\n      </li>\n      <li class=\"nav-item click\" *ngIf=\"!user\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login </a>\n      </li>\n      <li class=\"nav-item click\" *ngIf=\"user\">\n        <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard </a>\n      </li>\n\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n\n      <!-- <input class=\"form-control mr-sm-2\" type=\"text\" [value]=\"search\" (input)=\"search = $event.target.value\"\n        placeholder=\"Search\"> -->\n      <!-- <button class=\"btn btn-outline-success my-2 my-sm-0\" >Search</button> -->\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" aria-label=\"Search\" [value]=\"search\"\n          (input)=\"search = $event.target.value\" aria-describedby=\"basic-addon2\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-primary\" type=\"button\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</nav>\n\n<div id=\"social-media\" class=\"mb-5\"></div>\n\n<div class=\"row mt-5 pt-1\">\n  <!-- side bar -->\n  <div class=\"col-md-2 d-none d-sm-block\">\n\n    <ul class=\"sidebar navbar-nav navbar-fixed-left pl-1\" style=\"background-image: linear-gradient(-55deg, #663FB5 0%, #2B8BE3 100%);height: 100%;\">\n      <li class=\"nav-item active click\" style=\"height: 14%\">\n        <a class=\"nav-link text-light mt-3\" (click)=\"scroll('social-media')\">\n          <h5><i class=\"fas fa-code-branch\" ></i> Social Media</h5>\n        </a>\n      </li>\n      <li class=\"nav-item click\" style=\"height: 14%\">\n        <a class=\"nav-link text-light\" (click)=\"scroll('inbound-content')\">\n          <h5><i class=\"fas fa-code-branch\" ></i> Inbound content</h5>\n        </a>\n      </li>\n      <li class=\"nav-item click\" style=\"height: 14%\">\n        <a class=\"nav-link text-light\" (click)=\"scroll('seo')\">\n          <h5><i class=\"fas fa-search\" ></i> SEO</h5>\n        </a>\n      </li>\n      <li class=\"nav-item click\" style=\"height: 14%\">\n        <a class=\"nav-link text-light\" (click)=\"scroll('sales')\">\n          <h5><i class=\"fas fa-chart-line\" ></i> Sales</h5>\n        </a>\n      </li>\n      <li class=\"nav-item click\" style=\"height: 14%\">\n        <a class=\"nav-link text-light\" (click)=\"scroll('paid-ads')\">\n          <h5><i class=\"fas fa-chart-area\" ></i> Paid Ads</h5>\n        </a>\n      </li>\n      <li class=\"nav-item click\" style=\"height: 14%\">\n        <a class=\"nav-link text-light\" (click)=\"scroll('website')\">\n          <h5><i class=\"fas fa-chart-bar\" ></i> Website</h5>\n        </a>\n      </li>\n      <li class=\"nav-item click\" style=\"height: 14%\">\n        <a class=\"nav-link text-light\" (click)=\"scroll('public-relations')\">\n          <h5><i class=\"fas fa-code-branch\" ></i> Public Relations</h5>\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <!-- main section -->\n  <div class=\"col-md-10\">\n    <div id=\"gigListings\" class=\"container\">\n      <!--  -->\n      <div data-type=\"category\" category=\"social-media\">\n\n        <h3 class=\"text-center mt-5\">Social Media</h3>\n\n        <div class=\"row\" style=\"margin-top:2em;\">\n\n          <div class=\"col-sm-12 col-md-6 col-lg-4 mt-2 mb-2\" [ngClass]=\"{'d-none': search!==''&&!inSeach(search,item.title)}\"\n            *ngFor=\"let item of socialMedia; index as i; first as isFirst\">\n\n            <div class=\"card click\" (click)='details(item.id)' *ngIf=\"search===''||inSeach(search,item.title)\">\n              <div class=\"card__shadow\">\n                <img class=\"card-img-top bg--gradient\" [src]=\"getImage(item.title)\" alt=\"\">\n                <div class=\"card-body\" data-equalizer-watch=\"\" style=\"height: 251px;\">\n                  <div class=\"card__header--gigs row\">\n                    <h6 class=\"card-title float-left col-8\" style=\"color:#040504;font-size: 1em;font-weight: 600;\">{{item.title|translate}}</h6>\n                    <p class=\"text-right col-4\" style=\"color:#040504;font-size: .875em;font-weight: 500;\">AED\n                      {{item.price}}</p>\n                  </div>\n                  <div class=\"card__rating\">\n\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star-half-alt\" style=\"color: #FF3366;\"></i>\n                    <span class=\"ml-1\">{{item.minReviews}} </span><!-- 61 {{'Reviews'|translate}} -->\n                  </div>\n                  <p class=\"card-text mt-2\" style=\"color: #5e5266;font-size: .875em;\">{{item.minDescription}}</p>\n                  <!-- {{'Instagram Growth Engine Desc'|translate}} -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div id=\"inbound-content\" class=\"mb-5\"></div>\n      <hr>\n      <div data-type=\"category\" category=\"inbound-content\">\n        <h3 class=\"text-center\">Inbound Content</h3>\n        <div class=\"row\" style=\"margin-top:2em;\" data-equalizer=\"vphclz-equalizer\" data-resize=\"phnru1-eq\" data-events=\"resize\">\n\n          <div class=\"col-sm-12 col-md-6 col-lg-4 mt-2 mb-2\" [ngClass]=\"{'d-none': search!==''&&!inSeach(search,item.title)}\"\n            *ngFor=\"let item of inboundContent; index as i; first as isFirst\">\n            <div class=\"card click\" (click)='details(item.id)' *ngIf=\"search===''||inSeach(search,item.title)\">\n              <div class=\"card__shadow\">\n                <img class=\"card-img-top bg--gradient2\" [src]=\"getImage(item.title)\" alt=\"\">\n                <div class=\"card-body\" data-equalizer-watch=\"\" style=\"height: 251px;\">\n                  <div class=\"card__header--gigs row\">\n                    <h6 class=\"card-title float-left col-8\" style=\"color:#040504;font-size: 1em;font-weight: 600;\">{{item.title|translate}}</h6>\n                    <p class=\"text-right col-4\" style=\"color:#040504;font-size: .875em;font-weight: 500;\">AED\n                      {{item.price}}</p>\n                  </div>\n                  <div class=\"card__rating\">\n\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star-half-alt\" style=\"color: #FF3366;\"></i>\n                    <span class=\"ml-1\">{{item.minReviews}} </span><!-- 61 {{'Reviews'|translate}} -->\n                  </div>\n                  <p class=\"card-text mt-2\" style=\"color: #5e5266;font-size: .875em;\">{{item.minDescription}}</p>\n                  <!-- {{'Instagram Growth Engine Desc'|translate}} -->\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"seo\" class=\"mb-5\"></div>\n      <hr>\n      <div data-type=\"category\" category=\"seo\">\n        <h3 class=\"text-center\">SEO</h3>\n        <div class=\"row\" style=\"margin-top:2em;\" data-equalizer=\"0m7hkm-equalizer\" data-resize=\"kqs49e-eq\" data-events=\"resize\">\n\n          <div class=\"col-sm-12 col-md-6 col-lg-4 mt-2 mb-2\" [ngClass]=\"{'d-none': search!==''&&!inSeach(search,item.title)}\"\n            *ngFor=\"let item of seo; index as i; first as isFirst\">\n            <div class=\"card click\" (click)='details(item.id)' *ngIf=\"search===''||inSeach(search,item.title)\">\n              <div class=\"card__shadow\">\n                <img class=\"card-img-top bg--gradient\" [src]=\"getImage(item.title)\" alt=\"\">\n                <div class=\"card-body\" data-equalizer-watch=\"\" style=\"height: 251px;\">\n                  <div class=\"card__header--gigs row\">\n                    <h6 class=\"card-title float-left col-8\" style=\"color:#040504;font-size: 1em;font-weight: 600;\">{{item.title|translate}}</h6>\n                    <p class=\"text-right col-4\" style=\"color:#040504;font-size: .875em;font-weight: 500;\">AED\n                      {{item.price}}</p>\n                  </div>\n                  <div class=\"card__rating\">\n\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star-half-alt\" style=\"color: #FF3366;\"></i>\n                    <span class=\"ml-1\">{{item.minReviews}} </span><!-- 61 {{'Reviews'|translate}} -->\n                  </div>\n                  <p class=\"card-text mt-2\" style=\"color: #5e5266;font-size: .875em;\">{{item.minDescription}}</p>\n                  <!-- {{'Instagram Growth Engine Desc'|translate}} -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div id=\"sales\" class=\"mb-5\"></div>\n      <hr>\n      <div id=\"sales\" data-type=\"category\" category=\"sales\">\n        <h3 class=\"text-center\">Sales</h3>\n        <div class=\"row\" style=\"margin-top:2em;\" data-equalizer=\"nnj8xt-equalizer\" data-resize=\"23f1q0-eq\" data-events=\"resize\">\n\n          <div class=\"col-sm-12 col-md-6 col-lg-4 mt-2 mb-2\" [ngClass]=\"{'d-none': search!==''&&!inSeach(search,item.title)}\"\n            *ngFor=\"let item of sales; index as i; first as isFirst\">\n            <div class=\"card click\" (click)='details(item.id)' *ngIf=\"search===''||inSeach(search,item.title)\">\n              <div class=\"card__shadow\">\n                <img class=\"card-img-top bg--gradient2\" [src]=\"getImage(item.title)\" alt=\"\">\n                <div class=\"card-body\" data-equalizer-watch=\"\" style=\"height: 251px;\">\n                  <div class=\"card__header--gigs row\">\n                    <h6 class=\"card-title float-left col-8\" style=\"color:#040504;font-size: 1em;font-weight: 600;\">{{item.title|translate}}</h6>\n                    <p class=\"text-right col-4\" style=\"color:#040504;font-size: .875em;font-weight: 500;\">AED\n                      {{item.price}}</p>\n                  </div>\n                  <div class=\"card__rating\">\n\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star-half-alt\" style=\"color: #FF3366;\"></i>\n                    <span class=\"ml-1\">{{item.minReviews}} </span><!-- 61 {{'Reviews'|translate}} -->\n                  </div>\n                  <p class=\"card-text mt-2\" style=\"color: #5e5266;font-size: .875em;\">{{item.minDescription}}</p>\n                  <!-- {{'Instagram Growth Engine Desc'|translate}} -->\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"paid-ads\" class=\"mb-5\"></div>\n      <hr>\n      <div data-type=\"category\" category=\"paid-ads\">\n        <h3 class=\"text-center\">Paid ads</h3>\n        <div class=\"row\" style=\"margin-top:2em;\" data-equalizer=\"we0ezb-equalizer\" data-resize=\"hnpydh-eq\" data-events=\"resize\">\n\n          <div class=\"col-sm-12 col-md-6 col-lg-4 mt-2 mb-2\" [ngClass]=\"{'d-none': search!==''&&!inSeach(search,item.title)}\"\n            *ngFor=\"let item of paidAds; index as i; first as isFirst\">\n            <div class=\"card click\" (click)='details(item.id)' *ngIf=\"search===''||inSeach(search,item.title)\">\n              <div class=\"card__shadow\">\n                <img class=\"card-img-top bg--gradient\" [src]=\"getImage(item.title)\" alt=\"\">\n                <div class=\"card-body\" data-equalizer-watch=\"\" style=\"height: 251px;\">\n                  <div class=\"card__header--gigs row\">\n                    <h6 class=\"card-title float-left col-8\" style=\"color:#040504;font-size: 1em;font-weight: 600;\">{{item.title|translate}}</h6>\n                    <p class=\"text-right col-4\" style=\"color:#040504;font-size: .875em;font-weight: 500;\">AED\n                      {{item.price}}</p>\n                  </div>\n                  <div class=\"card__rating\">\n\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star-half-alt\" style=\"color: #FF3366;\"></i>\n                    <span class=\"ml-1\">{{item.minReviews}} </span><!-- 61 {{'Reviews'|translate}} -->\n                  </div>\n                  <p class=\"card-text mt-2\" style=\"color: #5e5266;font-size: .875em;\">{{item.minDescription}}</p>\n                  <!-- {{'Instagram Growth Engine Desc'|translate}} -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <div id=\"website\" class=\"mb-5\"></div>\n      <hr>\n      <div data-type=\"category\" category=\"website\">\n        <h3 class=\"text-center\">Website</h3>\n        <div class=\"row\" style=\"margin-top:2em;\" data-equalizer=\"e5lwx0-equalizer\" data-resize=\"9j69t1-eq\" data-events=\"resize\">\n\n          <div class=\"col-sm-12 col-md-6 col-lg-4 mt-2 mb-2\" [ngClass]=\"{'d-none': search!==''&&!inSeach(search,item.title)}\"\n            *ngFor=\"let item of website; index as i; first as isFirst\">\n            <div class=\"card click\" (click)='details(item.id)' *ngIf=\"search===''||inSeach(search,item.title)\">\n              <div class=\"card__shadow\">\n                <img class=\"card-img-top bg--gradient2\" [src]=\"getImage(item.title)\" alt=\"\">\n                <div class=\"card-body\" data-equalizer-watch=\"\" style=\"height: 251px;\">\n                  <div class=\"card__header--gigs row\">\n                    <h6 class=\"card-title float-left col-8\" style=\"color:#040504;font-size: 1em;font-weight: 600;\">{{item.title|translate}}</h6>\n                    <p class=\"text-right col-4\" style=\"color:#040504;font-size: .875em;font-weight: 500;\">AED\n                      {{item.price}}</p>\n                  </div>\n                  <div class=\"card__rating\">\n\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star-half-alt\" style=\"color: #FF3366;\"></i>\n                    <span class=\"ml-1\">{{item.minReviews}} </span><!-- 61 {{'Reviews'|translate}} -->\n                  </div>\n                  <p class=\"card-text mt-2\" style=\"color: #5e5266;font-size: .875em;\">{{item.minDescription}}</p>\n                  <!-- {{'Instagram Growth Engine Desc'|translate}} -->\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div id=\"public-relations\" class=\"mb-5\"></div>\n      <hr>\n      <div data-type=\"category\" category=\"public-relations\">\n        <h3 class=\"text-center\">Public Relations</h3>\n        <div class=\"row\" style=\"margin-top:2em;\" data-equalizer=\"0av00n-equalizer\" data-resize=\"z1d49m-eq\" data-events=\"resize\">\n\n          <div class=\"col-sm-12 col-md-6 col-lg-4 mt-2 mb-2\" [ngClass]=\"{'d-none': search!==''&&!inSeach(search,item.title)}\"\n            *ngFor=\"let item of publicRelations; index as i; first as isFirst\">\n            <div class=\"card click\" (click)='details(item.id)' *ngIf=\"search===''||inSeach(search,item.title)\">\n              <div class=\"card__shadow\">\n                <img class=\"card-img-top bg--gradient\" [src]=\"getImage(item.title)\" alt=\"\">\n                <div class=\"card-body\" data-equalizer-watch=\"\" style=\"height: 251px;\">\n                  <div class=\"card__header--gigs row\">\n                    <h6 class=\"card-title float-left col-8\" style=\"color:#040504;font-size: 1em;font-weight: 600;\">{{item.title|translate}}</h6>\n                    <p class=\"text-right col-4\" style=\"color:#040504;font-size: .875em;font-weight: 500;\">AED\n                      {{item.price}}</p>\n                  </div>\n                  <div class=\"card__rating\">\n\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star\" style=\"color: #FF3366;\"></i>\n                    <i class=\"fas fa-star-half-alt\" style=\"color: #FF3366;\"></i>\n                    <span class=\"ml-1\">{{item.minReviews}} </span><!-- 61 {{'Reviews'|translate}} -->\n                  </div>\n                  <p class=\"card-text mt-2\" style=\"color: #5e5266;font-size: .875em;\">{{item.minDescription}}</p>\n                  <!-- {{'Instagram Growth Engine Desc'|translate}} -->\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/plans/plans.component.ts":
/*!******************************************!*\
  !*** ./src/app/plans/plans.component.ts ***!
  \******************************************/
/*! exports provided: PlansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansComponent", function() { return PlansComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlansComponent = /** @class */ (function () {
    function PlansComponent(translate, usrServ) {
        this.translate = translate;
        this.usrServ = usrServ;
        this.currentRate = 4;
        this.readonly = true;
        this.search = "";
        this.plans = [];
        this.socialMedia = [];
        this.inboundContent = [];
        this.seo = [];
        this.sales = [];
        this.paidAds = [];
        this.website = [];
        this.publicRelations = [];
        this.user = {};
        translate.setDefaultLang('en');
    }
    PlansComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usrServ.plansMin().subscribe(function (res) {
            _this.plans = res;
            _this.socialMedia = _this.plans.slice(0, 11);
            _this.inboundContent = _this.plans.slice(11, 29);
            _this.seo = _this.plans.slice(29, 32);
            _this.sales = _this.plans.slice(32, 39);
            _this.paidAds = _this.plans.slice(39, 49);
            _this.website = _this.plans.slice(49, 55);
            _this.publicRelations = _this.plans.slice(55, _this.plans.length);
        });
        this.user = JSON.parse(this.usrServ.getSession('user'));
        this.usrServ.initMeta();
    };
    PlansComponent.prototype.details = function (id) {
        this.usrServ.setSession("plan-detail", id);
        this.usrServ.goToWithParam("/plan", id);
    };
    PlansComponent.prototype.inSeach = function (search, title) {
        return title.toLocaleLowerCase().indexOf(search) !== -1;
    };
    PlansComponent.prototype.scroll = function (id) {
        var el = document.getElementById(id);
        el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    PlansComponent.prototype.getImage = function (title) {
        var resources = [
            "assets/img/icons/get-more-instagram-followers.svg",
            "assets/img/icons/get-more-twitter-followers.svg",
            "assets/img/icons/linkedin-management.svg",
            "assets/img/icons/2813-social-media-management1.svg",
            "assets/img/icons/2868-advanced-facebook-ads-management.svg",
            "assets/img/icons/2847-animated-infographic-video.svg",
            "assets/img/icons/2870-cold-sales-email-campaigns.svg",
            "assets/img/icons/2871-managed-wordpress-website.svg",
        ];
        var pos = title.toLocaleLowerCase().indexOf("instagram") != -1 ? 0 :
            title.toLocaleLowerCase().indexOf("twitter") != -1 ? 1 :
                title.toLocaleLowerCase().indexOf("social") != -1 ? 3 :
                    title.toLocaleLowerCase().indexOf("facebook") != -1 ? 4 :
                        title.toLocaleLowerCase().indexOf("infographic") != -1 ? 5 :
                            title.toLocaleLowerCase().indexOf("sales") != -1 ? 6 :
                                title.toLocaleLowerCase().indexOf("word press") != -1 ? 7 :
                                    title.toLocaleLowerCase().indexOf("linkedin") != -1 ? 2
                                        : 6;
        var resource = resources[pos];
        return resource;
    };
    PlansComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plans',
            template: __webpack_require__(/*! ./plans.component.html */ "./src/app/plans/plans.component.html"),
            styles: [__webpack_require__(/*! ./plans.component.css */ "./src/app/plans/plans.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], PlansComponent);
    return PlansComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mobile */\r\n@media (max-width: 768px) {\r\n  header, main {\r\n    width: 99%;\r\n    margin: 0px auto;\r\n  }\r\n  #wall{\r\n    margin-top: 100px\r\n  }\r\n}\r\n@media (min-width: 768px){\r\n  header, main {\r\n    width: 40%;\r\n    margin: 0px auto;\r\n  }\r\n  #wall{\r\n    margin-top: 200px\r\n  }\r\n}\r\nheader {\r\n  /* text-align: center; */\r\n  margin-top: 100px;\r\n}\r\nmain {\r\n  background-color: white;\r\n  /* border-radius: 10px; */\r\n  box-shadow: 2px 2px 2px 2px  rgba(29, 22, 15, 0.7);\r\n  padding: 20px;\r\n}\r\n.pointer{\r\n  cursor: pointer;\r\n}\r\nimg{\r\n  width: 150px;\r\n}\r\n.input{\r\n  width: 100%;\r\n  height: 3em;\r\n  background: transparent;\r\n  border: none;\r\n  border-radius: 0;\r\n  border-bottom: 1px solid #F0ECF4;\r\n  color: #2B8BE3;\r\n  outline: 0;\r\n  padding: 1em 0 0 0;\r\n  box-shadow: none;\r\n  font-size: 1.25em;\r\n  margin: 1px;\r\n  margin-top: .5em;\r\n}"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <header>\n  <a routerLink=\"/login\">\n    <img src=\"assets/logo.png\" alt=\"Logo\" class=\"mb-3\">\n  </a>\n</header> -->\n\n<nav class=\"navbar navbar-light bg-light fixed-top\">\n\n    <form class=\"form-inline\" style=\"width: 100%;\">\n      <a class=\"navbar-brand\" routerLink=\"/\"><i class=\"fas fa-arrow-left\"></i></a>\n      <h5 class=\"text-center\" style=\"margin-left: 45%\">Forgot your password</h5>\n    </form>\n  </nav>\n\n<main id=\"wall\">\n\n  <div class=\"container text-center\" id=\"success\" *ngIf=\"success\">\n    <i class=\"far fa-envelope-open fa-3x\"></i>\n    <p *ngIf=\"!code\" > Awesome, we have sent you an email with a link to reset your password</p>\n    <p *ngIf=\"code\" > Your password has been changed successfully.</p>\n    <a routerLink=\"/login\">Back to Login</a>\n  </div>\n\n  <div *ngIf=\"!code&&!success\">\n    <h2></h2>\n    <form #resetForm=\"ngForm\" (ngSubmit)=\"sendEmail()\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email</label>\n        <input type=\"email\" name=\"email\" class=\"input\" [ngClass]=\"{'is-invalid': emailBlur && !validEmail(credentials.email)}\"\n          [(ngModel)]=\"credentials.email\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"For example user@mail.com\"\n          required (blur)=\"emailBlur=true\">\n        <div class=\"invalid-feedback\" *ngIf=\"emailBlur && !validEmail(credentials.email)\">\n          Please provide a valid email.\n        </div>\n      </div>\n      <button type=\"submit\" [disabled]=\"!resetForm.valid || !validEmail(credentials.email)\" class=\"btn btn-primary\">Send</button>\n      <!-- *ngIf=\"!sent\" -->\n      <a routerLink=\"/login\" class=\"form-text text-muted\">Back to Login</a>\n    </form>\n  </div>\n\n  <div *ngIf=\"code&&!success\">\n    <h2></h2>\n    <form #forgotForm=\"ngForm\" (ngSubmit)=\"change()\">\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"input\" id=\"password\" name=\"password\" [(ngModel)]=\"credentials.password\" placeholder=\"Password\"\n          required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password2\"> Confirm Password</label>\n        <input type=\"password\" class=\"input\" id=\"password2\" name=\"password2\" [(ngModel)]=\"credentials.password2\" placeholder=\"Password\"\n          required>\n      </div>\n      <button type=\"submit\" [disabled]=\"!forgotForm.valid\" class=\"btn btn-primary\">Change</button>\n      <!-- *ngIf=\"!sentPass\" -->\n      <a routerLink=\"/login\" class=\"form-text text-muted\">Back to Login</a>\n    </form>\n  </div>\n\n</main>\n"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(usrServ, router) {
        this.usrServ = usrServ;
        this.router = router;
        this.credentials = {
            email: '',
            password: '',
            password2: '',
            code: ''
        };
        this.sent = false;
        this.emailBlur = false;
        this.sentPass = false;
        this.success = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.url = new URL(location.href);
        this.code = this.url.searchParams.get("code") ? this.url.searchParams.get("code") : false;
        this.credentials.code = this.code;
        //this.isCodeValid(this.code)
    };
    ResetPasswordComponent.prototype.sendEmail = function () {
        var _this = this;
        if (this.validEmail(this.credentials.email)) {
            this.usrServ.resetPassEmail(this.credentials).subscribe(function (res) {
                // this.router.navigate(['']);
                if (res.success) {
                    _this.sent = true;
                    /* let toastOptions: ToastOptions = {
                      title: "Recover email sent",
                      msg: "Awesome, we have sent an email to the address you provided",
                      showClose: true,
                      timeout: 5000,
                      theme: 'default'
                    };
                    this.toastyService.info(toastOptions); */
                    _this.success = true;
                }
                else {
                    /* let toastOptions: ToastOptions = {
                      title: "Invalid email",
                      msg: "Please make sure you use the right email for this system",
                      showClose: true,
                      timeout: 5000,
                      theme: 'default'
                    };
                    this.toastyService.warning(toastOptions); */
                    console.error("Please make sure you use the right email for this system");
                }
            }, function (error) {
                console.error(error);
                /* let toastOptions: ToastOptions = {
                  title: "Send email error",
                  msg: "There was an error please try later",
                  showClose: true,
                  timeout: 5000,
                  theme: 'default'
                };
                this.toastyService.error(toastOptions); */
            });
        }
    };
    ResetPasswordComponent.prototype.change = function () {
        var _this = this;
        //if(this.credentials.password.length >= 6 ){
        if (this.credentials.password === this.credentials.password2) {
            this.usrServ.changePassCode(this.credentials).subscribe(function (res) {
                console.log(res);
                if (res.success) {
                    _this.sentPass = true;
                    _this.success = true;
                    setTimeout(function (ste) {
                        console.log("redirect");
                        _this.router.navigate(['/login']);
                    }, 6000);
                }
                else {
                    setTimeout(function (ste) {
                        console.log("redirect");
                        _this.router.navigate(['/login']);
                    }, 6000);
                }
            }, function (error) {
                /* let toastOptions: ToastOptions = {
                  title: "Change password error",
                  msg: "There was an error please try later",
                  showClose: true,
                  timeout: 5000,
                  theme: 'default'
                };
                this.toastyService.error(toastOptions); */
            });
        }
        else {
            /* let toastOptions: ToastOptions = {
              title: "Password validations",
              msg: "Passwords must match",
              showClose: true,
              timeout: 5000,
              theme: 'default'
            };
            this.toastyService.warning(toastOptions); */
        }
        //}else{
        /* let toastOptions: ToastOptions = {
          title: "Password validations",
          msg: "Your password must be at least 6 characters",
          showClose: true,
          timeout: 5000,
          theme: 'default'
        };
        this.toastyService.warning(toastOptions); */
        //}
    };
    ResetPasswordComponent.prototype.validEmail = function (email) {
        return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,8}|[0-9]{1,8})(\]?)$/.test(email);
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var httpCheckoutOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': 'pk_78cc7952-478a-4a11-97d0-b68d616b8815' })
};
var httpOptionsFiles = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'multipart/form-data' })
};
var AdminService = /** @class */ (function () {
    function AdminService(http, router, meta) {
        this.http = http;
        this.router = router;
        this.meta = meta;
        this.apiURL = '/api/v1'; // URL to web api
        this.appPrefix = 'denarii_whitelisting_';
    }
    AdminService.prototype.allUser = function () {
        return this.http.post(this.apiURL + "/allUser", {}, httpOptions);
    };
    AdminService.prototype.toAdmin = function (item) {
        return this.http.post(this.apiURL + "/toAdmin", item, httpOptions);
    };
    AdminService.prototype.savePlan = function (item) {
        return this.http.post(this.apiURL + "/savePlan", item, httpOptions);
    };
    AdminService.prototype.toAceptEmailVerification = function (item) {
        return this.http.post(this.apiURL + "/toAceptEmailVerification", item, httpOptions);
    };
    AdminService.prototype.createTransaction = function (item) {
        return this.http.post(this.apiURL + "/createTransaction", item, httpOptions);
    };
    AdminService.prototype.removeTransaction = function (item) {
        return this.http.post(this.apiURL + "/removeTransaction", item, httpOptions);
    };
    AdminService.prototype.allTransactions = function () {
        return this.http.post(this.apiURL + "/allTransactions", {}, httpOptions);
    };
    AdminService.prototype.messageByIDNoAdmin = function () {
        return this.http.post(this.apiURL + "/messageByIDNoAdmin", {}, httpOptions);
    };
    AdminService.prototype.notificationByIDNoAdmin = function () {
        return this.http.post(this.apiURL + "/notificationByIDNoAdmin", {}, httpOptions);
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var httpCheckoutOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Authorization': 'pk_78cc7952-478a-4a11-97d0-b68d616b8815' })
};
var httpOptionsFiles = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'multipart/form-data' })
};
var UsersService = /** @class */ (function () {
    function UsersService(http, router, meta) {
        this.http = http;
        this.router = router;
        this.meta = meta;
        this.apiURL = '/api/v1'; // URL to web api
        this.appPrefix = 'denarii_whitelisting_';
        //SERVER_URL = 'https://searchfuse.com';
        this.SERVER_URL = 'http://localhost:4000';
        this.socket = {};
        this.initSocket();
    }
    //sockets
    UsersService.prototype.initSocket = function () {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_7__(this.SERVER_URL);
    };
    UsersService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    UsersService.prototype.onMessage = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    };
    UsersService.prototype.onEvent = function (event) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    //sockets
    UsersService.prototype.login = function (credentials) {
        var _this = this;
        return this.http
            .post(this.apiURL + "/login", credentials, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            if (user) {
                _this.setSession('user', JSON.stringify(user));
            }
        }));
    };
    UsersService.prototype.logout = function () {
        this.removeSession('user');
        this.router.navigate(['/login']);
    };
    UsersService.prototype.status = function () {
        var _this = this;
        return this.http
            .post(this.apiURL + "/status", {}, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) { return _this.setSession('user', JSON.stringify(user)); }));
    };
    UsersService.prototype.getSession = function (elem) {
        return window.localStorage.getItem(this.appPrefix + elem);
    };
    UsersService.prototype.setSession = function (elem, val) {
        window.localStorage.setItem(this.appPrefix + elem, val);
    };
    UsersService.prototype.removeSession = function (elem) {
        this.http.post(this.apiURL + "/logout", httpOptions).subscribe(function (response) {
            console.log(response);
        });
        window.localStorage.removeItem(this.appPrefix + elem);
    };
    UsersService.prototype.ifValidUserToMain = function () {
        var user = JSON.parse(this.getSession('user'));
        if (user) {
            this.router.navigate(['/dashboard']);
        }
        return user;
    };
    UsersService.prototype.ifInvalidUserToLogin = function () {
        var user = JSON.parse(this.getSession('user'));
        if (!user) {
            this.router.navigate(['/login']);
        }
        return user;
    };
    UsersService.prototype.checkCode = function (code) {
        var _this = this;
        return this.http.post(this.apiURL + "/checkCode", code, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            if (user) {
                _this.setSession('user', JSON.stringify(user));
            }
        }));
        ;
    };
    UsersService.prototype.updateUser = function (data) {
        return this.http.post(this.apiURL + "/updateUser", data, httpOptions);
    };
    UsersService.prototype.changePass = function (data) {
        return this.http.post(this.apiURL + "/changePass", data, httpOptions);
    };
    UsersService.prototype.changePassCode = function (data) {
        return this.http.post(this.apiURL + "/changePassCode", data, httpOptions);
    };
    UsersService.prototype.resetPassEmail = function (email) {
        return this.http.post(this.apiURL + "/resetPassEmail", email, httpOptions);
    };
    UsersService.prototype.plans = function () {
        return this.http.post(this.apiURL + "/plans", {}, httpOptions);
    };
    UsersService.prototype.plansMin = function () {
        return this.http.post(this.apiURL + "/plansMin", {}, httpOptions);
    };
    UsersService.prototype.planID = function (planID) {
        return this.http.post(this.apiURL + "/planID", planID, httpOptions);
    };
    UsersService.prototype.planIDView = function (planID) {
        return this.http.post(this.apiURL + "/view", planID, httpOptions);
    };
    UsersService.prototype.planTitle = function (planTitle) {
        return this.http.post(this.apiURL + "/planTitle", planTitle, httpOptions);
    };
    UsersService.prototype.transactions = function () {
        return this.http.post(this.apiURL + "/transactions", {}, httpOptions);
    };
    UsersService.prototype.transactionByID = function (data) {
        return this.http.post(this.apiURL + "/transactionByID", data, httpOptions);
    };
    UsersService.prototype.orderRequirements = function (data) {
        return this.http.post(this.apiURL + "/orderRequirements", data, httpOptions);
    };
    UsersService.prototype.requirementsAcepted = function (data) {
        return this.http.post(this.apiURL + "/requirementsAcepted", data, httpOptions);
    };
    UsersService.prototype.orderCompleted = function (data) {
        return this.http.post(this.apiURL + "/orderCompleted", data, httpOptions);
    };
    UsersService.prototype.rateOrder = function (data) {
        return this.http.post(this.apiURL + "/rateOrder", data, httpOptions);
    };
    UsersService.prototype.createOrder = function (data) {
        return this.http.post(this.apiURL + "/createOrder", data, httpOptions);
    };
    UsersService.prototype.completedOrder = function (data) {
        return this.http.post(this.apiURL + "/completedOrder", data, httpOptions);
    };
    UsersService.prototype.sendMessage = function (data) {
        return this.http.post(this.apiURL + "/sendMessage", data, httpOptions);
    };
    UsersService.prototype.messagesByTransaction = function (data) {
        return this.http.post(this.apiURL + "/messagesByTransaction", data, httpOptions);
    };
    UsersService.prototype.openMessage = function (data) {
        return this.http.post(this.apiURL + "/openMessage", data, httpOptions);
    };
    UsersService.prototype.closeMessage = function (data) {
        return this.http.post(this.apiURL + "/closeMessage", data, httpOptions);
    };
    UsersService.prototype.messages = function () {
        return this.http.post(this.apiURL + "/messages", {}, httpOptions);
    };
    UsersService.prototype.messageByIDAdmin = function () {
        return this.http.post(this.apiURL + "/messageByIDAdmin", {}, httpOptions);
    };
    UsersService.prototype.map = function (data) {
        return this.http.post(this.apiURL + "/map", data, httpOptions);
    };
    UsersService.prototype.sendNotification = function (data) {
        return this.http.post(this.apiURL + "/sendNotification", data, httpOptions);
    };
    UsersService.prototype.notificationsByTransaction = function (data) {
        return this.http.post(this.apiURL + "/notificationsByTransaction", data, httpOptions);
    };
    UsersService.prototype.openNotification = function (data) {
        return this.http.post(this.apiURL + "/openNotification", data, httpOptions);
    };
    UsersService.prototype.closeNotification = function (data) {
        return this.http.post(this.apiURL + "/closeNotification", data, httpOptions);
    };
    UsersService.prototype.notifications = function () {
        return this.http.post(this.apiURL + "/notifications", {}, httpOptions);
    };
    UsersService.prototype.notificationByIDAdmin = function () {
        return this.http.post(this.apiURL + "/notificationByIDAdmin", {}, httpOptions);
    };
    UsersService.prototype.sendVerificationEmail = function (data) {
        return this.http.post(this.apiURL + "/send-verification-email", data, httpOptions);
    };
    UsersService.prototype.signup = function (user) {
        return this.http.post(this.apiURL + "/user", user, httpOptions);
    };
    UsersService.prototype.getSystemVersion = function () {
        return this.http.post(this.apiURL + "/getSystemVersion", httpOptions);
    };
    UsersService.prototype.checkoutTokenCard = function (data) {
        return this.http.post("https://api2.checkout.com/v2/tokens/card", data, httpCheckoutOptions);
    };
    UsersService.prototype.checkSystemVersion = function () {
        var _this = this;
        this.getSystemVersion().subscribe(function (res) {
            if (res != _this.getSession("system-version")) {
                _this.setSession("system-version", res);
                console.log("version need to be updated!!!");
                setTimeout(function () {
                    location.reload(true);
                }, 1000);
            }
            else {
                console.log("version updated");
            }
        });
    };
    UsersService.prototype.goTo = function (page) {
        this.router.navigate([page]);
    };
    UsersService.prototype.goToWithParam = function (page, parameter) {
        this.router.navigate([page, parameter]);
    };
    /* Payment Chechkout */
    UsersService.prototype.creditCard = function (email, invest) {
        creditCardInit(email, invest * 100);
    };
    UsersService.prototype.authorizingPayment = function (data) {
        return this.http.post(this.apiURL + "/authorizingPayment", data, httpOptions);
    };
    UsersService.prototype.initMeta = function () {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("[name*='description']").remove();
        this.meta.addTag({ name: 'description', content: "Searchfuse is a growth hacker marketplace for on-demand marketing service providers. In just a few clicks, you can get expert digital marketers support your digital marketing needs." });
        document.title = "On-demand Digital Marketers  - Searchfuse";
        /* this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
        this.meta.addTag({ name: 'keywords', content: 'Angular, Meta Service' }); */
    };
    UsersService.prototype.isUserManage = function () {
        var user = JSON.parse(this.getSession('user'));
        if (user.userType && !user.userType.some(function (e) { return e.toLowerCase() === 'manager'; })) {
            return false;
        }
        return true;
    };
    UsersService.prototype.isUserDriver = function () {
        var user = JSON.parse(this.getSession('user'));
        if (user.userType && !user.userType.some(function (e) { return e.toLowerCase() === 'driver'; })) {
            return false;
        }
        return true;
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\r\n  display: flex;\r\n}\r\n\r\n#wrapper #content-wrapper {\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  padding-top: 1rem;\r\n  padding-bottom: 80px;\r\n}\r\n\r\nbody.fixed-nav #content-wrapper {\r\n  margin-top: 56px;\r\n  padding-left: 90px;\r\n}\r\n\r\nbody.fixed-nav.sidebar-toggled #content-wrapper {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.fixed-nav #content-wrapper {\r\n    padding-left: 225px;\r\n  }\r\n  body.fixed-nav.sidebar-toggled #content-wrapper {\r\n    padding-left: 90px;\r\n  }\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 46px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.smaller {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n  z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav .form-inline .input-group {\r\n  width: 100%;\r\n}\r\n\r\n.navbar-nav .nav-item.active .nav-link {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown .dropdown-toggle::after {\r\n  width: 1rem;\r\n  text-align: center;\r\n  float: right;\r\n  vertical-align: 0;\r\n  border: 0;\r\n  font-weight: 900;\r\n  content: '\\f105';\r\n  font-family: 'Font Awesome 5 Free';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {\r\n  content: '\\f107';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link:focus {\r\n  outline: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link .badge {\r\n  position: absolute;\r\n  margin-left: 0.75rem;\r\n  top: 0.3rem;\r\n  font-weight: 400;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-nav .form-inline .input-group {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n.card-body-icon {\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: -1.25rem;\r\n  right: -1rem;\r\n  opacity: 0.4;\r\n  font-size: 5rem;\r\n  -webkit-transform: rotate(15deg);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n    column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n:root {\r\n  --input-padding-x: 0.75rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\n.card-login {\r\n  max-width: 25rem;\r\n}\r\n\r\n.card-register {\r\n  max-width: 40rem;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n  height: auto;\r\n}\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\nfooter.sticky-footer {\r\n  display: flex;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: calc(100% - 90px);\r\n  height: 80px;\r\n  background-color: #e9ecef;\r\n}\r\n\r\nfooter.sticky-footer .copyright {\r\n  line-height: 1;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  footer.sticky-footer {\r\n    width: calc(100% - 225px);\r\n  }\r\n}\r\n\r\nbody.sidebar-toggled footer.sticky-footer {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.sidebar-toggled footer.sticky-footer {\r\n    width: calc(100% - 90px);\r\n  }\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  padding: 20px 0 20px;\r\n  list-style: none;\r\n}\r\n\r\n.timeline:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 3px;\r\n  margin-left: -1.5px;\r\n  background-color: #eeeeee;\r\n}\r\n\r\n.timeline > li {\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li > .timeline-panel {\r\n  float: left;\r\n  position: relative;\r\n  width: 46%;\r\n  padding: 20px;\r\n  border: 1px solid #d4d4d4;\r\n  border-radius: 2px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n}\r\n\r\n.timeline > li > .timeline-panel:before {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 26px;\r\n  right: -15px;\r\n  border-top: 15px solid transparent;\r\n  border-right: 0 solid #ccc;\r\n  border-bottom: 15px solid transparent;\r\n  border-left: 15px solid #ccc;\r\n}\r\n\r\n.timeline > li > .timeline-panel:after {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 27px;\r\n  right: -14px;\r\n  border-top: 14px solid transparent;\r\n  border-right: 0 solid #fff;\r\n  border-bottom: 14px solid transparent;\r\n  border-left: 14px solid #fff;\r\n}\r\n\r\n.timeline > li > .timeline-badge {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 16px;\r\n  left: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: -25px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n  line-height: 50px;\r\n  color: #fff;\r\n  background-color: #999999;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline-badge.primary {\r\n  background-color: #2e6da4 !important;\r\n}\r\n\r\n.timeline-badge.success {\r\n  background-color: #3f903f !important;\r\n}\r\n\r\n.timeline-badge.warning {\r\n  background-color: #f0ad4e !important;\r\n}\r\n\r\n.timeline-badge.danger {\r\n  background-color: #d9534f !important;\r\n}\r\n\r\n.timeline-badge.info {\r\n  background-color: #5bc0de !important;\r\n}\r\n\r\n.timeline-title {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n\r\n.timeline-body > p,\r\n.timeline-body > ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.timeline-body > p + p {\r\n  margin-top: 5px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  ul.timeline:before {\r\n    left: 40px;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    width: calc(10%);\r\n    width: -webkit-calc(10%);\r\n  }\r\n  ul.timeline > li > .timeline-badge {\r\n    top: 16px;\r\n    left: 15px;\r\n    margin-left: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    float: right;\r\n  }\r\n  ul.timeline > li > .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n  }\r\n}\r\n\r\n.input{\r\n  width: 100%;\r\n  height: 3em;\r\n  background: transparent;\r\n  border: none;\r\n  border-radius: 0;\r\n  border-bottom: 1px solid #F0ECF4;\r\n  color: #2B8BE3;\r\n  outline: 0;\r\n  padding: 1em 0 0 0;\r\n  box-shadow: none;\r\n  font-size: 1.25em;\r\n  margin: 1px;\r\n  margin-top: .5em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<dashboard-navbar></dashboard-navbar>\n\n<div id=\"wrapper\">\n\n  <dashboard-sidebar></dashboard-sidebar>\n\n  <div id=\"content-wrapper\">\n\n    <div class=\"container-fluid\">\n      <h2>Settings</h2>\n      <hr>\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/dashboard\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Settings</li>\n      </ol>\n\n      \n      <!-- DataTables Example -->\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-table\"></i>\n          Settings</div>\n        <div class=\"card-body\">\n          \n          <!-- <div class=\"form-group\">\n            <label for=\"email\" style=\"width: 100%\">Email address</label>\n            <input type=\"email\" class=\"input\" [ngClass]=\"{'is-invalid': emailBlur && !validEmail(user.email)}\" id=\"email\"\n              name=\"email\" [value]=\"user.email\" (input)=\"user.email = $event.target.value\" placeholder=\"Enter your email address\"\n              required (blur)=\"emailBlur=true\">\n            <div class=\"invalid-feedback\" *ngIf=\"emailBlur && !validEmail(user.email)\">\n              Please provide a valid email.\n            </div>\n          </div> -->\n\n          <div class=\"form-group\">\n            <label for=\"firstName\" style=\"width: 100%\">First Name</label>\n            <input type=\"firstName\" class=\"input\" [ngClass]=\"{'is-invalid': firstNameBlur}\" id=\"firstName\"\n              name=\"firstName\" [value]=\"user.firstName\" (input)=\"user.firstName = $event.target.value\" placeholder=\"Enter your First Name\"\n              required (blur)=\"firstNameBlur=true\">            \n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"lastName\" style=\"width: 100%\">Last Name</label>\n            <input type=\"lastName\" class=\"input\" [ngClass]=\"{'is-invalid': lastNameBlur}\" id=\"lastName\"\n              name=\"lastName\" [value]=\"user.lastName\" (input)=\"user.lastName = $event.target.value\" placeholder=\"Enter your First Name\"\n              required (blur)=\"lastNameBlur=true\">            \n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"pass\" style=\"width: 100%\">New Password</label>\n            <input type=\"password\" class=\"input\" [ngClass]=\"{'is-invalid': passBlur}\" id=\"pass\"\n              name=\"pass\"  [(ngModel)]=\"pass\"\n              required (blur)=\"passBlur=true\">            \n          </div>\n\n          \n\n          <button type=\"submit\" class=\"btn btn-primary btn-lg float-rigth mt-5 mb-5\"\n        style=\"width: 100%\" (click)=\"update()\">Update Settings</button>\n\n        </div>\n        <!-- <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div> -->\n      </div>\n\n\n\n    </div>\n    <!-- /.container-fluid -->\n\n\n\n\n  </div>\n  <!-- /.content-wrapper -->\n\n</div>\n<!-- /#wrapper -->\n\n<footer id=\"footer\" style=\"width: auto !important\">\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; 2018 <strong>IRecycle</strong>.\n    </div>\n    <div class=\"credits\">\n      Built with <i class=\"fas fa-heart\"></i> in Qatar.\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(usrServ) {
        this.usrServ = usrServ;
        this.user = {};
        this.pass = "";
        this.pass2 = "";
        this.firstNameBlur = false;
        this.lastNameBlur = false;
        this.passBlur = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.user = this.usrServ.ifInvalidUserToLogin();
    };
    SettingsComponent.prototype.validEmail = function (email) {
        return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,8}|[0-9]{1,8})(\]?)$/.test(email);
    };
    SettingsComponent.prototype.update = function () {
        var _this = this;
        var data = {
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            password: this.pass
        };
        this.usrServ.updateUser(data).subscribe(function (res) {
            _this.usrServ.status().subscribe(function (res) {
                _this.user = _this.usrServ.ifInvalidUserToLogin();
            });
        });
        if (this.pass !== "") {
            this.usrServ.changePass(data).subscribe(function (res) {
                console.log(res);
            });
        }
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mobile */\n@media (max-width: 768px) {\n  header, main {\n    width: 99%;\n    margin: 0px auto;\n  }\n  \n}\n@media (min-width: 768px){\n  header, main {\n    width: 40%;\n    margin: 0px auto;\n  }  \n}\n#wall{\n  margin-top: 100px\n}\nheader {\n  /* text-align: center; */\n  margin-top: 100px;\n}\nmain {\n  background-color: white;\n  /* border-radius: 10px; */\n  box-shadow: 2px 2px 2px 2px  rgba(29, 22, 15, 0.7);\n  padding: 20px;\n}\n.pointer{\n  cursor: pointer;\n}\nimg{\n  width: 150px;\n}\n.input{\n  width: 100%;\n  height: 3em;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid #F0ECF4;\n  color: #2B8BE3;\n  outline: 0;\n  padding: 1em 0 0 0;\n  box-shadow: none;\n  font-size: 1.25em;\n  margin: 1px;\n  margin-top: .5em;\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light fixed-top\">\n\n  <form class=\"form-inline\" style=\"width: 100%;\">\n    <a class=\"navbar-brand\" routerLink=\"/\"><i class=\"fas fa-arrow-left\"></i></a>\n    <h5 class=\"text-center\" style=\"margin-left: 45%\">Sign Up</h5>\n  </form>\n</nav>\n<!-- <header>\n  <a routerLink=\"/\">\n    <img src=\"assets/img/SEARCHFUSELogo.png\" alt=\"Logo\" class=\"mb-3\">\n  </a>\n</header> -->\n<main class=\"mb-5\" id=\"wall\">\n  <form *ngIf=\"!signedup\" id=\"form\">\n    <!-- (ngSubmit)=\"signUp()\" #signupForm=\"ngForm\" -->\n    <!-- <h2>Join us</h2> -->\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name</label>\n      <input type=\"text\" class=\"input\" [(ngModel)]=\"user.firstName\" id=\"firstName\" name=\"firstName\" placeholder=\"Enter your first name\"\n        required (blur)=\"firstNameBlur=true\" [ngClass]=\"{'is-invalid': firstNameBlur && user.firstName.length < 3}\">\n      <div class=\"invalid-feedback\" *ngIf=\"firstNameBlur && user.firstName.length < 3\">\n        Please provide at least 3 characters.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name</label>\n      <input type=\"text\" class=\"input\" [(ngModel)]=\"user.lastName\" id=\"lastName\" name=\"lastName\" placeholder=\"Enter your last name\"\n        required (blur)=\"lastNameBlur=true\" [ngClass]=\"{'is-invalid': lastNameBlur && user.lastName.length < 3}\">\n      <div class=\"invalid-feedback\" *ngIf=\"lastNameBlur && user.lastName.length < 3\">\n        Please provide at least 3 characters.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" class=\"input\" [ngClass]=\"{'is-invalid': emailBlur && !validEmail(user.email)}\" [(ngModel)]=\"user.email\"\n        id=\"email\" name=\"email\" placeholder=\"Enter your email address\" required (blur)=\"emailBlur=true\">\n      <div class=\"invalid-feedback\" *ngIf=\"emailBlur && !validEmail(user.email)\">\n        Please provide a valid email.\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Pasword</label>\n      <input type=\"password\" class=\"input\" [ngClass]=\"{'is-invalid': passwordBlur && user.password}\" [(ngModel)]=\"user.password\"\n        id=\"password\" name=\"password\" placeholder=\"Enter your password\" required (blur)=\"passwordBlur=true\">\n      <div class=\"invalid-feedback\" *ngIf=\"emailBlur && !validEmail(user.email)\">\n        Please provide a valid password.\n      </div>\n    </div>\n    <div class=\"form-check mb-2\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"news_feed\" name=\"news_feed\" [(ngModel)]=\"user.news_feed\">\n      <label class=\"form-check-label\" for=\"news_feed\">Stay updated with the latest news about us</label>\n\n    </div>\n    <div class=\"mt-2 mb-2\">\n      <div class=\"g-recaptcha\" data-sitekey=\"6LdEXXcUAAAAAEI85xIBheOiSZqeUHLXGCnxhMQX\" data-callback=\"recaptchaCallback\"></div>\n    </div>\n    <button [disabled]=\"!dataVerifications()\" class=\"btn btn-primary mb-3\" (click)=\"signUp()\">{{joinTextButton}}</button>\n\n    <div class=\"g-signin2\" data-onsuccess=\"onSignIn\"></div>\n\n    <a href=\"/login\" class=\"form-text text-muted\"> Already registered? Login</a>\n\n  </form>\n  <div id=\"success\" class=\"text-center\" *ngIf=\"signedup\">\n    <i class=\"far fa-envelope-open fa-3x\"></i>\n    <p> Awesome, we have sent you an email with a link to confirm your account.</p>\n    <a href=\"/login\" class=\"form-text text-muted\">Back to Login</a>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(usrServ, route, router) {
        this.usrServ = usrServ;
        this.route = route;
        this.router = router;
        this.user = {
            firstName: '',
            lastName: '',
            email: '',
            news_feed: true,
            referral: ''
        };
        this.emailBlur = false;
        this.captcha = false;
        this.signedup = false;
        this.joinTextButton = "Join";
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usrServ.ifValidUserToMain();
        recaptchaCallback = function () {
            _this.captcha = true;
            console.log("done", _this.captcha);
            jquery__WEBPACK_IMPORTED_MODULE_3__("#email").focus();
        };
        this.usrServ.initMeta();
        this.route.queryParams
            .subscribe(function (params) {
            //this.user.referral = params.ref;
            if (params.email) {
                _this.usrServ.setSession('email', JSON.stringify(params.email));
            }
        });
        this.user.email = JSON.parse(this.usrServ.getSession('email'));
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this.joinTextButton = "Loading";
        this.usrServ.signup(this.user).subscribe(function (res) {
            _this.signedup = true;
            _this.joinTextButton = "Join";
            console.log(res);
        }, function (error) {
            // console.log(error)
            _this.joinTextButton = "Join";
        });
    };
    SignupComponent.prototype.validEmail = function (email) {
        return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,8}|[0-9]{1,8})(\]?)$/.test(email);
    };
    SignupComponent.prototype.onSignIn = function (googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    };
    SignupComponent.prototype.dataVerifications = function () {
        return this.validEmail(this.user.email) && this.user.firstName.length >= 3 && this.user.lastName.length >= 3 && this.captcha;
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/thank-you/thank-you.component.css":
/*!***************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mobile */\r\n@media (max-width: 768px) {\r\n  header, main {\r\n    width: 99%;\r\n    margin: 0px auto;\r\n  }\r\n  \r\n}\r\n@media (min-width: 768px){\r\n  header, main {\r\n    width: 40%;\r\n    margin: 0px auto;\r\n  }  \r\n}\r\n#wall{\r\n  margin-top: 100px\r\n}\r\nheader {\r\n  /* text-align: center; */\r\n  margin-top: 100px;\r\n}\r\nmain {\r\n  background-color: white;\r\n  /* border-radius: 10px; */\r\n  box-shadow: 2px 2px 2px 2px  rgba(29, 22, 15, 0.7);\r\n  padding: 20px;\r\n}\r\n.pointer{\r\n  cursor: pointer;\r\n}\r\nimg{\r\n  width: 150px;\r\n}"

/***/ }),

/***/ "./src/app/thank-you/thank-you.component.html":
/*!****************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <header><img src=\"assets/logo.png\" alt=\"Logo\" class=\"mb-3\"></header> -->\n<main id=\"wall\">\n  <div class=\"container text-center\" id=\"success\">\n      <i class=\"fas fa-trophy fa-3x mb-3\"></i>\n      <p>Awesome, thank you for choose our services.</p>\n      <p>Please check your email</p>\n      <!-- <a class=\"mb-3\" href=\"/orders\">Go to Dashboard</a><br>   --> \n      <a class=\"mb-3\" href=\"/plans\">Visit other plans</a>      \n  </div>\n</main>\n\n<script>\n   \n  dataLayer = [{\n  'transactionID': 'T12345', //javascript random number after T\n  'transactionAffiliation': 'Searchfuse Marketing', //static searcfuse marketing\n  'transactionTotal\t': plan.price + (plan.price * 0.05), //total price that includes 5%\n  'transactionTax\t': plan.price * 0.05, //5% of the product price\n  'coupon': 'SUMMER20',  \n  'transactionProducts': [{\n  'sku': 'P12345', //category name with no space + incremental number\n  'name': plan.title, // product name\n  'category': 'Social Media', //category name\n  'price': plan.price, // total price minus 5%\n  'quantity': 1}] //quantity\n  }];\n  </script>\n"

/***/ }),

/***/ "./src/app/thank-you/thank-you.component.ts":
/*!**************************************************!*\
  !*** ./src/app/thank-you/thank-you.component.ts ***!
  \**************************************************/
/*! exports provided: ThankYouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function() { return ThankYouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThankYouComponent = /** @class */ (function () {
    function ThankYouComponent(usrServ, route) {
        this.usrServ = usrServ;
        this.route = route;
        this.section = "";
        this.plan = {};
    }
    ThankYouComponent.prototype.ngOnInit = function () {
        // send an email, if the user is not in the system please continue to register your account, 
        // thank you so much for your pruschase
        //location.reload(true)
        /*  this.route.params.subscribe(params => {
           this.section = params['id'];
           this.usrServ.planID({ id: this.section }).subscribe(res => {
             this.plan = res[0]
             setDataLayer([{
               'transactionID': 'T12345', //javascript random number after T
               'transactionAffiliation': 'Searchfuse Marketing', //static searcfuse marketing
               'transactionTotal	': this.plan.price + (this.plan.price * 0.05), //total price that includes 5%
               'transactionTax	': this.plan.price * 0.05, //5% of the product price
               'coupon': 'SUMMER20',
               'transactionProducts': [{
                 'sku': 'P12345', //category name with no space + incremental number
                 'name': this.plan.title, // product name
                 'category': 'Social Media', //category name
                 'price': this.plan.price, // total price minus 5%
                 'quantity': 1
               }] //quantity
             }])
           })
           this.usrServ.planIDView({ id: this.section }).subscribe(console.log)
         }); */
    };
    ThankYouComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thank-you',
            template: __webpack_require__(/*! ./thank-you.component.html */ "./src/app/thank-you/thank-you.component.html"),
            styles: [__webpack_require__(/*! ./thank-you.component.css */ "./src/app/thank-you/thank-you.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ThankYouComponent);
    return ThankYouComponent;
}());



/***/ }),

/***/ "./src/app/transactions/transactions.component.css":
/*!*********************************************************!*\
  !*** ./src/app/transactions/transactions.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\r\n  display: flex;\r\n}\r\n\r\n#wrapper #content-wrapper {\r\n  overflow-x: hidden;\r\n  width: 100%;\r\n  padding-top: 1rem;\r\n  padding-bottom: 80px;\r\n}\r\n\r\nbody.fixed-nav #content-wrapper {\r\n  margin-top: 56px;\r\n  padding-left: 90px;\r\n}\r\n\r\nbody.fixed-nav.sidebar-toggled #content-wrapper {\r\n  padding-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.fixed-nav #content-wrapper {\r\n    padding-left: 225px;\r\n  }\r\n  body.fixed-nav.sidebar-toggled #content-wrapper {\r\n    padding-left: 90px;\r\n  }\r\n}\r\n\r\n.scroll-to-top {\r\n  position: fixed;\r\n  right: 15px;\r\n  bottom: 15px;\r\n  display: none;\r\n  width: 50px;\r\n  height: 50px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background: rgba(52, 58, 64, 0.5);\r\n  line-height: 46px;\r\n}\r\n\r\n.scroll-to-top:focus, .scroll-to-top:hover {\r\n  color: white;\r\n}\r\n\r\n.scroll-to-top:hover {\r\n  background: #343a40;\r\n}\r\n\r\n.scroll-to-top i {\r\n  font-weight: 800;\r\n}\r\n\r\n.smaller {\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.o-hidden {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.z-0 {\r\n  z-index: 0;\r\n}\r\n\r\n.z-1 {\r\n  z-index: 1;\r\n}\r\n\r\n.navbar-nav .form-inline .input-group {\r\n  width: 100%;\r\n}\r\n\r\n.navbar-nav .nav-item.active .nav-link {\r\n  color: #fff;\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown .dropdown-toggle::after {\r\n  width: 1rem;\r\n  text-align: center;\r\n  float: right;\r\n  vertical-align: 0;\r\n  border: 0;\r\n  font-weight: 900;\r\n  content: '\\f105';\r\n  font-family: 'Font Awesome 5 Free';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.show .dropdown-toggle::after {\r\n  content: '\\f107';\r\n}\r\n\r\n.navbar-nav .nav-item.dropdown.no-arrow .dropdown-toggle::after {\r\n  display: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link:focus {\r\n  outline: none;\r\n}\r\n\r\n.navbar-nav .nav-item .nav-link .badge {\r\n  position: absolute;\r\n  margin-left: 0.75rem;\r\n  top: 0.3rem;\r\n  font-weight: 400;\r\n  font-size: 0.5rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-nav .form-inline .input-group {\r\n    width: auto;\r\n  }\r\n}\r\n\r\n.card-body-icon {\r\n  position: absolute;\r\n  z-index: 0;\r\n  top: -1.25rem;\r\n  right: -1rem;\r\n  opacity: 0.4;\r\n  font-size: 5rem;\r\n  -webkit-transform: rotate(15deg);\r\n  transform: rotate(15deg);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n    column-count: 1;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n:root {\r\n  --input-padding-x: 0.75rem;\r\n  --input-padding-y: 0.75rem;\r\n}\r\n\r\n.card-login {\r\n  max-width: 25rem;\r\n}\r\n\r\n.card-register {\r\n  max-width: 40rem;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n}\r\n\r\n.form-label-group > input,\r\n.form-label-group > label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n  height: auto;\r\n}\r\n\r\n.form-label-group > label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n\r\n.form-label-group input::-webkit-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::-ms-input-placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) {\r\n  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n}\r\n\r\n.form-label-group input:not(:placeholder-shown) ~ label {\r\n  padding-top: calc(var(--input-padding-y) / 3);\r\n  padding-bottom: calc(var(--input-padding-y) / 3);\r\n  font-size: 12px;\r\n  color: #777;\r\n}\r\n\r\nfooter.sticky-footer {\r\n  display: flex;\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: calc(100% - 90px);\r\n  height: 80px;\r\n  background-color: #e9ecef;\r\n}\r\n\r\nfooter.sticky-footer .copyright {\r\n  line-height: 1;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  footer.sticky-footer {\r\n    width: calc(100% - 225px);\r\n  }\r\n}\r\n\r\nbody.sidebar-toggled footer.sticky-footer {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  body.sidebar-toggled footer.sticky-footer {\r\n    width: calc(100% - 90px);\r\n  }\r\n}\r\n\r\n.timeline {\r\n  position: relative;\r\n  padding: 20px 0 20px;\r\n  list-style: none;\r\n}\r\n\r\n.timeline:before {\r\n  content: \" \";\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 3px;\r\n  margin-left: -1.5px;\r\n  background-color: #eeeeee;\r\n}\r\n\r\n.timeline > li {\r\n  position: relative;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li:before,\r\n.timeline > li:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n\r\n.timeline > li:after {\r\n  clear: both;\r\n}\r\n\r\n.timeline > li > .timeline-panel {\r\n  float: left;\r\n  position: relative;\r\n  width: 46%;\r\n  padding: 20px;\r\n  border: 1px solid #d4d4d4;\r\n  border-radius: 2px;\r\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\r\n}\r\n\r\n.timeline > li > .timeline-panel:before {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 26px;\r\n  right: -15px;\r\n  border-top: 15px solid transparent;\r\n  border-right: 0 solid #ccc;\r\n  border-bottom: 15px solid transparent;\r\n  border-left: 15px solid #ccc;\r\n}\r\n\r\n.timeline > li > .timeline-panel:after {\r\n  content: \" \";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 27px;\r\n  right: -14px;\r\n  border-top: 14px solid transparent;\r\n  border-right: 0 solid #fff;\r\n  border-bottom: 14px solid transparent;\r\n  border-left: 14px solid #fff;\r\n}\r\n\r\n.timeline > li > .timeline-badge {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 16px;\r\n  left: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  margin-left: -25px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  text-align: center;\r\n  font-size: 1.4em;\r\n  line-height: 50px;\r\n  color: #fff;\r\n  background-color: #999999;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel {\r\n  float: right;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\r\n  right: auto;\r\n  left: -15px;\r\n  border-right-width: 15px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\r\n  right: auto;\r\n  left: -14px;\r\n  border-right-width: 14px;\r\n  border-left-width: 0;\r\n}\r\n\r\n.timeline-badge.primary {\r\n  background-color: #2e6da4 !important;\r\n}\r\n\r\n.timeline-badge.success {\r\n  background-color: #3f903f !important;\r\n}\r\n\r\n.timeline-badge.warning {\r\n  background-color: #f0ad4e !important;\r\n}\r\n\r\n.timeline-badge.danger {\r\n  background-color: #d9534f !important;\r\n}\r\n\r\n.timeline-badge.info {\r\n  background-color: #5bc0de !important;\r\n}\r\n\r\n.timeline-title {\r\n  margin-top: 0;\r\n  color: inherit;\r\n}\r\n\r\n.timeline-body > p,\r\n.timeline-body > ul {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.timeline-body > p + p {\r\n  margin-top: 5px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  ul.timeline:before {\r\n    left: 40px;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    width: calc(10%);\r\n    width: -webkit-calc(10%);\r\n  }\r\n  ul.timeline > li > .timeline-badge {\r\n    top: 16px;\r\n    left: 15px;\r\n    margin-left: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel {\r\n    float: right;\r\n  }\r\n  ul.timeline > li > .timeline-panel:before {\r\n    right: auto;\r\n    left: -15px;\r\n    border-right-width: 15px;\r\n    border-left-width: 0;\r\n  }\r\n  ul.timeline > li > .timeline-panel:after {\r\n    right: auto;\r\n    left: -14px;\r\n    border-right-width: 14px;\r\n    border-left-width: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/transactions/transactions.component.html":
/*!**********************************************************!*\
  !*** ./src/app/transactions/transactions.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger fixed-top\" role=\"alert\" style=\"z-index: 1031;\" *ngIf=\"showMessage\">\n  {{showMessage}}\n</div>\n<dashboard-navbar></dashboard-navbar>\n\n<div id=\"wrapper\">\n\n  <dashboard-sidebar></dashboard-sidebar>\n\n  <div id=\"content-wrapper\">\n\n    <div class=\"container-fluid\">\n      <h2>Transactions</h2>\n      <hr>\n      <!-- Breadcrumbs-->\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\">\n          <a routerLink=\"/dashboard\">Dashboard</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Transactions</li>\n      </ol>\n\n      <!-- Icon Cards-->\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-primary o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-fw fa-shopping-cart\"></i>\n              </div>\n              <div class=\"mr-5\">Purchases AED <br> {{purchases}}</div>\n            </div>\n            <!-- <a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\n              <span class=\"float-left\">View Details</span>\n              <span class=\"float-right\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </a> -->\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-sm-6 mb-3\">\n          <div class=\"card text-white bg-success o-hidden h-100\">\n            <div class=\"card-body\">\n              <div class=\"card-body-icon\">\n                <i class=\"fas fa-fw fa-money-check-alt\"></i>\n                <!-- <i class=\"fas fa-fw fa-life-ring\"></i> -->\n              </div>\n              <div class=\"mr-5\">Balance <br> {{balance}}</div>\n            </div>\n            <a class=\"card-footer text-white clearfix small z-1 click\" data-toggle=\"modal\" data-target=\"#balanceModal\">\n              <span class=\"float-left\">Add more credit</span>\n              <span class=\"float-right\">\n                <i class=\"fas fa-angle-right\"></i>\n              </span>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <!--   Area Chart Example-->\n      <!--  <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-chart-area\"></i>\n          Area Chart Example</div>\n        <div class=\"card-body\">\n          <canvas id=\"myChart\" width=\"100%\" height=\"30\"></canvas>\n        </div>\n        <div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div>\n      </div> -->\n\n      <!-- DataTables Example -->\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <i class=\"fas fa-table\"></i>\n          Transactions\n          <div class=\"float-right\"> \n           <!--  <button type=\"button\" class=\"btn btn-primary\"  > -->\n                <i class=\"fas fa-plus-circle\" title=\"Add transaction\"  *ngIf=\"isManager\" data-toggle=\"modal\" data-target=\"#addTransactionModal\"></i>\n            <!-- </button> -->\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"table-responsive\">\n            <table class=\"table \" id=\"dataTable\" width=\"100%\" cellspacing=\"0\">\n              <thead>\n                <tr>\n                  <th>FOR</th>\n                  <th>DATE</th>\n                  <th>AMOUNT</th>\n                  <th>STATUS</th>\n                  <th *ngIf=\"isManager\">ACTIONS</th>\n                </tr>\n              </thead>\n              <!-- <tfoot>\n                <tr>\n                  <th>Name</th>\n                  <th>Position</th>\n                  <th>Office</th>\n                  <th>Age</th>\n                  <th>Start date</th>\n                  <th>Salary</th>\n                </tr>\n              </tfoot> -->\n              <tbody *ngFor=\"let item of all; index as i; first as isFirst\">\n                <tr>\n                  <td>{{item.plan}}</td>\n                  <td>{{item.date.substr(0,item.date.indexOf(\"T\"))}}</td>\n                  <td>{{item.coin}} {{item.price}}</td>\n                  <td>{{item.status}}</td>\n                  <td *ngIf=\"isManager\">\n                    <button type=\"button\" class=\"btn btn-primary\" title=\"Remove\" (click)=\"toRemove(item)\">\n                      <i class=\"far fa-trash-alt\"></i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"card-footer small text-muted\">Updated</div>\n      </div>\n\n\n\n    </div>\n    <!-- /.container-fluid -->\n\n\n\n\n  </div>\n  <!-- /.content-wrapper -->\n\n</div>\n<!-- /#wrapper -->\n\n<footer id=\"footer\" style=\"width: auto !important\">\n  <div class=\"container\">\n    <div class=\"copyright\">\n      &copy; 2018 <strong>Searchfuse Marketing Management</strong>.\n    </div>\n    <div class=\"credits\">\n      Built with <i class=\"fas fa-heart\"></i> in Dubai.\n    </div>\n  </div>\n</footer>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"balanceModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Get more balance</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <label for=\"\">Amount:</label>\n        <input type=\"number\" class=\"form-control\" aria-label=\"Search\" [value]=\"amountToPut\" (input)=\"amountToPut = $event.target.value\"\n          aria-describedby=\"basic-addon2\">\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"creditCard()\" [disabled]=\"invalidAmunt()\">Buy</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"addTransactionModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create Transaction</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <label for=\"\">Transaction:</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"itemToCreate\" rows=\"10\"></textarea>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"createTransaction()\" [disabled]=\"!validJson()\">Create</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/transactions/transactions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/transactions/transactions.component.ts ***!
  \********************************************************/
/*! exports provided: TransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function() { return TransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(usrServ, admServ) {
        this.usrServ = usrServ;
        this.admServ = admServ;
        this.user = {};
        this.itemToCreate = {};
        this.all = [];
        this.purchases = 0;
        this.balance = 0;
        this.amountToPut = 0;
        this.showMessage = "";
        this.isManager = false;
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        this.user = this.usrServ.ifInvalidUserToLogin();
        this.getTransactions();
    };
    TransactionsComponent.prototype.showMessageAction = function (message) {
        var _this = this;
        this.showMessage = message;
        setTimeout(function () {
            _this.showMessage = "";
        }, 4000);
    };
    TransactionsComponent.prototype.creditCard = function () {
        var _this = this;
        authorizingPayment = function (responseData) {
            var data = {
                "id": _this.user && _this.user._id ? _this.user._id : "none",
                "email": _this.user && _this.user.email ? _this.user.email : "none@gmail.com",
                "value": _this.amountToPut,
                "plan": "balance",
                "currency": "AED",
                "cardToken": responseData.cardToken,
            };
            _this.usrServ.authorizingPayment(data).subscribe(function (response) {
                console.log(response);
                if (response.status !== 'Declined') {
                    //this.showMessageAction(response.responseMessage)
                }
                else {
                    _this.showMessageAction(response.responseMessage);
                }
            });
        };
        if (this.user) {
            this.usrServ.creditCard(this.user.email, this.amountToPut);
        }
    };
    TransactionsComponent.prototype.invalidAmunt = function () {
        return this.amountToPut <= 0;
    };
    TransactionsComponent.prototype.toRemove = function (item) {
        var _this = this;
        this.admServ.removeTransaction(item).subscribe(function (res) {
            _this.getTransactions();
        });
    };
    TransactionsComponent.prototype.getTransactions = function () {
        var _this = this;
        if (!this.usrServ.isUserManage()) {
            this.usrServ.transactions().subscribe(function (res) {
                _this.all = res;
                _this.all.forEach(function (e) {
                    if (e.status !== "Declined" && e.plan !== "balance") {
                        _this.purchases += +e.price;
                    }
                    if (e.status !== "Declined" && e.plan === "balance") {
                        _this.balance += +e.price;
                    }
                });
            });
        }
        else {
            this.emptyTransaction();
            this.isManager = true;
            this.admServ.allTransactions().subscribe(function (res) {
                _this.all = res;
                _this.all.forEach(function (e) {
                    if (e.status !== "Declined" && e.plan !== "balance") {
                        _this.purchases += +e.price;
                    }
                    if (e.status !== "Declined" && e.plan === "balance") {
                        _this.balance += +e.price;
                    }
                });
            });
        }
    };
    TransactionsComponent.prototype.emptyTransaction = function () {
        this.itemToCreate = JSON.stringify({
            userId: "",
            plan: "",
            price: "",
            email: "",
            coin: "AED",
            userAddress: "",
            amountPaid: "",
            card: {},
            data: {},
            status: "Active"
        }, undefined, 4);
    };
    TransactionsComponent.prototype.createTransaction = function () {
        var _this = this;
        this.admServ.createTransaction(JSON.parse(this.itemToCreate)).subscribe(function (res) {
            _this.getTransactions();
        });
    };
    TransactionsComponent.prototype.validJson = function () {
        try {
            JSON.parse(this.itemToCreate);
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    };
    TransactionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transactions',
            template: __webpack_require__(/*! ./transactions.component.html */ "./src/app/transactions/transactions.component.html"),
            styles: [__webpack_require__(/*! ./transactions.component.css */ "./src/app/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danielhernandez/Documents/TRABAJO/DOHA/Proyecto_Medio_Ambiente/irecycle/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map