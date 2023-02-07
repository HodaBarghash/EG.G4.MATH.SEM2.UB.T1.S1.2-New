function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xJWb0Jie19":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyj4BL3-VeynT1aAtY58kj4rqT17abM1Hv0odFB7JrtDxonw4Y1UUhbFHESv-AY-NCduQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

