/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Icon-Font-Demo\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-ok' : '&#xe000;',
			'icon-remove' : '&#xe001;',
			'icon-search' : '&#xe002;',
			'icon-heart' : '&#xe003;',
			'icon-star' : '&#xe004;',
			'icon-cog' : '&#xe005;',
			'icon-trash' : '&#xe006;',
			'icon-home' : '&#xe007;',
			'icon-user' : '&#xe008;',
			'icon-time' : '&#xe009;',
			'icon-repeat' : '&#xe00a;',
			'icon-tag' : '&#xe00b;',
			'icon-map-marker' : '&#xe00c;',
			'icon-pencil' : '&#xe00d;',
			'icon-warning-sign' : '&#xe00e;',
			'icon-exclamation-sign' : '&#xe00f;',
			'icon-info-sign' : '&#xe010;',
			'icon-question-sign' : '&#xe011;',
			'icon-ban-circle' : '&#xe012;',
			'icon-chevron-left' : '&#xe013;',
			'icon-chevron-right' : '&#xe014;',
			'icon-chevron-down' : '&#xe015;',
			'icon-chevron-up' : '&#xe016;',
			'icon-comment' : '&#xe017;',
			'icon-shopping-cart' : '&#xe018;',
			'icon-remove-sign' : '&#xe019;',
			'icon-minus-sign' : '&#xe01a;',
			'icon-plus-sign' : '&#xe01b;',
			'icon-ok-sign' : '&#xe01c;',
			'icon-star-half' : '&#xe01d;',
			'icon-phone' : '&#xe021;',
			'icon-credit' : '&#xe024;',
			'icon-reorder' : '&#xe025;',
			'icon-sort' : '&#xe029;',
			'icon-sort-down' : '&#xe02a;',
			'icon-sort-up' : '&#xe02b;',
			'icon-caret-right' : '&#xe02c;',
			'icon-caret-left' : '&#xe02d;',
			'icon-caret-down' : '&#xe02e;',
			'icon-caret-up' : '&#xe02f;',
			'icon-desktop' : '&#xe030;',
			'icon-laptop' : '&#xe031;',
			'icon-tablet' : '&#xe032;',
			'icon-mobile' : '&#xe033;',
			'icon-quote-left' : '&#xe034;',
			'icon-spinner' : '&#xe035;',
			'icon-gift' : '&#xe036;',
			'icon-building' : '&#xe037;',
			'icon-facebook' : '&#xf610;',
			'icon-twitter' : '&#xf611;',
			'icon-linkedin' : '&#xf612;',
			'icon-google-plus' : '&#xf613;',
			'icon-rss' : '&#xe310;',
			'icon-email' : '&#x2709;',
			'icon-pinterest' : '&#xf650;',
			'icon-wordmark' : '&#xe01e;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};