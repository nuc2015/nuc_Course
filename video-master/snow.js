function createsnow(num=100,width=2,height=10,color="#fff",speed=5,z=999,opacity=.6) {
    var keys="";
    for(var i=0;i<num;i++){
        keys+=`@keyframes snow${i} {
             0%{
                 transform:  translate(0,0) rotate(0);
             }

            100%{
                transform:
            translate(${500*Math.random()-250}px,${document.documentElement.clientHeight}px) rotate(${720*Math.random()-360}deg);
            }
        }`
        var div=document.createElement("div");
        div.className="snow"
        div.style.cssText=`
            width:${Math.random()*width+width}px;
            height:${Math.random()*height+height}px;
            position: fixed;left:${Math.random()*document.documentElement.clientWidth}px;top:${-Math.random()*document.documentElement.clientHeight}px;animation: snow${i} ${2+speed*Math.random()}s linear infinite;opacity:${opacity};z-index:${z}`;
        for(var j=0;j<6;j++){
            var innerdiv=document.createElement("div");
            innerdiv.style.cssText=`width:100%;height:100%;
                    position: absolute;
                    left:${width/2}px;top:0;
                    transform-origin: 50% ${height+5}px;
                    background: #fff;
                    border-radius: 5px;
                    filter:blur(1px);transform: rotate(${j*60}deg);`;
            div.appendChild(innerdiv);
        }
        document.body.appendChild(div);
    }

    var style=document.createElement("style");
    style.innerHTML=`.snow div:before{
             content: "";
             width:${Math.random()*30+20}%;height:${Math.random()*30+20}%;
             position: absolute;
             left:0;top:0;
             transform: rotate(90deg);
             background: #fff;
         }
         .snow div:after{
             content: "";
             width:${Math.random()*50+30}%;height:${Math.random()*50+30}%;
             position: absolute;
             left:0;top:20%;
             transform: rotate(90deg);

             background: #fff;
         }

            `+keys;
    document.body.appendChild(style);
}