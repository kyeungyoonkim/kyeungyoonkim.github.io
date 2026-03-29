(function() {
	var themes = { warm: 'theme-warm', 'soft-dark': 'theme-soft-dark', 'all-light': 'theme-all-light' };
	var q = new URLSearchParams(window.location.search);
	var theme = q.get('theme');
	if (theme !== null) {
		if (theme === '' || theme === 'default') try { sessionStorage.removeItem('portfolio-theme'); } catch (e) {}
		else if (themes[theme]) try { sessionStorage.setItem('portfolio-theme', theme); } catch (e) {}
		else try { sessionStorage.removeItem('portfolio-theme'); } catch (e) {}
	} else {
		try { theme = sessionStorage.getItem('portfolio-theme'); } catch (e) {}
	}
	var themeVer = '20260214d';
	if (theme && themes[theme]) {
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'assets/css/themes/' + themes[theme] + '.css?v=' + themeVer;
		document.head.appendChild(link);
	}
})();
