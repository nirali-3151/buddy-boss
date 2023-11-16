import io from "socket.io-client";

const ENDPOINT = "http://localhost:8080/";
// const ENDPOINT = "https://buddy-boss-nodejs-api.herokuapp.com/";


export let socket = io(ENDPOINT);
