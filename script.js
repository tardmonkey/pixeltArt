document.addEventListener("DOMContentLoaded", function(){
    console.log(document.querySelector("main").innerHTML)
      for(let div = 1; div < 257; div++){
          document.querySelector("main").innerHTML += `<div></div>`}
        
       
        function paint(start,end,color){
            for(let i = start; i < end; i++){
                document.querySelector(`div:nth-child(${i}`).classList.add(`${color}`)
            }
        }
        paint(6,11,"red")
        paint(21,30,"red")
        paint(37,40,"brown")
        paint(40,42,"skin")
        paint(55,58,"skin")
        paint(42,43,"black")
        paint(43,44,"skin")
        paint(53,54,"skin")
        paint(69,70,"skin")
        paint(52,53,"brown")
        paint(68,69,"brown")
        paint(85,86,"brown")
        paint(70,72,"brown")
        paint(54,55,"brown")
        paint(72,75,"skin")
        paint(76,79,"skin")
        paint(75,76,"black")
        paint(90,94,"black")
        paint(90,94,"black")
        paint(86,90,"skin")
        paint(102,108,"skin")
        paint(58,59,"black")
        paint(59,62, "skin")
        paint(117,125,"red")
        paint(119,120,"blu")
        paint(122,123,"blu")
        paint(132,142,"red")
        paint(147,159,"red")
        paint(135,136,"blu")
        paint(138,139,"blu")
        paint(151,155,"blu")
        paint(163,165,"gloves")
        paint(165,166,"red")
        paint(166,167,"blu")
        paint(167,168,"yellow")
        paint(168,170,"blu")
        paint(170,171,"yellow")
        paint(171,172,"blu")
        paint(172,173,"red")
        paint(173,175,"gloves")
        paint(179,182,"gloves")
        paint(195,197,"gloves")
        paint(188,191,"gloves")
        paint(205,207,"gloves")
        paint(182,188,"blu")
        paint(197,205,"blu")
        paint(213,216,"blu")
        paint(218,221,"blu")
        paint(228,231,"brown")
        paint(235,238,"brown")
        paint(243,247,"brown")
        paint(251,255,"brown")
       
        })
        

        