# UniGe_IoT2021_VP_DibrisSmartParking
IOT 2020/21 Project Proposal, Option 1: VP-Dibris Smart ParkingPage



IOT 2020/21 Project Proposal

Option 1: VP-Dibris Smart Parking

INTERNET OF THINGS - 90524

«Group Members»

Muhammad Sulaman Toor 5049761

Gowthami Ramakrishnegowda 5056130

Muhammad Umair Yosuf 4977898





**Project Goal:**

To define requirements, architecture

and prototype of an IoT system for

Smart Parking to be used to monitor the

different parking lots of VP-Dibris.





**Project Aim:**

The monitoring systems will collect data on

empty places

i) How many empty places, in which parking

lot, etc

ii) Publishing these information on internal

channels for staff members





**Project Outcome:**

i) Maintaining data of every car that entered

into the parking lot

\- Vehicle number plate log

\- time stamps

ii) Provide statistics on the resulting

historical information.





(1) Proposal of the architecture of the IoT

system with a particular attention on

the following points:

types of sensors and edge devices to be used to acquire data

communication infrastructure and middleware

software components for data acquisition, storage and processing, dashboard and visualisation and main functionalities of the different components

interaction schemes (UML-like, state machine etc) that describe the main protocols needed in the system





**types of sensors and edge devices to be used**

**to acquire data**

Raspberry Pi

Ultrasonic Sensor HRC-04

IP Webcam/Webcam/RPi Camera

Nota a piè di pagina

6





**communication infrastructure and**

**middleware**

Nota a piè di pagina

7





**software components for data acquisition,**

**storage and processing, dashboard and**

**visualisation and main functionalities of the**

**different components**

Node-Red

HTML

CSS

JS

Firebase Realtime Database

Nota a piè di pagina

8





**Node-Red Palettes used**

node-red-contrib-firebase

node-red-contrib-realtime-database

node-red-contrib-image-output

node-red-contrib-onvif

node-red-contrib-plate-recognizer

node-red-contrib-email

Nota a piè di pagina

9





**Interaction schemes**

**(main protocols needed in the system)**

10





**Interaction schemes**

**(main protocols needed in the system)**

11





\2) Implement a prototype of the

architecture in Node-Red consisting of

the following components:

software components for simulating the chosen set of sensors

middleware for data acquisition

processing component and dashboard





**software components for simulating the**

**chosen set of sensors**

Raspberry Pi

Ultrasonic Sensor HRC-04

IP Webcam/Webcam/RPi Camera (mobile camera)

13





**middleware for data acquisition**

Firebase Realtime Database

Nota a piè di pagina

14





**processing component and dashboard**

https://app.platerecognizer.com/dashboard/

15





**processing component and dashboard**

https://app.platerecognizer.com/dashboard/

16





**Working Mechanism – Parking Lot**

**(Vehicle Detection)**

\1. Ultrasonic Sensor is present at each parking slots which continuously

detects the distance of the parking slot from the top.

\2. If a car enters the parking slot the distance will be less than 10cm and the

message “0” will be sent to the database of that slot. (0 means car

parked)

\3. As soon as the signal is sent, IP webcam (using android smartphone)

which works over the Internet

17





**Working Mechanism – Parking Lot**

**(Vehicle Detection)**

\4. It uses OCR to detect the License Plate Number of the car

\5. A preview of the image captured & is shown in the UI.

\6. It then sends the data to the database of that slot.

18





**Working Mechanism – Parking Lot**

**(Vehicle Detection)**

\7. After detecting the license plate of the car an email is sent to

the admin’s office email in which

“Car Number Parked at Slot-Number at time” is written.

Nota a piè di pagina

19





**Working Mechanism – Parking Lot**

**(Vehicle Detection)**

\8. UI continuously fetches data from the database

\9. As soon as it receives the message “0” at any slot it toggles the

status of that slot to red color car i.e. That slot is unavailable

and shows the Car Number of the car parked in that Slot in the

UI.

20





**Working Mechanism – Parking Lot**

**(Vehicle Detection)**

\8. If the car leaves the parking slot the distance from Ultrasonic

Sensor to ground becomes greater than 10cms and message “1”

\9. It sent to the database and an email is generated in which “No car

parked at slot Slot number”.

\10. As soon as “1” is sent the car status is updated in the UI and that

slot is shown available.

Nota a piè di pagina

21





**Working Mechanism – Parking Lot**

**(Vehicle Detection)**

22





**Node-Red Flow**

23





**Node-Red Flow (License Plate OCR)**

24





**Firebase – Google**

25





**Car Parked Email Notification**

26





[**~~Web~~**](https://vp-dibris-parking.netlify.app/)[**~~ ](https://vp-dibris-parking.netlify.app/)[Portal**~~](https://vp-dibris-parking.netlify.app/)[**~~ ](https://vp-dibris-parking.netlify.app/)[for**~~](https://vp-dibris-parking.netlify.app/)[**~~ ](https://vp-dibris-parking.netlify.app/)[Parking**~~](https://vp-dibris-parking.netlify.app/)[**~~ ](https://vp-dibris-parking.netlify.app/)[log**~~](https://vp-dibris-parking.netlify.app/)[**~~ ](https://vp-dibris-parking.netlify.app/)[(Public)**~~](https://vp-dibris-parking.netlify.app/)

https://vp-dibris-parking.netlify.app/

27





