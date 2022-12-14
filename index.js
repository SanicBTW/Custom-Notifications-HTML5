const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
? 'Mobile'
: 'Desktop';

//we set up the "outer" class style following the device type
function onLoad()
{
    var outerStyle = document.createElement("style");
    if(detectDeviceType() == "Desktop")
    {
        outerStyle.innerHTML = `.outer { 
            width: 100%; height: 97.9vh; display: flex; justify-content: center; align-items: center;
        }`;
    }
    else
    {
        outerStyle.innerHTML = `.outer { 
            width: 100%; height: 90vh; display: flex; justify-content: center; align-items: center;
        }`;
    }
    document.head.appendChild(outerStyle);
}

function sendNotif()
{
    var notif = new CustomNotification();
    notif.mainText = document.getElementById('mainNotText').value;
    notif.subText = document.getElementById('subNotText').value;
    notif.notify();
}

function closeNotifPanel()
{
    document.getElementById('notifPanelContent').style.opacity = "0";
    document.getElementById('notifPanelHeader').style.opacity = "0";
    document.getElementById('notificationRegion').style.width = "0%";
}