angular.module("myApp",["ui.router"])
.config(function($stateProvider){
	$stateProvider
	.state("about",{
		templateUrl : "view/about.htm"
	})
	.state("about.md",{
		template : "THIS IS MANAGING DIRECTOR PORTFOLIO"
	})
	.state("about.fd",{
		template : "THIS IS FINANCE DIRECTOR PORTFOLIO"
	})
	.state("about.td",{
		template : "THIS IS TECHNICAL DIRECTOR PORTFOLIO"
	})
	.state("dashboard",{
		views : {
			"" : {
				templateUrl : "view/dashboard.htm"
			},
			"scm@dashboard" : {
				template : "THIS IS SUPPLY CHAIN MANAGEMENT REPORT"
			},
			"crm@dashboard" : {
				template : "THIS IS CUSTOMER RELATION MANAGEMENT REPORT"
			},
			"sales@dashboard" : {
				template : "THIS IS SALES MANAGEMENT REPORT"
			},
			"orders@dashboard" : {
				template : "THIS IS ORDER MANAGEMENT REPORT"
			}
		}
	})
})