document.addEventListener('contextmenu', event => event.preventDefault());

function openPage() {
  alert("We are gonna take you to the page, 'https://discord.gg' for the invite.")
  window.open("/auth/discord", null, "menubar=no,location=yes,status=no")
}

function openYT() {
  alert("We are gonna take you to the page, 'https://youtube.com' for the subscription.")
  window.open("/auth/youtube",null,"menubar=no,location=yes,status=no")
}

function openReddit() {
  alert("We are gonna take you to the page, 'https://reddit.com' for the subreddit.")
  window.open("/auth/reddit",null,"menubar=no,location=yes,status=no")
}

function openContacts() {
  alert("We are gonna take you to the page, 'Contacts' for help.")
  window.open("/session/contact?token=093024394",null,"menubar=no,location=yes,status=no")
}

// CONFIG:
Notification.requestPermission()

// Script cookies:

document.cookie = "LANG=EN"
document.cookie = "ssid=16x16"
document.cookie = "client="+navigator.userAgent
navigator.credentials.create("superipapi=1")

