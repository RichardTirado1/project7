var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

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
  newsquare.setAttribute("x", xpos)
  newsquare.setAttribute("y", ypos)
  newsquare.setAttribute("width", width)
  newsquare.setAttribute("height", height)
  newsquare.setAttribute("fill", color)
  canvas.appendChild(newsquare)
}

function drawCircle(xpos, ypos, radius, color) {
  var newcircle = document.createElementNS(namespace,"circle")
  newcircle.setAttribute("cx", xpos)
  newcircle.setAttribute("cy", ypos)
  newcircle.setAttribute("r", radius)
  newcircle.setAttribute("fill", color)
  canvas.appendChild(newcircle)
}

// Step 3: Event listeners
document.addEventListener("mousemove", function(e) {
 var pt = transformPoint(e, document)
 var selectedShape
 var selectedColor
 var selectedSize
})

document.addEventListener("mousedown", function(e) {


})

document.addEventListener("mouseup", function(e) {

})
