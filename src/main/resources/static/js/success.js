$(document).ready(function() {

  $("#verify").on("click", function(){
    post("../api/verify").done(function(data) {
      if(data.scope) {
        alert("Access Token is VALID");
      } else {
        alert("Access Token is INVALID");
      }
    });
  });

  $("#refreshToken").on("click", function(){
    post("../api/refreshToken").done(function(data) {
      if(data.scope) {
        alert("Access Token has been refreshed");
      } else {
        alert("Access Token has not been refreshed");
      }
    });
  });

  $("#revoke").on("click", function(){
    post("../api/revoke").done(function(data) {
      alert("Access Token has been revoked");
    });
  });

  $("#profile").on("click", function(){
    post("../api/profile").done(function(data) {
      if(data.displayName) {
        alert("Get Profile\nDisplayName : " + data.displayName + "\nuserId : " + data.userId);
      } else {
        alert("Get Profile Failed.");
      }
    });
  });

  $("#friendship").on("click", function(){
    post("../api/friendship").done(function(data) {
      if(data.friendFlag) {
        alert("Get Friendship : " + data.friendFlag);
      } else {
        alert("Get Friendship Failed.");
      }
    });
  });
});


var post = function(url) {
  var def = jQuery.Deferred();
  jQuery.ajax({
    type: 'POST',
    url: url,
    success: function(value) {
      def.resolve(value);
    },
    error: function(xhr) {
      def.reject(xhr.responseText);
    }
  });
  return def.promise();
};
