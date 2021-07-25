let db = firebase.database().ref().child('Cars')

//getting all images
const slot1_img = document.querySelector(".img1")
const slot2_img = document.querySelector(".img2")
const slot3_img = document.querySelector(".img3")
const slot4_img = document.querySelector(".img4")

//getting all LPN slots(LPN = License Plate Number)
const slot1_LPN = document.querySelector(".slots__LPN1")
const slot2_LPN = document.querySelector(".slots__LPN2")
const slot3_LPN = document.querySelector(".slots__LPN3")
const slot4_LPN = document.querySelector(".slots__LPN4")

//Available slots update
const slotAvailable = document.querySelector(".slot__available")

const valueHandler = (snap) =>{
    let counter = 0;
    statusHandler(snap,counter);
    lpnHnadler(snap,counter);
}

const statusHandler = (snap,counter) =>{
    const Car1_status = snap.val().Car1.Status;
    const Car2_status = snap.val().Car2.Status;
    const Car3_status = snap.val().Car3.Status;
    const Car4_status = snap.val().Car4.Status;
    if(Car1_status==0){
        slot1_img.src = "https://raw.githubusercontent.com/RitvikSardana/IOT_Parking_RPi/main/Parkzo-main/assets/redCar.png"
    }
    if(Car1_status==1){
        slot1_img.src = "https://raw.githubusercontent.com/RitvikSardana/IOT_Parking_RPi/main/Parkzo-main/assets/greenCar-.png"
        counter++
    }
    
    if(Car2_status==0){
        slot2_img.src = "https://raw.githubusercontent.com/RitvikSardana/IOT_Parking_RPi/main/Parkzo-main/assets/redCar.png"
    }
    if(Car2_status==1){
        slot2_img.src = "https://raw.githubusercontent.com/RitvikSardana/IOT_Parking_RPi/main/Parkzo-main/assets/greenCar-.png"
        counter++
    }

    if(Car3_status==0){
        slot3_img.src = "https://raw.githubusercontent.com/RitvikSardana/IOT_Parking_RPi/main/Parkzo-main/assets/redCar.png"
    }
    if(Car3_status==1){
        slot3_img.src = "https://raw.githubusercontent.com/RitvikSardana/IOT_Parking_RPi/main/Parkzo-main/assets/greenCar-.png"
        counter++
    }

    if(Car4_status==0){
        slot4_img.src = "https://raw.githubusercontent.com/RitvikSardana/IOT_Parking_RPi/main/Parkzo-main/assets/redCar.png"
    }
    if(Car4_status==1){
        slot4_img.src = "https://raw.githubusercontent.com/RitvikSardana/IOT_Parking_RPi/main/Parkzo-main/assets/greenCar-.png"
        counter++
    }
    // console.log(counter)
    slotAvailable.innerHTML = `${counter}/4`;
}

const lpnHnadler = (snap,counter) =>{
    const Car1_LPN = snap.val().Car1.LPN;
    const Car2_LPN = snap.val().Car2.LPN;
    const Car3_LPN = snap.val().Car3.LPN;
    const Car4_LPN = snap.val().Car4.LPN;

    if(Car1_LPN === ""){
        slot1_LPN.style.display = "none";
    }
    if(Car1_LPN !== ""){
        slot1_LPN.style.display = "block";
        slot1_LPN.innerHTML = `Car Plate Number =${Car1_LPN}`
    }

    if(Car2_LPN === ""){
        slot2_LPN.style.display = "none";
    }
    if(Car2_LPN !== ""){
        slot2_LPN.style.display = "block";
        slot2_LPN.innerHTML = `Car Plate Number =${Car2_LPN}`
    }

    if(Car3_LPN === ""){
        slot3_LPN.style.display = "none";
    }
    if(Car3_LPN !== ""){
        slot3_LPN.style.display = "block";
        slot3_LPN.innerHTML = `Car Plate Number =${Car3_LPN}`
    }

    if(Car4_LPN === ""){
        slot4_LPN.style.display = "none";
    }
    if(Car4_LPN !== ""){
        slot4_LPN.style.display = "block";
        slot4_LPN.innerHTML = `Car Plate Number =${Car4_LPN}`
    }

    // console.log(Car1_LPN,Car2_LPN,Car3_LPN,Car4_LPN)
}

db.on('value',valueHandler);