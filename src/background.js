/* src/background.js
 * Originally created by Merten Peetz
 * Modified by DaAwesomeP
 * This is the background task file of the extension
 * https://github.com/DaAwesomeP/Searchonymous2
 *
 * Copyright 2017-present DaAwesomeP
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";

// We can't use a content-script since URL-regexes don't allow checking for wildcard TLDs
let contentPattern = /^https?:\/\/((www|encrypted)\.)?google\..*/;
browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(contentPattern.test(tab.url)) {
		// Remove cookie/privacy hints that would popup on every page visit otherwise
		browser.tabs.insertCSS(tabId, {
			file: 'google.css'
		});
	}
});

// Register header event listener
browser.webRequest.onBeforeSendHeaders.addListener(
	onBeforeHeaders,
	{
		urls: [
		  '*://*.google.com/*',
		  '*://*.google.ac/*',
		  '*://*.google.ad/*',
		  '*://*.google.ae/*',
		  '*://*.google.com.af/*',
		  '*://*.google.com.ag/*',
		  '*://*.google.com.ai/*',
		  '*://*.google.al/*',
		  '*://*.google.am/*',
		  '*://*.google.co.ao/*',
		  '*://*.google.com.ar/*',
		  '*://*.google.as/*',
		  '*://*.google.at/*',
		  '*://*.google.com.au/*',
		  '*://*.google.az/*',
		  '*://*.google.ba/*',
		  '*://*.google.com.bd/*',
		  '*://*.google.be/*',
		  '*://*.google.bf/*',
		  '*://*.google.bg/*',
		  '*://*.google.com.bh/*',
		  '*://*.google.bi/*',
		  '*://*.google.bj/*',
		  '*://*.google.com.bn/*',
		  '*://*.google.com.bo/*',
		  '*://*.google.com.br/*',
		  '*://*.google.bs/*',
		  '*://*.google.bt/*',
		  '*://*.google.co.bw/*',
		  '*://*.google.by/*',
		  '*://*.google.com.bz/*',
		  '*://*.google.ca/*',
		  '*://*.google.com.kh/*',
		  '*://*.google.cc/*',
		  '*://*.google.cd/*',
		  '*://*.google.cf/*',
		  '*://*.google.cat/*',
		  '*://*.google.cg/*',
		  '*://*.google.ch/*',
		  '*://*.google.ci/*',
		  '*://*.google.co.ck/*',
		  '*://*.google.cl/*',
		  '*://*.google.cm/*',
		  '*://*.google.cn/*',
		  '*://*.google.com.co/*',
		  '*://*.google.co/*',
		  '*://*.google.co.cr/*',
		  '*://*.google.com.cu/*',
		  '*://*.google.cv/*',
		  '*://*.google.com.cy/*',
		  '*://*.google.cz/*',
		  '*://*.google.de/*',
		  '*://*.google.dj/*',
		  '*://*.google.dk/*',
		  '*://*.google.dm/*',
		  '*://*.google.com.do/*',
		  '*://*.google.dz/*',
		  '*://*.google.com.ec/*',
		  '*://*.google.ee/*',
		  '*://*.google.com.eg/*',
		  '*://*.google.es/*',
		  '*://*.google.com.et/*',
		  '*://*.google.eu/*',
		  '*://*.google.fi/*',
		  '*://*.google.com.fj/*',
		  '*://*.google.fm/*',
		  '*://*.google.fr/*',
		  '*://*.google.ga/*',
		  '*://*.google.ge/*',
		  '*://*.google.gf/*',
		  '*://*.google.gg/*',
		  '*://*.google.com.gh/*',
		  '*://*.google.com.gi/*',
		  '*://*.google.gl/*',
		  '*://*.google.gm/*',
		  '*://*.google.gp/*',
		  '*://*.google.gr/*',
		  '*://*.google.com.gt/*',
		  '*://*.google.gy/*',
		  '*://*.google.com.hk/*',
		  '*://*.google.hn/*',
		  '*://*.google.hr/*',
		  '*://*.google.ht/*',
		  '*://*.google.hu/*',
		  '*://*.google.co.id/*',
		  '*://*.google.iq/*',
		  '*://*.google.ie/*',
		  '*://*.google.co.il/*',
		  '*://*.google.im/*',
		  '*://*.google.co.in/*',
		  '*://*.google.is/*',
		  '*://*.google.it/*',
		  '*://*.google.je/*',
		  '*://*.google.com.jm/*',
		  '*://*.google.jo/*',
		  '*://*.google.co.jp/*',
		  '*://*.google.co.ke/*',
		  '*://*.google.ki/*',
		  '*://*.google.kg/*',
		  '*://*.google.co.kr/*',
		  '*://*.google.com.kw/*',
		  '*://*.google.kz/*',
		  '*://*.google.la/*',
		  '*://*.google.com.lb/*',
		  '*://*.google.li/*',
		  '*://*.google.lk/*',
		  '*://*.google.co.ls/*',
		  '*://*.google.lt/*',
		  '*://*.google.lu/*',
		  '*://*.google.lv/*',
		  '*://*.google.com.ly/*',
		  '*://*.google.co.ma/*',
		  '*://*.google.md/*',
		  '*://*.google.me/*',
		  '*://*.google.mg/*',
		  '*://*.google.mk/*',
		  '*://*.google.ml/*',
		  '*://*.google.com.mm/*',
		  '*://*.google.mn/*',
		  '*://*.google.ms/*',
		  '*://*.google.com.mt/*',
		  '*://*.google.mu/*',
		  '*://*.google.mv/*',
		  '*://*.google.mw/*',
		  '*://*.google.com.mx/*',
		  '*://*.google.com.my/*',
		  '*://*.google.co.mz/*',
		  '*://*.google.com.na/*',
		  '*://*.google.ne/*',
		  '*://*.google.com.ng/*',
		  '*://*.google.com.ni/*',
		  '*://*.google.nl/*',
		  '*://*.google.no/*',
		  '*://*.google.com.np/*',
		  '*://*.google.nr/*',
		  '*://*.google.nu/*',
		  '*://*.google.co.nz/*',
		  '*://*.google.com.om/*',
		  '*://*.google.com.pk/*',
		  '*://*.google.com.pa/*',
		  '*://*.google.com.pe/*',
		  '*://*.google.com.ph/*',
		  '*://*.google.pl/*',
		  '*://*.google.com.pg/*',
		  '*://*.google.pn/*',
		  '*://*.google.com.pr/*',
		  '*://*.google.ps/*',
		  '*://*.google.pt/*',
		  '*://*.google.com.py/*',
		  '*://*.google.com.qa/*',
		  '*://*.google.ro/*',
		  '*://*.google.rs/*',
		  '*://*.google.ru/*',
		  '*://*.google.rw/*',
		  '*://*.google.com.sa/*',
		  '*://*.google.com.sb/*',
		  '*://*.google.sc/*',
		  '*://*.google.se/*',
		  '*://*.google.com.sg/*',
		  '*://*.google.sh/*',
		  '*://*.google.si/*',
		  '*://*.google.sk/*',
		  '*://*.google.com.sl/*',
		  '*://*.google.sn/*',
		  '*://*.google.sm/*',
		  '*://*.google.so/*',
		  '*://*.google.st/*',
		  '*://*.google.sr/*',
		  '*://*.google.com.sv/*',
		  '*://*.google.td/*',
		  '*://*.google.tg/*',
		  '*://*.google.co.th/*',
		  '*://*.google.com.tj/*',
		  '*://*.google.tk/*',
		  '*://*.google.tl/*',
		  '*://*.google.tm/*',
		  '*://*.google.to/*',
		  '*://*.google.tn/*',
		  '*://*.google.com.tr/*',
		  '*://*.google.tt/*',
		  '*://*.google.com.tw/*',
		  '*://*.google.co.tz/*',
		  '*://*.google.com.ua/*',
		  '*://*.google.co.ug/*',
		  '*://*.google.co.uk/*',
		  '*://*.google.us/*',
		  '*://*.google.com.uy/*',
		  '*://*.google.co.uz/*',
		  '*://*.google.com.vc/*',
		  '*://*.google.co.ve/*',
		  '*://*.google.vg/*',
		  '*://*.google.co.vi/*',
		  '*://*.google.com.vn/*',
		  '*://*.google.vu/*',
		  '*://*.google.ws/*',
		  '*://*.google.co.za/*',
		  '*://*.google.co.zm/*',
		  '*://*.google.co.zw/*'
		]
	},
	[
		'requestHeaders',
		'blocking'
	]
);

// Remove cookie from headers
function onBeforeHeaders(details) {
	// Check if Google search URL
	if(!isSearchUrl(details.url)) {
		return;
	}

	// Get Cookie
	var headers = details.requestHeaders;
	for(var i = 0; i < headers.length; i++) {
		if(headers[i].name == 'Cookie') {
			// Remove cookies
			headers.splice(i, 1);

			// Return new headers
			return {
				requestHeaders: headers
			};
		}
	}
}

/* URLs */
// If URL considered a Google search URL
function isSearchUrl(url) {
	// Check blacklist
	if(!isBlacklisted(url)) {
		return false;
	}

	// Check whitelist
	if(isWhitelisted(url)) {
		return false;
	}
	return true;
}

// Is blacklisted URL?
let urlBlacklist = [
	//Google search page
	/^https?:\/\/((search|www|encrypted)\.)?google\.[^\/]+\/?[^\/]*$/i,

	//Google autocomplete
	/^https?:\/\/((search|www|encrypted)\.)?google\.[^\/]+\/complete\/.*$/i,
];
function isBlacklisted(url) {
	return testRegexAry(urlBlacklist, url);
}

// Is whitelisted URL?
let urlWhitelist = [
	// Google Voice
	/^https?:\/\/www\.google\.[a-z]*?\/voice/i,

	// Google Maps
	/^https?:\/\/www\.google\.[a-z]*?\/maps/i,
	/^https?:\/\/www\.google\.[a-z]*?\/s\?tbm=map/i,
];
function isWhitelisted(url) {
	return testRegexAry(urlWhitelist, url);
}

// Test regex array on given string
function testRegexAry(ary, string) {
	for(var key in ary) {
		var pattern = ary[key];
		if(pattern.test(string)) {
			return true;
		}
	}
	return false;
}
