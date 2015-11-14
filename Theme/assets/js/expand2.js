
(function (window, document, undefined){
    console.log("test");

    $(".toggle_container2").hide();
    console.log("expand2 HIDE");
    
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
            data: [105, 112, 107, 102, 105, 103, 97]
        },
        
    ]
};

  function CreateGraph(){
    var ctx = document.getElementById("canvas2").getContext("2d");
    var myBarChart = new Chart(ctx).Line(data, {
      responsive: true
    });
  }

      console.log("waiting for click");
          $("img.trigger2").click(function(){
            console.log("CLICK");
          


        $(this).toggleClass("active").next().slideToggle("normal");
        window.twoState *= -1;
        if (window.oneState == 1) {
            $(".toggle_container").hide();
            window.oneState *= -1;
            console.log("2,1");
        }
        if (window.threeState == 1) {
            $(".toggle_container3").hide();
            console.log("2,2");
        }

        if (window.twoState == 1) {
            CreateGraph();
        }

            console.log("created graph");
          });

        var canvas = document.getElementById("canvas2");
          canvas.width = 100;
        canvas.height = 17;
        

})(this, this.document);
