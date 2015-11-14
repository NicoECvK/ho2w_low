
(function (window, document, undefined){
    console.log("test");

    $(".toggle_container").hide();
    console.log("expand HIDE");
    
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
            data: [92, 95, 93, 87, 99, 85, 90]
        },
        
    ]
};

  function CreateGraph(){
    var ctx = document.getElementById("canvas").getContext("2d");
    var myBarChart = new Chart(ctx).Line(data, {
      responsive: true
    });
  }
// var counter = 1;
      console.log("waiting for click");
          $("img.trigger").click(function(){
            console.log("CLICK");
          


        $(this).toggleClass("active").next().slideToggle("normal");
        window.oneState *= -1;
        if (window.twoState == 1) {
            console.log("1,1");
            $(".toggle_container2").hide();
            window.twoState *= -1;
        }
        if (window.threeState == 1) {
            console.log("1,2");
            $(".toggle_container3").hide();
            window.threeState *= -1;
        }
        // console.log(window.oneState);
        // if (counter == 1) {
        //     $(".trigger2").hide();
        //     console.log(counter);
        //     $(".trigger3").hide();
        //     counter*=-1;
        // } else {
        //     console.log(counter);
        //     $(".trigger2").show();
        //     $(".trigger3").show();
        //     counter*=-1;
        // }
        if (window.oneState == 1) {
            CreateGraph();
        }
            console.log("created graph");
          });

        var canvas = document.getElementById("canvas");
          canvas.width = 100;
        canvas.height = 17;
        

})(this, this.document);


