
<script src="assets/js/jquery-1.8.3.min.js"></script>

(function (window, document, undefined){
    console.log("test");

          $(document).ready(function(){
        $(".alex_white").click(function(){
        	$("p").text("blah");
        	//$(.main-content").load("blah.html");
          $(".main-content").html("<h1>friends_comparison.html</h>");
          console.log("test statement");
        });
      });
})(this, this.document);