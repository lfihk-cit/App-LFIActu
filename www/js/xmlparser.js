// XML PARSER
function xmlparser()
{
	var xmlhttp, xml_data, items, content, article, grid;
	xmlhttp=new XMLHttpRequest();
	/*xmlhttp.open("GET", "feed.xml", true);*/
	xmlhttp.open("GET", "http://www.fis.edu.hk/web/WebsiteFeeds.aspx?f=0&lang=fr-fr", true);
	xmlhttp.overrideMimeType('text/xml; charset=iso-8859-1');
	
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			xml_data = xmlhttp.responseXML;
			items = xml_data.getElementsByTagName("item"); 
						
			xml_content = '';
									
			for (i=0;i<items.length;i++)
			{
				xml_content += '<i id="close_' + i + '" onclick="read('+ i +')" class="grey-text small mdi-navigation-close close_button"></i>';
				xml_content += '<div id="title_' + i + '" class="item_title" onclick="read('+ i +')"><h5>' + items[i].getElementsByTagName("title")[0].textContent + '</h5></div>';
				xml_content += '<div id="date_' + i + '" style="text-align:center;"><i class="mdi-notification-event-note"></i>' + items[i].getElementsByTagName("pubDate")[0].textContent.substring(0,10) + '</div>';
				xml_content += '<div id="' + i + '" class="item_description">' + items[i].getElementsByTagName("description")[0].textContent + '</div>';
			}
			
			document.getElementById('xml_content').innerHTML=xml_content;

		}
	}
	xmlhttp.send();
}
window.onload = xmlparser();
			