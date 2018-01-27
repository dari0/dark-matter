function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function GETJSON(theUrl)
{
	response = httpGet(theUrl);
	parsed = JSON.parse(response);
	return parsed;
}