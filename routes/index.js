
/*
 * GET home page.
 */
var craigslist=require('craigslist');
var yql=require('yql');
var newdata={
	data:[
	
	]
};
// craigslist.getList('http://orangecounty.craigslist.org/cto/', function(error, listings) {
	// console.log("# of listings:",listings.length);
    // console.log("error:",error);
    // var cnt=5;
    // listings.some(function(listing) {
        // var item={
            // title: listing.title,
            // city:  listing.cities,
            // description: listing.description
        // };
        // console.log(cnt);
        // console.log(listing.cities);        
        // newdata.data.push(item);
        // cnt--;
        // return cnt===0;
        // // if(cnt===0) {
            // // throw new Error();
        // // }
    // });
    // // ...
  // });
  
new yql.exec("select * from craigslist.search where location=@location and type='cto' and query='mini cooper'",function(response){
    var listings=response.query.results.RDF.item;
    console.log("# of listings:",listings.length);
    var cnt=5;
    listings.some(function(listing) {
        var item={
            title: listing.title[0],
            url: listing.link,
            date:  listing.date,
            description: listing.description
        };
        console.log(cnt);
        console.log(listing.date);        
        newdata.data.push(item);
        cnt--;
        return cnt===0;
        // if(cnt===0) {
            // throw new Error();
        // }
    });
},{"location":"orangecounty"});
// var tdata={
		// names:['jack','alex','lili']
	// };
//var names=tdata.names;
// var toshow="";
// for(var i=0;i<names.length;i++) {
	// toshow+="\n<p>"+names[i]+"</p>";
// }
// toshow+="\n";
exports.index = function(req, res){
  res.render('index', { title: 'Craigress', news:newdata });
};