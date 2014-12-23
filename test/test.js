// o test file


// runs in an exception because of strict mode
//o("Product");
//o("");

//this should work
/*o("https://secure.pointsale.de/Service.svc/Product?$top=1&$skip=2").get(function(data) {
	console.log(data);
});

//this should work
/*o("https://secure.pointsale.de/Service.svc/Product(2)").get(function(data) {
	console.log(data);
});*/


//o configuration
// strict mode is disabled to display errors in the console log instead of throwing them as an exception


o().config({
	endpoint:'https://secure.pointsale.de/Service.svc',
	version:3,
	strictMode:true,
	//username:'demo@pointsale.de',
	//password:'demo'
	//headers:[{name:'X-Custom-Headers', value: 'value'}]
});

o("Product").first().route("",function(data) {
	console.log(data);
});

o("Product").take(20).route(["Change?","Foo","Bar"],function(data) {
	console.log(data);
});

/*o("Product").take(5).get(function(data) {
	console.log(data);
});*/

/*o("Product").expand("ProductGroup").take(0).route("Change?",function(data) {
	this.data.Identifier=Math.random()+"";
	console.log(this.data.Identifier);
	this.save(function(data) {
		//console.log(data);
	});
	console.log(data);
});*/

//prommise test

/*o("Product(1)").get().then(function(o) {
	console.log(o.data);
	o.data.Name="YZX";
	console.log("Save added");
	o.save();
}).then(function() {
	console.log("DRIN 2 :)");
}).fail(function(err) {
	console.log(err);
});*/

/*
var test=null
Q.all([
	o("Product(1)").get(test),
	o("Group").get()
]).then(function(o) {
	//console.log(o[0].data);
	//console.log(o[1].data);
	
	console.log(test);
});*/



/*o("Product").find(2).filter("Name eq 'Bla'").get(function(data) {
		console.log(data);
});*/

/*o("Product").post({Name:'Testprodukt 1',Description:'AAA',Price:12.22}).post({Name:'XXXX2',Description:'AAA',Description:'AAA',Price:12.22}).save(function(data) {
	//console.log(data);
	//console.log(this);
});*/

/*o("Product").filter("Name eq 'XXXX'").get(function(data) {
	console.log(data.length);
});*/

//route test (alternative route)
/*o("Product").route("AddProduct",function(data) {
	this.post({Name:'XXXX',Description:'AAA'});
	this.save(function(o) {
		console.log("SAVED :)");
	});
});

//route test (alternative route)
o("Product").filter("Name eq 'XXXX'").route("GetProducts",function(o) {
	console.log(this);
	console.log(o);
	console.log(o.data);
});*/
/*
//route test with trigger
o("Group").route(function(data) {
	console.log(data);
}).triggerRoute("Group");
*/

//test filter
/*o("Group").take(10).skip(10).filter("Name eq 'Testgruppe'").get(function(data) {
	console.log(data);
});*/

//test query return
//console.log(o("Group").filter("Name eq 'Testgruppe'").query());


//auto expand in combination with batch 
/*o("Shop").find(4).get(function(data) {
	console.log(this);
});*/
/*
//test .first()
o("Group").first().get(function(data) {
	console.log(data);
});

//test .count()

o("ProductGroup").count().get(function(data) {
	console.log(data);
});

//test batch
o("Product").batch("Group").get(function(data) {
	console.log(data);
});
*/


/*
//test resource identifier
o("meertelSP?$filter=(SMSMT_WinLogon eq 'hommejan')").get(function(data) {
	console.log(data);
});

//test resource identifier
o("Feedback?$filter=(userid eq 'hommejan')").get(function(data) {
	console.log(data);
});
*/

/*
//test .take()
o("Feedback").find(1002).get(function(data) {
	console.log(data);
});

//test .get()
o("Feedback").find(1002).get(function(data) {
	console.log(data);
});

//test .skip()
o("Feedback").skip(3).get(function(data) {
	console.log(data);
});
*/


//test nothing
//runs into an error
/*o().get(function(data) {
	console.log(data);
});
//returns the metadata
o("").get(function(data) {
	console.log(data);
});

//test direct
o("https://secure.pointsale.de/Service.svc/Feedback(1)?$format=json").get(function(data) {
	console.log(data);
});
*/


