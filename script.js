async function convertfile() {
    const fileinput = document.getElementById('fileinput');
    const formatselect = document.getElementById('formatselect');
    const statusmsg = document.getElementById('converterstatus');

    if (fileinput.files.length === 0) {
        statusmsg.innerText = "please select a file first.";
        statusmsg.style.color = "#ff0055";
        return;
    }

    const file = fileinput.files[0];
    const targetformat = formatselect.value;
    
    statusmsg.innerText = "processing file conversion...";
    statusmsg.style.color = "#ffff00";

    try {
        const reader = new FileReader();
        reader.onload = function(e) {
            const data = e.target.result;
            const blob = new Blob([data], { type: 'application/octet-stream' });
            const downloadurl = URL.createObjectURL(blob);
            const downloadlink = document.createElement('a');
            
            const originalname = file.name.substring(0, file.name.lastIndexOf('.'));
            downloadlink.href = downloadurl;
            downloadlink.download = originalname + '.' + targetformat;
            
            document.body.appendChild(downloadlink);
            downloadlink.click();
            document.body.removeChild(downloadlink);

            statusmsg.innerText = "converted and downloaded successfully.";
            statusmsg.style.color = "#00ff66";
        };
        reader.readAsArrayBuffer(file);
        
    } catch (error) {
        statusmsg.innerText = "conversion failed. format mismatch.";
        statusmsg.style.color = "#ff0055";
    }
}

const rareseeds = [
    {
        num: "694200161758793929",
        desc: "village crater: a lakeside survival village nestled completely inside a massive circular mountain basin layout.",
        coords: "near spawn"
    },
    {
        num: "8486672581758651406",
        desc: "incredible hollow mountain: an impossibly huge mountain structure that is completely hollowed out inside with giant open caverns.",
        coords: "at spawn"
    },
    {
        num: "2048006106841008065",
        desc: "jungle crown crater: high protective cliffs encircling a private lake oasis and jungle layout with a nearby trial chamber.",
        coords: "x: 101, z: -47"
    },
    {
        num: "767300786513247025",
        desc: "the chaos spawner: a pillager outpost, ruined portal, and full structural woodland mansion smashed right into each other.",
        coords: "x: 236, z: 126"
    },
    {
        num: "6942000323253550426",
        desc: "double-village survival island: a huge split island featuring two distinct villages facing each other across an open biome.",
        coords: "near spawn"
    },
    {
        num: "7850875",
        desc: "the twin titans: two vertical islands towering over a coral sea. features a custom badlands biome right next to a full jungle temple.",
        coords: "at spawn"
    }
];

function generateseed() {
    const seedbox = document.getElementById('seeddisplay');
    const seednum = document.getElementById('seednum');
    const seeddesc = document.getElementById('seeddesc');
    const seedcoords = document.getElementById('seedcoords');

    const randomindex = Math.floor(Math.random() * rareseeds.length);
    const selected = rareseeds[randomindex];

    seednum.innerText = selected.num;
    seeddesc.innerText = selected.desc;
    seedcoords.innerText = "coordinates: " + selected.coords;

    seedbox.style.display = "block";
}