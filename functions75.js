
	    var X;
		var Y;

		var Month = new Array("січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень");
		var Day = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

		var Holiday = new Array();
		for (var n = 0; n < 12; n++)
		{
		  Holiday[n] = new Array();
		  for (var i = 0; i < Day[n]; i++) Holiday[n][i] = 0;
		}


		for (var n = 0; n < 12; n++)
		{
		  for (var i = 0; i < Day[n]; i++)
		  {
		   var date = new Date(2022, n, i+1);
		   if (date.getDay() === 6 || date.getDay() === 0) Holiday[n][i] ++;
		  }
		}

			// 0 - будній день
			// 3 - вихідний день
			// 4 - святковий день

			Holiday[1-1][1-1] = 4;
			Holiday[1-1][3-1] = 3;
			Holiday[1-1][7-1] = 4;

			Holiday[1-1][16-1] = 3;

			Holiday[3-1][7-1] = 3;
			Holiday[3-1][8-1] = 4;
			Holiday[3-1][12-1] = 0;

			Holiday[4-1][24-1] = 4;
			Holiday[4-1][25-1] = 3;

			Holiday[5-1][1-1] = 4;
			Holiday[5-1][2-1] = 3;
			Holiday[5-1][3-1] = 0;
			Holiday[5-1][4-1] = 0;
			Holiday[5-1][9-1] = 4;
			Holiday[5-1][10-1] = 0;

			Holiday[6-1][12-1] = 4;
			Holiday[6-1][13-1] = 0;
			Holiday[6-1][27-1] = 0;
			Holiday[6-1][28-1] = 0;

			Holiday[8-1][23-1] = 0;
			//Holiday[8-1][24-1] = 4;

			Holiday[10-1][14-1] = 4;
			//Holiday[10-1][15-1] = 3;
			//Holiday[10-1][23-1] = 0;

			Holiday[12-1][25-1] = 4;
			Holiday[12-1][26-1] = 3;
			//Holiday[12-1][28-1] = 0;


		var H = new Array();
		var G = new Array();
		var S = new Array();
		var F = new Array();

	  	var params = location.search;
		var current = -1;
	    if (params.length > 0) current = params.substring(1);

		//var ttt = AddText(155, 25, 10, 10, current, 11, "#000", 28);


	   var normdat = new Array(151, 160, 175, 160, 160, 159, 168, 175, 176, 159, 176, 168);
	   var norm = new Array();
	   if (current < 0) for (n = 0; n < 12; n++) norm[n] = AddText(55, 12, 1090, n*425+410, "( " + normdat[n] + " )", 11, "#000", 28);

	   //*******************************************************
	   if (current < 0)  for (var n = 0; n < 12; n++) NewTab(n);
	   if (current >= 0) NewTab(current);

	   //*******************************************************
	   var win = AddBox(0, 0, "", 22, "#ffc");
	   win.style.left = "0px";
	   win.style.top = "0px";
	   win.style.transition = "0.75s";
	   
	   var stat = AddBox(150, 22, "Зберегти", 22, "#ac7", win);
	   stat.onmousedown = function() {Save();}
	   stat.style.left = "1212px";
	   stat.style.top = "50px";
	   stat.style.transition = "0.75s";
	   stat.onmouseover = function() {stat.style.background = "#ae5";}
	   stat.onmouseout = function() {stat.style.background = "#ac7";}
	   
	   var rec = AddBox(25, 22, "П", 22, "#fc7", win);
	   rec.onmousedown = function() {AutoFill();}
	   rec.style.left = "1375px";
	   rec.style.top = "50px";
	   rec.style.transition = "0.75s";
	   rec.onmouseover = function() {rec.style.background = "#fa5";}
	   rec.onmouseout = function() {rec.style.background = "#fc7";}
	   
	   var dat = AddBox(170, 80, "", 25, "#ffc", win);
	   dat.style.left = "1212px";
	   dat.style.top = "85px";
	   dat.style.textAlign = "left";
	   dat.style.padding = "10px";
	   
	   document.onscroll = function() 
	   {
	     win.style.top = (document.documentElement.scrollTop || document.body.scrollTop) + 50 + "px";
	   }
	   
	   if (current >= 0) win.style.visibility = "hidden";
	   
	   if (current < 0)
	   {
	     var but = new Array();
		 for (n = 0; n < 12; n++)
		 {
		    but[n] = AddText(75, 23, 1075, n*425+92, "Друк", 12, "#000", 25);
			but[n].style.background = "#ca7";
			but[n].style.border = "1px solid #555";
			but[n].onmousedown = function() {show(this); }
			but[n].num = n;
			but[n].style.cursor = "pointer";
		 }
		 
		 //************************************************************
		 function show(e) {location.href = "index.html?" + e.num;}
	   }
	   
	   //************************************************************
	   if (current >= 0)
	   {
		    var back = AddText(75, 23, 145, 92, "Назад", 12, "#000", 25);
			back.style.background = "#ac7";
			back.style.border = "1px solid #555";
			back.onclick = function() {location.href = "index.html";}
			back.style.cursor = "pointer";

		    var half = AddText(85, 23, 230, 92, "пів місяця", 12, "#000", 25);
			half.style.background = "rgba(200, 200, 200, 0.5)";
			half.style.border = "1px solid #555";
			half.kind = 1;
			half.style.cursor = "pointer";
			
		    var tname = AddText(75, 23, 325, 92, "табель", 12, "#000", 25);
			tname.style.background = "rgba(200, 200, 200, 0.5)";
			tname.style.border = "1px solid #555";
			tname.kind = 1;
			tname.style.cursor = "pointer";
			
			//***********************************************************	  
			half.onclick = function() {
				if (half.kind === 1){
				  for (var n = 15; n <= 31; n++) if (G[current][1][n]){	
				    G[current][1][n].innerHTML = '';
				    G[current][2][n].innerHTML = '';
				
				    S[current][1][n].innerHTML = '';
				    S[current][2][n].innerHTML = '';
				
				    F[current][1][n].innerHTML = '';
				    F[current][2][n].innerHTML = '';
				  }
				    half.kind = 2;
				    half.style.background = "rgba(200, 150, 0, 0.5)";
					half.innerHTML = "місяць";
					RecalcOne();
				}
				else
				{
				  for (n = 15; n <= 31; n++) if (G[current][1][n]){	
				    G[current][1][n].innerHTML = G[current][1][n].val;
				    G[current][2][n].innerHTML = G[current][2][n].val;
				
				    S[current][1][n].innerHTML = S[current][1][n].val;
				    S[current][2][n].innerHTML = S[current][2][n].val;
				
				    F[current][1][n].innerHTML = F[current][1][n].val;
				    F[current][2][n].innerHTML = F[current][2][n].val;
				  }
				    half.kind = 1;
				    half.style.background = "rgba(200, 200, 200, 0.5)";
					half.innerHTML = "пів місяця";
					RecalcOne();
				}		
			}
			
			//***********************************************************
			tname.onclick = function() {
				
				if (tname.kind === 1){
				    tname.kind = 2;
				    tname.style.background = "rgba(200, 150, 0, 0.5)";
					t1.innerHTML = "Директор школи<br>Вик.";
					t2.innerHTML = "Середа С.В.<br>Остапець В.В."
					nnn.innerHTML = "ТАБЕЛЬ ОБЛІКУ РОБОЧОГО ЧАСУ<br>сторожів<br>Рівненської ЗОШ І-ІІІ ступенів №5 ім. О.О. Борисенка<br>за " + Month[current] + " 2022 р.";
					tname.innerHTML = 'графік';
				}
				else
				{
				    tname.kind = 1;
				    tname.style.background = "rgba(200, 200, 200, 0.5)";
					t1.innerHTML = "Директор школи<br>Голова профкому<br>Вик.";
					t2.innerHTML = "Середа С.В.<br>Остапець В. В.<br>Остапець В.В.";
					nnn.innerHTML = "ГРАФІК ОБЛІКУ РОБОЧОГО ЧАСУ<br>сторожів<br>Рівненської ЗОШ І-ІІІ ступенів №5 ім. О.О. Борисенка<br>за " + Month[current] + " 2022 р.";
					tname.innerHTML = 'табель';
				}		
			}
			

		    var bprint = AddText(75, 23, 1075, 92, "Друк", 12, "#000", 25);
			bprint.style.background = "#ca7";
			bprint.style.border = "1px solid #555";
			bprint.onclick = function() 
			{
				back.style.visibility = "hidden";
				bprint.style.visibility = "hidden";
				half.style.visibility = "hidden";
				tname.style.visibility = "hidden";
				window.print();
				setTimeout( function() {back.style.visibility = "visible"; bprint.style.visibility = "visible"; half.style.visibility = "visible"; tname.style.visibility = "visible";}, 500)
			}
			bprint.style.cursor = "pointer";	
			
			var t1 = AddText(500, 100, 145, 425, "Директор школи<br>Голова профкому<br>Вик.", 12, "#000");
			t1.style.textAlign = "left";
			t1.style.lineHeight = "45px";
			
			var t2 = AddText(300, 100, 455, 425, "Середа С.В.<br>Остапець В.В.<br>Остапець В.В.", 12, "#000");
			t2.style.textAlign = "right";
			t2.style.lineHeight = "45px";
	   }
	   
	   
	   Load();
	   
		
	  //***************************************
	  function position(e)
	  {
	    e = e || window.event;
		var x = e.offsetX==undefined?e.layerX:e.offsetX;
		var y = e.offsetY==undefined?e.layerY:e.offsetY;
		return {"x":x, "y":y};
	  }
	  
	  //***************************************
	  function change(e)
	  {
	      var val = 0;
		  val = parseInt(e.innerHTML);
		  if (isNaN(val) === true) val = 0;
		  if (position(e.target).x < 12) {val -=1} else {val +=1;};
		  if (val < 0) val = 0;
		  if (val === 0) {e.innerHTML = ""} else {e.innerHTML = val;};
		  
		  Recalc();
	  }  

	  
	  //***************************************
	  function Recalc()
	  {
	        var GSum = 0;
		    var SSum = 0;
			var FSum = 0;
			
			var Hold = 0;
			
		  for (var n = 0; n < 12; n++)
		  {
		    var Sum = 0;
			var Sum2 = 0;
			Hold = 0;
		    for (var i = 0; i < Day[n]; i++)
		    {
	          val = 0;
		      val = parseInt(G[n][1][i].innerHTML);
		      if (isNaN(val) === true) val = 0;
		      Sum += val;
		      val = parseInt(G[n][2][i].innerHTML);
		      if (isNaN(val) === true) val = 0;
		      Sum2 += val;
			  if (val > 6) if (Holiday[n][i] >= 4) Hold++;
		    }
			  var Sum3 = Sum + Sum2;
			  G[n][4].innerHTML = Sum + "/" + Sum3; 
			  GSum += Sum + Sum2;
			  //if (Hold > 0) G[n][5].innerHTML = Hold + " св.";

			  
		    Sum = 0;
			Sum2 = 0;
			Hold = 0;
		    for (var i = 0; i < Day[n]; i++)
		    {
	          val = 0;
		      val = parseInt(S[n][1][i].innerHTML);
		      if (isNaN(val) === true) val = 0;
		      Sum += val;
		      val = parseInt(S[n][2][i].innerHTML);
		      if (isNaN(val) === true) val = 0;
		      Sum2 += val;
			  if (val > 6) if (Holiday[n][i] >= 4) Hold++;
		    }
			  Sum3 = Sum + Sum2;
			  S[n][4].innerHTML = Sum + "/" + Sum3;
			  SSum += Sum + Sum2;
			  //if (Hold > 0) S[n][5].innerHTML = Hold + " св.";

		    Sum = 0;
			Sum2 = 0;
			Hold = 0;
		    for (var i = 0; i < Day[n]; i++)
		    {
	          val = 0;
		      val = parseInt(F[n][1][i].innerHTML);
		      if (isNaN(val) === true) val = 0;
		      Sum += val;
		      val = parseInt(F[n][2][i].innerHTML);
		      if (isNaN(val) === true) val = 0;
		      Sum2 += val;
			  if (val > 6) if (Holiday[n][i] >= 4) Hold++;
		    }
			  Sum3 = Sum + Sum2;
			  F[n][4].innerHTML = Sum + "/" + Sum3;
			  FSum += Sum + Sum2;
			  //if (Hold > 0) F[n][5].innerHTML = Hold + " св.";
		  }
		  
		  dat.innerHTML = "Павловський В.Й........." + GSum + "<br>Середа М.С........." + SSum  + "<br>Гарголь О.М........" + FSum;
	  }
		
		
	  //***************************************
	  function RecalcOne()
	  {
            var n = current;
		    var Sum = 0;
			var Sum2 = 0;
			var Hold = 0;
		    for (var i = 0; i < Day[n]; i++)
		    {
	          val = 0;
		      val = parseInt(G[n][1][i].innerHTML);
		      if (isNaN(val) === true) val = 0;
		      Sum += val;
		      val = parseInt(G[n][2][i].innerHTML);
		      if (isNaN(val) === true) val = 0;
		      Sum2 += val;
			  if (val > 6) if (Holiday[n][i] >= 4) Hold++;
		    }
			  var Sum3 = Sum + Sum2;
			  G[n][4].innerHTML = Sum + "/" + Sum3;
              //if (Hold > 0) G[n][5].innerHTML = Hold + " св.";
 
		    Sum = 0;
			Sum2 = 0;
			Hold = 0;
		    for (var i = 0; i < Day[n]; i++)
		    {
	          val = 0;
		      val = parseInt(S[n][1][i].innerHTML);
		      if (isNaN(val) === true) val = 0;
		      Sum += val;
		      val = parseInt(S[n][2][i].innerHTML);
		      if (isNaN(val) === true) val = 0;
		      Sum2 += val;
			  if (val > 6) if (Holiday[n][i] >= 4) Hold++;
		    }
			  Sum3 = Sum + Sum2;
			  S[n][4].innerHTML = Sum + "/" + Sum3;
			  //if (Hold > 0) S[n][5].innerHTML = Hold + " св.";
			  
		    Sum = 0;
			Sum2 = 0;
			Hold = 0;
		    for (var i = 0; i < Day[n]; i++)
		    {
	          val = 0;
		      val = parseInt(F[n][1][i].innerHTML);
		      if (isNaN(val) === true) val = 0;
		      Sum += val;
		      val = parseInt(F[n][2][i].innerHTML);
		      if (isNaN(val) === true) val = 0;
		      Sum2 += val;
			  if (val > 6) if (Holiday[n][i] >= 4) Hold++;
		    }
			  Sum3 = Sum + Sum2;
			  F[n][4].innerHTML = Sum + "/" + Sum3;
			  //if (Hold > 0) G[n][5].innerHTML = Hold + " св.";
	  }
	  
		
	  var nnn;
	  //***************************************
	  function NewTab(num)
      {	  
	    X = 35;
		var top = num * 425 + 150;  if (current >= 0) {X = 100; top = 150;}
		Y = top;
	     	   
		nnn = AddText(1100, 12, 75, Y-105, "ГРАФІК ОБЛІКУ РОБОЧОГО ЧАСУ<br>сторожів<br>Рівненської ЗОШ І-ІІІ ступенів №5 ім. О.О. Борисенка<br>за " + Month[num] + " 2022 р.", 14, "#000", 28);
        if (current >= 0) nnn.style.left = "125px";		
			   
	    AddBox(30,100,"", 20); AddText(30, 55, X, top + 30, "№ з/п", 11, "#000", 28);
		
	    AddBox(30,50,"1");
	    AddBox(30,50,"2");
	    AddBox(30,50,"3");
	   
	    X += 31;
        Y = top;	
	    AddBox(55,100,"", 20); AddText(55, 55, X, top + 30, "Таб. номер", 11, "#000", 28);
	    //AddBox(55,50,"5637");
	    //AddBox(55,50,"5526");
	    //AddBox(55,50,"5639");
		
	    AddBox(55,50,"5626");
	    AddBox(55,50,"5583");
	    AddBox(55,50,"5523"); //5637
	   
	    X += 56;
        Y = top;
	    AddBox(125,100,"ПІБ");
	    //AddBox(110,50,"Гарголь А.М.");
	    //AddBox(110,50,"Середа К.М.");
	    //AddBox(110,50,"Середа М.С.");
	    
	    AddBox(125,50,"Павловський В.Й.");
	    AddBox(125,50,"Середа М.С.");
	    AddBox(125,50,"Гарголь О.М.");
		
	    X += 126;
        Y = top;
	    AddBox(40,100,"", 15); AddText(40, 55, X, top + 30, "Роз ряд", 11, "#000", 28);
	    AddBox(40,50,"");
	    AddBox(40,50,"");
	    AddBox(40,50,"");
	   
	    X += 41;
        Y = top;
	    AddBox(75,100,"Посада");
	    AddBox(75,50,"сторож");
	    AddBox(75,50,"сторож");
	    AddBox(75,50,"сторож");
	   
	    X += 76;
        Y = top;
	    AddBox(23*Day[num]-1,55,"Число місяця");
		
		  H[num] = new Array();
	   
	      G[num] = new Array();
		  G[num][1] = new Array();
		  G[num][2] = new Array();
		  
		  S[num] = new Array();
		  S[num][1] = new Array();
		  S[num][2] = new Array();
		  
		  F[num] = new Array();
		  F[num][1] = new Array();
		  F[num][2] = new Array();
		  
	   for (var i = 0; i < Day[num]; i++)
	   {
		  var color = "#fff";
		  if (Holiday[num][i] === 1 || Holiday[num][i] === 5 || Holiday[num][i] === 3) color = "#fc9"; //вихідні
		  if (Holiday[num][i] === 4 || Holiday[num][i] === 2) color = "#fa7"; //святкові
		  
	      AddBox(22,44, i+1, 30, color);
		  H[num][i] = AddText(22, 44, X, top + 80, "+", 10, "#000", 28);
		 // if (Holiday[num][i] > 0) AddText(22, 44, X, top + 80, "в", 10, "#000", 28);
		  if (Holiday[num][i] > 0) H[num][i].innerHTML = 'в'; //AddText(22, 44, X, top + 80, "в", 10, "#000", 28);

	      G[num][1][i] = AddBox(22,25, "", null, color);  G[num][1][i].onmousedown = function() {change(this);}
	      G[num][2][i] = AddBox(22,24,"", null, color);   G[num][2][i].onmousedown = function() {change(this);}
		  
	      S[num][1][i] = AddBox(22,25,"", null, color); S[num][1][i].onmousedown = function() {change(this);}
	      S[num][2][i] = AddBox(22,24,"", null, color); S[num][2][i].onmousedown = function() {change(this);}
		  
	      F[num][1][i] = AddBox(22,25,"", null, color); F[num][1][i].onmousedown = function() {change(this);}
	      F[num][2][i] = AddBox(22,24,"", null, color); F[num][2][i].onmousedown = function() {change(this);}
		  X += 23;
		  Y = top + 56;
	   }
	   
        Y = top;
	    AddBox(81,55,"", 15); AddText(81, 55, X, top + 20, "Дні вих", 10, "#000", 28);
		AddBox(25,44,"Ф");
	    G[num][3] = AddBox(25,50,"");
	    S[num][3] = AddBox(25,50,"");
	    F[num][3] = AddBox(25,50,"");
		
		Y = top + 56;
		X += 26;                if (current < 0) norm[num].style.left = X + "px";
		AddBox(55,44,"Пр");
	    G[num][4] = AddBox(55,50,"");  G[num][4].style.fontWeight = "900";
	    S[num][4] = AddBox(55,50,"");  S[num][4].style.fontWeight = "900";
	    F[num][4] = AddBox(55,50,"");  F[num][4].style.fontWeight = "900";
		
        Y = top;
		X += 56;
	    AddBox(55,55,"Прим.", 50);
		AddBox(55,44,"", 15);
	    G[num][5] = AddBox(55,50," ");
	    S[num][5] = AddBox(55,50," ");
	    F[num][5] = AddBox(55,50," ");
	  }
	  
	   
	//***********************************************
	function getXmlHttp(){
     var xmlhttp;
     try {
       xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
     } catch (e) {
       try {
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
       } catch (E) {
         xmlhttp = false;
       }
     }
     if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
       xmlhttp = new XMLHttpRequest();
     }
     return xmlhttp;
   }
	   
	   
	   //*****************************************************
	   function Save()
	   {
	        var text = "";
		  for (var n = 0; n < 12; n++)
		  {
		    for (var i = 0; i < Day[n]; i++)
		    {
			  text += G[n][1][i].innerHTML + "/" + G[n][2][i].innerHTML + "/" + S[n][1][i].innerHTML + "/" + S[n][2][i].innerHTML + "/" + F[n][1][i].innerHTML + "/" + F[n][2][i].innerHTML + "#";
			}
			  text += "&";
		  }
			
	    var req = getXmlHttp();

	    var data = new FormData();

	    req.open('POST', 'save.php', true);
	    data.append("data", text);
	
	    req.send(data);
	
	    //****************************************************
	    req.onreadystatechange = function() 
	    {  
	    	if (req.readyState == 4) 
		    {   
		    	if (req.status == 200) 
		    	{
		    	  if (req.responseText === "1")
		    	  {
			        
			      }
			    }
			    else {}
		    }
	    }
	   }
	   
	   
	   //*****************************************************
	   function Load()
	   {
			
	    var req = getXmlHttp();

	    var data = new FormData();

	    req.open('POST', 'load.php', true);
	    data.append("data", "");
	
	    req.send(data);
	
	    //****************************************************
	    req.onreadystatechange = function() 
	    {  
	    	if (req.readyState == 4) 
		    {   
		    	if (req.status == 200) 
		    	{
			        var Y = req.responseText.split(/[&]/);

		            for (var n = 0; n < 12; n++)
		            {
					    var M = Y[n].split(/[#]/);
		              for (var i = 0; i < Day[n]; i++)
		              {
					    var D = M[i].split(/[/]/);

						if (current < 0)
						{
			              G[n][1][i].innerHTML = D[0];
						  G[n][2][i].innerHTML = D[1];
						
						  S[n][1][i].innerHTML = D[2];
						  S[n][2][i].innerHTML = D[3];
						
						  F[n][1][i].innerHTML = D[4];
						  F[n][2][i].innerHTML = D[5];
						}
					    else
					    if (current == n)
						{
			              G[current][1][i].innerHTML = D[0]; G[current][1][i].val = D[0];
						  G[current][2][i].innerHTML = D[1]; G[current][2][i].val = D[1];
						
						  S[current][1][i].innerHTML = D[2]; S[current][1][i].val = D[2];
						  S[current][2][i].innerHTML = D[3]; S[current][2][i].val = D[3];
						
						  F[current][1][i].innerHTML = D[4]; F[current][1][i].val = D[4];
						  F[current][2][i].innerHTML = D[5]; F[current][2][i].val = D[5];
						}
						
			          }
		            }

					    if (current < 0) {Recalc();} else {RecalcOne();}
			    }
			    else {}
		    }
	    }
	   }
	   

	   //*****************************************************
	   function AutoFill()
	   {
	                   var current = 1;
		            for (var n = 0; n < 12; n++)
		            {
		              for (var i = 0; i < Day[n]; i++)
		              {
					    current ++; if (current > 3) current = 1;
					    if (current === 1)
						{
			              S[n][1][i].innerHTML = 2;
						  S[n][2][i].innerHTML = 2;	
						  
						  F[n][1][i].innerHTML = 6; 
						  F[n][2][i].innerHTML = 2; if (Holiday[n][i] > 0) F[n][2][i].innerHTML = 14;
						}
						else
					    if (current === 2)
						{
			              G[n][1][i].innerHTML = 2;
						  G[n][2][i].innerHTML = 2; 
						  
						  S[n][1][i].innerHTML = 6;
						  S[n][2][i].innerHTML = 2; if (Holiday[n][i] > 0) S[n][2][i].innerHTML = 14;	
						}
						else
					    if (current === 3)
						{
			              F[n][1][i].innerHTML = 2;
						  F[n][2][i].innerHTML = 2;
						  
						  G[n][1][i].innerHTML = 6;
						  G[n][2][i].innerHTML = 2; if (Holiday[n][i] > 0) G[n][2][i].innerHTML = 14;					
						}
						  
			          }
                    }
					
					//*****************************************
					function Gval(mon, num, day)
					{
					    var value = 0;
						value = parseInt(G[mon][num][day].innerHTML); if (isNaN(value) === true) value = 0;
						return value;
					}
					
					function Sval(mon, num, day)
					{
					    var value = 0;
						value = parseInt(S[mon][num][day].innerHTML); if (isNaN(value) === true) value = 0;
						return value;
					}
					
					function Fval(mon, num, day)
					{
					    var value = 0;
						value = parseInt(F[mon][num][day].innerHTML); if (isNaN(value) === true) value = 0;
						return value;
					}
					
					//*****************************************
		            for (n = 0; n < 12; n++)
		            {
					    var Sum = 0;
		                for (i = 0; i < Day[n]; i++) Sum += Gval(n,1,i) + Gval(n,2,i);
					  
					    var delta = normdat[n] - Sum;
						var dt = 1; 
						if (delta < 0) {dt = -1; delta = -delta;}
						
						for (j = 0; j < 7; j++)
		                for (i = 0; i < Day[n]; i++)
		                {
						   var val = Gval(n,2,i);
						   if (dt < 0) if (delta > 0) if (val > 1) {G[n][2][i].innerHTML = val-1; delta --;}
						   
		                   var date = new Date(2022, n, i+1).getDay();
						   if (dt > 0) if (delta > 0) if (val > 1 && val < 14) if (date != 5 && date != 6) {G[n][2][i].innerHTML = val+1; delta --;}
						}
					}
					
					//*****************************************
		            for (n = 0; n < 12; n++)
		            {
					    Sum = 0;
		                for (i = 0; i < Day[n]; i++) Sum += Sval(n,1,i) + Sval(n,2,i);
					  
					    delta = normdat[n] - Sum;
						dt = 1; 
						if (delta < 0) {dt = -1; delta = -delta;}
						
						for (j = 0; j < 7; j++)
		                for (i = 0; i < Day[n]; i++)
		                {
						   val = Sval(n,2,i);
						   if (dt < 0) if (delta > 0) if (val > 1) {S[n][2][i].innerHTML = val-1; delta --;}
						   
		                   date = new Date(2022, n, i+1).getDay();
						   if (dt > 0) if (delta > 0) if (val > 1 && val < 14) if (date != 5 && date != 6) {S[n][2][i].innerHTML = val+1; delta --;}
						}
					}
					
					//*****************************************
		            for (n = 0; n < 12; n++)
		            {
					    Sum = 0;
		                for (i = 0; i < Day[n]; i++) Sum += Fval(n,1,i) + Fval(n,2,i);
					  
					    delta = normdat[n] - Sum;
						dt = 1; 
						if (delta < 0) {dt = -1; delta = -delta;}
						
						for (j = 0; j < 7; j++)
		                for (i = 0; i < Day[n]; i++)
		                {
						   val = Fval(n,2,i);
						   if (dt < 0) if (delta > 0) if (val > 1) {F[n][2][i].innerHTML = val-1; delta --;}
						   
		                   date = new Date(2022, n, i+1).getDay();
						   if (dt > 0) if (delta > 0) if (val > 1 && val < 14) if (date != 5 && date != 6) {F[n][2][i].innerHTML = val+1; delta --;}
						}
					}
					//*****************************************
					      Recalc();
	   }
	   
 
	   
	   //*****************************************************
	   function AddBox(width, height, text, lineHeight, color, parent)
	   {
          var box = document.createElement('div');
	      box.style.background = color;
	      box.style.width = width + "px";
	      box.style.height = height + "px";
		  box.style.border = "1px solid #555";
          box.style.position = "absolute";
		  box.style.left = X + "px";
		  box.style.top = Y + "px";
		  
		  box.style.fontSize = "11pt";
		  box.style.fontFamily = "Calibri";
		  
          box.style.textAlign = "center";
		  //box.style.verticalAlign = "middle"; 
		  //box.style.display = "table-cell";
		  box.style.cursor = "pointer";

		  if (lineHeight == null) {box.style.lineHeight = height + "px"} else {box.style.lineHeight = lineHeight + "px"};
		  Y += height+1;
		  box.innerHTML = text;
		  
          if (parent == null) {document.body.appendChild(box);} else {parent.appendChild(box);}	
          return box;		  
	   }  
	   
	   
	   //*****************************************
	   function AddText(width, height, left, top, caption, size, color, lineHeight, parent)
	   {
          var text = document.createElement('div');
	      text.style.color = color;
	      text.style.width = width + "px";
	      text.style.height = height + "px";
		  //box.style.border = "1px solid #555";
          text.style.position = "absolute";
		  text.style.left = left + "px";
		  text.style.top = top + "px";
		  
		  text.style.fontSize = size + "pt";
		  text.style.fontFamily = "Calibri";
		  
          text.style.textAlign = "center";
		  //box.style.verticalAlign = "middle"; 
		  //box.style.display = "table-cell";

		  //if (lineHeight == null) {text.style.lineHeight = height + "px"} else {text.style.lineHeight = lineHeight + "px"};
		  text.innerHTML = caption;
		  
          if (parent == null) {document.body.appendChild(text);} else {parent.appendChild(text);}	
          return text;		  
	   }
	   
