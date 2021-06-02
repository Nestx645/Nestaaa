const textAnim1 = document.getElementById("heroTitleTypewrite")

new Typewriter(textAnim1, {
  autoStart: true,
  loop: true
})
.changeDeleteSpeed(10)
.changeDelay(10)

.pauseFor(500)
.typeString('Hello world !')
.pauseFor(5000)
.start()
