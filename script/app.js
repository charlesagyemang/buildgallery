




$(document).ready(function(){
  //alert("hey")

  // Get from data
  params = {related: "*"};
  SDK.queryData("plans", "plans_table", params, function(response){
    console.log(response)
  });

})
