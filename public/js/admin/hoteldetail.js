const detail = document.getElementById("details");
const normalRoomDetails = document.getElementById("ndetails");
const vipRoomDetails = document.getElementById("vdetails");

const dsave =()=>{
    detail.style.display="none";
    normalRoomDetails.style.display="block";
    vipRoomDetails.style.display="none";

    const hotelName = document.getElementById("hotelName").value;
    const address = document.getElementById("Address").value;
    const contact = document.getElementById("contact").value;

    fetch('/admin/gethoteldetails', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({hotelName : hotelName , address : address , contact : contact})
    }).then((res) => {
        return res.json();
    }).then((fres) => {
        console.log(fres);
    });
};


const nsave = ()=>{
    detail.style.display="none";
    normalRoomDetails.style.display="none";
    vipRoomDetails.style.display="block";

    const nName = document.getElementById("nroomName").value;
    const ntotal = document.getElementById("nRooms").value;
    const nPrice = document.getElementById("nprice").value;
    const nDescription = document.getElementById("ndesc").value;

    fetch('/admin/gethoteldetails', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({nName : nName , ntotal : ntotal , nPrice : nPrice,nDescription : nDescription})
    }).then((res) => {
        return res.json();
    }).then((fres) => {
        console.log(fres);
    });
};

const vsave = ()=>{
    detail.style.display="none";
    normalRoomDetails.style.display="none";
    vipRoomDetails.style.display="block";

    const vName = document.getElementById("vroomName").value;
    const vtotal = document.getElementById("vrooms").value;
    const vPrice = document.getElementById("vprice").value;
    const vDescription = document.getElementById("vdesc").value;

    fetch('/admin/gethoteldetails', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({vName : vName , vtotal : vtotal , vPrice : vPrice,vDescription : vDescription})
    }).then((res) => {
        return res.json();
    }).then((fres) => {
        console.log(fres);
    });
};