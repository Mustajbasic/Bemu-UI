//var myMenu =  BemuDropdown("test-dropdown");

var globalBemu = new Bemu();
var myHttp = globalBemu.http;

globalBemu.addDropdown("test-dropdown");
globalBemu.addDropdown("dark-dropdown");

globalBemu.addSideNavigation("main-side-nav", "sidenav-courtain");

globalBemu.addDialog("demo-dialog", "dialog-courtain");
globalBemu.addDialog("first-dialog", "dialog-courtain");
globalBemu.addDialog("second-dialog", "dialog-courtain");
globalBemu.addDialog("long-dialog", "dialog-courtain");