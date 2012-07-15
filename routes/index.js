
/*
 * GET home page.
 */

exports.index = function(req, res){
db.users.find({sex: "female"}, function(err, users) {
  if( err || !users){
  	console.log("No female users found");
  	res.render('index.ejs', { title: "No female users found" });
  } 
  else users.forEach( function(femaleUser) {
    console.log(femaleUser);
    res.render('index.ejs', { title: femaleUser.email });
  } );
});
  
};