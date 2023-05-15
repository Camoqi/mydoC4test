import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({
	style,
	links,
	logo,
	copyright
}) {
	return ( <
		footer className = {
			clsx('footer', {
				'footer--dark': style === 'dark',
			})
		} >
		<div className = "container container-fluid" >
			
			



<div class="container container-fluid">
	<div class="row footer__links">
		<div class="col footer__col">
			<div class="footer__title">Documentation</div>
<ul class="footer__items clean-list">
	<li class="footer__item">
		<a class="footer__link-item" href="/">Docs Home</a>
</li>
</ul>
</div>

<div class="col footer__col">
	<div class="footer__title">Community</div>
<ul class="footer__items clean-list">
	
	<li class="footer__item">
		<a href="https:1" target="_blank" rel="noopener noreferrer" class="footer__link-item">
			Facebook
<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU">
				<path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
					</path>
</svg>
</a>
</li>

<li class="footer__item">
	<a href="https://1" target="_blank" rel="noopener noreferrer" class="footer__link-item">Youtube<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU">
		<path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
</svg>
</a>
</li>

</ul>
</div>

<div class="col footer__col">
	<div class="footer__title">More</div>
<ul class="footer__items clean-list">
	<li class="footer__item">
		<a href="https://1" target="_blank" rel="noopener noreferrer" class="footer__link-item">
			 Home
				<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU">
					<path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
						</path>
</svg>
</a>
</li>
</ul>

</div>
</div>
<div class="footer__bottom text--center"><div class="footer__copyright">Copyright © 2023 1 </div>
</div>
</div>


</div>
		</footer>
	);
}


