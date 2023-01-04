/*
import {useState } from "react";
import {initializeApp} from "firebase/app";
import { getDatabase } from "firebase/database";
import 'firebase/compat/auth';
import {set , ref} from "firebase/database";
import firebase from 'firebase/compat/app';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvZV1eWLAxkY0I50ki-tkEGUzan79CVZc",
  authDomain: "yash10aug-2fdf9.firebaseapp.com",
  databaseURL: "https://yash10aug-2fdf9-default-rtdb.firebaseio.com",
  projectId: "yash10aug-2fdf9",
  storageBucket: "yash10aug-2fdf9.appspot.com",
  messagingSenderId: "171469489567",
  appId: "1:171469489567:web:9a8b4cad42538e0ee6e9aa"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);

function EnApp()
{
	const[name , setName] = useState("");
	const[query , setQuery] = useState("");
	const[phone , setPhone] = useState("");
	const[otp , setOtp] = useState("");
	const[final , setFinal] = useState("");
	
	const hName = (event) => {setName(event.target.value);}
	const hQuery = (event) => {setQuery(event.target.value);}
	const hPhone = (event) => {setPhone(event.target.value);}
	const hOtp = (event) => {setOtp(event.target.value);}
	const hFinal = (event) => {setFinal(event.target.value);}


	const configureCaptcha = () => {
	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button',{
	'size':'invisible',
	'callback':(response) =>{
	sendOtp();
	console.log("Recaptca verified")
	},
	defaultCountry:"IN"
	});
	}

	const sendOtp = (event) =>{
	event.preventDefault();
	configureCaptcha();
	let pn = "+91" + phone;
	let av = window.recaptchaVerifier;
	firebase.auth().signInWithPhoneNumber(pn , av)

	.then (res => {
			setFinal(res);
			console.log(res);
			console.log("OTP sent");
			alert("OTP Sent");
		})
		.catch(err => {
			console.log(err);

		})
}


	const submitOtp = (event)  => {
		event.preventDefault();
		final.confirm(otp)
		.then( res => {
			const d = new Date().toString();
			const n = name + "-->" + d;
			const data = {name , phone , query , d}
			set(ref(db , "visitors/" + n),data)
			.then ( res => {
				console.log(res);
				alert("We will call u in 2hrs")
				window.location.reload()

			})
			.catch(err => console.log(err))

		})

		.catch( err =>{
			console.log(err);
			alert("invalid OTP");
			window.location.reload()
		})
	}


	return(
		<>
			<center>
			<h1> Fill the form </h1>
			<form onSubmit = {sendOtp}>
			<div id = "sign-in-button"></div>
				<input type = "text" placeholder = "enter name" onChange = {hName} />
				<br/><br/>
				<textarea placeholder = "enter ur query" rows= {3}  cols = {22} onChange = {hQuery}/>
				<br/><br/>
				<input type = "number" placeholder = "enter number" onChange = {hPhone}/>

				<br/><br/>
				<input type = "submit" value = "Send OTP" />
				<br/><br/>

				
				</form>
			<form onSubmit = {submitOtp}>
				<input type = "number" placeholder = "enter OTP" onChange = {hOtp}/>

				<br/><br/>
				<textarea placeholder = "enter ur query" rows= {3}  cols = {22} onChange = {hPhone}/>
				<br/><br/>
				<input type = "submit" value = "Send OTP" />
				<br/><br/>
				<input type = "submit" value = "Submit OTP"/>
				<br/><br/>
			</form>
		</center>
	</>
	);
}
export default EnApp;




import { useState } from "react";
import {initializeApp}from "firebase/app";
import {getDatabase} from "firebase/database";
import 'firebase/compat/auth';
import {set,ref} from "firebase/database";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvZV1eWLAxkY0I50ki-tkEGUzan79CVZc",
  authDomain: "yash10aug-2fdf9.firebaseapp.com",
  databaseURL: "https://yash10aug-2fdf9-default-rtdb.firebaseio.com",
  projectId: "yash10aug-2fdf9",
  storageBucket: "yash10aug-2fdf9.appspot.com",
  messagingSenderId: "171469489567",
  appId: "1:171469489567:web:9a8b4cad42538e0ee6e9aa"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);

function EnApp()
{
    const[name,setName] = useState("");
    const[query,setQuery] = useState("");
    const[phone,setPhone] = useState("");
    const[otp,setOtp] = useState("");
    const[final,setFinal] = useState("");

    const hName = (event) => {setName(event.target.value);};
    const hQuery = (event) => {setQuery(event.target.value);};
    const hPhone = (event) => {setPhone(event.target.value);};
    const hOtp = (event) => {setOtp(event.target.value);};
    const hFinal = (event) => {setFinal(event.target.value);};

    const configureCapcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback':(response) => {
                sendOtp();
                console.log("Recaptcha varified");
            },
            defaultCountry: 'IN'
        });
    }

    const sendOtp = (event) => {
        event.preventDefault();
        configureCapcha();
        let pn = "+91"+phone;
        let av = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(pn, av)
        .then(res=>{
            setFinal(res);
            console.log(res);
            console.log("OTP sent");
            alert("OTP sent");
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const submitOtp = (event) => {
        event.preventDefault();
        final.confirm(otp)
        .then(res=>{
            const d = new Date().toString();
            const n = name + "==>" +d;
            const data = {name,phone,query,d}
            set(ref(db,"visitors/"+n),data)
            .then (res=>{
                console.log(res);
                alert("We will call u in 2 hrs")
                window.location.reload()
            })
            .catch(err=> console.log(err))
        })
        .catch(err=>{
            console.log(err);
            alert("invalid OTP");
            window.location.reload()
        })
    }
    return(
        <>
            <center>
                <h1>Fill The Form</h1>
                <form onSubmit={sendOtp}>
                    <div id="sign-in-button"></div>
                    <input type="text" placeholder="enter name" onChange={hName}/>
                    <br/><br/>
                    <textarea placeholder="enter query" rows={3} cols={20} onChange={hQuery}/>
                    <br/><br/>
                    <input type="number" placeholder="enter phone number" onChange={hPhone}/>
                    <br/><br/>
                    <input type="submit" value="Send Otp"/>
                    <br/><br/>
                </form>
                <form onSubmit={submitOtp}>
                    <input type="number" placeholder="enter otp" onChange={hOtp}/>
                    <br/><br/>
                    <input type="submit" value="Submit Otp"/>
                    <br/><br/>
                </form>
            </center>
        </>
    );
}
export default EnApp;
*/


// correct app
import { useState } from "react";
import {initializeApp}from "firebase/app";
import {getDatabase} from "firebase/database";
import 'firebase/compat/auth';
import {set,ref} from "firebase/database";
import firebase from "firebase/compat/app";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKb7H_M8gAEMblcg970dSUnG746q6fcr8",
  authDomain: "otp30dec.firebaseapp.com",
  databaseURL: "https://otp30dec-default-rtdb.firebaseio.com",
  projectId: "otp30dec",
  storageBucket: "otp30dec.appspot.com",
  messagingSenderId: "182490670046",
  appId: "1:182490670046:web:f5fbc5b428bdce6d30734f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);
function EnApp()
{
    const[name,setName] = useState("");
    const[query,setQuery] = useState("");
    const[phone,setPhone] = useState("");
    const[otp,setOtp] = useState("");
    const[final,setFinal] = useState("");

    const hName = (event) => {setName(event.target.value);};
    const hQuery = (event) => {setQuery(event.target.value);};
    const hPhone = (event) => {setPhone(event.target.value);};
    const hOtp = (event) => {setOtp(event.target.value);};
    const hFinal = (event) => {setFinal(event.target.value);};

    const configureCapcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback':(response) => {
                sendOtp();
                console.log("Recaptcha varified");
            },
            defaultCountry: 'IN'
        });
    }

    const sendOtp = (event) => {
        event.preventDefault();
        configureCapcha();
        let pn = "+91"+phone;
        let av = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(pn, av)
        .then(res=>{
            setFinal(res);
            console.log(res);
            console.log("OTP sent");
            alert("OTP sent");
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const submitOtp = (event) => {
        event.preventDefault();
        final.confirm(otp)
        .then(res=>{
            const d = new Date().toString();
            const n = name + "==>" +d;
            const data = {name,phone,query,d}
            set(ref(db,"visitors/"+n),data)
            .then (res=>{
                console.log(res);
                alert("We will call u in 2 hrs")
                window.location.reload()
            })
            .catch(err=> console.log(err))
        })
        .catch(err=>{
            console.log(err);
            alert("invalid OTP");
            window.location.reload()
        })
    }
    return(
        <>
            <center>
                <h1>Fill The Form</h1>
                <form onSubmit={sendOtp}>
                    <div id="sign-in-button"></div>
                    <input type="text" placeholder="enter name" onChange={hName}/>
                    <br/><br/>
                    <textarea placeholder="enter query" rows={3} cols={20} onChange={hQuery}/>
                    <br/><br/>
                    <input type="number" placeholder="enter phone number" onChange={hPhone}/>
                    <br/><br/>
                    <input type="submit" value="Send Otp"/>
                    <br/><br/>
                </form>
                <form onSubmit={submitOtp}>
                    <input type="number" placeholder="enter otp" onChange={hOtp}/>
                    <br/><br/>
                    <input type="submit" value="Submit Otp"/>
                    <br/><br/>
                </form>
            </center>
        </>
    );
}
export default EnApp;


	
	

