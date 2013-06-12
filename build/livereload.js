if (window.WebSocket){

	var ws;

	var socket = function(){

		ws = new WebSocket('ws://' + window.location.hostname + ':35729');

		ws.onmessage = function (e) {

			var data = JSON.parse(e.data);
			if (data.command === 'reload'){
				location.reload();
			}

		};

	};

	setInterval(function () {

		if (ws) {

			if (ws.readyState !== 1) {
				socket();
			}

		} else {

			socket();
		}

	}, 1000);

}
