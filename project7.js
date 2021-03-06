var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

var drawing = false

var rainbowArray = ["red","orange", "yellow", "green", "blue", "indigo", "violet", "orange"]
var rainbowIndex = 0

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var newsquare = document.createElementNS(namespace, "rect")
  newsquare.setAttribute("x", x)
  newsquare.setAttribute("y", y)
  newsquare.setAttribute("width", size)
  newsquare.setAttribute("height", size)
  newsquare.setAttribute("fill", color)
  screen.appendChild(newsquare)
}

function drawCircle(xpos, ypos, radius, color) {
  var newcircle = document.createElementNS(namespace,"circle")
  newcircle.setAttribute("cx", xpos)
  newcircle.setAttribute("cy", ypos)
  newcircle.setAttribute("r", radius)
  newcircle.setAttribute("fill", color)
  screen.appendChild(newcircle)
}

// Step 3: Event listeners
document.addEventListener("mousemove", function(e) {
  if  (drawing == true) {

 var pt = transformPoint(e)
 var xpos = pt.x
 var ypos = pt.y
 var selectedShape = document.getElementById("shapeSelect").value
 var selectedColor = document.getElementById("colorSelect").value
 var selectedSize = document.getElementById("sizeSelect").value

 if (selectedColor == "rainbow") {
   selectedColor = rainbowArray[rainbowIndex]
   rainbowIndex = rainbowIndex + 1
   if (rainbowIndex > rainbowArray.length-1) {
            rainbowIndex = 0
   }
 }

 if (selectedShape == "square") {
      drawSquare(pt.x, pt.y, selectedSize, selectedColor)
    }
  else if (selectedShape == "circle") {
       drawCircle(pt.x, pt.y, selectedSize, selectedColor)
  }
}
 })



document.addEventListener("mousedown", function(e) {
   drawing = true

})

document.addEventListener("mouseup", function(e) {
   drawing = false
})
