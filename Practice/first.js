const { error } = require('console');
const fs = require('fs');

fs.writeFile("hey.txt","We learn node js", function(err){
if(err) console.error(err);
else console.log('done');

})

fs.appendFile("hey.txt","We learn node js", function(err){
if(err) console.error(err);
else console.log('done');

})

fs.rename("hey.txt", "Hello.txt", function(err){
if(err) console.error(err);
else console.log("done");

})

fs.copyFile("hello.txt", "./Copy/Ashish.txt",function(err){
if(err) console.error(err);
else console.log('done');

})

fs.unlink("hello.txt", function(err){
    if(err) console.error(err);
    else console.log("remove");
    
})


fs.rmdir("./Copy",{recursive: true}, function(err){
if(err) console.error(err);
else console.log("remove");

})