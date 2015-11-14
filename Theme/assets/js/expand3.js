
(function (window, document, undefined){
    console.log("test");

    $(".toggle_container3").hide();
    console.log("expand3 HIDE");
    
    // $("img.trigger").click(function(){
    //     $(this).toggleClass("active").next().slideToggle("normal");
    //     console.log("CLICKING")
    // });

    var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
      var data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(158,242,255,0.9)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(158,242,255,0.3)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [129, 120, 116, 113, 108, 110, 105]
        },
        
    ]
};

  function CreateGraph(){
    var ctx = document.getElementById("canvas3").getContext("2d");
    var myBarChart = new Chart(ctx).Line(data, {
      responsive: true
    });
  }

      console.log("waiting for click");
          $("img.trigger3").click(function(){
            console.log("CLICK");
          


        $(this).toggleClass("active").next().slideToggle("normal");
          window.threeState *= -1;
        if (window.twoState == 1) {
            $(".toggle_container2").hide();
            window.twoState *= -1;
            console.log("3,1");
        }
        if (window.oneState == 1) {
            $(".toggle_container").hide();
            console.log("3,2");
        }


        if (window.threeState == 1) {
            CreateGraph();
        }
            console.log("created graph");
          });

        var canvas = document.getElementById("canvas3");
          canvas.width = 100;
        canvas.height = 17;
        

})(this, this.document);
