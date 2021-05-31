const textAnim1 = document.getElementById("typewriter1")
const textAnim2 = document.getElementById("typewriter2")
const textAnim3 = document.getElementById("typewriter3")

new Typewriter(textAnim1, {
  autoStart: true,
  loop: true
})
.changeDeleteSpeed(10)
.changeDelay(10)

.typeString('Bonjour voyageur, le dernier visiteur de ce site vous a laissé un message : ')
.pauseFor(10000)
.deleteChars(1)
.typeString(' Decryptage')
.pauseFor(20000)
.deleteChars(10)
.typeString('Terminé')
.pauseFor(10000)
.deleteAll()
.start()
  
new Typewriter(textAnim2, {
  autoStart: true,
  loop: true
})
.changeDeleteSpeed(10)
.changeDelay(10)

.pauseFor(5000)
.typeString('xJEYUylNkEpre6L1ZX1ZoYmuo1Mv/oO36Jn/CXr5SOcCrcG3j3VgaLQA==')
.pauseFor(1000)
.deleteAll()
.typeString('xJNkjourZ8XoRpipU+xtsenYmu/code/CXr5SOcCrcG3j3VgaLQA==')
.pauseFor(1000)
.deleteAll()
.typeString('BonjourZravipUdetvous+voirmicidvoapitaine&de/code/Lemoche=')
.pauseFor(3000)
.deleteChars(8)
.typeString('Xtsen')
.pauseFor(1000)
.deleteAll()
.typeString('Bonjour, ravi de vous voir, ici votre capitaine de code Xtsen')
.pauseFor(15000)
.deleteAll()
.start()

