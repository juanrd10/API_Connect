/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   server.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: juanrodr <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/04/27 15:26:46 by juanrodr          #+#    #+#             */
/*   Updated: 2021/04/27 15:42:53 by juanrodr         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fetch = require('fetch').fetchUrl;
const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;

app.use(express.static('../front/build'));

app.get('/private', async(req, res) =>{
	console.log('Token sended');
	const data = 'grant_type=client_credentials&client_id=' + process.env.UID + '&client_secret=' + process.env.SECRET;
	const options = {
		method:'POST',
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		payload:data
	}
	const response = fetch(process.env.URL, options, (error, meta, body) =>{
		const data = JSON.parse(body.toString())
		const {access_token:token} = data;
		console.log(token)
		return res.json({token})
	})
})

app.get('/', (req, res) =>{
	res.send('../front/build/index.html')
})

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`)
})
