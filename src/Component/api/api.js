import axios from 'axios';
export const copiriFetch = async (url, data = {}, headers = {},method = 'POST') => {
	return fetch(url, {
		method: 'POST',
		credentials: "same-origin",
		body: data,
	});
};
var checkData = JSON.parse(localStorage.getItem('translationLanguangeData'));
var data = [];
if (checkData) {
	data = checkData.ERR;
}
axios.interceptors.request.use(function (config) {
		//console.log(config);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
        
axios.interceptors.response.use(function (response) {
	//console.log(response);
	if (response.data.status==='LOGOUT' || response.status === 401) {
		if (localStorage.getItem('session_id') ===null) {			
		}else {
			localStorage.setItem('last_url_location', '/');// eslint-disable-next-line
		}
		sessionLogout();
	}
    return response;
  }, function (error) {
    if (error.response.status === 401) {
    	localStorage.setItem('last_url_location', '/');// eslint-disable-next-line
    	sessionLogout();
    }
    return Promise.reject(error);
});

export const copiriAxiosPost = async (url, data = {}) => {
	return await axios.post(url, data, {
		headers: {
			//'Content-Type' : 'application/json',
		},
		withCredentials : true,
	});
};



export const copiriAxiosGet = async (url, ) => {
	return await axios.get(url, {
		withCredentials : true,
		headers:{
			'Content-Type' : 'application/json',
		},
	});
};

export const sessionLogout = async () => {
	localStorage.removeItem('session_id');
	localStorage.removeItem('stat');
	localStorage.removeItem('stat_last_cert');
	localStorage.removeItem('un');
	localStorage.removeItem('pwd');
	localStorage.removeItem('translationLanguangeData');
	var redirectURl = '';
	if (window.location.host !== 'localhost:9876') {
		redirectURl = "https://" + window.location.host + "/authentication/basic/login";
	} else {
		redirectURl = "http://" + window.location.host + "/authentication/basic/login";
	}
	setTimeout(
		() => window.location.href=redirectURl,
		500
	);
};

export function checkValidation(str,type ){
	// eslint-disable-next-line
	var regexURL = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/; 
	var regexEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
	var regexPhone = /^[0-9+]*$/
	//if type === url
	if (type==='url') {
		return regexURL.test(str)
	}

	//if type == email
	if (type==='email') {
		return regexEmail.test(str)
	}

	//if type == phone
	if (type==='phone') {
		return regexPhone.test(str)
	}
    
}

export function getLangunagePackUrl(){
	var url = '';
	var langunage_id = localStorage.getItem('langunage_id');
  if (langunage_id ===null) {
    langunage_id = 177394503;
  } 
  url = '/languages/'+langunage_id+'/package/PRT'
	return url;
}

