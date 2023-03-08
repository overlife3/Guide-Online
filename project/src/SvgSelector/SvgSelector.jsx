import React from 'react'

export default function SvgSelector({id}) {
	switch (id) {
		case 'favorites':
			return (
				<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
					<title />
					<g data-name="1" id="_1">
						<path
							d="M393,450a14.92,14.92,0,0,1-7.46-2L257,374.29,128.46,448A15,15,0,0,1,106,435V63a15,15,0,0,1,15-15H393a15,15,0,0,1,15,15V435a15,15,0,0,1-15,15ZM257,342a14.92,14.92,0,0,1,7.46,2L378,409.1V78H136V409.1L249.54,344A14.92,14.92,0,0,1,257,342Z" />
					</g>
				</svg>
			)
		case 'later': 
			return (
				<svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
					<title />
					<path
						d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
					<path d="M90,61H67V38a3,3,0,0,0-6,0V61H38a3,3,0,0,0,0,6H61V90a3,3,0,0,0,6,0V67H90a3,3,0,0,0,0-6Z" />
				</svg>
			)
		case 'liked':
			return (
				<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
					<g data-name="15 like" id="_15_like">
						<path
							d="M60.45,30.89a4.924,4.924,0,0,0-1.35-3.65,4.845,4.845,0,0,0-3.49-1.53H41.6a.417.417,0,0,1-.33-.18.626.626,0,0,1-.08-.58L44.9,13.39c.72-2.24,1.92-5.98-1.36-8.66-1.51-1.23-4.06-1.8-5.82-.42-1.49,1.18-1.85,2.96-2.17,4.54a12.469,12.469,0,0,1-.47,1.85c-.96,2.61-3.33,4.34-5.61,6.01-.39.28-.77.56-1.15.85a93.2,93.2,0,0,1-11.21,7.51V22.51a2.006,2.006,0,0,0-2-2H5.55a2,2,0,0,0-2,2V58.5a2,2,0,0,0,2,2h9.56a2.006,2.006,0,0,0,2-2V55.99l7.22,1.73a44.059,44.059,0,0,0,9.17,1.2c1.67.05,3.39.07,5.14.07,2.72,0,5.52-.05,8.37-.16a4.72,4.72,0,0,0,3.45-1.45,5.108,5.108,0,0,0,1.22-4.47,4.737,4.737,0,0,0-.89-1.93,4.529,4.529,0,0,0,2.56-1.38,5.108,5.108,0,0,0,1.22-4.47,4.677,4.677,0,0,0-.89-1.93,4.529,4.529,0,0,0,2.56-1.38,5.108,5.108,0,0,0,1.22-4.47,4.43,4.43,0,0,0-.92-1.93,4.492,4.492,0,0,0,2.59-1.38A5.093,5.093,0,0,0,60.45,30.89ZM15.11,58.5H5.55V22.51h9.56ZM57.67,32.68a2.5,2.5,0,0,1-1.83.81H52.95c-.02,0-.03.01-.05.01-.04,0-.08-.01-.12-.01H49.34a1,1,0,0,0,0,2h3.44a3.016,3.016,0,0,1,2.72,2.25,3.1,3.1,0,0,1-.72,2.72,2.5,2.5,0,0,1-1.83.81h-6.5a1,1,0,0,0,0,2h3.61a2.824,2.824,0,0,1,2.55,2.25,3.1,3.1,0,0,1-.72,2.72,2.476,2.476,0,0,1-1.83.82h-6.5a1,1,0,0,0,0,2h3.61a2.814,2.814,0,0,1,2.55,2.24A3.1,3.1,0,0,1,49,56.02a2.8,2.8,0,0,1-2.06.81c-4.65.18-9.16.21-13.39.1a42.916,42.916,0,0,1-8.76-1.15l-7.68-1.84V27.33a89.425,89.425,0,0,0,12.42-8.18c.36-.27.74-.55,1.12-.82,2.41-1.77,5.14-3.76,6.31-6.94a13.3,13.3,0,0,0,.55-2.15c.27-1.35.53-2.63,1.45-3.36.9-.71,2.4-.35,3.32.4,1.86,1.53,1.69,3.46.71,6.5L39.28,24.34a2.635,2.635,0,0,0,.38,2.37,2.393,2.393,0,0,0,1.94,1H55.61a2.835,2.835,0,0,1,2.04.91,2.9,2.9,0,0,1,.8,2.16A3.066,3.066,0,0,1,57.67,32.68Z" />
						<circle cx="10.326" cy="54" r="2" />
					</g>
				</svg>
			)
		case 'search': 
			return (
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 15L21 21" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#323232" strokeWidth="2"/>
				</svg>
			)
		case 'similar':
			return (
				<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 485.211 485.21" style={{enableBackground: 'new 0 0 485.211 485.21'}}
					xmlSpace="preserve">
					<g>
						<path d="M333.586,242.605l-181.958,90.979V151.627L333.586,242.605z M485.211,30.326v424.56H0V30.326H485.211z M303.255,90.977
							h60.653V60.65h-60.653V90.977z M212.282,90.977h60.65V60.65h-60.65V90.977z M121.304,90.977h60.651V60.65h-60.651V90.977z
							M30.327,90.977h60.651V60.65H30.327V90.977z M90.978,394.236H30.327v30.322h60.651V394.236z M181.955,394.236h-60.651v30.322
							h60.651V394.236z M272.933,394.236h-60.65v30.322h60.65V394.236z M363.908,394.236h-60.653v30.322h60.653V394.236z
							M454.889,394.236h-60.653v30.322h60.653V394.236z M454.889,121.303H30.327v242.602h424.562V121.303z M454.889,60.65h-60.653
							v30.327h60.653V60.65z"/>
					</g>
				</svg>
			)
		default:
			return null;
	}
}