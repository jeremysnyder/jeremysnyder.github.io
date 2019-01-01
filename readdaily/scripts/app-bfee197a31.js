(function(){angular.module("readingPlan",["ngAnimate","ngCookies","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ngMaterial","LocalStorageModule"])}).call(this),function(){angular.module("readingPlan").config(["$logProvider",function(e){"ngInject";return e.debugEnabled(!0)}])}.call(this),function(){angular.module("readingPlan").constant("moment",moment)}.call(this),function(){angular.module("readingPlan").config(["$stateProvider","$urlRouterProvider",function(e,n){"ngInject";return e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}),n.otherwise("/")}])}.call(this),function(){angular.module("readingPlan").run(["$log",function(e){return"ngInject"}])}.call(this),function(){!function(e,n){var a,t,r;return r=["$scope","$mdDialog","settings",function(n,a,t){return e.extend(n,t),n.handleAction=function(e){return a.hide(n)}}],t=["$scope","$mdDialog","ScripturePassage","verses",function(e,n,a,t){return e.cancel=function(){return n.hide(e)},e.readers=a.readers,e.openReader=function(e){return e.load(t)}}],a=function(e,a,o,i,l,d){var s,c,u,m,g,p,h,f;s="readdaily.settings",f=this,f.version="1.3.0",f.currentDate=e(),h=function(){var e,n;return e=m(),n=f.currentDate,f.dateLabel=n.format("MMM Do"),a.dayPlan(f.selectedPlanType,n.month()+1,n.date()).then(function(n){var a;switch(a=[],e){case"1":n.otReading&&a.push({name:"OT1",verses:n.otReading}),n.ot2Reading&&a.push({name:"OT2",verses:n.ot2Reading});break;case"2:1":n.otReading&&a.push({name:"OT",verses:n.otReading});break;case"2:2":n.ot2Reading&&a.push({name:"OT",verses:n.ot2Reading})}return n.psalmsReading&&a.push({name:"PS",verses:n.psalmsReading}),n.ntProverbsReading&&a.push({name:"NT/PRV",verses:n.ntProverbsReading}),f.reading=a,f.loaded=!0})},c=function(){return f.selectedPlanType=g(),f.selectedPlanTimeframe=m(),f.selectedPlanTypeLabel=f.planTypeOptions[f.selectedPlanType],f.selectedPlanTimeframeLabel=f.planTimeframeOptions[f.selectedPlanTimeframe],f.loaded=!1,h()},f.showAbout=function(e){var n;return n=function(e){return console.log(e.selectedPlanType,e.selectedPlanTimeframe),p("selectedPlanType",e.selectedPlanType),p("selectedPlanTimeframe",e.selectedPlanTimeframe),c()},l.show({controller:r,templateUrl:"app/main/settings-dialog-template.html",locals:{settings:f},parent:angular.element(document.body),targetEvent:e,clickOutsideToClose:!0}).then(n)},f.showReaderChoice=function(e,n){return 1===i.readers.length?i.readers[0].load(e):l.show({controller:t,templateUrl:"app/main/readers-dialog-template.html",locals:{verses:e},parent:angular.element(document.body),targetEvent:n,clickOutsideToClose:!0})},p=function(e,a){var t;return t=n.parse(o.get(s))||{},null==a?t[e]:(t[e]=a,void o.set(s,n.stringify(t)))},f.planTimeframeOptions={1:"All In 1 Year","2:1":"2yr Plan - Year 1","2:2":"2yr Plan - Year 2"},f.planTypeOptions={chapter:"Chapter Based"},g=function(){return p("selectedPlanType")||"chapter"},m=function(){return p("selectedPlanTimeframe")||"2:1"},c(),f.today=function(){return f.currentDate=e(),h()},f.previousDay=function(){return u(-1),h()},f.nextDay=function(){return u(1),h()},u=function(e){return f.currentDate=f.currentDate.add(e,"d")}},e.module("readingPlan").controller("MainController",["moment","ReadingPlanData","localStorageService","ScripturePassage","$mdDialog","$timeout",a])}(angular,JSON)}.call(this),function(){!function(e,n){var a;return a=["$http","$q",function(e,a){var t,r,o,i;return o=function(e){return String("00"+e).slice(-2)},r=function(e,n){return o(e)+"_"+o(n)},t=function(t,o,l){var d,s;return console.log(o,l),s=n().month(o-1).date(l),console.log(s.format()),console.log(i(s)),d=r(o,l),d=i(s),d?e({method:"GET",url:"assets/data/"+t+"-bible-reading-plan/"+d+".json"}).then(function(e){return a.when(e.data)}):a.when({})},i=function(e){var a;switch(a=n(e),a.day()){case 0:return null;default:return a.dayOfYear()-a.week()}},{dayPlan:t,readingDay:i}}],e.module("readingPlan").factory("ReadingPlanData",a)}(angular,moment)}.call(this),function(){!function(e){var n;return n={Genesis:"GEN",Exodus:"EXO",Leviticus:"LEV",Numbers:"NUM",Deuteronomy:"DEU",Joshua:"JOS",Judges:"JDG",Ruth:"RUT","1 Samuel":"1SA","2 Samuel":"2SA","1 Kings":"1KI","2 Kings":"2KI","1 Chronicles":"1CH","2 Chronicles":"2CH",Ezra:"EZR",Nehemiah:"NEH",Esther:"EST",Job:"JOB",Psalm:"PSA",Psalms:"PSA",Proverbs:"PRO",Ecclesiastes:"ECC","Song of Solomon":"SNG",Isaiah:"ISA",Jeremiah:"JER",Lamentations:"LAM",Ezekiel:"EZK",Daniel:"DAN",Hosea:"HOS",Joel:"JOL",Amos:"AMO",Obadiah:"OBA",Jonah:"JON",Micah:"MIC",Nahum:"NAM",Habakkuk:"HAB",Zephaniah:"ZEP",Haggai:"HAG",Zechariah:"ZEC",Malachi:"MAL",Matthew:"MAT",Mark:"MRK",Luke:"LUK",John:"JHN",Acts:"ACT",Romans:"ROM","1 Corinthians":"1CO","2 Corinthians":"2CO",Galatians:"GAL",Ephesians:"EPH",Philippians:"PHP",Colossians:"COL","1 Thessalonians":"1TH","2 Thessalonians":"2TH","1 Timothy":"1TI","2 Timothy":"2TI",Titus:"TIT",Philemon:"PHM",Hebrews:"HEB",James:"JAS","1 Peter":"1PE","2 Peter":"2PE","1 John":"1JN","2 John":"2JN","3 John":"3JN",Jude:"JUD",Revelation:"REV"},e.module("readingPlan").constant("osisCodes",n)}(angular)}.call(this),function(){!function(e){var n;return n=function(e){var n;return n=function(n){return e.open("http://www.esvbible.org/"+e.encodeURIComponent(n)+"/","_blank")},{load:n,title:"esvbible.org"}},e.module("readingPlan").factory("EsvBibleOrgReader",["$window",n]).run(["ScripturePassage","EsvBibleOrgReader",function(e,n){return e.register(n)}])}(angular)}.call(this),function(){!function(e){var n;return n=function(){var e,n;return e=[],n=function(n){return e.push(n)},{register:n,readers:e}},e.module("readingPlan").factory("ScripturePassage",[n])}(angular)}.call(this),function(){!function(e){var n;return n=function(e,n){var a,t,r,o,i;return i=function(e){var n;return n=o(e),"end"in n?a(n,"start")+"+"+a(n,"end"):""+a(n,"start")},a=function(e,n){var a;return a=e[n],"verse"in a?e.book+"."+a.chapter+"."+a.verse:e.book+"."+a.chapter},o=function(e){var a,t,o,i;return a={},e&&(t=e.split(" "),a.book=n[t[0]],t.length>1&&(i=t[1],i.indexOf("-")>=0?(o=i.split("-"),a.start=r(o[0]),o.length>1&&(a.end=r(o[1],!0),a.end.chapter=a.end.chapter||a.start.chapter)):a.start=r(i))),a},r=function(e,n){var a;return e.indexOf(":")>=0?(a=e.split(":"),{chapter:a[0],verse:a[1]}):n?{verse:e}:{chapter:e}},t=function(n){var a;return a=i(n),console.log("Loading YouVersion Link: "+a),e.open("youversion://bible?reference="+a,"_blank")},{load:t,title:"YouVersion Bible App"}},e.module("readingPlan").factory("YouVersionBibleReader",["$window","osisCodes",n]).run(["ScripturePassage","YouVersionBibleReader",function(e,n){}])}(angular)}.call(this),angular.module("readingPlan").run(["$templateCache",function(e){e.put("app/main/main.html",'<md-content class="main"><md-toolbar><div class="md-toolbar-tools"><div layout="row" layout-align="left center" flex=""><a href="#" ng-click="vm.previousDay()"><md-icon class="material-icons">navigate_before</md-icon></a> <span flex=""></span> <span><a href="#" ng-click="vm.today()"><span class="logo">R</span>ead Daily - {{vm.dateLabel}}</a></span> <span flex=""></span> <a href="#" ng-click="vm.nextDay()"><md-icon class="material-icons">navigate_next</md-icon></a></div></div></md-toolbar><md-card ng-repeat="r in vm.reading" ng-if="vm.loaded && vm.reading.length"><md-card-header><md-card-header-pre><h3>{{r.name}}</h3></md-card-header-pre><md-card-header-text><span class="md-title">{{r.verses}}</span></md-card-header-text><md-card-header-action><md-button ng-click="vm.showReaderChoice(r.verses, $event)"><md-icon class="material-icons">library_books</md-icon></md-button></md-card-header-action></md-card-header></md-card><md-card ng-if="!vm.reading.length"><md-card-header><md-card-header-text><span class="md-title center">No readings today</span></md-card-header-text></md-card-header></md-card></md-content><md-toolbar class="md-bottom-sticky" ng-click="vm.showAbout($event)"><div layout="row" layout-align="left center" flex=""><span ng-show="vm.planTypeOptions.length > 1">{{vm.selectedPlanTypeLabel}}</span> <span flex=""></span><md-button class="md-raised logo">R</md-button><span flex=""></span> <span>{{vm.selectedPlanTimeframeLabel}}</span></div></md-toolbar>'),e.put("app/main/readers-dialog-template.html",'<md-dialog><md-toolbar><div class="md-toolbar-tools"><h2>Open Reading in...</h2></div></md-toolbar><md-dialog-content><br><md-button ng-repeat="reader in readers" class="md-raised" ng-click="openReader(reader)" style="width: 95%">{{reader.title}}</md-button></md-dialog-content><md-dialog-actions layout="row"><md-button ng-click="cancel()">Cancel</md-button></md-dialog-actions></md-dialog>'),e.put("app/main/settings-dialog-template.html",'<md-dialog><form><md-dialog-content><md-tabs md-dynamic-height="" md-border-bottom="" md-center-tabs="" md-stretch-tabs="always"><md-tab label="options"><md-content class="md-padding"><div layout="column"><md-subheader class="md-no-sticky" ng-show="planTypeOptions.length > 1">Plan Type</md-subheader><md-radio-group ng-model="selectedPlanType" ng-show="planTypeOptions.length > 1"><md-radio-button value="{{k}}" ng-repeat="(k,v) in planTypeOptions">{{v}}</md-radio-button></md-radio-group><md-subheader class="md-no-sticky">Timeframe</md-subheader><md-radio-group ng-model="selectedPlanTimeframe"><md-radio-button value="{{k}}" ng-repeat="(k,v) in planTimeframeOptions">{{v}}</md-radio-button></md-radio-group></div></md-content></md-tab><md-tab label="about"><md-content class="md-padding">Daily readings from the Two-Year Bible Reading Plan, produced jointly by Reformation OPC (Queens, NYC) and Resurrection OPC (State College, PA). For more resources, visit <a href="http://resurrectionopc.org/resources" target="_blank">resurrectionopc.org/resources</a>.</md-content></md-tab></md-tabs></md-dialog-content><md-dialog-actions layout="row"><md-subheader class="md-no-sticky">Read Daily v{{version}}</md-subheader><span flex=""></span><md-button ng-click="handleAction(\'ok\')">Ok</md-button></md-dialog-actions></form></md-dialog>')}]);
//# sourceMappingURL=../maps/scripts/app-bfee197a31.js.map
