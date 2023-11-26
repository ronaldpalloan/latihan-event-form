document.addEventListener('DOMContentLoaded', function () {
	const dataMaxLengthName = document.getElementById('nama').maxLength;
	const inputMaxLength = document.getElementById('notifSisaKarakter').innerText = dataMaxLengthName;
})

document.getElementById('nama').addEventListener('focus', function() {
	const showNotif = document.getElementById('sisaKarakter');
	showNotif.style.visibility = 'visible';
})

document.getElementById('nama').addEventListener('blur', function() {
	const showNotif = document.getElementById('sisaKarakter');
	showNotif.style.visibility = 'hidden';
})

document.getElementById('nama').addEventListener('input', function() {
	const inputLength = document.getElementById('nama').value.length;
	const maxLength = document.getElementById('nama').maxLength;
	const sisaKarakterUpdate = maxLength - inputLength;

	document.getElementById('notifSisaKarakter').innerText = sisaKarakterUpdate.toString();

	if (sisaKarakterUpdate === 0) {
		document.getElementById('notifSisaKarakter').innerText = 'batas maksimal tercapai'; 
	} else if (sisaKarakterUpdate <= 5) {
		document.getElementById('sisaKarakter').style.color = 'red';
	} else {
		document.getElementById('sisaKarakter').style.color = 'black';
	}
});

document.getElementById('copy').addEventListener('copy', function() {
	alert('kamu lagi ngecopy');
})

document.getElementById('paste').addEventListener('paste', function() {
	alert('udah dipaste nih');
})

document.getElementById('captcha').addEventListener('input', function() {
	const rightCaptcha = 'PRNU';
	const yourCaptcha = document.getElementById('captcha').value;

	if (yourCaptcha === rightCaptcha) {
		document.getElementById('submitButton').removeAttribute('disabled');
	} else {
		document.getElementById('submitButton').setAttribute('disabled', '');
	}
})

document.getElementById('formDiri').addEventListener('submit', function() {
	const rightCaptcha = 'PRNU';
	const yourCaptcha = document.getElementById('captcha').value;

	if (yourCaptcha === rightCaptcha) {
		alert('Selamat Anda berhasil');
	}

	event.preventDefault();
});

