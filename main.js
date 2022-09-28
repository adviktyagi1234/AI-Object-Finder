something = null;
objects = "";
status = "";

function setup()
{
   canvas = createCanvas(480, 380);
   canvas.position(center);

   video = createCapture(480, 380);
   video.hide();
}

function start()
{
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
   something = document.getElementById("object_input").value;

}

function modelLoaded()
{
   console.log("DOne");
   status = "true";
}

function gotResult() 
{
   if (error)
   {
      console.log(error);
   }
   objects = results;
   console.log(objects);
}

function draw()
{
   image(video, 0, 480, 380)

   if(status != "")
   {
      for (i = 0; i < objects.length; i++) {
         
      }
   }
}