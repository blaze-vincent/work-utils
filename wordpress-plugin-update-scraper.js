//ensure url matches pattern website.name/wp-admin/plugins.php

Array.from(document.querySelector('#bulk-action-form tbody').querySelectorAll('tr')).filter((tr, index, arr) => {
	if(arr[index + 1]){
		return arr[index + 1].querySelector('td.plugin-update')
	}
}).map((tr) => {
	return {
		title: tr.querySelector('strong').innerText.toLowerCase(),
		currentVersion: tr.querySelector('.plugin-version-author-uri').innerText.split(' |')[0].split(' ')[1],
		updateVersion: tr.nextSibling.querySelector('a').innerText.split(' ')[2]
	}
}).map(obj => `${obj.title} ${obj.currentVersion} > ${obj.updateVersion}`)