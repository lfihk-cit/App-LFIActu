// XML PARSER
function xmlparser()
{
	var xmlhttp, xml_data, items, content, article, grid;
	xmlhttp=new XMLHttpRequest();
	/*xmlhttp.open("GET", "feed.xml", true);*/
	xmlhttp.open("GET", "http://www.fis.edu.hk/web/WebsiteFeeds.aspx?f=0&lang=fr-fr", false);
	xmlhttp.overrideMimeType('text/xml; charset=iso-8859-1');
	
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			xml_data = xmlhttp.responseXML;
			items = xml_data.getElementsByTagName("item"); 
			
			grid = '<header class="top-bar">';
			grid += '<h2 class="top-bar__headline">Latest articles</h2>';
			grid += '<div class="filter">';
			grid += '<span>FR EN</span>';
			grid += '</div>';
			grid += '</header>';
			
			article = '';
									
			for (i=0;i<items.length;i++)
			{ 
				grid += '<a class="grid__item" href="#">';
				grid += '<h2 class="title title--preview">' + items[i].getElementsByTagName("title")[0].textContent + '</h2>';
				grid += '<div class="loader"></div>';
				grid += '<div class="meta meta--preview">';
				grid += '<span class="meta__date" style="text-align:center;float:none;"><i class="fa fa-calendar-o"></i>' + items[i].getElementsByTagName("pubDate")[0].textContent.substring(0,10) + '</span>';
				grid += '</div>';
				grid += '</a>';
				
				article += '<article class="content__item">';
				article += '<h2 class="title title--full">' + items[i].getElementsByTagName("title")[0].textContent + '</h2>';
				article += '<div class="meta meta--full">';
				article += '<span class="meta__date" style="text-align:center;float:none;"><i class="fa fa-calendar-o"></i>' + items[i].getElementsByTagName("pubDate")[0].textContent.substring(0,10) + '</span>';
				article += '</div>';
				article += '<p>' + items[i].getElementsByTagName("description")[0].textContent + '</p>';
				article += '</article>';
			}
			
			document.getElementById('grid').innerHTML=grid;
			document.getElementById('article').innerHTML=article;
		}
	}
	xmlhttp.send();
}
window.onload = xmlparser();
			