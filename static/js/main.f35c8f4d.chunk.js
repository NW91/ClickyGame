(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(35)},2:function(e){e.exports=[{id:1,image:"https://i.pinimg.com/originals/20/5b/52/205b5212d9949de3928c8bb66fffb26c.jpg",clicked:!1},{id:2,image:"https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",clicked:!1},{id:3,image:"https://i.pinimg.com/originals/49/a7/17/49a717bae4de87ed8d005a6b09a6ed67.jpg",clicked:!1},{id:4,image:"https://i.pinimg.com/236x/4f/c5/75/4fc5759c9fa7cbfc7af4b0d6d1551b86--lavender-roses-orange-roses.jpg",clicked:!1},{id:5,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAyKc4iFim2vsHustrroAmUaBTuQjM_Z8lGG-mQFZo4ivz6ozA",clicked:!1},{id:6,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4K9OKGENwJ2Riua7N0AXCCXoWCtv-Exth6vKisnouPF2a3PUM",clicked:!1},{id:7,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVZNgnaivgq1ngCfFZKTeJQVT3ApGcOp6Lf725b1Mbo0ziftyWA",clicked:!1},{id:8,image:"https://cdn.pixabay.com/photo/2016/09/15/22/11/orange-rose-1672825_1280.jpg",clicked:!1},{id:9,image:"https://ritaroberts.files.wordpress.com/2016/05/white-rose.jpg",clicked:!1},{id:10,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyiMqNTnHn8Ci8PmNiXt9OqlekosG20iSiqGj-_Ft_hBpx_gzZ2g",clicked:!1},{id:11,image:"https://www.sensecuador.com/images/stories/virtuemart/product/EARLY%20GREY.jpg",clicked:!1},{id:12,image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rose-timeless-purple-from-whartons-roses-1530006409.jpg?resize=480:*",clicked:!1},{id:13,image:"http://sierraflowerfinder.blob.core.windows.net/medias/FlowerPictures/6577/tiffany%20-%20green%20rose.jpg",clicked:!1},{id:14,image:"https://image.dhgate.com/0x0/f2/albu/g9/M01/E4/78/rBVaVVwsMYyASXznAAJA5T3T79g950.jpg",clicked:!1},{id:15,image:"https://i.pinimg.com/originals/c3/d8/0c/c3d80c68c3e125b7f5d1bad5e48c4595.jpg",clicked:!1},{id:16,image:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/light-orange-rose-i-linda-brody.jpg",clicked:!1}]},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(22),a(14));var l=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-1"}),r.a.createElement("div",{className:"col-sm-10"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"display-4"},"Rose Memory Game:"),r.a.createElement("p",null,'"A rose by any other name would smell just as sweet." Test your memory by starting the fun with clicking on any particular rose. But try not click the same rose twice in a row otherwise you\'ll lose the game! Scroll a little below to try and see if you can beat your top score and increase your skill level!'),r.a.createElement("br",null),r.a.createElement("a",{className:"btn btn-primary btn-lg",href:"https://github.com/NW91",role:"button",target:"_blank"},"Github Here"))),r.a.createElement("div",{className:"col-sm-1"}))},s=a(9),m=a(10),d=a(15),g=a(11),u=a(16),h=(a(23),a(24),function(e){return r.a.createElement("div",{className:"card flex",value:e.id,onClick:function(){return e.handleClick(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})))}),p=(a(25),function(e){return r.a.createElement("nav",{className:"fluid"},r.a.createElement("ul",null,r.a.createElement("li",{className:"brand animated lightSpeedIn"},r.a.createElement("a",{href:"/drag-react-clicky/"},e.title)),r.a.createElement("li",{id:"rw"},e.rightWrong),r.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),r.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),f=a(2);var b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={friends:f,currentScore:0,topScore:0,rightWrong:"",clicked:[]},a.handleClick=function(e){-1===a.state.clicked.indexOf(e)?(a.handleIncrement(),a.setState({clicked:a.state.clicked.concat(e)})):a.handleReset()},a.handleIncrement=function(){var e=a.state.currentScore+1;a.setState({currentScore:e,rightWrong:""}),e>=a.state.topScore?a.setState({topScore:e}):12===e&&a.setState({rightWrong:"You've Won!"}),a.handleShuffle()},a.handleReset=function(){a.setState({currentScore:0,topScore:a.state.topScore,rightWrong:"Try Again!",clicked:[]}),a.handleShuffle()},a.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(f);a.setState({friends:e})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-sm-12"},r.a.createElement("div",{className:"panel panel-default"},r.a.createElement(p,{title:"Rose Memory Game!",score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),this.state.friends.map(function(t){return r.a.createElement(h,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image})}))))}}]),t}(n.Component);var v=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Copyright 2019 - All rights reserved \xa9")))};a(26);var E=function(e){return r.a.createElement("div",{className:"container-fluid text-center"},r.a.createElement("main",Object.assign({className:"wrapper"},e)))};var k=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement(E,null,r.a.createElement(l,null),r.a.createElement(b,null)),r.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.f35c8f4d.chunk.js.map